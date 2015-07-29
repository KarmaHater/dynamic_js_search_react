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
      this.data = data
      this.setState({dataLoaded: true})
    }.bind(this))
    .error(function( xhr, error ) {
      console.log(error);
    }.bind(this));
  },
  displayViews: function() {
    return (
      <div>
        < PersonList data={this.data} />
      </div>
    );
  },
  render: function() {
    this.loadData()
    if (this.state.dataLoaded) {
      return this.displayViews()
      this.setState({dataLoaded: false})
    } else {
      return (
        <div/>
      )
    }
  }
});


var PersonList = React.createClass({
  getInitialState: function(){
    return { searchString: '' };
  },
  handleChange: function(e) {
    this.setState({searchString:e.target.value});
  },
  render: function() {
    var results = this.props.data,
      searchString = this.state.searchString.trim().toLowerCase();
      if(searchString.length > 0) {
        results = results.filter(function(person) {
          return person.name.toLowerCase().match( searchString );
        });
      }
    return (
      <div>
        <article id="searcharea">
          <label for="search">Search for User</label>
          <input value={this.state.searchString} onChange={this.handleChange} type="text" name="search" id="search" />
        </article>
        <article id="update">
          <ul id="search-results">
             {
               results.map(function(person){
                  return <Person name={person.name} img={person.img} address={person.address}/>
              })
            }
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

