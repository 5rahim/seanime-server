import { __torrentSearch_selectedTorrentsAtom } from "@/app/(main)/entry/_containers/torrent-search/torrent-search-container"
import { torrentSearchDrawerIsOpenAtom } from "@/app/(main)/entry/_containers/torrent-search/torrent-search-drawer"
import { serverStatusAtom } from "@/atoms/server-status"
import { DirectorySelector } from "@/components/shared/directory-selector"
import { Button, IconButton } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { Tooltip } from "@/components/ui/tooltip"
import { BaseMediaFragment } from "@/lib/anilist/gql/graphql"
import { SeaEndpoints } from "@/lib/server/endpoints"
import { useSeaMutation } from "@/lib/server/query"
import { AnimeTorrent, MediaEntry } from "@/lib/server/types"
import { BiCollection } from "@react-icons/all-files/bi/BiCollection"
import { BiDownload } from "@react-icons/all-files/bi/BiDownload"
import { BiX } from "@react-icons/all-files/bi/BiX"
import { FcFilmReel } from "@react-icons/all-files/fc/FcFilmReel"
import { FcFolder } from "@react-icons/all-files/fc/FcFolder"
import { atom } from "jotai"
import { useAtom, useAtomValue, useSetAtom } from "jotai/react"
import { useRouter } from "next/navigation"
import React, { useMemo, useState } from "react"
import toast from "react-hot-toast"
import * as upath from "upath"

const isOpenAtom = atom(false)

type TorrentDownloadProps = {
    urls: string[]
    destination: string
    smartSelect: {
        enabled: boolean
        missingEpisodeNumbers: number[]
        absoluteOffset: number
    }
    media?: BaseMediaFragment
}

type TorrentDownloadFileProps = {
    download_urls: string[]
    destination: string
    media?: BaseMediaFragment
}

