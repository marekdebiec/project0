#pragma strict


var targetA : Transform; 
var targetB : Transform; 
var targetC : Transform;
private var currentTarget : Transform; 
var proximity : float = 0.04;
var speed : float = 1.0;


function Start () {
 	currentTarget = targetA; 
}

function Update () { 
var Distance : Vector3 = currentTarget.transform.position - transform.position;

//if "player" is "1" unit far, change currentTarget to next one 
if(Distance.magnitude < proximity) 
	{ 
	switch(currentTarget) { 
		case targetA: currentTarget = targetB; break; 
		case targetB: currentTarget = targetC; break; 
		case targetC: currentTarget = targetA; break;
		 } 
	}
	transform.position = Vector3.Slerp(transform.position, currentTarget.transform.position, Time.deltaTime * speed); 
	//make object look towards currentTarget 
	transform.LookAt( currentTarget); 
	}