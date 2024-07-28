"use client"

import { useGetAllExtensions } from "@/api/hooks/extensions.hooks"
import { ExtensionList } from "@/app/(main)/extensions/_containers/extension-list"
import { PageWrapper } from "@/components/shared/page-wrapper"
import React from "react"

export default function Page() {

    const { data: allExtensions, isLoading } = useGetAllExtensions()

    return (
        <PageWrapper className="p-4 sm:p-8 pt-0 space-y-8 relative z-[4]">
            <ExtensionList
                allExtensions={allExtensions}
                isLoading={isLoading}
            />
        </PageWrapper>
    )

}