//Importing useParams for getting :id
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
/* ---------------- */
const EditPost = () => {
  const { posts, editTitle, editBody, setEditTitle, setEditBody, handleEdit } =
    useContext(DataContext);
  // useparams
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  /* ------------- */
  // Using useEffect fpr post ,setEditTitle, setEditBody
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  /* ------------- */
  return (
    <main>
      {editTitle && (
        <>
          <h1 className="text-2xl mb-2 font-semibold">Edit Post</h1>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <label htmlFor="postTitle" className="text-2xl font-semibold">
              Title:
            </label>
            <input
              type="text"
              id="postTitle"
              value={editTitle}
              required
              onChange={(e) => setEditTitle(e.target.value)}
              className="py-3 px-3.5 outline-none shadow-md rounded border border-gray-200 w-full"
            />

            <label htmlFor="postBody" className="text-2xl font-semibold">
              Body:
            </label>
            <input
              type="text"
              id="postBody"
              value={editBody}
              required
              onChange={(e) => setEditBody(e.target.value)}
              className="py-3 px-3.5 outline-none shadow-md rounded border border-gray-200 w-full"
            />
            <button
              onClick={() => handleEdit(post.id)}
              type="submit"
              className="bg-neutral-700 py-3 px-3.5 rounded hover:bg-neutral-800 text-white cursor-pointer duration-300 transition-all"
            >
              Submit
            </button>
          </form>
          {!editTitle && (
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
        </>
      )}
    </main>
  );
};

export default EditPost;
