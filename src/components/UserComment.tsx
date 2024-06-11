const UserComment = () => {
  return (
    <div className="grid grid-cols-12 text-sm items-start">
      <div className="col-span-1">
        <img
          src="/images/channel.jpg"
          alt=""
          height={"38"}
          width={"38"}
          className="rounded-full p-2"
        />
      </div>
      <div className="col-span-11">
        <div className="grid grid-cols-12">
          <div className="col-span-10 flex">
            <div className="font-semibold ml-1">@username</div>
            <div className="ml-1.5 text-gray-400 text-sm">1 Month Ago</div>
          </div>
          <div className="text-white currentcolor col-span-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 60 60"
              focusable="false"
              fill="currentColor"
              className="w-full h-full cursor-pointer"
            >
              <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
            </svg>
          </div>
        </div>
        <div>

        </div>
        <div>
            
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default UserComment;
