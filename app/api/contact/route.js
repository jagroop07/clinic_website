import dbConnect from "@/backend/db/db"
import ContactUs from "@/backend/models/contactUs"
import { NextResponse } from "next/server"

export const GET = async(req) => {
    try {
        await dbConnect()

        const users = await ContactUs.find()

        return NextResponse.json({message: "success", details: users})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}

export const POST = async(req) => {
    try {
        const contactInfo = await req.json()
        await dbConnect()

        const contact = await ContactUs.create(contactInfo)

        return NextResponse.json({message: "successfully contacted", contactDetails: contact})
    } catch (error) {
        return NextResponse.json({status: 400, error: error.message})
    }
}