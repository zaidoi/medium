import { Link } from "react-router-dom";

const BlogCard = ({ authorName, title, content, date,id }) => {
  return (
    <>
    
    <Link to={`/blog/${id}`}>
    <div className="flex justify-center mt-2 px-2">
  <div className="flex flex-col p-2 max-w-3xl gap-3 w-full">

    
    <div className="flex items-center gap-3">
      
    
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">
        <span className="font-medium text-sm">
          {/* //{authorName.slice(0, 1)} */}
        </span>
      </div>

      
      <div className="flex items-center gap-2">
        <p className="font-medium text-sm">{authorName}</p>
        <p className="text-gray-500  mt-1 sm:mt-0 font-light text-xs sm:text-sm">
          {date}
        </p>
      </div>
    </div>

    
    <div className="flex flex-col gap-1">
      <div className="font-bold text-sm md:text-2xl">{title}</div>

      <div className="font-light text-sm md:text-base">
        {content.length >= 100
          ? content.slice(0, 100) + "..."
          : content}
      </div>

      <div className="text-xs mt-1">
        {`${Math.ceil(content.length / 100)} minutes read`}
      </div>

      <div className="bg-slate-200 h-0.5 w-full"></div>
    </div>

  </div>
</div>
    </Link>
</>
  );
};

export default BlogCard;
