import { useBlogs } from "../../hooks";
import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex justify-center text-2xl items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="mt-2">
      <AppBar />
      {blogs.map((blog) => (
        <BlogCard
          authorName={blog.username}
          date={"2 Dec 2026"}
          content={blog.content}
          title={blog.title}
          id={blog._id}
        />
      ))}
    </div>
  );
};

export default Blogs;
