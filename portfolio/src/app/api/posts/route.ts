import connect from "@/utils/db";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    try {
        await connect()
        // return new NextResponse("Connection has been established", {status: 200})

        const posts: any = await Post.find()
        return new NextResponse(JSON.stringify(posts), {status: 200})
    } catch (err) {
        return new NextResponse("Connection was not possible " + err, {status: 500})        
    }
}