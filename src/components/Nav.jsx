import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="flex flex-col bg-neutral-700 sm:flex-row sm:gap-5 sm:items-center lg:justify-around  sm:justify-around  h-32 sm:h-20 p-4 sm:-p-0 top-0 right-0 left-0 sticky">
      <form className="flex items-start" onSubmit={(e) => e.preventDefault()}>
        {/* <label htmlFor="search" className="hidden sm:inline">
          Search Posts
        </label> */}
        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Posts"
          required
          className="bg-white rounded py-3 px-2.5   w-100 mb-5 sm:mb-0 sm:w-90 sm:flex-1 lg:w-150"
        />
      </form>
      <ul className="flex items-center gap-10 text-white text-xl">
        <li className="hover:underline">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:underline">
          <Link to={"post"}>Post</Link>
        </li>
        <li className="hover:underline">
          <Link to={"about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
