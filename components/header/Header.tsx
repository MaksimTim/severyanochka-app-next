import React from 'react'
import {UserBlock} from "@/components/header/UserBlock";
import {LogoBlock} from "@/components/header/LogoBlock";
import {SearchBlock} from "@/components/header/SearchBlock";

export const Header = () => {
    return (
        <header
            className="relative z-10 bg-white w-full md:shadow-default flex flex-col md:flex-row md:gap-y-5 xl:gap-y-7 md:gap-10 md:p-2 justify-center">
            <div className="flex flex-row gap-4 xl:gap-10 py-2 px-4 items-center shadow-default md:shadow-none">
                <LogoBlock/>
                <SearchBlock/>
            </div>

            <UserBlock/>

        </header>
    )
}
