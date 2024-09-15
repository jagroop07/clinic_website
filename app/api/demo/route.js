import dbConnect from "@/backend/db/db"
import ScheduleDemo from "@/backend/models/scheduleDemo"
import { NextResponse } from "next/server"

export const GET = async(req) => {
    try {
        await dbConnect()

        const demoDetails = await ScheduleDemo.find()

        return NextResponse.json({message: "success", demoInfo: demoDetails})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}

export const POST = async(req) => {
    try {
        const demoInfo = await req.json()
        await dbConnect()

        const demo = await ScheduleDemo.create(demoInfo)

        return NextResponse.json({message: "successfully demo scheduled", demo})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}