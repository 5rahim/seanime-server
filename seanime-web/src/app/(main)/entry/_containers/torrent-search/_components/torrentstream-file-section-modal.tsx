import { Anime_AnimeEntry, HibikeTorrent_AnimeTorrent } from "@/api/generated/types"
import { useGetTorrentstreamTorrentFilePreviews } from "@/api/hooks/torrentstream.hooks"
import { __torrentSearch_drawerIsOpenAtom } from "@/app/(main)/entry/_containers/torrent-search/torrent-search-drawer"
import { useHandleStartTorrentStream } from "@/app/(main)/entry/_containers/torrent-stream/_lib/handle-torrent-stream"
import { useTorrentStreamingSelectedEpisode } from "@/app/(main)/entry/_lib/torrent-streaming.atoms"
import { AppLayoutStack } from "@/components/ui/app-layout"
import { Button } from "@/components/ui/button"
import { cn } from "@/components/ui/core/styling"
import { Drawer } from "@/components/ui/drawer"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { RadioGroup } from "@/components/ui/radio-group"
import { Tooltip } from "@/components/ui/tooltip"
import { atom } from "jotai"
import { useAtom } from "jotai/react"
import React from "react"
import { MdVerified } from "react-icons/md"

export const __torrentSearch_torrentstreamSelectedTorrentAtom = atom<HibikeTorrent_AnimeTorrent | undefined>(undefined)

export function TorrentstreamFileSelectionModal({ entry }: { entry: Anime_AnimeEntry }) {
    const [, setter] = useAtom(__torrentSearch_drawerIsOpenAtom)

    const [selectedTorrent, setSelectedTorrent] = useAtom(__torrentSearch_torrentstreamSelectedTorrentAtom)

    const [selectedFileIdx, setSelectedFileIdx] = React.useState(-1)

    const { torrentStreamingSelectedEpisode } = useTorrentStreamingSelectedEpisode()

    const { data: filePreviews, isLoading } = useGetTorrentstreamTorrentFilePreviews({
        torrent: selectedTorrent,
        episodeNumber: torrentStreamingSelectedEpisode?.episodeNumber,
        media: entry.media,
    }, !!selectedTorrent)

    const { handleManualTorrentStreamSelection } = useHandleStartTorrentStream()

    function onStream() {
        if (selectedFileIdx == -1 || !selectedTorrent || !torrentStreamingSelectedEpisode || !torrentStreamingSelectedEpisode.aniDBEpisode) return

        handleManualTorrentStreamSelection({
            torrent: selectedTorrent,
            entry,
            aniDBEpisode: torrentStreamingSelectedEpisode.aniDBEpisode,
            episodeNumber: torrentStreamingSelectedEpisode.episodeNumber,
            chosenFileIndex: selectedFileIdx,
        })

        setSelectedTorrent(undefined)
        setSelectedFileIdx(-1)
        setter(undefined)
    }

    const FileSelection = React.useCallback(() => {
        return <RadioGroup
            value={String(selectedFileIdx)}
            onValueChange={v => setSelectedFileIdx(Number(v))}
            options={(filePreviews?.toSorted((a, b) => a.path.localeCompare(b.path))?.map((f, i) => {
                return {
                    label: <div className="w-full">
                        <p className="mb-1 line-clamp-1">
                            {f.displayTitle}
                        </p>
                        {f.isLikely && <p className="flex items-center">
                            <MdVerified className="text-[--green] mr-1" />
                            <span className="text-white">Likely match</span>
                        </p>}
                        <Tooltip trigger={<p className="font-normal line-clamp-1 text-sm text-[--muted]">{f.displayPath}</p>}>
                            {f.path}
                        </Tooltip>
                        {(f.relativeEpisodeNumber > -1 && f.relativeEpisodeNumber != f.episodeNumber) &&
                            <p className="font-normal line-clamp-1 text-sm text-[--muted]">Relative episode number: {f.relativeEpisodeNumber}</p>}
                    </div>,
                    value: String(f.index),
                }
            }) || [])}
            itemContainerClass={cn(
                "items-start cursor-pointer transition border-transparent rounded-[--radius] p-4 w-full",
                "bg-gray-50 hover:bg-[--subtle] dark:bg-gray-900",
                "data-[state=checked]:bg-white dark:data-[state=checked]:bg-gray-950",
                "focus:ring-2 ring-brand-100 dark:ring-brand-900 ring-offset-1 ring-offset-[--background] focus-within:ring-2 transition",
                "border border-transparent data-[state=checked]:border-[--brand] data-[state=checked]:ring-offset-0",
            )}
            itemClass={cn(
                "border-transparent absolute top-2 right-2 bg-transparent dark:bg-transparent dark:data-[state=unchecked]:bg-transparent",
                "data-[state=unchecked]:bg-transparent data-[state=unchecked]:hover:bg-transparent dark:data-[state=unchecked]:hover:bg-transparent",
                "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent",
            )}
            itemIndicatorClass="hidden"
            itemLabelClass="font-medium flex flex-col items-center data-[state=checked]:text-[--brand] cursor-pointer"
            stackClass="flex flex-col gap-2 space-y-0"
        />
    }, [filePreviews, selectedFileIdx])

    return (
        <Drawer
            open={!!selectedTorrent}
            onOpenChange={open => {
                if (!open) {
                    setSelectedTorrent(undefined)
                    setSelectedFileIdx(-1)
                }
            }}
            size="xl"
            // contentClass="max-w-3xl"
            title="Choose a file to stream"
        >
            <AppLayoutStack className="mt-4">
                {isLoading ? <LoadingSpinner /> : (
                    <div className="pb-0">

                        <FileSelection />

                    </div>
                )}

                <div className="flex w-full justify-end gap-2">

                    <Button
                        intent="white"
                        className="animate-pulse w-full"
                        disabled={selectedFileIdx === -1 || isLoading}
                        onClick={onStream}
                    >
                        Stream
                    </Button>

                </div>
            </AppLayoutStack>
        </Drawer>
    )

}