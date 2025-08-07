import { Metadata } from "next"


export const metadata: Metadata ={
    title: " SEO Contact Page",
    description: "Contact page",
    keywords: ["contact", "page", "next.js", "react"],
}

export default function ContactPage(){
    return (
        <>
        <span className="text-7xl">Contact Page</span >
        </>
    )
}