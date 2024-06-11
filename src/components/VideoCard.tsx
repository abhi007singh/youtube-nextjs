import { useRouter } from "next/router";

const VideoCard = (props: any) => {
  const router = useRouter();
  return (
    <div className="p-3">
      <div onClick={() => router.push(`/watch/${props.index}`)}>
        <img
          src={props.thumbImage}
          className="rounded-xl hover:cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-2">
          <img src={props.image} className="rounded-full p-2" />
        </div>
        <div className="col-span-10 pl-2">
          <div>{props.title}</div>

          <div className="text-gray-400 text-sm">{props.author}</div>
          <div className="text-gray-400 text-sm">
            {props.views} Views | {props.timestamp} Ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
