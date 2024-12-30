import React, { useState, useRef, useEffect } from "react";

const Reels = () => {
  const Videos = [
    "https://cdn.live2.ai/uploads/6kgt5m5nx8/video/transcoded/480p/5e9886915d.mp4",
    "https://cdn.live2.ai/uploads/6kgt5m5nx8/video/transcoded/720p/51a00f6087.mp4",
    "https://cdn.live2.ai/uploads/6kgt5m5nx8/video/transcoded/480p/b54c4f9ec8.mp4",
    "https://cdn.live2.ai/uploads/6kgt5m5nx8/video/transcoded/480p/576514cba3.mp4",
    "https://cdn.live2.ai/uploads/6kgt5m5nx8/video/transcoded/480p/f7257d88c5.mp4",
    "https://cdn.live2.ai/uploads/6kgt5m5nx8/video/transcoded/480p/4d8a73e1d9.mp4",
  ];

  const [selectedVideo, setSelectedVideo] = useState(Videos[0]);
  const videoTimeoutRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  
  // Play the selected video for at least 16 seconds
  useEffect(() => {
    if (videoTimeoutRef.current) {
      clearTimeout(videoTimeoutRef.current);
    }

    videoTimeoutRef.current = setTimeout(() => {
      // Select the next video after 16 seconds
      const currentIndex = Videos.indexOf(selectedVideo);
      const nextVideo = Videos[(currentIndex + 1) % Videos.length];
      setSelectedVideo(nextVideo);
    }, 16000); // 16 seconds

    return () => clearTimeout(videoTimeoutRef.current);
  }, [selectedVideo, Videos]);

  return (
    <div className="w-full h-[35rem] xl:h-[48rem] overflow-hidden pb-28 flex relative">
        <div className="flex items-center justify-start space-x-8 absolute bottom-[23rem] xl:bottom-[26rem] right-[25%]">
          <div className="w-12 h-12 bg-white rounded-full relative" onClick={handleScrollLeft}>
            <button className="w-12 h-12 bg-[#b7afa4] absolute -left-2 rounded-full flex items-center justify-center rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 -4 32 32"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right"
              >
                <line x1="1" y1="12" x2="30" y2="12"></line>
                <polyline points="26 9 30 12 26 15"></polyline>
              </svg>
            </button>
            </div>
            <div className="w-12 h-12 bg-white rounded-full relative" onClick={handleScrollRight}>
            <button className="w-12 h-12 bg-[#b7afa4] absolute -left-2 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 -4 32 32"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right"
              >
                <line x1="1" y1="12" x2="30" y2="12"></line>
                <polyline points="26 9 30 12 26 15"></polyline>
              </svg>
            </button>
          </div>
          </div>
      {/* Left Side: Title */}
      <div className="w-[10%] flex items-end justify-center">
        <h2 className="text-white text-[6.5rem] xl:text-[8rem] font-semibold font-oswald rotate-90 whitespace-nowrap mb-10 tracking-wide">
          REELS
        </h2>
      </div>

      {/* Center: Infinite Carousel */}
      <div
       
        ref={scrollContainerRef}
        className="overflow-x-scroll scrollbar-hide h-full w-[65%]"
        style={{ whiteSpace: "nowrap" }}
      >
      <div
        className="h-full w-max flex items-end space-x-2"
        
      >
        {[...Videos, ...Videos].map((video, index) => (
          <div
            key={index}
            className={`inline-block xl:w-[10rem] w-[8.5rem] rounded-[0.8rem] overflow-hidden cursor-pointer ${
              selectedVideo === video ? "opacity-50" : "opacity-100"
            }`}
            onClick={() => setSelectedVideo(video)} // Set selected video
          >
            <video
              src={video}
              className="h-full w-full"
              preload="metadata"
              muted
              loop
              onMouseEnter={(e) => e.target.play()} // Play on hover
              onMouseLeave={(e) => {
                e.target.pause();
                e.target.currentTime = 0; // Reset to start
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
      </div>

      {/* Right Side: Selected Video */}
      <div className="w-[25%] flex justify-center items-end">
        <div className="relative h-[90%] w-[90%] rounded-[1rem] overflow-hidden shadow-xl">
          <video
            src={selectedVideo}
            className="h-full w-full object-cover"
            controls
            autoPlay
            muted={false} // Enable sound for selected video
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Reels;