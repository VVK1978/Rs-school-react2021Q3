import React from 'react';
import dataTable from '../../data/data-table.jsx';

export default function Table(props) {
  let tableData = [];
  if (props.cardData.length !== 0) {
    tableData = Object.keys(props.cardData[0]).slice(1);
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {tableData !== undefined
              ? dataTable[props.cat].map((el, ind) => (
                  <th scope="col" key={`${el}-${ind}`}>
                    {el}
                  </th>
                ))
              : ''}
          </tr>
        </thead>
        <tbody>
          {props.cardData.map((el, ind) => (
            <tr key={`${el}-${ind}`}>
              {tableData.map((element) => (
                <td scope="row" key={`${element}-${ind}`}>
                  {/* {console.log(el)} */}
                  {el[element] !== 'NaN' ? el[element] : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
