const Advertisement = () => {
  return (
    <div className="video-frame">
        <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"

        >
            <source src="/video/ads.mov" type="video/mp4" />
        </video>
    </div>
  );
};

export default Advertisement;