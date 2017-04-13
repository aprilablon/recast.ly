class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0], 
      options: {
        key: window.YOUTUBE_API_KEY,
        query: '',
        max: 5
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
    // iterate over response.items from searchYoutube
    for (var i = 0; i < this.state.videos.length; i++) {
      if (this.state.videos[i].etag === event.target.id) {
        index = i;
      }
    }
    // set current song to clicked song index
    this.setState({
      currentVideo: this.state.videos[index]
    });
  }


  // define click handler for search
    // this should call searchYoutube with the input query from user
  // pass this function to Nav!?

  render() {
    return (
      <div>
        <Nav searchYouTube={window.searchYouTube}/>
        <div className="col-md-7"> 
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} onClick={this.onClick.bind(this)} />
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
