"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"


interface Props{
    path:string,
    text:string
}

export const ActiveLink =( {path,text}:Props)=>{

    const pathName = usePathname();

    return <Link href={path} className={`m-2 hover:underline hover:text-blue-300 transition-all ${ (pathName === path) &&  `text-blue-300`} `}>{text}</Link>
}