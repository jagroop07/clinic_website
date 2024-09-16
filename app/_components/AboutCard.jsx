import Image from "next/image"

export const AboutCard = ({img, name, designation, description}) => {
    return(
        <>
            <div className="bg-white p-12 max-w-[300px] rounded-xl">
                <div className="flex justify-center mb-6">
                    <Image src={img} alt="..." height={70} width={70}/>
                </div>
                <div className="text-center border-b-2 border-gray-300">
                    <h3 className="text-2xl font-semibold">{name}​</h3>
                    <h5 className="text-blue-900 text-md font-semibold mt-3 mb-10">{designation}​</h5>
                </div>
                <div>
                    <p className="my-4 text-sm font-semibold text-center">{description}</p>
                </div>
            </div>
        </>
    )
}