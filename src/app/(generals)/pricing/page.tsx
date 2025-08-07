import { Metadata } from "next"


export const metadata : Metadata = {
    title: "SEO Pricing Page",
    description: " Pricing Page",
    keywords: ["pricing", "page", "next.js", "react"],
}

export default function PricingPage(){
    return (
        <>
        <span className="text-7xl">Pricing Page</span>
        </>
    )
}