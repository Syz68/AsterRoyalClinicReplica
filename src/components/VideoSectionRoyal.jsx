import React from 'react';
import './VideoSectionRoyal.css';

const videos = [
  {
    title: "Clinic Overview",
    url: "https://www.youtube.com/embed/your-video-id-1",
  },
  {
    title: "Meet Our Doctors",
    url: "https://www.youtube.com/embed/your-video-id-2",
  },
  {
    title: "Patient Testimonials",
    url: "https://www.youtube.com/embed/your-video-id-3",
  },
];

const VideoSectionRoyal = () => {
  return (
    <section className="royal-video-section">
      <h2 className="royal-video-heading">Discover Our Clinic</h2>
      <div className="royal-video-grid">
        {videos.map((video, index) => (
          <div className="royal-video-card" key={index}>
            <iframe
              className="royal-video-iframe"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="royal-video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSectionRoyal;
