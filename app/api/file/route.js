import cloudinary from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the incoming request body as JSON
    const fileStr = body.base64; // Get the base64 image string from the client-side

    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'your_upload_preset', // Replace with your Cloudinary upload preset
    });

    return NextResponse.json({ url: uploadResponse.secure_url }); // Return the image URL
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ error: 'Something went wrong!' }, { status: 500 });
  }
}
