class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    }
  }

  onClick(event) {
    // grab title
    // search exampleVideoData for title
    var index;
    for (var i = 0; i < window.exampleVideoData.length; i++) {
      if (window.exampleVideoData[i].etag === event.target.id) {
        index = i;
      }
    }
    // set current song to clicked song index
    this.setState({
      currentVideo: window.exampleVideoData[index]  
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7"> 
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} onClick={this.onClick.bind(this)} />
        </div>
      </div>
    );
  }

};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
