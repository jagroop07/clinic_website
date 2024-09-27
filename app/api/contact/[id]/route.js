import dbConnect from "@/backend/db/db"
import ContactUs from "@/backend/models/contactUs"
import { NextResponse } from "next/server"

export const DELETE = async(req, {params}) => {
    try {
        const {id} = params
        await dbConnect()

        if(!id){
            return NextResponse.json({status: 400, message: "id missing"})
        }

        const contactDeleted = await ContactUs.findByIdAndDelete(id)

        if(!contactDeleted){
            return NextResponse.json({status: 404, message: "contact not found"})
        }

        return NextResponse.json({message: "contact deleted successfully", contactDeleted})
    } catch (error) {
        return NextResponse.json({status: 400, error: error.message})
    }
}