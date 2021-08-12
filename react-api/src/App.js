import React, { Component } from 'react';
import './sass/style.scss';
import Search from './components/search/search.jsx';
// import Btn from './components/button/button.jsx';
import dataBtn from './data/data-btn.jsx';

class App extends Component {
  consoleLog(data) {
    console.log('call back is working!)', data);
    return this;
  }

  render() {
    this.h1 = <h1>React.API</h1>;
    this.dataBtn = dataBtn;

    return (
      <>
        <div className="container">
          {this.h1}
          <Search />
          {/* <div className="container-btns">
            {this.dataBtn.map((el, ind) => (
              <Btn
                data={el}
                key={ind}
                consoleLog={(event) => this.consoleLog(event)}
              />
            ))}
          </div> */}
        </div>
      </>
    );
  }
}

export default App;
