import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

const uploadDir = path.join(process.cwd(), '/public/uploads')

const ifexistsUplaodDir = async () => {
    try {
        await fs.access(uploadDir)
    } catch {
        await fs.mkdir(uploadDir, { recursive: true })
    }
}

const config = {
    api: {
        bodyParser: false
    }
}

export const POST = async (req) => {
    try {
        await ifexistsUplaodDir()

        const formData = await req.formData()
        const file = formData.get('file')

        if (!file || !file.name) {
            return NextResponse.json("file not uploaded")
        }

        const extension = path.extname(file.name)
        const uniquefile = Date.now() + extension

        const filepath = path.join(uploadDir, uniquefile)

        const buffer = Buffer.from(await file.arrayBuffer())
        await fs.writeFile(filepath, buffer)

        const fileUrl = new URL(`/uploads/${uniquefile}`, `http://${req.headers.get('host')}`).href

        return NextResponse.json({ message: "success", detials: { publicPath: fileUrl, format: extension} })
    } catch (error) {
        return NextResponse.json({ message: error.message })
    }
}

export { config }