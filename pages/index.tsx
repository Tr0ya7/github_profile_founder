import Search from "@/components/search/search"
import UserProfile from "@/components/userProfile"
import { user } from "@/globalTypes"
import { Inter } from "next/font/google"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

const Home = () => { 
    const [userFind, setUserFind] = useState<user | null>(null)
    console.log(userFind)

    return (
        <main className={`min-h-screen flex-col p-[2rem] font-sans bg-[#0e1129] text-white ${inter.className}`}>
            <section className="max-w-[500px] m-auto">
                <h1 className="text-center bottom-[1rem] font-bold">
                    Github Finder
                </h1>
                <Search userFind={(user: any) => setUserFind(user)} />
                {userFind !== null ? <UserProfile {...userFind} /> : 'User não encotrado'}
            </section>
        </main>
    )
}

export default Home