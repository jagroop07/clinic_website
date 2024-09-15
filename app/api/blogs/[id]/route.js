import dbConnect from "@/backend/db/db"
import CaseStudy from "@/backend/models/caseStudy"
import { NextResponse } from "next/server"

export const DELETE = async (req, {params}) => {
    try {
        const {id} = params
        await dbConnect()

        if(!id){
            return NextResponse.json({status: 404, error: "case study not found"})
        }
        
        const deletedCase = await CaseStudy.findByIdAndDelete(id)

        if(!deletedCase){
            return NextResponse.json({status: 400, error: "feedback not recieved"})
        }

        return NextResponse.json({status: 200, message: "success"})
    } catch (error) {
        return NextResponse.json({message: "error occured", error})
    }
}