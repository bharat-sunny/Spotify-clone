"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft,RxCaretRight} from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";


interface Headerprops {
    children : React.ReactNode;
    className? : String;
}

const Header:React.FC<Headerprops> = ({
    children,
    className
}) => {

    const router = useRouter();

    const handleLogout = () =>{
    }

    return (
        <div className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6`)}
        >
            <div className="
            w-full
            mb-4
            flex
            item-center
            justify-between
            ">
                <div className="
                hidden
                md:flex
                gap-x-2
                item-center">
                    <button 
                    onClick={() => router.back()}
                    className="
                    rounded-full
                    bg-black
                    flex
                    item-center
                    hover:opacity-75
                    transition"> 
                        <RxCaretLeft className="text-white" size = {26} />
                    </button>
                    <button 
                    onClick={() => router.forward}
                    className="
                    rounded-full
                    bg-black
                    flex
                    item-center
                    hover:opacity-75
                    transition"> 
                        <RxCaretRight className="text-white" size = {26} />
                    </button>

                </div>
                <div className="flex md:hideen gap-x-2 item-center">
                    <button
                    className="
                    rounded-full
                    p-2
                    bg-white
                    flex
                    item-center
                    justify-center
                    hover:opacity-75
                    transition">
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button
                    className="
                    rounded-full
                    p-2
                    bg-white
                    flex
                    item-center
                    justify-center
                    hover:opacity-75
                    transition">
                        <BiSearch className="text-black" size={20} />
                    </button>

                </div>

                <div className="
                flex
                justify-between
                items-center
                gap-x-4">
                    <>
                        <div>
                            <Button />
                        </div>
                    </>
                </div>

            </div>
        </div>
    );
}

export default Header