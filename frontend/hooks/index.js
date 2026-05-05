import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";



export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      return;
    }
    async function fetchData() {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(res.data.Posts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [token]);

  return {
    loading: token ? loading : false,
    blogs,
    token
  };
};

export const useBlog = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlog(res.data.post);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlog();
  }, []);
  return {
    loading,
    blog,
    token
  };
};
