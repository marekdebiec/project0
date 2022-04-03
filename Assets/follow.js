#pragma strict

var player : GameObject;
var mousePosition : Vector3;

function Start () {

}

function Update () {
	player = GameObject.FindWithTag("Player");
	transform.position.x = player.transform.position.x;
	transform.position.z = player.transform.position.z;
	mousePosition=Camera.main.ScreenToWorldPoint(Input.mousePosition);
	transform.position = mousePosition;
	
	
	if (Input.GetAxis("Mouse ScrollWheel") < 0) // back 
		{ 
			//Camera.main.orthographicSize = Mathf.Max(Camera.main.orthographicSize-1, 1);
			Camera.main.orthographicSize++;

      }
     if (Input.GetAxis("Mouse ScrollWheel") > 0) // forward
     {
         //Camera.main.orthographicSize = Mathf.Min(Camera.main.orthographicSize-1, 6);
          Camera.main.orthographicSize--;
     }
}