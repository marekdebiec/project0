#pragma strict

private var speed = 6;

function FixedUpdate () 
{
	var x : float = Input.GetAxis ("Vertical");
    var y : float = Input.GetAxis ("Horizontal");
    GetComponent.<Rigidbody>().MovePosition(GetComponent.<Rigidbody>().position +  Vector3(x,0,-y) * speed * Time.deltaTime);
}