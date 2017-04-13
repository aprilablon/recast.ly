var searchYouTube = ({key, query, max=5}, callback) => {
  $.ajax({
    type: 'GET',
    part: 'snippet',
    videoEmbeddable: true,
    contentType: 'application/json; charset=utf-8',
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&maxResults=' + max + '&key=' + key + '&type=video&videoEmbeddable=true',
    success: function(response) {
      console.log('Working fine! Damn fine. :)');
      callback(response.items);
    },
    error: function() {
      console.log('Bad resquest :(');
    }
  });
};

window.searchYouTube = searchYouTube;
