import { Api } from "@/utils/api"
import { useEffect, useState } from "react"
import MagnifyingGlass from "@/public/icons/magnifyingGlass"

type search = { userFind: (data: object | null) => void; isLoading: (visible: boolean) => void }

const Search = ({ userFind, isLoading }: search) => {
    const [user, setUser] = useState<string>('')
    const [data, setData] = useState<object | null>({})
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false)

    isLoading(isLoadingData)

    useEffect(() => { userFind(data) }, [data])

    const handleSubmit = () => Api(user, setData, setIsLoadingData)

    return (
        <section className="bg-[#2b3566] p-8 rounded-xl flex flex-col justify-center items-center gap-4 mb-6">
            <h2 className="font-bold text-2xl">
                Busque por um user:
            </h2>
            <p className="text-center text-[#9da5d1] text-xl">
                melhores repositórios:
            </p>
            <div className="flex gap-[.5rem] rounded border-0 text-[#2b3566]">
                <input className="p-[.6rem] rounded" type="text" placeholder="Digite o nome do usuário" onChange={(event) => setUser(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && handleSubmit()} />
                <button className="p-[.6rem] rounded bg-[#0e1129]" onClick={() => handleSubmit()}>
                    <MagnifyingGlass />
                </button>
            </div>
        </section>
    )
}

export default Search