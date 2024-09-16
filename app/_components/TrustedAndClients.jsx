import Clients from "./Clients"

export const TrustedAndClients = () => {
    return (
        <>
            <div className="text-blue-900 md:flex md:justify-center text-center py-14">
                <div className="md:w-[30%] md:mt-0 mt-10">
                    <h1 className="flex-grow md:text-5xl text-3xl font-normal tracking-[1px] mb-4">750+</h1>
                    <p className="md:text-xl text-base">Medical Practices Served</p>
                </div>
                <div className="md:w-[30%] md:mt-0 mt-10">
                    <h1 className="flex-grow md:text-5xl text-3xl font-normal tracking-[1px] mb-4">125M</h1>
                    <p className="md:text-xl text-base">Transactions Per Year</p>
                </div>
                <div className="md:w-[30%] md:mt-0 mt-10">
                    <h1 className="flex-grow md:text-5xl text-3xl font-normal tracking-[1px] mb-4">95%</h1>
                    <p className="md:text-xl text-base">Collection Rate</p>
                </div>
            </div>
            <div className="px-6 py-14">
                <Clients/>
            </div>
        </>
    )
}