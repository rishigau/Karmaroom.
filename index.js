import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoChat from '../components/VideoChat'; // Placeholder video chat component

const HomePage = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to KarmaRoom</h1>
        <p>Talk to strangers, join live streams, and earn Karma points!</p>
        <VideoChat />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
