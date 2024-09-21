"use client"

import Image from 'next/image';
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/autoplay'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavbarProductsList() {
    const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         try {
    //             const res = await axiosInstance.post("/api/categories/list", {});
    //             let catList = res?.data?.data?.list || [];

    //             catList = await Promise.all(
    //                 catList.map(async (cat) => {
    //                     const subCatRes = await axiosInstance.post("/api/subCategories/list", { filter: [{ category: cat?._id }] });
    //                     return {
    //                         ...cat,
    //                         subCatList: subCatRes?.data?.data?.list || [],
    //                     };
    //                 })
    //             );

    //             console.log({ catList });
    //             setCategories(catList);
    //         } catch (error) {
    //             console.error("Error fetching categories:", error);
    //         }
    //     };

    //     fetchCategories();
    // }, []);


    return <>
        <div className='mx-auto h-full flex justify-center flex-col px-8 bg-white z-[99999] my-shadow-1'>
            <div className="w-full flex justify-between p-2 text-lg">
                <h1 className=''>Product Categories</h1>
                <Link href={"#"} className='underline'>View more</Link>
            </div>
            <div className="flex">
                {
                    categories.map((cat, i) => <div className='p-4 w-[20%]' key={i} >
                        <div className='flex h-[300px] flex-col justify-center gap-3'>
                            <Image className='w-[100px]' width={100} height={100} alt='...' src={"/assets/Rectangle 1270.png"} />
                            <h1 className='text-xl font-bold'>{cat?.name}</h1>
                            <div className="flex flex-col gap-2">
                                {
                                    cat?.subCatList?.map((subCat, index) => {
                                        return <Link key={`subcat-${i}-${index}`} href={`/products?category=${cat?._id}&subCategory=${subCat?._id}`} className="w-full bg-gray-200 px-3 py-2 hover:bg-gray-300">{subCat?.name}</Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    </>
}