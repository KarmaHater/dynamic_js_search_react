var App = React.createClass({
  getInitialState: function() {
    return {
      dataLoaded: false
    };
  },
  loadData: function() {
    $.ajax({
      url: "data.json"
    })
    .success(function(data) {
      this.people = data
      this.setState({dataLoaded: true})
    }.bind(this))
    .error(function( xhr, error ) {
      console.log(error);
    }.bind(this));
  },
  displayViews: function() {
    return (
      <div>
        <Search />
        < PersonList data={this.people} />
      </div>
    );
  },
  render: function() {
    this.loadData()
    if (this.state.dataLoaded) {
      return this.displayViews()
    } else {
      return (
        <div/>
      )
    }

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
          <div className="content">
            <h2>{this.props.name}</h2>
            <p>{this.props.address}</p>
          </div>
        </li>
      </div>
    );
  }

});

React.render(<App />, document.body)

