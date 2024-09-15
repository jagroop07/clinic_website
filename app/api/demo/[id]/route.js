import dbConnect from "@/backend/db/db"
import ScheduleDemo from "@/backend/models/scheduleDemo"
import { NextResponse } from "next/server"

export const DELETE = async(req, {params}) => {
    try {
        const {id} = params
        await dbConnect()

        if(!id){
            return NextResponse.json({status: 404, message: "id is missing"})
        }

        const demoDeleted = await ScheduleDemo.findByIdAndDelete(id)

        if(!demoDeleted){
            return NextResponse.json({status: 404, message: "demo not found"})
        }

        return NextResponse.json({message: "demo deleted successfully"})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}