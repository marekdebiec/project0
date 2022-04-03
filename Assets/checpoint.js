#pragma strict

//var checkpoint : GameObject[];
////var isActive : boolean;
//
//var coz : GameObject; 
//var gos : GameObject[];
//gos = GameObject.FindGameObjectsWithTag("Respawn"); 

public var respawns: GameObject[];

function Start () {

}

function Update () {
 //if (isActive) {
	//transform.gameObject.tag = "Respawn";
	//}
	//else transform.gameObject.tag = "Untagged";
}
function OnTriggerEnter (other : Collider) {
		respawns = GameObject.FindGameObjectsWithTag("Respawn");
		for (var go : GameObject in respawns)  { 
			go.tag = "Untagged";
		}		
		transform.gameObject.tag = "Respawn"; 
//		checkpoint = GameObject.FindGameObjectsWithTag("Respawn");
//
//		for (var i = 0; i < checkpoint.Length; i++) {
//     	//Destroy(checkpoint[i]);
//     	//checkpoint[i].tag = "Untagged";
//     			checkpoint[i].tag = "Untagged";
// 		}
// 		for (var go : GameObject in gos)  { 
//			go.gameObject.tag = "Untagged";
//			coz = go;
//		} 
//		//Destroy(checkpoint);
//		isActive = true;
//		return coz;
	}