const VideoPlayer = (props: any) => {
  return (
    <div className="mt-2">
      <video width="3000" height="240" className="rounded-xl" controls preload="none">
        <source src="/path/to/video.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
