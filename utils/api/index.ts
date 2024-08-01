import { user } from "@/globalTypes"
import axios from "axios"
import { Dispatch, SetStateAction } from "react"

export const Api = async (username: string, setter: Dispatch<SetStateAction<object>>) => {
    try {
        const res = await axios.get(`https://api.github.com/users/${username}`)
        const { avatar_url, login, location, followers, following } = res.data
        const userData: user = { avatar_url, login, location, followers, following }

        return setter(userData)
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 404) return console.log('user não encontrado na busca')
            else return console.log(error.message)
        } else {
            return console.log('An unexpected error occurred')
        }
    }
}