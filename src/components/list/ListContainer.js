import React from 'react';

class ListContainer extends React.Component {

    renderList(album) {
        return (
                <li  key={album.id.attributes['im:id']} className="list__item">
                    <img src={album['im:image'][0].label} alt="" />
                    <p className="title">{album.title.label}</p>
                    <p className="price">{album['im:price'].label}</p>
                </li>
       );
    }

    render() {
        return (
            <div className="container jumbotron">
                <ul className="list">
                   
                    {this.props.feed.map(album =>
                        this.renderList(album)
                    )}
                </ul>
            </div>
        )
    }
}

export default ListContainer;