import React from 'react';

class YearFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: []
        };
      }

    renderList(album) {
        const price = album['im:price'].attributes.amount;
        var lessThanFive = 0;
        var lessThanTen = 0;
        var lessThanFifteen = 0;
        var lessThanTwenty = 0;

        if (price < 5) {
            lessThanFive += 1;
        } else if (price > 5 && price < 10) {
            lessThanTen += 1;
        } else  if (price > 10 && price < 15) {
            lessThanFifteen += 1;
        } else  if (price > 15 && price < 20) {
            lessThanTwenty += 1;
        }

        console.log(lessThanFifteen)

        return (
            <label key={album.id.attributes['im:id']}>
                <input type="checkbox" />{album['im:price'].label} (23)
            </label>
        )
    };

    render() {
        return (
            <div className="filter container jumbotron">
                <p>Year</p>
               

                {this.props.feed.map(album =>
                    this.renderList(album)
                )}
            </div>
        )
    }

}

export default YearFilter;