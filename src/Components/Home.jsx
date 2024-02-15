import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const videos = [
    { id: 1, url: 'https://www.youtube.com/watch?v=dlXyPtEgzI8', title: 'Video 1' },
    { id: 2, url: 'https://www.youtube.com/watch?v=7kDtyUQFjsQ', title: 'Video 2' },
    // Add more videos with titlesshared
    { id: 3, url: 'https://www.youtube.com/watch?v=n-miJQUD9l4', title: 'Video 3' },
    { id: 4, url: 'https://www.youtube.com/watch?v=_7Iudvzquds', title: 'Video 4' },
    { id: 5, url: 'https://www.youtube.com/watch?v=_7Iudvzquds', title: 'Video 5' },
    { id: 6, url: 'https://www.youtube.com/watch?v=Kpg-OVlruxU', title: 'Video 6' },
    { id: 7, url: 'https://www.example.com/video7.mp4', title: 'Video 7' },
    { id: 8, url: 'https://www.example.com/video8.mp4', title: 'Video 8' },
    { id: 9, url: 'https://www.example.com/video9.mp4', title: 'Video 9' },
    { id: 10, url: 'https://www.example.com/video10.mp4', title: 'Video 10' },
  ];

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>KleinFlix</h1>
      <input
        type="text"
        placeholder="Search videos..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="video-list">
        {filteredVideos.map((video) => (
          <div key={video.id} className="video-item">
            <ReactPlayer url={video.url} controls width="100%" height="100%" />
            <div className="video-title">{video.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
