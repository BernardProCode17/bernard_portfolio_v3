"use client"
import {IoMenuSharp} from "react-icons/io5";
import {isOpenExport} from '../minor components/MenuNavigation'

export default function MenuButton() {
    return (
        <button className="header_button" onClick={() => isOpenExport(true)}>
            <IoMenuSharp className="header_icon"/>
        </button>
    )
}