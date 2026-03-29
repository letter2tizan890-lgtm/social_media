import { useContext } from "react";
import DataContext from "../context/DataContext";

const NewPost = () => {
  const { postTitle, setPostTitle, postBody, setPostBody, handleSubmit } =
    useContext(DataContext);
  return (
    <main className="myForm flex flex-col w-full h-275 p-5">
      <h1 className="text-3xl font-semibold py-5">New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="postTitle" className="text-2xl font-semibold">
          Title:
        </label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          required
          onChange={(e) => setPostTitle(e.target.value)}
          className="py-3 px-3.5 outline-none shadow-md rounded border border-gray-200 w-full"
        />

        <label htmlFor="postBody" className="text-2xl font-semibold">
          Body:
        </label>
        <input
          type="text"
          id="postBody"
          value={postBody}
          required
          onChange={(e) => setPostBody(e.target.value)}
          className="py-3 px-3.5 outline-none shadow-md rounded border border-gray-200 w-full"
        />
        <button
          type="submit"
          className="bg-neutral-700 py-3 px-3.5 rounded hover:bg-neutral-800 text-white cursor-pointer duration-300 transition-all"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
