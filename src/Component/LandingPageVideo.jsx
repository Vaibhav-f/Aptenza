import LandingVideo from "../Elements/LandingVideo.mp4";

const LandingPageVideo = () => {
  return (
    <video
      className="h-full w-full object-cover"
      src={LandingVideo}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default LandingPageVideo;