// import connect from "@/utils/db";
// import Post from "@/models/Post";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest, {params}: {params: {id: any}}){
//     const {id} = params
//     try {
//         await connect()
//         // return new NextResponse("Connection has been established", {status: 200})

//         const post: any = await Post.findById(id)
//         return new NextResponse(JSON.stringify(post), {status: 200})
//     } catch (err) {
//         return new NextResponse("Connection was not possible " + err, {status: 500})        
//     }
// }