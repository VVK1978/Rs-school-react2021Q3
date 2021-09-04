import React from 'react';
import Limit from '../../../components/ui/limit/Limit';
import SortDirection from '../../../components/ui/sort-direction/SortDirection';
import Sort from '../../../components/ui/sort/Sort';

export default function Character(props) {
  const { characters } = props;
  return (
    <>
      {characters.length === 0 ? (
        <h2 className="title-not-found">
          Not found<br></br>
          Try again...
        </h2>
      ) : (
        <div className="character-container">
          <div className="character-limit-sort-container">
            <Limit options={[10, 20, 50, 100]} />
            <Sort options={['Name', 'Gender', 'Race']} />
            <SortDirection />
          </div>
          <div className="character-content">
            <div className="character-head">
              <h3 className="head-item small">Name</h3>
              <h3 className="head-item small">Gender</h3>
              <h3 className="head-item small">Race</h3>
              <h3 className="head-item middle">Birth</h3>
              <h3 className="head-item middle">Death</h3>
              <h3 className="head-item">WikiUrl</h3>
            </div>

            {characters.map((item, ind) => (
              <div className="character-info" key={ind}>
                <h3 className="character-item small">{item.name}</h3>
                <h3 className="character-item small">{item.gender}</h3>
                <h3 className="character-item small">{item.race}</h3>
                <h3 className="character-item middle">{item.birth}</h3>
                <h3 className="character-item middle">{item.death}</h3>
                <h3 className="character-item">{item.wikiUrl}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
