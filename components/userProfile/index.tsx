import { user } from "@/globalTypes"
import Location from "@/public/icons/location"
// import Image from "next/image"
import Link from "next/link"

const UserProfile = (props: user) => {
    return (
        props.login !== undefined ? (
            <section className="bg-[#2b3566] p-[2rem] rounded flex flex-col items-center justify-center gap-[1.2rem]">
                <img className="w-[140px] h-[140px] border-4 border-[#644aff] rounded-full" src={ props.avatar_url || '' } width={50} height={50} alt={ props.location || 'No location' } />
                <h2 className="flex items-center gap-[.4rem]">
                    { props.login }
                </h2>
                {props.location && <span className="flex items-center gap-x-1 text-[#9da5d1] font-bold"><Location />{ props.location || 'No location' }</span>}
                <div className="flex gap-x-[1rem] justify-center text-center">
                    <div>
                        <p>
                            Seguidores:
                        </p>
                        <p className="bg-[#4ed8c7] px-[.4rem] py-[.2rem] rounded">
                            { props.followers }
                        </p>
                    </div>
                    <div className="border">
                    </div>
                    <div>
                        <p>
                            Seguindo:
                        </p>
                        <p className="bg-[#4ed8c7] px-[.4rem] py-[.2rem] rounded">
                            { props.following }
                        </p>
                    </div>
                </div>
                <Link className="text-center bg-[#644aff] p-[1rem] rounded opacity-80 duration-300 hover:opacity-100" href={`/repos/${ props.login }`}>
                    Melhores projetos
                </Link>
            </section>
        ) : (
            <></>
        )
    )
}

export default UserProfile