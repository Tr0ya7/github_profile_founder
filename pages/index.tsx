import Search from "@/components/search/search"
import { Api } from "@/utils/api"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

function Home() { 
    Api('Tr0ya7')

    return <main className={`min-h-screen flex-col p-[2rem] font-sans bg-[#0e1129] text-white ${inter.className}`}><Search /></main> 
}

export default Home