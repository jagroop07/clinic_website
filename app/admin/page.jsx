import Image from "next/image"

export default function AdminHome() {
    return(
        <>
            <div className="flex flex-col justify-center h-[80dvh] items-center">
                <Image src={'/img/200.webp'} alt="..." height={300} width={300}/>
                <h1 className="text-5xl mt-5 font-bold text-blue-900 max-w-[50%] text-center leading-[60px]">Welcome To KnackGlobal Admin Panel!!</h1>
            </div>
        </>
    )
}