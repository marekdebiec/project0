#pragma strict

var animator : Animator;			// The animator for the character
var target : Transform;
public var zyje : boolean;
var respawnPrefab : GameObject;
//var respawn: GameObject;
public var respawns: GameObject[];

//public var spawnPoints : Transform[];

var child : GameObject;
private var yetAnotherScript : ThirdPersonUserControl;
private var yetAnotherScript22 : ThirdPersonCharacter;

//private var skrypcik : EnemyVision1;

private var newColor: Color;



function Start () {	
	yetAnotherScript = this.GetComponent("ThirdPersonUserControl");
	yetAnotherScript.enabled = true;
	yetAnotherScript22 = this.GetComponent("ThirdPersonCharacter");
	yetAnotherScript22.enabled = true;
	animator = GetComponent.<Animator>();
	zyje = true;
	child.SetActive (true);
	
	
}

function Update () {
		//target = GameObject.FindWithTag("enemy").transform;
		
		
		
	//var distance = Vector3.Distance (target.transform.position, transform.position);
	//Debug.Log("dystans jest " + distance); 
	//var dir : Vector3 = (target.transform.position - transform.position).normalized;
	//var direction = Vector3.Dot(dir, transform.forward);
	
	
		
	//	if (distance < 1.6) {	
		//	if(direction < 0) {
			//	Kolor();
			//	Warp ();
			
			// }
			// }
			 
			 
		
}
function OnCollisionEnter(col: Collision) {
	if(col.gameObject.tag == "enemy")
	{			
				yetAnotherScript = this.GetComponent("ThirdPersonUserControl");
			 	yetAnotherScript.enabled = false;
			 	yetAnotherScript22 = this.GetComponent("ThirdPersonCharacter");
			 	yetAnotherScript22.enabled = false;
				//var przeciwnik = GameObject.FindWithTag ("enemy");
				//script = przeciwnik.GetComponent("EnemyVision1");
				//script.Patroluje = true; 
				child.SetActive (false);
				//Destroy (child);
				zyje = false;
				Kolor();
				Warp ();
	}
}
function Zniszcz () {
				yetAnotherScript = this.GetComponent("ThirdPersonUserControl");
			 	yetAnotherScript.enabled = false;
			 	yetAnotherScript22 = this.GetComponent("ThirdPersonCharacter");
			 	yetAnotherScript22.enabled = false;			
				child.SetActive (false);				
				zyje = false;
				Kolor();
				Warp ();
	}	


//function OnCollisionEnter(other : Collision ) {
	//if(other == GameObject.Find ("nos")) {
			//Kolor();
			//Warp ();
			//}
	//}
function OnTriggerEnter ( other : Collider) {	
	//if(other.tag == "nose") {
	//if(other == GameObject.Find ("nos")) {
				
				//Kolor();
			//	Warp ();			
      //   }  
//      if (other.tag == "fire") {
//      			yetAnotherScript = this.GetComponent("ThirdPersonUserControl");
//			 	yetAnotherScript.enabled = false;
//			 	yetAnotherScript22 = this.GetComponent("ThirdPersonCharacter");
//			 	yetAnotherScript22.enabled = false;				
//				child.SetActive (false);				
//				zyje = false;
//				Kolor();
//				Warp ();
//       } 
	}
function Warp() {
			//var przeciwnik = GameObject.FindWithTag ("enemy");
			//skrypcik = przeciwnik.GetComponent("EnemyVision1");
			//if (skrypcik.Patroluje == false)
			//	skrypcik.Patroluje = true;
			animator.SetTrigger("Die");
			//wyłącz ruch bohatera
			 
			 yield WaitForSeconds(3);
			//Destroy (gameObject, 3);
			Resp(); 
						//GameObject.Find ("zacHIGH:Group1").transform.GetComponent.<Renderer>().material.color.a=1.0;

			//Destroy (gameObject);

			//Destroy (this);			
			
}


function Resp () {
	// Instantiates respawnPrefab at the location 
	// of all game objects tagged "Respawn".
	//if (respawns == null)
			respawns = GameObject.FindGameObjectsWithTag("Respawn");
	//if (respawn == null)
		//respawn = GameObject.FindWithTag ("Respawn");
		var closestPoint : GameObject = respawns[0];
		var shortestDistance = Vector3.Distance(gameObject.transform.position, closestPoint.transform.position);
		for (var respawn: GameObject in respawns) {
				Instantiate(respawnPrefab, respawn.transform.position, respawn.transform.rotation);
				gameObject.SetActive (false);
				Destroy (gameObject);	
		}
	//Instantiate (respawnPrefab, respawn.transform.position, respawn.transform.rotation);
	//gameObject.SetActive (false);
	//Destroy (gameObject);	
}
function Kolor () {
	
	//Color newColor = new Color(1, 1, 1, Mathf.Lerp(alpha,aValue,t));
	//var newColor = new Color(93, 218, 53);
	//alpha -=0.1*Time.deltaTime;
	//var newColor = new Color(1, 1, 1);
	//var newColor = GetComponent.<Renderer>().material.color; 
	newColor = GameObject.Find ("zacHIGH:Group1").transform.GetComponent.<Renderer>().material.color;
	
	
	for (var x = 1.0; x >= 0; x -= 0.1) {
    	
    	newColor.a = x;
    	GameObject.Find ("zacHIGH:Group1").transform.GetComponent.<Renderer>().material.color = newColor;
    	yield WaitForSeconds(0.1);
    	
	}
	
	//alpha -=0.1*Time.deltaTime;
	

}
