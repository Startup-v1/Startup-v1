import video from "@Assets/video.mp4";
import "./heroSection.scss";

export const HeroSection = () => {
  return (
    <>
      <div className="hero-video-container">
        <div className="curtain"></div>
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={video} type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="absolute top-0 flex flex-col items-start text-white mx-6 mt-44">
        <h1 className="text-4xl font-bold sm:text-6xl">
          <div className="mb-3 min-[348px]:hidden">Work</div>
          <div className="mb-3 min-[348px]:hidden">Remote.</div>
          <div className="mb-3 hidden min-[348px]:block">Work Remote.</div>
          <div className="mb-3">Live Local.</div>
          <div className="mb-3">Go Nomad!</div>
        </h1>
        <div className="divider"></div>
        <section className="text-lg flex flex-col sm:text-xl">
          <h2 className="font-bold mt-2 mb-8 text-xl sm:text-2xl">
            Trusted and reliable data. Fresh and growing community.
          </h2>
          <div className="mb-4 sm:mb-8">
            <b>Connect </b>
            with like-minded peers through meetups & activities.
          </div>
          <div className="mb-4 sm:mb-8">
            <b>Discover </b>
            the ideal place to settle down.
          </div>
          <div className="mb-4 sm:mb-8">
            <b>Track </b>
            your journeys and show the world the places you've visited.
          </div>
          <button className="btn btn-accent mt-10">GO NOMAD</button>
        </section>
      </div>
    </>
  );
};
