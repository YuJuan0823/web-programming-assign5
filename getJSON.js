var skycons = new Skycons();
  skycons.play();

//taipei
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taipei%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    	function(data){
    		console.log(data);
    		var currentTemp = data.query.results.channel.item.condition.temp;
    		$(".temperature").text(Math.round((currentTemp-32)*5/9));
    		$("#taipei").append(Math.round((currentTemp-32)*5/9));


    		var date = data.query.results.channel.item.forecast[0].date;
    		$(".date").text(date);

    		var date2 = data.query.results.channel.item.forecast[1].date;
    		$("#date2").text(date2);

    		var date3 = data.query.results.channel.item.forecast[2].date;
    		$("#date3").text(date3);

    		var date4 = data.query.results.channel.item.forecast[3].date;
    		$("#date4").text(date4);

    		var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


    		var temp2_low = data.query.results.channel.item.forecast[1].low;
    		var temp2_high = data.query.results.channel.item.forecast[1].high;
    		var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
    		$("#temp2").text(temp2);

    		var temp3_low = data.query.results.channel.item.forecast[2].low;
    		var temp3_high = data.query.results.channel.item.forecast[2].high;
    		var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
    		$("#temp3").text(temp3);

    		var temp4_low = data.query.results.channel.item.forecast[3].low;
    		var temp4_high = data.query.results.channel.item.forecast[3].high;
    		var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
    		$("#temp4").text(temp4);


    	});

$('#btn1').on('click', function(){
    $("#loca").text("台北市");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taipei%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            //1.today temp
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));

            //2.get date
            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);

            //3.get forecast & 4.set skycon
            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather); 

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }

            //5.get future temp
            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});

//new-taipei
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22new-taipei%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#new-taipei").append(Math.round((currentTemp-32)*5/9));
});

$('#btn2').on('click', function(){
    $("#loca").text("新北市");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22new-taipei%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);

            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});

//taichung
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taichung%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#taichung").append(Math.round((currentTemp-32)*5/9));
});

$('#btn3').on('click', function(){
    $("#loca").text("台中市");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taichung%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }

            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//tainan
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22tainan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#tainan").append(Math.round((currentTemp-32)*5/9));
});

$('#btn4').on('click', function(){
    $("#loca").text("台南市");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22tainan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }

            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//kaohsiung
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kaohsiung%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#kaohsiung").append(Math.round((currentTemp-32)*5/9));
});

$('#btn5').on('click', function(){
    $("#loca").text("高雄市");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kaohsiung%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }

            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//keelung
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22keelung%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#keelung").append(Math.round((currentTemp-32)*5/9));
});

$('#btn6').on('click', function(){
    $("#loca").text("基隆市");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22keelung%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//taoyuan
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taoyuan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#taoyuan").append(Math.round((currentTemp-32)*5/9));
});

$('#btn7').on('click', function(){
    $("#loca").text("桃園市");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taoyuan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//hsinchu-city
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22hsinchu-city%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#hsinchu-city").append(Math.round((currentTemp-32)*5/9));
});

$('#btn8').on('click', function(){
    $("#loca").text("新竹市");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22hsinchu-city%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//hsinchu-county
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22hsinchu-county%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#hsinchu-county").append(Math.round((currentTemp-32)*5/9));
});

