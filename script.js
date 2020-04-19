$(document).ready(function main(){
    /* Time Element */
    $("#fade").hide(0).delay(1000).fadeIn(1000);
    let updateTime = setInterval(function updateTime() {
            let hourNow = moment().format("hh");
            let minuteNow = moment().format("mm");
            let secondNow = moment().format("ss");
            let dayWNow = moment().format("dddd");
            let dayNow = moment().format("DD");
            let monthYearNow = moment().format("MMMM, YYYY");
            let meridian = moment().format("a");

            hourNow = parseInt(hourNow);
            if (hourNow === 12){
                hourNow -= 12;
            }
            if (meridian === "pm"){
                hourNow += 12;
            }
            let timeNow = hourNow + ":" + minuteNow + ':<span id="sec">' + secondNow; + '</span>'
            $("#time-text").html(timeNow);
            let daySup = "th";

            if (dayNow === "1" || dayNow === "21" || dayNow === "31"){
                daySup = "st"
            } else if (dayNow === "2" || dayNow === "22"){
                daySup = "nd"
            } else if (dayNow === "3" || dayNow === "23"){
                daySup = "rd"
            } else {
                daySup = "th"
            }
            let dateWNow = dayWNow + "," + dayNow + daySup + "," + monthYearNow
            let dateNow = "<span id='dayw'>" + dayWNow + "</span>" + ", " + "<span id='day'>" + dayNow + "</span>" + '<sup>&nbsp;' + daySup + '</sup> <i class="of">of</i> ' + monthYearNow;
            $("#time-date").html(dateNow);
            // console.log("========================================");
            // console.log("DAYW : " + dateWNow);
            // console.log("TIME : " + timeNow);
            // console.log("========================================");
            if (dayWNow == "Sunday"){
              document.getElementById("dayw").style.color = "red";
            }else if (dayWNow == "Monday"){
              document.getElementById("dayw").style.color = "black";
            }else if (dayWNow == "Tuesday"){
              document.getElementById("dayw").style.color = "black";
            }else if (dayWNow == "Wednesday"){
              document.getElementById("dayw").style.color = "black";
            }else if (dayWNow == "Thursday"){
              document.getElementById("dayw").style.color = "black";
            }else if (dayWNow == "Friday"){
              document.getElementById("dayw").style.color = "black";
            }else if (dayWNow == "Saturday"){
              document.getElementById("dayw").style.color = "blue";
            }

            // animation
            minuteDelay = secondNow;
            if (document.getElementById("minuteDelay").style.color == "red"){
              document.getElementById("minuteDelay").style.color = "blue";
              console.log("minuteDelay : " + minuteDelay);
              if (minuteDelay == 1){
                document.getElementById("minute-timer").classList.add('Delay1');
              }else if (minuteDelay == 2){
                document.getElementById("minute-timer").classList.add('Delay2');
              }else if (minuteDelay == 3){
                document.getElementById("minute-timer").classList.add('Delay3');
              }else if (minuteDelay == 4){
                document.getElementById("minute-timer").classList.add('Delay4');
              }else if (minuteDelay == 5){
                document.getElementById("minute-timer").classList.add('Delay5');
              }else if (minuteDelay == 6){
                document.getElementById("minute-timer").classList.add('Delay6');
              }else if (minuteDelay == 7){
                document.getElementById("minute-timer").classList.add('Delay7');
              }else if (minuteDelay == 8){
                document.getElementById("minute-timer").classList.add('Delay8');
              }else if (minuteDelay == 9){
                document.getElementById("minute-timer").classList.add('Delay9');
              }else if (minuteDelay == 10){
                document.getElementById("minute-timer").classList.add('Delay10');
              }else if (minuteDelay == 11){
                document.getElementById("minute-timer").classList.add('Delay11');
              }else if (minuteDelay == 12){
                document.getElementById("minute-timer").classList.add('Delay12');
              }else if (minuteDelay == 13){
                document.getElementById("minute-timer").classList.add('Delay13');
              }else if (minuteDelay == 14){
                document.getElementById("minute-timer").classList.add('Delay14');
              }else if (minuteDelay == 15){
                document.getElementById("minute-timer").classList.add('Delay15');
              }else if (minuteDelay == 16){
                document.getElementById("minute-timer").classList.add('Delay16');
              }else if (minuteDelay == 17){
                document.getElementById("minute-timer").classList.add('Delay17');
              }else if (minuteDelay == 18){
                document.getElementById("minute-timer").classList.add('Delay18');
              }else if (minuteDelay == 19){
                document.getElementById("minute-timer").classList.add('Delay19');
              }else if (minuteDelay == 20){
                document.getElementById("minute-timer").classList.add('Delay20');
              }else if (minuteDelay == 21){
                document.getElementById("minute-timer").classList.add('Delay21');
              }else if (minuteDelay == 22){
                document.getElementById("minute-timer").classList.add('Delay22');
              }else if (minuteDelay == 23){
                document.getElementById("minute-timer").classList.add('Delay23');
              }else if (minuteDelay == 24){
                document.getElementById("minute-timer").classList.add('Delay24');
              }else if (minuteDelay == 25){
                document.getElementById("minute-timer").classList.add('Delay25');
              }else if (minuteDelay == 26){
                document.getElementById("minute-timer").classList.add('Delay26');
              }else if (minuteDelay == 27){
                document.getElementById("minute-timer").classList.add('Delay27');
              }else if (minuteDelay == 28){
                document.getElementById("minute-timer").classList.add('Delay28');
              }else if (minuteDelay == 29){
                document.getElementById("minute-timer").classList.add('Delay29');
              }else if (minuteDelay == 30){
                document.getElementById("minute-timer").classList.add('Delay30');
              }else if (minuteDelay == 31){
                document.getElementById("minute-timer").classList.add('Delay31');
              }else if (minuteDelay == 32){
                document.getElementById("minute-timer").classList.add('Delay32');
              }else if (minuteDelay == 33){
                document.getElementById("minute-timer").classList.add('Delay33');
              }else if (minuteDelay == 34){
                document.getElementById("minute-timer").classList.add('Delay34');
              }else if (minuteDelay == 35){
                document.getElementById("minute-timer").classList.add('Delay35');
              }else if (minuteDelay == 36){
                document.getElementById("minute-timer").classList.add('Delay36');
              }else if (minuteDelay == 37){
                document.getElementById("minute-timer").classList.add('Delay37');
              }else if (minuteDelay == 38){
                document.getElementById("minute-timer").classList.add('Delay38');
              }else if (minuteDelay == 39){
                document.getElementById("minute-timer").classList.add('Delay39');
              }else if (minuteDelay == 40){
                document.getElementById("minute-timer").classList.add('Delay40');
              }else if (minuteDelay == 41){
                document.getElementById("minute-timer").classList.add('Delay41');
              }else if (minuteDelay == 42){
                document.getElementById("minute-timer").classList.add('Delay42');
              }else if (minuteDelay == 43){
                document.getElementById("minute-timer").classList.add('Delay43');
              }else if (minuteDelay == 44){
                document.getElementById("minute-timer").classList.add('Delay44');
              }else if (minuteDelay == 45){
                document.getElementById("minute-timer").classList.add('Delay45');
              }else if (minuteDelay == 46){
                document.getElementById("minute-timer").classList.add('Delay46');
              }else if (minuteDelay == 47){
                document.getElementById("minute-timer").classList.add('Delay47');
              }else if (minuteDelay == 48){
                document.getElementById("minute-timer").classList.add('Delay48');
              }else if (minuteDelay == 49){
                document.getElementById("minute-timer").classList.add('Delay49');
              }else if (minuteDelay == 50){
                document.getElementById("minute-timer").classList.add('Delay50');
              }else if (minuteDelay == 51){
                document.getElementById("minute-timer").classList.add('Delay51');
              }else if (minuteDelay == 52){
                document.getElementById("minute-timer").classList.add('Delay52');
              }else if (minuteDelay == 53){
                document.getElementById("minute-timer").classList.add('Delay53');
              }else if (minuteDelay == 54){
                document.getElementById("minute-timer").classList.add('Delay54');
              }else if (minuteDelay == 55){
                document.getElementById("minute-timer").classList.add('Delay55');
              }else if (minuteDelay == 56){
                document.getElementById("minute-timer").classList.add('Delay56');
              }else if (minuteDelay == 57){
                document.getElementById("minute-timer").classList.add('Delay57');
              }else if (minuteDelay == 58){
                document.getElementById("minute-timer").classList.add('Delay58');
              }else if (minuteDelay == 59){
                document.getElementById("minute-timer").classList.add('Delay59');
              }else if (minuteDelay == 60){
                document.getElementById("minute-timer").classList.add('Delay60');
              }
            }

            var hourminuteNow = minuteNow * 60
            var hoursecondNow = secondNow * 1
            var hourDelay = hourminuteNow + hoursecondNow;
            if (document.getElementById("hourDelay").style.color == "red"){
              document.getElementById("hourDelay").style.color = "blue";
              console.log("hourDelay : " + hourDelay);
              document.getElementById("hour-timer").innerHTML = '<div class="hour-timer" id="hour-timer" style="background-color: black;height: 12px;animation-name: hour-timer;animation-duration: 3600s;animation-timing-function: linear;animation-delay: -' + hourDelay + 's;animation-iteration-count: infinite;animation-direction: normal;"></div>';
            }

            var dayhourNow = hourNow * 3600
            var dayminuteNow = minuteNow * 60
            var daysecondNow = secondNow * 1
            var dayDelay = dayhourNow + hourminuteNow + hoursecondNow;
            if (document.getElementById("dayDelay").style.color == "red"){
              document.getElementById("dayDelay").style.color = "blue";
              console.log("dayDelay : " + dayDelay);
              document.getElementById("day-timer").innerHTML = '<div class="day-timer" id="day-timer" style="background-color: black;height: 16px;animation-name: day-timer;animation-duration: 86400s;animation-timing-function: linear;animation-delay: -' + dayDelay + 's;animation-iteration-count: infinite;animation-direction: normal;"></div>';
            }
        }, 1000
    );

    /* Background Scripts */
    // ↓ ×
    const screenWidth = screen.width;
    let imgSize = "";
    if (screenWidth <= 1920){
        imgSize = "large"
    } else if (screenWidth > 1920){
        imgSize = "4k"
    } else {
        imgSize = "large"
    }
    // ↑ ×

    let imgId = Math.floor((Math.random() * 26) + 1);
    let url = `myimages/${imgId}`;
    console.log("BACKGROUND IMAGE USED : " + url);
    $(".background").css(`background-image`, `url("${url}.jpg")`);
    document.getElementById("wpnum").style.datatext = imgId;
    document.getElementById("wpcurnum").innerHTML = imgId;

    let userCity = geoplugin_city();
    console.log("USER CITY DETECTED : " + userCity);

    let userCountry = geoplugin_countryName();
    console.log("USER COUNTRY DETECTED : " + userCountry);

    /* Weather Element */
    let updateWeather = function (){
        Weather.setApiKey("77f2d3977d531530ec5e3788c6473c04");
        let currentTemp = 0;
        let currentCond = "";
        let weatherCity = userCity;
        let weatherCountry = userCountry;
        if (weatherCountry) {
            weatherCountry = `, ${weatherCountry}`
        }
        Weather.getCurrent(weatherCity, function (current) {
            currentTemp = Math.round(Weather.kelvinToCelsius(current.temperature()) * 10) / 10;

            currentCond = current.conditions().replace(/\b\w/g, l => l.toUpperCase());
            console.log("WEATHER : " + currentTemp, currentCond);
            $(".weather").html(`<p><span id="weather-temp">${currentTemp}&nbsp;</span><b class=\"small\">&deg;C - <span id="weather">${currentCond}</span></b><hr id=\"linebreak\"><p class=\"city\">${weatherCity}${weatherCountry}</p></p>`);

            if (currentTemp <= 4){
              document.getElementById("weather-temp").style.color = "rgba(0, 100, 255, 1)";
            }else if (4 < currentTemp&&currentTemp <= 6){
              document.getElementById("weather-temp").style.color = "rgba(15, 100, 240, 1)";
            }else if (6 < currentTemp&&currentTemp <= 8){
              document.getElementById("weather-temp").style.color = "rgba(30, 100, 225, 1)";
            }else if (8 < currentTemp&&currentTemp <= 10){
              document.getElementById("weather-temp").style.color = "rgba(45, 100, 210, 1)";
            }else if (10 < currentTemp&&currentTemp <= 12){
              document.getElementById("weather-temp").style.color = "rgba(60, 100, 195, 1)";
            }else if (12 < currentTemp&&currentTemp <= 14){
              document.getElementById("weather-temp").style.color = "rgba(75, 100, 180, 1)";
            }else if (14 < currentTemp&&currentTemp <= 16){
              document.getElementById("weather-temp").style.color = "rgba(90, 100, 165, 1)";
            }else if (16 < currentTemp&&currentTemp <= 18){
              document.getElementById("weather-temp").style.color = "rgba(105, 100, 150, 1)";
            }else if (18 < currentTemp&&currentTemp <= 20){
              document.getElementById("weather-temp").style.color = "rgba(120, 100, 135, 1)";
            }else if (20 < currentTemp&&currentTemp <= 22){
              document.getElementById("weather-temp").style.color = "rgba(135, 100, 120, 1)";
            }else if (22 < currentTemp&&currentTemp <= 24){
              document.getElementById("weather-temp").style.color = "rgba(150, 100, 105, 1)";
            }else if (24 < currentTemp&&currentTemp <= 26){
              document.getElementById("weather-temp").style.color = "rgba(165, 100, 90, 1)";
            }else if (26 < currentTemp&&currentTemp <= 28){
              document.getElementById("weather-temp").style.color = "rgba(180, 100, 75, 1)";
            }else if (28 < currentTemp&&currentTemp <= 30){
              document.getElementById("weather-temp").style.color = "rgba(195, 100, 60, 1)";
            }else if (30 < currentTemp&&currentTemp <= 32){
              document.getElementById("weather-temp").style.color = "rgba(210, 100, 45, 1)";
            }else if (32 < currentTemp&&currentTemp <= 34){
              document.getElementById("weather-temp").style.color = "rgba(225, 100, 30, 1)";
            }else if (34 < currentTemp&&currentTemp <= 36){
              document.getElementById("weather-temp").style.color = "rgba(240, 100, 15, 1)";
            }else if (36 <=currentTemp){
              document.getElementById("weather-temp").style.color = "rgba(255, 100, 0, 1)";
            }

            if (currentCond == "Clear Sky"){
              document.getElementById("weather").style.color = "#3ff9f9";
              document.getElementById("wpweather").style.datatext = "1";
            }else if (currentCond == "Few Clouds"){
              document.getElementById("weather").style.color = "#99f7db";
              document.getElementById("wpweather").style.datatext = "2";
            }else if (currentCond == "Scattered Clouds"){
              document.getElementById("weather").style.color = "#dafff4";
              document.getElementById("wpweather").style.datatext = "3";
            }else if (currentCond == "Broken Clouds"){
              document.getElementById("weather").style.color = "#e6fff8";
              document.getElementById("wpweather").style.datatext = "4";
            }else if (currentCond == "Overcast Clouds"){
              document.getElementById("weather").style.color = "#edf9f6";
              document.getElementById("wpweather").style.datatext = "5";
            }else if (currentCond == "Shower Rain"){
              document.getElementById("weather").style.color = "#b4f1f1";
              document.getElementById("wpweather").style.datatext = "6";
            }else if (currentCond == "Rain"){
              document.getElementById("weather").style.color = "#6ce7e7";
              document.getElementById("wpweather").style.datatext = "7";
            }else if (currentCond == "Thunderstorm"){
              document.getElementById("weather").style.color = "#f1f121";
              document.getElementById("wpweather").style.datatext = "8";
            }else if (currentCond == "Snow"){
              document.getElementById("weather").style.color = "white";
              document.getElementById("wpweather").style.datatext = "9";
            }else if (currentCond == "Mist"){
              document.getElementById("weather").style.color = "#d4dbe3";
              document.getElementById("wpweather").style.datatext = "10";
            }else{
              document.getElementById("weather").style.color = "red";
              document.getElementById("wpweather").style.datatext = "1";
            }
            console.log(currentCond);

            // Light Rain

            if (document.getElementById("wpweather").style.datatext == "test") {
              let imgId = Math.floor((Math.random() * 26) + 1);
              let url = `myimages/${imgId}`;
              console.log("BACKGROUND IMAGE USED : " + url);
              $(".background").css(`background-image`, `url("${url}.jpg")`);
              document.getElementById("wpnum").style.datatext = imgId;
              document.getElementById("wpcurnum").innerHTML = imgId;

              let userCity = geoplugin_city();
              console.log("USER CITY DETECTED : " + userCity);

              let userCountry = geoplugin_countryName();
              console.log("USER COUNTRY DETECTED : " + userCountry);
            });
            }
    };
    updateWeather();
    let weather = setInterval(function (){
        updateWeather()
    }, 60000);

    /* Parallax */
    const areaSelector = ".main-area";
    const windowHeight = $(areaSelector).height();
    const windowWidth = $(areaSelector).width();
    let windowPaddingHeight = windowHeight * 0.03;
    let windowPaddingWidth = windowWidth * 0.03;
    $(areaSelector).on("mousemove", function(event){
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let mouseXPercentage = mouseX / windowWidth;
        let mouseYPercentage = mouseY / windowHeight;
        let mouseXOffset = mouseXPercentage - 0.5;
        let mouseYOffset = mouseYPercentage - 0.5;
        let windowPaddingWidthLeft = windowPaddingWidth + ((mouseXOffset) * windowPaddingWidth / 1.5);
        let windowPaddingWidthRight = windowPaddingWidth - ((mouseXOffset) * windowPaddingWidth / 1.5);
        let windowPaddingHeightTop = windowPaddingHeight + ((mouseYOffset) * windowPaddingHeight / 1.5);
        let windowPaddingHeightBottom = windowPaddingHeight - ((mouseYOffset) * windowPaddingHeight / 1.5);
        $(".parallax").css("padding", `${windowPaddingHeightTop}px ${windowPaddingWidthRight}px ${windowPaddingHeightBottom}px ${windowPaddingWidthLeft}px`);
    })
});
