import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  /* using use params to get the :id value from url */
  /* console.log(useParams()); */
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  /*   console.log(typeof selectedPost);
  console.log(selectedPost); */

  /* console.log(id);
  console.log(typeof id);
 */
  return (
    <main className="w-full h-275">
      {post && (
        <>
          <h2 className="text-3xl font-semibold tracking-wider mb-3">
            {post.title}
          </h2>
          <p>{post.datetime}</p>
          <p className="mt-3 text-xl mb-3">{post.body}</p>
          <div className="flex gap-2">
            <Link to={`/edit/${post.id}`}>
              <button
                type="button"
                className="bg-sky-700 py-2.5 px-5 text-white hover:bg-sky-800 rounded cursor-pointer transition-colors duration-300"
              >
                Edit
              </button>
            </Link>
            <button
              type="button"
              onClick={() => handleDelete(post.id)}
              className="bg-gray-700 py-2.5 px-5 text-white hover:bg-gray-800 rounded cursor-pointer transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        </>
      )}
      {!post && (
        <>
          <h2 className="text-5xl font-semibold mb-3">Post Not Found</h2>
          <p className="text-2xl">Well that's disappointing</p>
          <p className="mt-3">
            <Link className="hover:underline text-blue-700 " to={"/"}>
              Visit our Homepage
            </Link>
          </p>
        </>
      )}
    </main>
  );
};

export default PostPage;
