import React from 'react'
import {ButtonSearch} from "@/components/header/ButtonSearch";
import {InputBlock} from "@/components/header/InputBlock";

export const SearchBlock = () => {
    return (
        <div className="flex flex-row gap-4 flex-grow">
            <ButtonSearch/>
            <InputBlock/>
        </div>
    )
}
