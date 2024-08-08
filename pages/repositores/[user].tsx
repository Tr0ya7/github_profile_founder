import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { repositores } from '@/globalTypes'
import RepositoresCard from '@/components/repositoresCard'

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
        <section className="text-center my-10 max-w-[40rem] m-auto">
            <h2 className="text-white text-[1.2rem] text-center mb-[2rem]">
                Repositório do usuário: {user}
            </h2>
            {data && data.length > 0 
                ? 
                    <div className="bg-[#2b3566] rounded-lg flex items-center flex-wrap gap-[1.2rem] justify-center xs:p-[.5rem] sm:p-[2rem] my-[2rem]">
                        {data.map((repositor: repositores) => <RepositoresCard userData={repositor} />)}
                    </div> 
                : <>Nenhum repositório encontrado</>
            }
        </section>
    )
}

export default Repositores