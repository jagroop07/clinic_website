import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import user from '@/backend/models/user';
import dbConnect from '@/backend/db/db';
export async function POST(req) {
    try {
        await dbConnect();
        const data = await req.json();

        // Find the user with matching credentials and role
        let findUser = await user.findOne({
            email: data.email,
            password: data.password,
            role: "1"
        });


        // If user is not found, return an error response
        if (!findUser) {
            return NextResponse.json({ status: "failed", message: "Invalid Credentials" }, { status: 401 });
        }

        // Generate a JWT token
        const token = jwt.sign(
            {
                userId: findUser._id,
                email: findUser.email,
                role: findUser.role
            },
            process.env.JWT_SECRET, // Your secret key for signing the token
            { expiresIn: '5d' } // Token expiration time (5 days)
        );

        // Set token expiration date
        const expires = new Date(Date.now() + 60 * 60 * 24 * 5 * 1000); // 5 days

        // Create response and set the token and expiration cookies
        const res = NextResponse.json({ status: 'success', message: 'Logged in successfully', data: { token, expires } });
        res.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 5, // 5 days in seconds
        });
        res.cookies.set('admin_token_expires', expires.toUTCString(), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 5,
        });

        return res;
    } catch (error) {
        console.log(error.message );

        return NextResponse.json({ status: "failed", message: "Something went wrong" }, { status: 500 });
    }
}
