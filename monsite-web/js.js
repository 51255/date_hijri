function convertDate() {
  var dateInput = document.getElementById("date-input").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("result").innerHTML = "La date hijri correspondante est : " + this.responseText;
    }
  };
  xhttp.open("GET", "convert_date.py?date=" + dateInput, true);
  xhttp.send();
}
