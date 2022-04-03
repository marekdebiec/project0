#pragma strict

//var timer : float;
//var speed: float;
//var currentTime : float;
var animator : Animator;
var anim: Animation;	

function Start () {
	//Ruch ();
	animator = GetComponent.<Animator>();
	anim = GetComponent.<Animation>();
	//anim.Stop(anim.clip.name);
	//Ruch ();
	animator.enabled = true;
}

function Update () {
		
// The step size is equal to speed times frame time.
		//var step = speed * Time.deltaTime;
    	//var target = Vector3(-0.011,-0.046,-0.064);
    	// if(Time.time < currentTime){
       		// transform.Translate(Vector3.down * Time.deltaTime);
      //  }
      // transform.position = Vector3.MoveTowards(transform.position, target, step);
    
	//zamykanie.Play();
	//animator.SetTrigger("Zamykanie");
}
function Ruch () {
		animator.enabled = true;
		anim.Play(anim.clip.name);
	
	// Wait for the animation to finish.
	yield WaitForSeconds (anim.clip.length);
	
			
	
	
}