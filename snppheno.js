$(document).ready(function() {  
    
    
  var fetch = function(query) {
    return $.ajax({
      url: 'http://rest.ensembl.org/',
      data: {
        action: 'query',
        list: 'search',
        srsearch: query,
        format: 'json',
        section: '0'
      },
      dataType: 'jsonp',
    });
}

    /*
  function render(json) {
    var html = "";

    json.forEach(function(val) {
      var keys = Object.keys(val);
      html += "<div class = 'hit'>";
      var url = "http://en.wikipedia.org/wiki/" + val.title;
      url = encodeURI(url);
      html += "<a href='" + url + "' target='_blank'>";
      html += "<strong>" + val.title + "</strong></a><br>";
      html += "<p>" + val.snippet + "</p>" + "<br>";
      html += "</div><br>";

    });
    $("#resultsbox").show();
    $("#resultsbox").html(html);
  }
*/
    
  $("#input").on("submit", function(event) {
    
    //console.log($("#inputbox").val());
      
    //event.preventDefault();      
    var query = $("#inputbox").val(); 
    fetch(query);  
    
      /*
    fetch(query).done(function(data) {
      render(data.query.search);
    });
    */
      

      
  });

});