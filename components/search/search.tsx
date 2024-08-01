import { Api } from "@/utils/api"
import { useState } from "react"

const Search = () => {
    const [user, setUser] = useState<string>('')
    const [data, setData] = useState<object>({})

    return (
        <>
            <h2>
                Busque por um user:
            </h2>
            <p className="text-center">
                melhores repositórios:
            </p>
            <div>
                <input type="text" placeholder="Digite o nome do usuário" onChange={(event) => setUser(event.target.value)} />
                <button onClick={() => Api(user, setData)}>
                    teste
                </button>
            </div>
        </>
    )
}

export default Search