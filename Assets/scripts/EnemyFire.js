#pragma strict

//var fire : GameObject;
public var prefab: Transform;

function Start(){

	//fire.GetComponent.<ParticleSystem>().Stop();	
}
function OnCollisionEnter(col: Collision) {
	if(col.gameObject.tag == "Player")
	{			
		//fire.GetComponent.<ParticleSystem>().Play();
		Instantiate(prefab, transform.position, Quaternion.identity);
		//gameObject.GetComponent.<ParticleSystem>().Stop();	
	}
}
function Update () {
	
}