export function TorrentConfirmationModal({ onToggleTorrent, media, entry }: {
    onToggleTorrent: (t: AnimeTorrent) => void,
    media: BaseMediaFragment,
    entry: MediaEntry
}) {

    const router = useRouter()
    const serverStatus = useAtomValue(serverStatusAtom)
    const libraryPath = serverStatus?.settings?.library?.libraryPath

    const defaultPath = useMemo(() => {
        const fPath = entry.localFiles?.findLast(n => n)?.path // file path
        const newPath = libraryPath ? upath.join(libraryPath, sanitizeDirectoryName(media.title?.romaji || "")) : ""
        return fPath ? upath.normalize(upath.dirname(fPath)) : newPath
    }, [libraryPath, entry.localFiles, media.title?.romaji])

    const [destination, setDestination] = useState(defaultPath)

    const [isOpen, setIsOpen] = useAtom(isOpenAtom)
    const setTorrentDrawerIsOpen = useSetAtom(torrentSearchDrawerIsOpenAtom)
    const selectedTorrents = useAtomValue(__torrentSearch_selectedTorrentsAtom)

    const canSmartSelect = useMemo(() => {
        return selectedTorrents.length === 1
            && selectedTorrents[0].isBatch
            && media.format !== "MOVIE"
            && media.status === "FINISHED"
            && !!media.episodes && media.episodes > 1
            && !!entry.downloadInfo?.episodesToDownload && entry.downloadInfo?.episodesToDownload.length > 0
            && entry.downloadInfo?.episodesToDownload.length !== (media.episodes || (media.nextAiringEpisode?.episode! - 1))
    }, [selectedTorrents, media.format, media.status, media.episodes, entry.downloadInfo?.episodesToDownload, media.nextAiringEpisode?.episode])


    // download via torrent client
    const { mutate, isPending } = useSeaMutation<boolean, TorrentDownloadProps>({
        endpoint: SeaEndpoints.TORRENT_CLIENT_DOWNLOAD,
        method: "post",
        mutationKey: ["download-torrent"],
        onSuccess: () => {
            toast.success("Download started")
            setIsOpen(false)
            setTorrentDrawerIsOpen(false)
            router.push("/torrent-list")
        },
    })

    // download torrent file
    const { mutate: downloadTorrentFiles, isPending: isDownloadingFiles } = useSeaMutation<boolean, TorrentDownloadFileProps>({
        endpoint: SeaEndpoints.DOWNLOAD_TORRENT_FILE,
        method: "post",
        mutationKey: ["download-torrent-files"],
        onSuccess: () => {
            toast.success("Downloaded torrent files")
            setIsOpen(false)
            setTorrentDrawerIsOpen(false)
        },
    })

    const isDisabled = isPending || isDownloadingFiles

    function handleLaunchDownload(smartSelect: boolean) {
        if (!libraryPath || !destination.toLowerCase().startsWith(libraryPath.slice(0, -1).toLowerCase())) {
            toast.error("Destination folder does not match local library")
            return
        }
        if (smartSelect) {
            mutate({
                urls: selectedTorrents.map(n => n.link),
                destination,
                smartSelect: {
                    enabled: true,
                    missingEpisodeNumbers: entry.downloadInfo?.episodesToDownload?.map(n => n.episodeNumber) || [],
                    absoluteOffset: entry.downloadInfo?.absoluteOffset || 0,
                },
                media,
            })
        } else {
            mutate({
                urls: selectedTorrents.map(n => n.link),
                destination,
                smartSelect: {
                    enabled: false,
                    missingEpisodeNumbers: [],
                    absoluteOffset: 0,
                },
                media,
            })
        }
    }

    function handleDownloadFiles() {
        downloadTorrentFiles({
            download_urls: selectedTorrents.map(n => n.link),
            destination,
            media,
        })
    }

    if (selectedTorrents.length === 0) return null

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            size={"2xl"} isClosable
            title={"Choose the destination"}
        >
            <div className="pb-4">
                <DirectorySelector
                    name="destination"
                    label="Destination"
                    leftIcon={<FcFolder />}
                    value={destination}
                    defaultValue={destination}
                    onSelect={setDestination}
                    shouldExist={false}
                />
            </div>

            <div className={"space-y-2"}>
                {selectedTorrents.map(torrent => (
                    <Tooltip
                        key={`${torrent.link}`}
                        trigger={<div
                            className={"ml-12 gap-2 p-2 border border-[--border] rounded-md hover:bg-gray-800 relative"}
                            key={torrent.name}
                        >
                            <div
                                className={"flex flex-none items-center gap-2 w-[90%] cursor-pointer"}
                                onClick={() => window.open(torrent.link, "_blank")}
                            >
                                <span className={"text-lg"}>
                                    {(!torrent.isBatch || media.format === "MOVIE") ? <FcFilmReel /> :
                                        <FcFolder className={"text-2xl"} />} {/*<BsCollectionPlayFill/>*/}
                                </span>
                                <p className={"truncate text-ellipsis"}>{torrent.name}</p>
                            </div>
                            <IconButton
                                icon={<BiX />}
                                className={"absolute right-2 top-2 rounded-full"}
                                size={"xs"}
                                intent={"gray-outline"}
                                onClick={() => {
                                    onToggleTorrent(torrent)
                                }}
                            />
                        </div>}
                    >
                        Open on {torrent.provider === "nyaa" ? "Nyaa" : "AnimeTosho"}
                    </Tooltip>
                ))}
                <div className={"!mt-4 flex w-full justify-between gap-2 items-center"}>
                    <div>
                        <Button
                            leftIcon={<BiDownload />}
                            intent={"gray-outline"}
                            onClick={() => handleDownloadFiles()}
                            isDisabled={isDisabled}
                            isLoading={isDownloadingFiles}
                        >Download torrent files</Button>
                    </div>

                    <div className={"flex w-full justify-end gap-2"}>
                        {(selectedTorrents.length > 0 && canSmartSelect) && <Button
                            leftIcon={<BiCollection />}
                            intent={"white-outline"}
                            onClick={() => handleLaunchDownload(true)}
                            isDisabled={isDisabled}
                            isLoading={isPending}
                        >Download missing only</Button>}
                        {selectedTorrents.length > 0 && <Button
                            leftIcon={<BiDownload />}
                            intent={"white"}
                            onClick={() => handleLaunchDownload(false)}
                            isDisabled={isDisabled}
                            isLoading={isPending}
                        >{canSmartSelect ? "Download all" : "Download"}</Button>}
                    </div>
                </div>
            </div>
        </Modal>
    )

}


export function TorrentConfirmationContinueButton() {

    const st = useAtomValue(__torrentSearch_selectedTorrentsAtom)
    const setter = useSetAtom(isOpenAtom)

    if (st.length === 0) return null

    return (
        <Button
            intent="primary"
            className="animate-pulse"
            onClick={() => setter(true)}
        >
            Continue ({st.length})
        </Button>
    )

}

function sanitizeDirectoryName(input: string): string {
    const disallowedChars = /[<>:"/\\|?*\x00-\x1F]/g // Pattern for disallowed characters
    // Replace disallowed characters with an underscore
    const sanitized = input.replace(disallowedChars, " ")
    // Remove leading/trailing spaces and dots (periods) which are not allowed
    const trimmed = sanitized.trim().replace(/^\.+|\.+$/g, "").replace(/\s+/g, " ")
    // Ensure the directory name is not empty after sanitization
    return trimmed || "Untitled"
}
