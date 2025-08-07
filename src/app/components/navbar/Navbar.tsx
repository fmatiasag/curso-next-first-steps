import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../activeLink/Active-link";


export const Navbar = ()=>{


    const navItem= [
        {path: "/about",text:"About" },
        {path: "/pricing",text:"Pricing" },
        {path: "/contact",text:"Contact" }

    ];


    return (
        <nav className="flex bg-blue-950 m-2 p-2 rounded-md text-white">
            <Link href={"/"} className="flex items-center pl-2">
                <HomeIcon size={16} />
                <span className="m-2">Home</span>
                
            </Link>
            

            <div className="flex  flex-1 "/>

            {
                navItem.map( (navitem)=>(
                   <ActiveLink key={navitem.path} {...navitem}/>
                ))
            }

        </nav>
    );
}