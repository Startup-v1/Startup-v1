import video from "./assets/video.mp4";

function App() {
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
        <section>
          <div className="font-bold text-primary">
            Trusted and reliable data. Join our fresh and growing community and
            live your adventure!
          </div>
          <div>
            Connect with like-minded peers through meetups & activities.
          </div>
          <div>Discover the ideal place to settle down.</div>
          <div>
            Track your journeys and show the world the places you've visited.
          </div>
          <button className="btn btn-primary mt-8">Sign up</button>
        </section>
      </div>
    </>
  );
}

export default App;