$('#btn9').on('click', function(){
    $("#loca").text("新竹縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22hsinchu-county%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//miaoli
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22miaoli%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#miaoli").append(Math.round((currentTemp-32)*5/9));
});

$('#btn10').on('click', function(){
    $("#loca").text("苗栗縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22miaoli%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//changhua
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22changhua%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#changhua").append(Math.round((currentTemp-32)*5/9));
});

$('#btn11').on('click', function(){
    $("#loca").text("彰化縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22changhua%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//nantou
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nantou%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#nantou").append(Math.round((currentTemp-32)*5/9));
});

$('#btn12').on('click', function(){
    $("#loca").text("南投縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nantou%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }

            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//yunlin
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22yunlin%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#yunlin").append(Math.round((currentTemp-32)*5/9));
});

$('#btn13').on('click', function(){
    $("#loca").text("雲林縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22yunlin%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }

            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//chiayi-city
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chiayi-city%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#chiayi-city").append(Math.round((currentTemp-32)*5/9));
});

$('#btn14').on('click', function(){
    $("#loca").text("嘉義市");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chiayi-city%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }

            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//chiayi-county
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chiayi-county%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#chiayi-county").append(Math.round((currentTemp-32)*5/9));
});

$('#btn15').on('click', function(){
    $("#loca").text("嘉義縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chiayi-county22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }

            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//pingtung
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22pingtung%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#pingtung").append(Math.round((currentTemp-32)*5/9));
});

$('#btn16').on('click', function(){
    $("#loca").text("屏東縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22pingtung%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//yilan
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22yilan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#yilan").append(Math.round((currentTemp-32)*5/9));
});

$('#btn17').on('click', function(){
    $("#loca").text("宜蘭縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22yilan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//hualien
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22hualien%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#hualien").append(Math.round((currentTemp-32)*5/9));
});

$('#btn18').on('click', function(){
    $("#loca").text("花蓮縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22hualien%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//taitung
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taitung%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#taitung").append(Math.round((currentTemp-32)*5/9));
});

$('#btn19').on('click', function(){
    $("#loca").text("台東縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taitung%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }

            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//penghu
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22penghu%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#penghu").append(Math.round((currentTemp-32)*5/9));
});

$('#btn20').on('click', function(){
    $("#loca").text("澎湖縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22penghu%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//kinmen
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kinmen%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#kinmen").append(Math.round((currentTemp-32)*5/9));
});

$('#btn21').on('click', function(){
    $("#loca").text("金門縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kinmen%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});
//lienchiang
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22lienchiang%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data){
    var currentTemp = data.query.results.channel.item.condition.temp;
    $("#lienchiang").append(Math.round((currentTemp-32)*5/9));
});

$('#btn22').on('click', function(){
    $("#loca").text("連江縣");
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22lienchiang%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((currentTemp-32)*5/9));


            var date = data.query.results.channel.item.forecast[0].date;
            $(".date").text(date);

            var date2 = data.query.results.channel.item.forecast[1].date;
            $("#date2").text(date2);

            var date3 = data.query.results.channel.item.forecast[2].date;
            $("#date3").text(date3);

            var date4 = data.query.results.channel.item.forecast[3].date;
            $("#date4").text(date4);



            var weather = data.query.results.channel.item.forecast[0].text;
            $(".weather").text(weather);

            if(weather == "Cloudy"){
                skycons.set("today", Skycons.CLOUDY);
            }
            if(weather == "Sunny" ){
                skycons.set("today", Skycons.CLEAR_DAY);
            }
            if(weather == "Partly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(weather == "Mostly Cloudy"){
                skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(weather != "Cloudy" && weather != "Sunny" && weather != "Clear" && weather != "Partly Cloudy" && weather != "Mostly Cloudy"){
                skycons.set("today", Skycons.RAIN);
            }

            var day1 = data.query.results.channel.item.forecast[1].text;
            if(day1 == "Cloudy"){
                skycons.set("day1", Skycons.CLOUDY);
            }
            if(day1 == "Sunny" || day1 == "Clear"){
                skycons.set("day1", Skycons.CLEAR_DAY);
            }
            if(day1 == "Partly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day1 == "Mostly Cloudy"){
                skycons.set("day1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day1 != "Cloudy" && day1 != "Sunny" && day1 != "Clear" && day1 != "Partly Cloudy" && day1 != "Mostly Cloudy"){
                skycons.set("day1", Skycons.RAIN);
            }

            var day2 = data.query.results.channel.item.forecast[2].text;
            if(day2 == "Cloudy"){
                skycons.set("day2", Skycons.CLOUDY);
            }
            if(day2 == "Sunny" || day2 == "Clear"){
                skycons.set("day2", Skycons.CLEAR_DAY);
            }
            if(day2 == "Partly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day2 == "Mostly Cloudy"){
                skycons.set("day2", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day2 != "Cloudy" && day2 != "Sunny" && day2 != "Clear" && day2 != "Partly Cloudy" && day2 != "Mostly Cloudy"){
                skycons.set("day2", Skycons.RAIN);
            }

            var day3 = data.query.results.channel.item.forecast[3].text;
            if(day3 == "Cloudy"){
                skycons.set("day3", Skycons.CLOUDY);
            }
            if(day3 == "Sunny" || day3 == "Clear"){
                skycons.set("day3", Skycons.CLEAR_DAY);
            }
            if(day3 == "Partly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);
            }
            if(day3 == "Mostly Cloudy"){
                skycons.set("day3", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            if(day3 != "Cloudy" && day3 != "Sunny" && day3 != "Clear" && day3 != "Partly Cloudy" && day3 != "Mostly Cloudy"){
                skycons.set("day3", Skycons.RAIN);
            }


            var temp2_low = data.query.results.channel.item.forecast[1].low;
            var temp2_high = data.query.results.channel.item.forecast[1].high;
            var temp2 = Math.round((temp2_low-32)*5/9) +"-"+ Math.round((temp2_high-32)*5/9);
            $("#temp2").text(temp2);

            var temp3_low = data.query.results.channel.item.forecast[2].low;
            var temp3_high = data.query.results.channel.item.forecast[2].high;
            var temp3 = Math.round((temp3_low-32)*5/9) +"-"+ Math.round((temp3_high-32)*5/9);
            $("#temp3").text(temp3);

            var temp4_low = data.query.results.channel.item.forecast[3].low;
            var temp4_high = data.query.results.channel.item.forecast[3].high;
            var temp4 = Math.round((temp4_low-32)*5/9) +"-"+ Math.round((temp4_high-32)*5/9);
            $("#temp4").text(temp4);


        });
});



