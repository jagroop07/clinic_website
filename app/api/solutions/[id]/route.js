import dbConnect from "@/backend/db/db"
import Solutions from "@/backend/models/solutions"
import { NextResponse } from "next/server"

export const DELETE = async (req, {params}) => {
    try {
        const {id} = params
        await dbConnect()
        
        if(!id){
            return NextResponse.json({status: 404, error: "id is missing"})
        }
        
        const deletedSolution = await Solutions.findByIdAndDelete(id)

        if(!deletedSolution){
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

        const singleSolution = await Solutions.findById(id)

        if(!singleSolution){
            return NextResponse.json({status: 404, message: "no caseStudy found with this id"})
        }

        return NextResponse.json({message: "success", singleSolution: singleSolution})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}

export const PUT = async(req, {params}) => {
    try {
        const {id} = params
        const solutionUpdate = await req.json()
        await dbConnect()

        if(!id){
            return NextResponse.json({status: 404, message: "id is missing"})
        }

        const updateInfo = await Solutions.findOneAndReplace({_id: id}, solutionUpdate)

        if(!updateInfo){
            return NextResponse.json({status: 404, message: "no feedback"})
        }

        return NextResponse.json({message: "successfully updated whole Solution"})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}

export const PATCH = async(req, {params}) => {
    try {
        const {id} = params
        const solutionUpdate = await req.json()
        await dbConnect()

        if(!id){
            return NextResponse.json({status: 404, message: "id is missing"})
        }

        const updateInfo = await CaseStudy.findByIdAndUpdate(id, solutionUpdate, {new: true})

        if(!updateInfo){
            return NextResponse.json({status: 404, message: "no feedback"})
        }

        return NextResponse.json({message: "successfully updated whole Solution"})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}