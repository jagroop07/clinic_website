import Testimonials from "./Testimonials"

export const TrustedBy = () => {
    return (
        <>
            <div className="py-12 bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">TRUSTED BY</h1>
                    <h5 className="text-sm text-gray-700 my-3">750+ MEDICAL PRACTICES SERVED</h5>
                </div>
                <div className="lg:px-12 md:px-5 px-2 py-12">
                    <Testimonials />
                </div>
            </div>
        </>
    )
}