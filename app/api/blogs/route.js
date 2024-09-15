import dbConnect from "@/backend/db/db"
import CaseStudy from "@/backend/models/caseStudy"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    try {
        await dbConnect()
        const caseStudy = await CaseStudy.find()
        return NextResponse.json({ message: "success", caseStudy })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message: "error occured", error})
    }
}

export const POST = async (req) => {
    try {
        let data = await req.json();
        await dbConnect()
        const caseInfo = await CaseStudy.create(data)
        return NextResponse.json({ message: "caseStudy created successfully", caseInfo })
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}
