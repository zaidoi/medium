const SingleBlogCard = ({ title, content, name, date }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row p-4 sm:p-0 justify-center items-start gap-8 sm:gap-8 ">
      <div className="max-w-7xl flex flex-col gap-1.5">
        <div className="font-bold text-4xl">{title}</div>
        <div className="font-light text-base text-gray-400">
          Posted on {date}
        </div>
        <div className="font-light  text-base max-w-4xl text-left">
          {content}
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-start">
        <div>Author</div>
        <div className="flex items-center gap-1">
          <div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 ">
              <span className="font-medium text-sm"></span>
            </div>
          </div>
          <div>
            <div className="sm:ml-2">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
