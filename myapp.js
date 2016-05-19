var skycons = new Skycons();
skycons.play();

var city_list = ["taipei","new-taipei","taichung","tainan","kaohsiung","keelung","taoyuan","hsinchu-city","hsinchu-county","miaoli","changhua","nantou","yunlin","chiayi-city","chiayi-county","pingtung","yilan","hualien","taitung","penghu","kinmen","lienchiang"];
var city_list_chinese = ["台北市", "新北市", "台中市", "台南市", "高雄市", "基隆市", "桃園市", "新竹市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義市", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "台東縣", "澎湖縣", "金門縣", "連江縣"];

var btn_id_list = [];
for(var i=1; i<23; i++){
	btn_id_list[i] = "#btn" + i;
}

var temp_low = [];
var temp_high = [];
var temp = [];

//dropdown menu
var getTodayTemp = function(index){
    var location = city_list[index];
    var location_id = "#"+ city_list[index];
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + location + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            var currentTemp = data.query.results.channel.item.condition.temp;
            $(location_id).append(Math.round((currentTemp-32)*5/9));
        });  
};

$.each(city_list, function(index) {
  getTodayTemp(index);
});

// selected location 
/*after getJSON*/
var getTemp = function(index){
	var location = city_list[index];
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + location + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            var todayTemp = data.query.results.channel.item.condition.temp;
            $(".temperature").text(Math.round((todayTemp-32)*5/9));
            
			$("#temp2").text(Math.round((data.query.results.channel.item.forecast[1].low-32)*5/9) +"-"+ Math.round((data.query.results.channel.item.forecast[1].high-32)*5/9));
			$("#temp3").text(Math.round((data.query.results.channel.item.forecast[2].low-32)*5/9) +"-"+ Math.round((data.query.results.channel.item.forecast[2].high-32)*5/9));
			$("#temp4").text(Math.round((data.query.results.channel.item.forecast[3].low-32)*5/9) +"-"+ Math.round((data.query.results.channel.item.forecast[3].high-32)*5/9));
		});  
};
var getSkycon = function(index){
	var location = city_list[index];
	$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + location + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
        var weather = [];
        var day = ["today","day1","day2","day3"];
    	for(i=0; i<4; i++){
		//examine & set skycon
			if(data.query.results.channel.item.forecast[i].text == "Cloudy"){
				skycons.set(day[i], Skycons.CLOUDY);
	        }
	        if(data.query.results.channel.item.forecast[i].text == "Sunny" || data.query.results.channel.item.forecast[i].text == "Clear"){
	        	skycons.set(day[i], Skycons.CLEAR_DAY);
	        }
	        if(data.query.results.channel.item.forecast[i].text == "Partly Cloudy"){
	        	skycons.set(day[i], Skycons.PARTLY_CLOUDY_DAY);
	        }
	        if(data.query.results.channel.item.forecast[i].text == "Mostly Cloudy"){
	        	skycons.set(day[i], Skycons.PARTLY_CLOUDY_NIGHT);
	        }
	        if(data.query.results.channel.item.forecast[i].text == "Breezy"){
	        	skycons.set(day[i], Skycons.WIND);
	        }
	        if(data.query.results.channel.item.forecast[i].text != "Cloudy" && data.query.results.channel.item.forecast[i].text != "Sunny" && data.query.results.channel.item.forecast[i].text != "Clear" && data.query.results.channel.item.forecast[i].text != "Partly Cloudy" && data.query.results.channel.item.forecast[i].text != "Mostly Cloudy" && data.query.results.channel.item.forecast[i].text != "Breezy"){
	        	skycons.set(day[i], Skycons.RAIN);
	        }

	    }
	    $(".weather").text(data.query.results.channel.item.forecast[0].text); //text
    });  
};
var getDate = function(index){
	var location = city_list[index];
	$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + location + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        function(data){
            console.log(data);

		    $(".date").text(data.query.results.channel.item.forecast[0].date);
		    $("#date2").text(data.query.results.channel.item.forecast[1].date);
		    $("#date3").text(data.query.results.channel.item.forecast[2].date);
		    $("#date4").text(data.query.results.channel.item.forecast[3].date);
    });
};

getDate(0);
getSkycon(0);
getTemp(0);

$.each(btn_id_list,function(index){
	$(btn_id_list[index+1]).on("click",function(){
		getTemp(index);
		getSkycon(index);
		getDate(index);
		$("#loca").text(city_list_chinese[index]);
	});
});