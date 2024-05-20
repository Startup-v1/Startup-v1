import video from "@Assets/video.mp4";
import "./heroSection.scss";
// import { useState, useEffect } from "react";

export const HeroSection = () => {
  return (
    <>
      <div className="hero-video-container">
        <div className="curtain min-h-[780px] xl:h-screen"></div>
        <video
          className="hero-video min-h-[780px] xl:h-screen"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={video} type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video>
        <div className="absolute top-0 flex flex-col items-start text-white mx-6 mt-40 md:mx-12 xl:mx-56 xl:mt-56">
          <h1 className="text-4xl font-bold sm:text-6xl">
            <div className="mb-3 min-[348px]:hidden">Work</div>
            <div className="mb-3 min-[348px]:hidden">Remote.</div>
            <div className="mb-3 hidden min-[348px]:block">Work Remote.</div>
            <div className="mb-3">Live Local.</div>
            <div className="mb-3">Go Nomad!</div>
          </h1>
          <div className="divider"></div>
          <section className="text-lg flex flex-col">
            <h2 className="font-bold mt-2 mb-8 text-xl xl:text-lg">
              Trusted and reliable data. Fresh and growing community.
            </h2>
            <div className="mb-4 md:mb-2 ">
              <b>Connect </b>
              with like-minded peers through meetups & activities.
            </div>
            <div className="mb-4 md:mb-2 ">
              <b>Discover </b>
              the ideal place to settle down.
            </div>
            <div className="mb-4 md:mb-2">
              <b>Track </b>
              your journeys and show the world the places you've visited.
            </div>
            <button className="btn btn-accent mt-10 md:w-[120px] xl:mt-6">
              GO NOMAD
            </button>
          </section>
        </div>
      </div>
    </>
  );
};
