import React from 'react'
import Image from "next/image";

export const InputBlock = () => {
    return (
        <div className="relative min-w-[261px] flex-grow">
            <input type="text" placeholder="Найти товар"
                   className="w-full h-10 rounded p-2 outline outline-primary focus:shadow-button-default text-[#8f8f8f] text-base leading-[150%]"/>
            <button className="absolute top-2 right-2 cursor-pointer">
                <Image src="/icons-header/icon-search.svg" alt="search" width={24} height={24}/>
            </button>
        </div>
    )
}
