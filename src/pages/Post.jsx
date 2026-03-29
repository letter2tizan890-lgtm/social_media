import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="flex flex-col cursor-pointer h-40">
      <Link to={`post/${post.id}`}>
        <h2 className="text-2xl font-semibold mt-2 mb-2">{post.title}</h2>
        <p className="text-[12px]">{post.datetime}</p>
        <p className="text-[16px] mt-5">
          {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
        </p>
      </Link>
      <div className="border border-gray-300 w-full mt-7 "></div>
    </article>
  );
};

export default Post;
