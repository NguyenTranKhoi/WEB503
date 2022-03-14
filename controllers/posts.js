import mongoose from "mongoose";
//Khởi tạo modal
const Posts = mongoose.model("Posts", { post: String });

//Thêm bài viết
export const createAdd = async (req, res) => {
    try {
        const post = await new Posts(req.body).save();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm đưỢc bài viết"
        })
    }
}

//list bài viết
export const listPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm đưỢC bài viết"
        })
    }
}