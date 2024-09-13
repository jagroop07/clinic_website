import Image from "next/image"

export const SliderCom = ({image, description, designation, more, spread, setspread}) => {
    return(
        <>
            <div className="p-6 flex flex-col shadow-[rgba(0,0,0,0.24)_0px_3px_8px] bg-white rounded-lg items-center">
                <Image src={image} alt="..." height={150} width={150} />
                <p className={`${spread === more? '' : 'line-clamp-3'} text-center my-3 text-gray-600`}>{description}</p>
                {spread === more ? <p onClick={() => setspread(false)} className='text-blue-900 underline cursor-pointer'>read less</p> :<p onClick={() => setspread(more)} className='text-blue-900 underline cursor-pointer'>read more</p>}
                <div className={`${spread === more ? 'hidden': 'block'} text-center`}>
                    <h4 className="font-semibold my-8">{designation}</h4>
                    <p className="text-sm text-gray-400">@publicly traded EMR software provider</p>
                </div>
            </div>
        </>
    )
}