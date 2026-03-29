import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize.js";
import useAxiosFetch from "../hooks/useAxiosFetch.js";
import { format } from "date-fns";
import api from "../api/posts.js";
// creating context variable
const DataContext = createContext({});

// creating Data provider function with named export

export const DataProvider = ({ children }) => {
  //use navigate
  const navigate = useNavigate();
  /* ----------------------------- */
  // Using custome hook [useWindowSize]
  const { width } = useWindowSize();
  /* ----------------------------- */
  // post state default
  const [posts, setPosts] = useState([]);
  /* ----------------------------- */
  // searchResult state to save the filter arrays inside the nav component
  const [searchResults, setSearchResults] = useState([]);
  /* ----------------------------- */
  // search state inside nav.jsx
  const [search, setSearch] = useState("");
  /* ----------------------------- */
  // Title and Body state inside newpost.jsx
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  /* ----------------------------- */
  // editTitle and editBody state inside newpost.jsx
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  /* ----------------------------- */
  //Import our custom hook for calling Api
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts",
  );

  //Using useEFfect for mounting the custom hook useAxiosFetch
  useEffect(() => {
    setPosts(data);
  }, [data]);
  /* ----------------------------- */
  //UseEffect -> using use effect for searching -> when searching both searchresults and posts will be loaded
  useEffect(() => {
    const fileteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchResults(fileteredResults.reverse());
  }, [posts, search]);

  /* ----------------------------------- */
  // Handle submit inside newpost.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
    };
    // Post methods in Axios Api
    try {
      const response = await api.post("/posts", newPost);
      /* --------- */
      const allPost = [...posts, response.data];
      setPosts(allPost);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  };
  /* ----------------------------------- */
  // Handle edit fuctions for single post inside postPage.jsx
  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id,
      title: editTitle,
      datetime,
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? [...response.data] : post)),
      );
      setEditTitle("");
      setEditBody("");
    } catch (error) {
      console.log(`Error : ${err.message}`);
    } finally {
      navigate("/");
    }
  };
  /* ----------------------------------- */
  // Handle delete fuctions for single post inside postPage.jsx
  const handleDelete = async (id) => {
    if (confirm("Are you sure want to delete")) {
      try {
        await api.delete(`posts/${id}`);
        const deletedPost = posts.filter((post) => post.id !== id);
        setPosts(deletedPost);
        awai;
      } catch (err) {
        console.log(`Error : ${err.message}`);
      } finally {
        navigate("/");
      }
    }
  };
  return (
    <>
      <DataContext.Provider
        value={{
          width,
          search,
          setSearch,
          searchResults,
          fetchError,
          isLoading,
          postTitle,
          setPostTitle,
          postBody,
          setPostBody,
          handleSubmit,
          posts,
          handleDelete,
          editTitle,
          setEditTitle,
          editBody,
          setEditBody,
          handleEdit,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataContext;
