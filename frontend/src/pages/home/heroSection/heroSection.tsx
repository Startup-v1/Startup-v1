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
      <div className="hero-content">
        <h1>
          <div>Work Remote.</div>
          <div>Live Local.</div>
          <div>Go Nomad!</div>
        </h1>
        <div className="divider"></div>
        <section>
          <h2 className="font-bold mt-2 mb-8">
            Trusted and reliable data. Fresh and growing community.
          </h2>
          <div>
            <b>Connect </b>
            with like-minded peers through meetups & activities.
          </div>
          <div>
            <b>Discover </b>
            the ideal place to settle down.
          </div>
          <div>
            <b>Track </b>
            your journeys and show the world the places you've visited.
          </div>
          <button className="btn btn-accent mt-6">GO NOMAD</button>
        </section>
      </div>
    </>
  );
};
