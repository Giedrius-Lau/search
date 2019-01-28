import React, { Component } from 'react';

import PriceFilter from './filters/PriceFilter';
import YearFilter from './filters/YearFilter';
import ListContainer from './list/ListContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        feed: []
    };
  }
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <PriceFilter />
              <YearFilter feed={this.state.feed}/>
            </div>
            <div className="col-lg-10">
              <ListContainer feed={this.state.feed}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount () {
    this.fetchFunction();
  }

  fetchFunction = () => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

    fetch(proxyUrl + targetUrl, {
       
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(response => {
          console.log(response.feed.entry)
            this.setState({
              feed: response.feed.entry,
              prices: response.feed.entry
            })
        })
        .catch(err => {
            console.log(err)
        });
  }
}

export default App;
