((function(long_url,callback){
	var theUrl = prompt("Please enter url.");
    bi = new URL("https://api-ssl.bitly.com/v3/shorten?");
    var params = [
        "login=hingobway",
        "domain=j.mp",
        "apiKey=R_8c4b30e6adaf4b5789fd75a42bc98798",
        "longUrl="+ encodeURIComponent(theUrl)
    ]
    bi.search = "?"+params.join('&')
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function () { 
       if (xhr.readyState === 4) {
        if (xhr.status === 200) {
         var res = JSON.parse(xhr.responseText);
         callback(res["data"]["url"])
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
    xhr.open("GET",bi.toString());
    xhr.send(null)

})(location.href,function(a){prompt("", a);})