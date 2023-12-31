import mongoose, { Document, Model, Schema } from "mongoose";

interface IBlog extends Document {
  username: string;
  title: string;
  desc: string;
  image?: string;
}

const BlogSchema = new Schema<IBlog>(
  {
    username:String,
    title:String,
    desc:String,
    image:String,
  },
  { timestamps: true }
);


const Blog:Model<IBlog> = mongoose.model<IBlog>("blogs", BlogSchema);

export default Blog
