import { useContext } from "react";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import DataContext from "../context/DataContext";

const Header = ({ title }) => {
  // Calling useContext values from DataContext
  const { width } = useContext(DataContext);
  return (
    <header className="bg-sky-300  h-18 text-center flex items-center justify-around  text-3xl  sm:px-5 sticky   top-0 right-0 left-0">
      <h1 className="font-semibold  text-sm sm:text-xl">
        {title ? title : "No Title"}{" "}
      </h1>
      {width < 768 ? (
        <FaMobileAlt size={"25px"} />
      ) : width < 992 ? (
        <FaTabletAlt size={"25px"} />
      ) : (
        <FaLaptop size={"25px"} />
      )}
    </header>
  );
};

export default Header;
