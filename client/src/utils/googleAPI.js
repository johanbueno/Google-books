import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&callback=handleResponse";

handleResponse(response);{
    for (var i = 0; i < response.items.length; i++) {
      var item = response.items[i];
      // in production code, item.text should have the HTML entities escaped.
      document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title
      console.log(response)
    };
}

export default {
  search: function(query) {
    return axios.get(BASEURL + query + handleResponse);
  }
}