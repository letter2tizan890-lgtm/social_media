import Post from "../pages/Post";

const Feed = ({ posts }) => {
  return (
    <>
      <main className="">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </>
  );
};

export default Feed;
