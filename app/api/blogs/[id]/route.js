import dbConnect from "@/backend/db/db"
import CaseStudy from "@/backend/models/caseStudy"
import { NextResponse } from "next/server"

export const DELETE = async (req, {params}) => {
    try {
        const {id} = params
        await dbConnect()

        if(!id){
            return NextResponse.json({status: 404, error: "id is missing"})
        }
        
        const deletedCase = await CaseStudy.findByIdAndDelete(id)

        if(!deletedCase){
            return NextResponse.json({status: 404, error: "no Case is found"})
        }

        return NextResponse.json({status: 200, message: "success"})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}

export const GET = async (req, {params} )  => {
    try {
        let {id} = params
        await dbConnect()

        if(!id){
            return NextResponse.json({status: 404, message: "id is missing"})
        }

        const caseInfoSingle = await CaseStudy.findById(id)

        if(!caseInfoSingle){
            return NextResponse.json({status: 404, message: "no caseStudy found with this id"})
        }

        return NextResponse.json({message: "success", singleCase: caseInfoSingle})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}

export const PUT = async(req, {params}) => {
    try {
        const {id} = params
        const caseUpdate = await req.json()
        await dbConnect()

        if(!id){
            return NextResponse.json({status: 404, message: "id is missing"})
        }

        const updateInfo = await CaseStudy.findOneAndReplace({_id: id}, caseUpdate)

        if(!updateInfo){
            return NextResponse.json({status: 404, message: "no feedback"})
        }

        return NextResponse.json({message: "successfully updated whole caseStudy"})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}

export const PATCH = async(req, {params}) => {
    try {
        const {id} = params
        const caseUpdate = await req.json()
        await dbConnect()

        if(!id){
            return NextResponse.json({status: 404, message: "id is missing"})
        }

        const updateInfo = await CaseStudy.findByIdAndUpdate(id, caseUpdate, {new: true})

        if(!updateInfo){
            return NextResponse.json({status: 404, message: "no feedback"})
        }

        return NextResponse.json({message: "successfully updated whole caseStudy"})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}