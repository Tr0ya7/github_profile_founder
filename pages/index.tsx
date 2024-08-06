import Search from "@/components/search/search"
import UserProfile from "@/components/userProfile"
import { user } from "@/globalTypes"
import Loading from "@/public/icons/loading"
import { Inter } from "next/font/google"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

const Home = () => { 
    const [userFind, setUserFind] = useState<user | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <section className={`min-h-screen flex-col p-[2rem] font-sans ${inter.className}`}>
            <div className="max-w-[500px] m-auto">
                <Search userFind={(user: any) => setUserFind(user)} isLoading={setIsLoading} />
                {isLoading && userFind !== null && <span className="flex justify-center items-center"><Loading /></span>}
                {userFind !== null ? <UserProfile {...userFind} /> : 'User não encotrado'}
            </div>
        </section>
    )
}

export default Home