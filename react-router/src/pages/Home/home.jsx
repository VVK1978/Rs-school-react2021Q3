import React, { useState, useEffect } from 'react';
import ApiService from '../../API/ApiService.jsx';
import Header from '../../components/ui/header/Header.jsx';
import Table from '../../components/ui/table/table.jsx';

export default function Home() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const request = '/quote?limit=20';
    const response = await ApiService.getAll(request);
    setData(response);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="home-content">
        <h2 className="home-title">Home Page</h2>
        {data ? (
          <Table
            data={data}
            columnTable={['dialog', 'character']}
            columnUrl={'character'}
          />
        ) : (
          <h2 className="loader">Loading...</h2>
        )}
      </div>
    </>
  );
}
