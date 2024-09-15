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

export const GET = async (req, {params} )  => {
    try {
        let {id} = params
        await dbConnect()

        const caseInfoSingle = await CaseStudy.findById(id)

        if(!caseInfoSingle){
            return NextResponse.json({status: 400, message: "No feedback yet"})
        }

        return NextResponse.json({message: "success", singleCase: caseInfoSingle})
    } catch (error) {
        return NextResponse.json({message: "error occured", error: error.message})
    }
}