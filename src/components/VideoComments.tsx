import UserComment from "./UserComment";

const VideoComments = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div>Comments</div>
        <div className="flex items-center">
          <div className="rounded-full p-2 hover:bg-gray-800 hover:cursor-pointer">
            <div className="w-full h-full block currentcolor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path>
              </svg>
            </div>
          </div>
          <div>Sort By</div>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-2">
          <img
            src="/images/channel.jpg"
            alt=""
            height={"60"}
            width={"60"}
            className="rounded-full p-2"
          />
        </div>
        <div className="col-span-10">
          <input
            type="text"
            placeholder="Add a comment..."
            className="bg-black text-slate-400 border-b-2 border-b-slate-400 w-full"
          />
        </div>
      </div>
      <div>
        <UserComment />
      </div>
    </div>
  );
};

export default VideoComments;
