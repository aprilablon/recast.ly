class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0], 
      options: {
        query: 'rick and morty',
      }
    };
  }

  loadYouTubeData(youTubeData) {
    this.setState({
      videos: youTubeData, 
      currentVideo: youTubeData[0]
    });
  }
  
  componentDidMount() {
    this.props.searchYouTube(this.state.options, this.loadYouTubeData.bind(this));
  }

  onClick(event) {
    var index;
    for (var i = 0; i < this.state.videos.length; i++) {
      if (this.state.videos[i].etag === event.target.id) {
        index = i;
      }
    }
    this.setState({
      currentVideo: this.state.videos[index]
    });
  }

  userSearch(query) {
    this.setState({
      options: {
        query: query
      }
    });
    this.props.searchYouTube(this.state.options, this.loadYouTubeData.bind(this));
  }

  render() {
    return (
      <div>
        <Nav userSearch={this.userSearch.bind(this)} />
        <div className="col-md-7"> 
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList 
            videos={this.state.videos} 
            onClick={this.onClick.bind(this)} 
          />
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
