var DATA = [
  { "name": "Andra Lally",
    "img": "http://lorempixel.com/500/200/fashion/1",
    "address" : "some bio about this person above. Something interesting."
  },
  { "name": "Sam Pills",
    "img": "http://lorempixel.com/500/200/fashion/2",
    "address" : "some bio about this person above. Something interesting."
  },
  { "name": "Mark Smith",
    "address" : "some bio about this person above. Something interesting.",
    "img": "http://lorempixel.com/500/200/fashion/3"
  },
  { "name": "Harry Lulls",
    "address" : "some bio about this person above. Something interesting.",
    "img": "http://lorempixel.com/500/200/fashion/4"
  },
  { "name": "Heth Breg",
    "address" : "some bio about this person above. Something interesting.",
    "img": "http://lorempixel.com/500/200/fashion/5"
  },
  { "name": "Kathy Ponder",
    "address" : "some bio about this person above. Something interesting.",
    "img": "http://lorempixel.com/500/200/fashion/6"
  }
]

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Search />
        < PersonList data={DATA} />
      </div>
    );
  }
});

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <article id="searcharea">
          <label for="search">Search for User</label>
          <input type="text" name="search" id="search" />
        </article>
      </div>
    );
  }
});

var PersonList = React.createClass({
  render: function() {
    var people = this.props.data.map(function(person){
      return <Person name={person.name} img={person.img} address={person.address}/>
    })
    return (
      <div>
        <article id="update">
          <ul id="search-results">
             {people}
          </ul>
        </article>
      </div>
    );
  }
});

var Person = React.createClass({

  render: function() {
    return (
      <div>
        <li className="entry">
        <div className="image-box">
          <img src={this.props.img} />
        </div>
          <h2>{this.props.name}</h2>
          <div className="body">
            {this.props.address}
          </div>
        </li>
      </div>
    );
  }

});

React.render(<App />, document.body)

