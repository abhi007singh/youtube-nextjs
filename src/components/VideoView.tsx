import { useState } from "react";
import VideoGrid from "./VideoGrid";
import VideoPlayer from "./VideoPlayer";
import VideoComments from "./VideoComments";

const VIDEO = [
  {
    id: 1,
    title: "How to learn to code in 3 months | Code with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Projectz",
    views: "56M",
    timestamp: "2 Days",
  },
  {
    id: 2,
    title: "How to learn guitar in 3 months | Learn with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Playz",
    views: "5M",
    timestamp: "2 Months",
  },
  {
    id: 3,
    title: "How to study for SSB in 3 months | Study with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Forcez",
    views: "1M",
    timestamp: "2 Weeks",
  },
  {
    id: 4,
    title: "How to wash dishes | Wash with me | Women's day special",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Cleanz",
    views: "1.5B",
    timestamp: "2 Years",
  },
  {
    id: 5,
    title: "How to learn to code in 3 months | Code with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Projectz",
    views: "56M",
    timestamp: "2 Days",
  },
  {
    id: 6,
    title: "How to learn guitar in 3 months | Learn with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Playz",
    views: "5M",
    timestamp: "2 Months",
  },
  {
    id: 7,
    title: "How to study for SSB in 3 months | Study with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Forcez",
    views: "1M",
    timestamp: "2 Weeks",
  },
  {
    id: 8,
    title: "How to wash dishes | Wash with me | Women's day special",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Cleanz",
    views: "1.5B",
    timestamp: "2 Years",
  },
  {
    id: 9,
    title: "How to learn to code in 3 months | Code with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Projectz",
    views: "56M",
    timestamp: "2 Days",
  },
  {
    id: 10,
    title: "How to learn guitar in 3 months | Learn with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Playz",
    views: "5M",
    timestamp: "2 Months",
  },
  {
    id: 11,
    title: "How to study for SSB in 3 months | Study with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Forcez",
    views: "1M",
    timestamp: "2 Weeks",
  },
  {
    id: 12,
    title: "How to wash dishes | Wash with me | Women's day special",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Cleanz",
    views: "1.5B",
    timestamp: "2 Years",
  },
  {
    id: 13,
    title: "How to learn to code in 3 months | Code with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Projectz",
    views: "56M",
    timestamp: "2 Days",
  },
  {
    id: 14,
    title: "How to learn guitar in 3 months | Learn with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Playz",
    views: "5M",
    timestamp: "2 Months",
  },
  {
    id: 15,
    title: "How to study for SSB in 3 months | Study with me | Day 30/90",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Forcez",
    views: "1M",
    timestamp: "2 Weeks",
  },
  {
    id: 16,
    title: "How to wash dishes | Wash with me | Women's day special",
    image: "/images/channel.jpg",
    thumbImage: "/images/thumbImage.jpg",
    author: "Cleanz",
    views: "1.5B",
    timestamp: "2 Years",
  },
];

const VideoView = (props: any) => {
  const video = VIDEO[props.id - 1];
  const [likes, setLikes] = useState(12);
  const [dislikes, setDislikes] = useState(2);

  const [isReadMore, setIsReadMore] = useState(false);
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mt-12 px-16">
      <div className="md:col-span-8">
        <VideoPlayer id={props.id} />
        <div>
          <VideoGrid pathname={props.pathname} />
        </div>
      </div>
      <div className="md:fixed h-[calc(100vh-74px)] right-14 md:col-span-4 p-3 m-2 max-w-md border border-slate-600 rounded-xl">
        <h1 className="text-3xl font-semibold">{video.title}</h1>
        <div className="font-medium flex">
          {video.views} Views | {video.timestamp} Ago
        </div>
        <div className="my-3 text-sm">
          {description.length > 40
            ? isReadMore
              ? description
              : `${description.substring(0, 40)}...`
            : description}
          {!isReadMore && (
            <div
              onClick={() => setIsReadMore(!isReadMore)}
              className="hover:cursor-pointer"
            >
              {!isReadMore ? "...more" : "less"}
            </div>
          )}
        </div>
        <div className="grid grid-cols-4 p-2">
          <div className="col-span-3 grid grid-cols-12">
            <div className="col-span-2">
              <img
                src={video.image}
                alt="channel_img.jpg"
                className="rounded-full"
              />
            </div>
            <div className="col-span-10 pl-2">
              <div className="text-md">{video.author}</div>
              <div className="text-xs text-slate-400">122K Subscribers</div>
            </div>
          </div>
          <div className="col-span-1">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-full text-md px-5 py-2.5 dark:text-slate-900 dark:bg-white dark:hover:bg-slate-200"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-start gap-2">
          <div className="flex justify-center py-1 px-2 rounded-full bg-gray-900">
            <div
              className="flex justify-center mx-1  hover:bg-gray-800"
              onClick={() => setLikes(likes + 1)}
            >
              <svg
                className="w-4 h-4 m-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
              </svg>
              <div>{likes}</div>
            </div>
            |
            <div
              className="flex justify-center mx-1  hover:bg-gray-800"
              onClick={() => setDislikes(dislikes + 1)}
            >
              <div>{dislikes}</div>
              <svg
                className="w-4 h-4 rotate-180 m-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
              </svg>
            </div>
          </div>
          <div className="bg-gray-900 rounded-full p-2 hover:bg-gray-800 hover:cursor-pointer">
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
                <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
              </svg>
            </div>
          </div>
          <div className="bg-gray-900 rounded-full p-2 hover:bg-gray-800 hover:cursor-pointer">
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
                <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
              </svg>
            </div>
          </div>
          <div className="bg-gray-900 rounded-full p-2 hover:bg-gray-800 hover:cursor-pointer">
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
                <path d="M8 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-1 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.79-7.77L21 18.44V20h-3.27l-5.76-5.76-1.27 1.27c.19.46.3.96.3 1.49 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.42 0 .81.08 1.19.2l1.37-1.37-1.11-1.11C8 10.89 7.51 11 7 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .43-.09.84-.21 1.23zm-.71.71-.43-.44.19-.58c.11-.34.16-.64.16-.92 0-1.65-1.35-3-3-3S4 5.35 4 7s1.35 3 3 3c.36 0 .73-.07 1.09-.21l.61-.24.46.46 1.11 1.11.71.71-.71.71-1.37 1.37-.43.43-.58-.18C7.55 14.05 7.27 14 7 14c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.38-.07-.75-.22-1.12l-.25-.61.47-.47 1.27-1.27.71-.71.71.71L18.15 19H20v-.15l-9.92-9.91zM17.73 4H21v1.56l-5.52 5.52-2.41-2.41L17.73 4zm.42 1-3.67 3.67 1 1L20 5.15V5h-1.85z"></path>
              </svg>
            </div>
          </div>
          <div className="bg-gray-900 rounded-full p-2 hover:bg-gray-800 hover:cursor-pointer">
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
                <path d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"></path>
              </svg>
            </div>
          </div>
          <div className="bg-gray-900 rounded-full p-2 hover:bg-gray-800 hover:cursor-pointer">
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
                <path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="p-2">
          <VideoComments />
        </div>
      </div>
    </div>
  );
};

export default VideoView;
