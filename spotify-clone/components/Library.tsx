"use client";

import {TbPlaylist} from "react-icons/tb";
import {AiOutlinePlus} from "react-icons/ai";

const Library = () => {

    const onClick = () => {
        console.log("Clicked")
    };

    return (
        <div className="flex flex-col">
            <div className="
                flex
                item-center
                justify-between
                px-5">
                <div className="
                    inline-flex
                    item-center
                    gap-x-2">
                        <TbPlaylist className="text-neutral-400" size={26} />
                        <p
                        className="
                        text-neutral-400
                        font-medium
                        text-md">
                            Your Library
                        </p>
                </div>
                <AiOutlinePlus 
                    onClick={onClick}
                    className="
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition"/>
            </div>
            <div className="
            flex
            flex-col
            gap-y-2
            mt-4
            px-3">
                List Of Songs!
            </div>
        </div> 
    );
}

export default Library;