import { useRouter } from 'next/router'

const BackButton = () => {
    const router = useRouter()

    return <button className="absolute top-[1rem] left-[1rem] px-[1rem] py-[.5rem] color-[#9da5d1] bg-[#2b3566] cursor-pointer border-0 rounded hover:opacity-100" onClick={() => router.back()}>Voltar</button>
}

export default BackButton