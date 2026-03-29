//Components attaching
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
/* ------------------------------------- */
//Pages attaching
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import Post from "./pages/Post";
import About from "./pages/About";
import Missing from "./pages/Missing";
import EditPost from "./pages/EditPost.jsx";
//import use navgigate Hook
import { Route, Routes } from "react-router-dom";
/* ------------------------------------- */
//Page Layout attaching
import Pagelayout from "./layouts/Postlayout";
//importing useState and useEffect
import { useEffect, useState } from "react";
//Date forming function module
import { format } from "date-fns";
//importing axios for api folder

/* ----------------------------- */
//import custom hook [useWindowSize]
import useWindowSize from "./hooks/useWindowSize.js";
//import custom hook [useAxiosFetch]
import useAxiosFetch from "./hooks/useAxiosFetch.js";
/* ------------------------------------------- */
//Import DataProvider context
import { DataProvider } from "./context/DataContext.jsx";
/* ------------------------------------------- */
const App = () => {
  return (
    <>
      <div className="max-w-screen flex flex-col p-1 rounded-md">
        {/* Links */}

        {/* Components */}

        <DataProvider>
          <div className=" flex-col flex bg-gray-50    lg:max-w-300  lg:mx-auto rounded-md">
            {/*Routes */}
            <Header title={"Dinakar Social Media"} />
            <Nav />
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"post"}>
                <Route index element={<NewPost />} />
                <Route path={":id"} element={<PostPage />} />
              </Route>
              {/* -------------------------- */}
              {/* Edit Posts route  */}
              <Route path={"edit/:id"} element={<EditPost />} />
              {/* -------------------------- */}
              {/*   <PostPage /> */}
              <Route path={"about"} element={<About />} />
              <Route path={"*"} element={<Missing />} />
            </Routes>
            <Footer />
          </div>
        </DataProvider>
      </div>
    </>
  );
};
export default App;
