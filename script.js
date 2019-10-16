var ul = document.getElementsByTagName("ul")[0];
var data;

getData();

async function getData() {
  var apiKey = "981074e132db4680991359b7db4944b5";
  var url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=981074e132db4680991359b7db4944b5";
  var request = new Request(url);
  var response = await fetch(request);
  var responseBody = await response.json();

  data = responseBody.articles;
  addItemsToPage();
}

function addItemsToPage() {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];

    // Create list item
    var li = document.createElement("li");
    li.className = "news-item";
    li.id = "item" + i;

    // Create Network h5
    var network = document.createElement("div");
    network.className = "news-item__network";
    network.innerText = item.author;
    li.appendChild(network);

    // Create Div for Details (h5)
    var detailsDiv = document.createElement("div");
    detailsDiv.className = "news-item__details";
    li.appendChild(detailsDiv);

    // Add image to div detail
    var img = document.createElement("img");
    img.src = item.urlToImage;
    img.className = "news-item__image";
    detailsDiv.appendChild(img);

    // Create Div for text
    var textDiv = document.createElement("div");
    textDiv.className = "news-item__text";
    detailsDiv.appendChild(textDiv);

    // Create Date container (p)
    var date = document.createElement("p");
    date.innerText = item.publishedAt;
    date.className = "news-item__date";
    textDiv.append(date);

    // Create Title container (p)
    var title = document.createElement("p");
    title.innerText = item.title;
    textDiv.append(title);
    //create Time

    // Add list item to list
    ul.appendChild(li);
  }
}
//get date hours minutes
function dateTime() {
  var today = new Date();
  var date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var amOrPm;
  //convert 24 hour format to 12 hour
  if (hours >= 12) {
    hours = hours - 12;
    amOrPm = "Pm";
  } else {
    amOrPm = "Am";
  }
  //added 0 to hour minutes and seconds
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  //format hours date and time to USA FORMAT
  var time = hours + ":" + minutes + ":" + seconds;

  var currentTime = document.getElementById("currentTime");
  var currentDate = document.getElementById("currentDate");
  currentDate.innerText = date;
  var currentTime = document.getElementById("currentTime");
  currentTime.innerText = time;
}
setInterval(dateTime, 1000);

var myDate = new Date();
var hrs = myDate.getHours();

// display good morning,afternoon and good evening
var greet;

if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

document.getElementById("CurrentMessage").innerHTML = "<b>" + greet;
"<b>" + greet + "</b> and welcome to News Feed!";