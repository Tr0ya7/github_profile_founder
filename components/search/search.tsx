import { Api } from "@/utils/api"
import { useEffect, useState } from "react"
import MagnifyingGlass from "@/public/icons/magnifyingGlass"

type search = { userFind: (data: object) => void }

const Search = ({ userFind }: search) => {
    const [user, setUser] = useState<string>('')
    const [data, setData] = useState<object>({})

    useEffect(() => { userFind(data) }, [data])

    const handleSubmit = () => Api(user, setData)

    return (
        <section className="bg-[#2b3566] p-8 rounded flex flex-col justify-center items-center gap-4 mb-6">
            <h2>
                Busque por um user:
            </h2>
            <p className="text-center text-[#9da5d1]">
                melhores repositórios:
            </p>
            <div className="flex gap-[.5rem] rounded border-0 text-[#2b3566]">
                <input className="p-[.6rem]" type="text" placeholder="Digite o nome do usuário" onChange={(event) => setUser(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && handleSubmit()} />
                <button className="p-[.6rem]" onClick={() => handleSubmit()}>
                    <MagnifyingGlass />
                </button>
            </div>
        </section>
    )
}

export default Search