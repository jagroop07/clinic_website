import Image from "next/image"
import { BiPhone } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { TbDeviceLandlinePhone } from "react-icons/tb";

export const LocationCard = ({heading, img, address, phone1, phone2}) => {
    return (
        <>
            <div className="bg-[#004366] text-white p-3 flex flex-col justify-center items-center gap-3 rounded-2xl">
                <h3 className="text-3xl font-semibold">{heading}</h3>
                <div>
                    <Image src={img} alt="..." height={200} width={200} />
                </div>
                <div className="text-gray-300">
                    <div className="flex gap-3 my-3 items-center">
                        <div>
                            <IoLocationSharp className="text-white"/>
                        </div>
                        <div>
                            <p>{address}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div>
                            <BiPhone  className="text-white"/>
                        </div>
                        <div>
                            <p>{phone1}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 my-3 items-center">
                        <div>
                            <TbDeviceLandlinePhone className="text-white"/>
                        </div>
                        <div>
                            <p>{phone2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}