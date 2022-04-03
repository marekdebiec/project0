#pragma strict

var animator : Animator;			// The animator for the character
var target : Transform;

var respawnPrefab : GameObject;
var respawn: GameObject;



private var newColor: Color;


function Start () {	

	animator = GetComponent.<Animator>();
}

function Update () {
		target = GameObject.FindWithTag("enemy").transform;
	var distance = Vector3.Distance (target.transform.position, transform.position);
	var dir : Vector3 = (target.transform.position - transform.position).normalized;
	var direction = Vector3.Dot(dir, transform.forward);
	
		if (distance < 0.1f) {	
			if(direction < 0) {
				Kolor();
				Warp ();
			
			 }
			 }
			 
			 
		
}
//function OnCollisionEnter(other : Collision ) {
	//if(other == GameObject.Find ("nos")) {
			//Kolor();
			//Warp ();
			//}
	//}
function OnTriggerEnter ( other : Collider) {	
	if(other.tag == "nose") {
	//if(other == GameObject.Find ("nos")) {
				
				Kolor();
				Warp ();			
         }   
	}
function Warp() {
			
			animator.SetTrigger("Die");
			 
			 yield WaitForSeconds(3);
			//Destroy (gameObject, 3);
			Resp(); 
						//GameObject.Find ("zacHIGH:Group1").transform.GetComponent.<Renderer>().material.color.a=1.0;

			//Destroy (gameObject);

			//Destroy (this);			
			
}


function Resp () {
	if (respawn==null)
		respawn = GameObject.FindWithTag ("Respawn");
	Instantiate (respawnPrefab, respawn.transform.position, respawn.transform.rotation);
	gameObject.SetActive (false);
	Destroy (gameObject);

	
	
	
	
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
