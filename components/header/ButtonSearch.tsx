import React from 'react'
import Image from "next/image";

export const ButtonSearch = () => {
    return (
        <button className="bg-primary hover:shadow-button-active active:shadow-button-active rounded hidden md:flex w-10 p-2 gap-4 lg:w-35 cursor-pointer duration-300">
            <Image src="/icons-header/icon-menu.svg" alt="menu" width={24} height={24} className="hidden md:block"/>
            <span className="text-base text-white hidden lg:block">Каталог</span>
        </button>
    )
}
