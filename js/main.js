 
  var channelID = "UCH-uliZV9bOZZ_S7WtUMNxg"; var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id="; $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) { var link = data.items[0].link; var id = link.substr(link.indexOf("=")+1); $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0"); });// Set the date we're counting down to

// Set the date we're counting down to

var countDownDate = new Date("June 25, 2023 16:00:00").getTime();

// Update the count down every 1 second

var x = setInterval(function() {

  // Get today's date and time

  var now = new Date().getTime();

  // Find the distance between now and the count down date

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "

  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text

  if (distance < 0) {

    clearInterval(x);

    document.getElementById("demo").innerHTML = "EXPIRED";

  }

}, 1000);
function googleTranslateElementInit() {

  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');

}
function show(shown, hidden) { document.getElementById(shown).style.display='block'; document.getElementById(hidden).style.display='none'; return false; }
const button = document.querySelectorAll('.btn-minecraft')
    button.forEach(btn => {
      btn.addEventListener('mouseleave', function (){
        btn.blur()
      })
    })
