import { useBlog } from "../../hooks";
import AppBar from "../components/AppBar";
import SingleBlogCard from "../components/SingleBlogCard";
import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { loading, blog,token } = useBlog({ id });

  if(!token){
    navigate('/signin',{replace:true})
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  return (
    <>
      <AppBar />
      <div className="flex justify-center items-center sm:mt-10">
        <SingleBlogCard
          title={blog.title}
          content={blog.content}
          name={blog.username}
          date={"2 Dec 2025"}
        />
      </div>
    </>
  );
};

export default Blog;
