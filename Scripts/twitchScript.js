$(document).ready(function(){
	debugger;
	var streamers = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","comster404","brunofin"]
	var rowOpen = '<div class = "row animated fadeIn">';
	var columnOpen= '<div class = "col-sm-6 col-xs-12 animated fadeIn">'
	var link1 = '<a href= "#" target="_blank">'
	var wellOpen = '<div class= "well">'
	var userOpen = '<h3 class = "text-center">';
	var titleOpen ='<h4 class = "text-center">';
	var statusOpen='<h5 class = "text-center">';
	var statusClose='</h5>';
	var titleClose='</h4>';
	var userClose='</h3>';
	var wellClose = '</div>'
	var linkClose ='</a>'
	var columnClose='</div>'
	var rowClose='</div>';

	var user;
	var jsonData={};
	var title; 
	var status;
	var link;

	for(var i=0; i < streamers.length; i++){
		user = streamers[i];
		/*jsonData = $.getJSON("https://crossorigin.me/https://wind-bow.hyperdev.space/twitch-api/streams/"+user)*/
		jsonData = $.ajax({
			accept:"application/vnd.twitchtv[.version]+json",
			url:"https://wind-bow.hyperdev.space/twitch-api/streams/"+user,
			jsonp: true;
			dataType: 'jsonp',
			method: 'GET',
			});

		console.log(jsonData);
		if (jsonData["stream"] == null){
			status = "Offline";
			title = "Stream Offline";
		} else{
			title = jsonData["channel"]["status"];
			status = "Now Streaming!";
		}	
		if (i === 0){
			$("#streamersDynamic").append(columnOpen+link1+wellOpen+userOpen
				+user+userClose+titleOpen+title+titleClose+wellClose+linkClose+columnClose);	
		} else if (i % 2 === 0){
			$("#streamersDynamic").append(columnOpen+link1+wellOpen+userOpen
				+user+userClose+wellClose+linkClose+columnClose);
		} else{
			$("#streamersDynamic").append(columnOpen+link1+wellOpen+userOpen
				+user+userClose+wellClose+linkClose+columnClose);
		}
	}


});