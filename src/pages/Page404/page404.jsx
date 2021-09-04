import React from 'react';
import Navbar from '../../components/ui/navbar/Navbar.jsx';

export default function Page404() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: 50,
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: 50, marginBottom: 15 }}>
          Error 404
        </h2>
        <br />
        <span style={{ textAlign: 'center', fontSize: 50 }}>
          Page not found...
        </span>
      </div>
    </>
  );
}
