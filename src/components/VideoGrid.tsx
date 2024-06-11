import VideoCard from "./VideoCard";

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

const VideoGrid = (props: any) => {
  let currentVid: any;
  props.pathname && (currentVid = props.pathname.split("/")[2]);
  return (
    <div className={`mt-12`}>
      <div>
        <div
          className={`grid grid-cols-1 ${
            props.isOpen
              ? "sm:ml-44 ml-16"
              : `${props.pathname ? undefined : "ml-16"}`
          } ${
            props.pathname
              ? "lg:grid-cols-3 md:grid-cols-2"
              : "lg:grid-cols-4 md:grid-cols-3"
          }`}
        >
          {VIDEO.map((video) => {
            if (currentVid == video.id) return;
            return (
              <div key={video.id}>
                <VideoCard
                  index={video.id}
                  title={video.title}
                  image={video.image}
                  thumbImage={video.thumbImage}
                  author={video.author}
                  views={video.views}
                  timestamp={video.timestamp}
                ></VideoCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
