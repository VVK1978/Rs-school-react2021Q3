import React from 'react';
import { Link } from 'react-router-dom';

export default function Table(props) {
  const { columnTable } = props;
  const { columnUrl } = props;
  return (
    <div className="table-content">
      <table className="table">
        <thead>
          <tr>
            {columnTable.map((el, ind) => (
              <th scope="col" key={`${el}-${ind}`}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((rowElement, ind) => (
            <tr key={`${rowElement}-${ind}`}>
              {columnTable.map((rowItem) => (
                <td scope="row" key={`${rowItem}-${ind}`}>
                  {rowItem !== columnUrl ? (
                    rowElement[rowItem]
                  ) : (
                    <Link
                      to={{
                        pathname: `/details/${rowElement[rowItem]}`,
                      }}
                      title="Click for details..."
                    >
                      {rowElement[rowItem]}
                    </Link>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
