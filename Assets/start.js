#pragma strict

//var timer : float;
//var speed: float;
//var currentTime : float;
var animator : Animator;
//var anim: Animation;	
private var yetAnotherScript : close;
var target : GameObject;
var distance : float;
var otherGameObject : GameObject;
var pauseText : UI.Text;

function Start () {
	//Ruch ();
	animator = GetComponent.<Animator>();
	//anim = GetComponent.<Animation>();
	//anim.Stop(anim.clip.name);
	//Ruch ();
	animator.enabled = false;
}

function Update () {
		Startowanie ();
		
// The step size is equal to speed times frame time.
		//var step = speed * Time.deltaTime;
    	//var target = Vector3(-0.011,-0.046,-0.064);
    	// if(Time.time < currentTime){
       		// transform.Translate(Vector3.down * Time.deltaTime);
      //  }
      // transform.position = Vector3.MoveTowards(transform.position, target, step);
    
	//zamykanie.Play();
	//animator.SetTrigger("Zamykanie");
	
	
	//Debug.Log (distance);
	
}
function Startowanie () {
		target = GameObject.FindGameObjectWithTag("Player"); 
		distance = Vector3.Distance(target.transform.position, transform.position);
		
		if (distance < 4.0){
				yield WaitForSeconds (3);
				yetAnotherScript = otherGameObject.GetComponent(close);
			 	yetAnotherScript.enabled = true;
				yield WaitForSeconds (3);
				animator.enabled = true;
				yield WaitForSeconds (5);
				
				pauseText.text = ("Gratulacje, uda³o ci siê uciec!");
				
				yield WaitForSeconds (3);
				Application.Quit();
				
				
				
		        
	}
}

//function Ruch () {
//		animator.enabled = true;
//		//anim.Play(anim.clip.name);
//	
//	// Wait for the animation to finish.
//	yield WaitForSeconds (anim.clip.length);
//	
//			
//	
//	
//}
//function OnCollisionEnter (col : Collision) {
//	if(col.gameObject.tag == "enemy")
//	{
//				
//		        yetAnotherScript = gameObject.GetComponent("close");
//			 	yetAnotherScript.enabled = true;
//			 	
//			 	animator.enabled = true;
//	}
//}