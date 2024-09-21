import dbConnect from "@/backend/db/db"
import Solutions from "@/backend/models/solutions"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    try {
        await dbConnect()
        const solutions = await Solutions.find()
        return NextResponse.json({ message: "success", solutions })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message: "error occured", error})
    }
}

export const POST = async (req) => {
    try {
        let data = await req.json();
        await dbConnect()
        const solutionInfo = await Solutions.create(data)
        return NextResponse.json({ message: "Solutions created successfully", solutionInfo })
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}
