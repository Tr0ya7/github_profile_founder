import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { repositores } from '@/globalTypes'

const Repositores = () => {
    const router = useRouter()
    const { user } = router.query

    const [data, setData] = useState<repositores[] | [] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const { data } = await axios.get(`https://api.github.com/users/${ user }/repos`)
            setIsLoading(false)
            setData(data)
        }

        fetchData()
    }, [])

    console.log(data)

    return (
        <section className="text-center my-10">
            <h2 className="text-white">
                Repositório do usuário: {user}
            </h2>
            {data && data.length > 0 ? <>{data.map((repositor: repositores) => <p>{repositor.name}</p>)}</> : <>Nenhum repositório encontrado</>}
        </section>
    )
}

export default Repositores