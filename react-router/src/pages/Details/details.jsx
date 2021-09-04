import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/ui/navbar/Navbar.jsx';
import ApiService from '../../API/ApiService.jsx';
import Table from '../../components/ui/table/table.jsx';

export default function Details() {
  const params = useParams();
  const [data, setData] = useState(null);
  const request = `/character/${params.id}`;

  const getAllDataById = async () => {
    const response = await ApiService.getAll(request);
    setData(response);
  };
  useEffect(() => {
    getAllDataById();
  }, []);
  return (
    <>
      <Navbar />
      <div className="details-content">
        <h2 className="details-title">Details Page</h2>
        {data !== null ? (
          <Table
            data={data}
            columnTable={[
              'height',
              'race',
              'gender',
              'birth',
              'spouse',
              'death',
              'realm',
              'hair',
              'name',
              'wikiUrl',
            ]}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
}
