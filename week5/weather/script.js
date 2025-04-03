function checkWeather() {
  let myTemp = document.querySelector("#myTemp");
  // google search for the element whose id is myTemp
  console.log(myTemp);
  let temp = myTemp.value;
  console.log("temp value is", temp);

  if (temp < 10) {
    console.log("it is freezing");
  } else if (temp >= 10 && temp < 20) {
    console.log("it is a pleasant weather");
  } else if (temp >= 20 && temp < 35) {
    console.log("it is nice and sunny");
  } else if (temp >= 35) {
    console.log("it is burning hot");
  }
}
