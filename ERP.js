
function countDownTimer(){

// Set the date we're counting down to
var countDownDate = new Date("Jan 22, 2023 15:37:25").getTime();

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
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + " days : " + hours + " hours : "
  + minutes + " min : " + seconds + " sec";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
}

function submitForm()
{
  var count= 0;
    var frm = document.getElementsByName("register-form")[0];
  if(count == 0)
  {
    if(frm[0].value == '' || frm[1].value == '' || frm[2].value == '' || frm[3].value == '')
    {
      document.getElementById("error").innerHTML = "Please fill the required details!!!";
    }
    else    
    {
      count = 1; 
      document.getElementById("success").innerHTML = "You have been successfully registered";
      document.getElementById("error").innerHTML = "";
    } 
  }
  if(count == 1)
  {
     var x = setTimeout(function(){
      frm.reset();
      document.getElementById("success").innerHTML = "";
      },5000);
  }
  return false; 
}


function myFunction(){
            window.location.href = "#register";
          }
