import { repositores } from "@/globalTypes"
import Link from "next/link"
import BackButton from "../backButton"
import CodeFork from "@/public/icons/codeFork"
import Code from "@/public/icons/code"
import Star from "@/public/icons/star"
import Book from "@/public/icons/book"

type repositoresCard = {userData: repositores}

const RepositoresCard = ({ userData }: repositoresCard) => (
    <section className="bg-[#0e1129] p-[2rem] rounded-lg flex flex-col gap-[1rem] flex-1 items-start border-2 border-[#9da5d1] min-w-[49%]"> {/* classes.repo */}
        <h3 className="font-bold max-w-[236px] xs:text-xl sm:text-2xl">
            { userData.name }
        </h3>
        <p className="flex items-center gap-x-2">
            <Code />
            { userData.language }
        </p>
        <div className="flex gap-[1rem]"> {/* classes.stats */}
            <div className="flex items-center justify-center gap-[.6rem] rounded border-[1px] border-[#9da5d1] p-[.4rem]">
                <Star />
                <span className="text-xl font-bold">
                    { userData.stargazers_count }
                </span>
            </div>
            <div className="flex items-center justify-center gap-[.4rem] rounded border-[1px] border-[#9da5d1] p-[.4rem]">
                <CodeFork />
                <span className="text-xl font-bold">
                    { userData.forks_count }
                </span>
            </div>
        </div>
        <Link href={ userData.html_url }> {/* classes.repo_btn */}
            <button className="flex items-center gap-x-2 px-[1rem] py-[.5rem] color-[#9da5d1] bg-[#2b3566] rounded">
                Ver código fonte
                <Book className="mt-1" />
            </button>
        </Link>
        <BackButton />
    </section>
)

export default RepositoresCard