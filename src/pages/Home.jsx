import { useContext } from "react";
import Feed from "../pages/Feed";
import DataContext from "../context/DataContext";

const Home = () => {
  const { searchResults, isLoading, fetchError } = useContext(DataContext);
  return (
    <main className="myHome w-full flex flex-col   px-5 border border-black h-275">
      {isLoading && <p className="text-center text-2xl ">Loading Posts...</p>}
      {!isLoading && fetchError && (
        <p className="text-center text-2xl text-red-500">{fetchError}</p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="text-center text-2xl ">No Posts to display</p>
        ))}
    </main>
  );
};

export default Home;
