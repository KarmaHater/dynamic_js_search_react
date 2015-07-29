var DATA = [
  { "name": "Andra Lally",
    "address" : "some bio about this person above. Something interesting.",
    "img": "http://lorempixel.com/500/200/fashion/1"
  },
  { "name": "Sam Pills",
    "address" : "some bio about this person above. Something interesting.",
    "img": "http://lorempixel.com/500/200/fashion/2"
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

React.render(<App />, document.body)

