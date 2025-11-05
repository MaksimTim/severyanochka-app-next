import React from 'react'
import Image from "next/image";

export const TopMenu = () => {
    return (
        <ul className="flex gap-x-6 items-end">
            <li className="flex flex-col items-center gap-2.5 md:hidden w-11 cursor-pointer">
                <Image src="/icons-header/icon-menu-mob.svg" alt="menu" width={24} height={24}
                       className="object-contain h-6 w-6"
                />
                <span>Каталог</span>
            </li>
            <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
                <Image src="/icons-header/icon-heart.svg" alt="heart" width={24} height={24}
                       className="object-contain h-6 w-6"/>
                <span>Избранное</span>
            </li>
            <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
                <Image src="/icons-header/icon-box.svg" alt="box" width={24} height={24}
                       className="object-contain h-6 w-6"/>
                <span>Заказы</span>
            </li>
            <li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
                <Image src="/icons-header/icon-cart.svg" alt="cart" width={24} height={24}
                       className="object-contain h-6 w-6"/>
                <span>Корзина</span>
            </li>
        </ul>
    )
}
