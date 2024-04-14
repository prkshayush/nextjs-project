// import mongoose from "mongoose";

// const {Schema} = mongoose

// interface PostProps {
//     title: string,
//     desc: string,
//     content: string,
//     username: string,
//     img: string,
//     authImg: string
// }

// const postSchema = new Schema<PostProps>({
//     title: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     desc: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     content: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     username: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     img: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     authImg: {
//         type: String,
//         unique: true,
//         required: true
//     },
// },{
//     timestamps: true
// })

// export default mongoose.models.Post || mongoose.model("Post", postSchema)