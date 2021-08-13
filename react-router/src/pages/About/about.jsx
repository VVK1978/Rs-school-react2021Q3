import React from 'react';
import Navbar from '../../components/ui/navbar/Navbar.jsx';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-content">
        <h2 className="about-title">About this App</h2>
        <p className="about-text">
          Mellon, this is the one API (What the hell is an Application
          Programming Interface?) to rule them all. No really, it serves your
          needs regarding data about The Lord of the Rings, the epic books by J.
          R. R. Tolkien and the official movie adaptions by Peter Jackson. There
          are many endpoints available, but you need to sign up to obtain an
          access key. Get a glimpse into the documentation to check out all
          accessible datasets.
        </p>
      </div>
    </>
  );
}
