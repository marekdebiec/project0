#pragma strict

public var delay : float;

var part: ParticleSystem;
var collisionEvents: ParticleCollisionEvent[];
//;;;;


function Start () {
	//yield WaitForSeconds (3);
	//ParticleSystem.Pause;
	//ParticleSystem.enableEmission = false;
	//gameObject.GetComponent.<ParticleSystem>().Stop();
	//yield WaitForSeconds (2);
	//gameObject.GetComponent.<ParticleSystem>().Play();
	yield WaitForSeconds (delay);
	Fade ();
	
	part = GetComponent.<ParticleSystem>();
	
	collisionEvents = new ParticleCollisionEvent[16];
	
}

function Update () {
	
}
function Fade() {
   // for (var f = 1.0; f >= 0; f -= 0.1) {
   for (;;) {
        yield WaitForSeconds (3);	
		gameObject.GetComponent.<ParticleSystem>().Stop();		
		
		yield WaitForSeconds (2);
		gameObject.GetComponent.<ParticleSystem>().Play();		
		
    }
}
function OnParticleCollision (other : GameObject) {
//		var body : Rigidbody = other.GetComponent.<Rigidbody>();
//		if (body) {
//			var direction : Vector3 = other.transform.position - transform.position;
//			direction = direction.normalized;
//			body.AddForce (direction * 5);
//		}
			// adjust array length
	var safeLength = part.safeCollisionEventSize;
	
	if (collisionEvents.Length < safeLength) {
		collisionEvents = new ParticleCollisionEvent[safeLength];
	}

	// get collision events for the gameObject that the script is attached to
	var numCollisionEvents = part.GetCollisionEvents(other, collisionEvents);

	// apply some force to RigidBody components
	var rb = other.GetComponent.<Rigidbody>();
	
	for (var i = 0; i < numCollisionEvents; i++) {
		if (rb)
		{
			//var pos = collisionEvents[i].intersection;
			//var force = collisionEvents[i].velocity * 10;
			//rb.AddForce(force);
			var otherScript: skrypt_zax = other.GetComponent("skrypt_zax"); 
			 otherScript.Zniszcz(); 
			
		}
	}
	}
//function OnParticleCollision (other : GameObject) {
//	var body : Rigidbody = other.GetComponent.<Rigidbody>();
//		if (body) {
//			var direction : Vector3 = other.transform.position - transform.position;
//			direction = direction.normalized;
//			body.AddForce (direction * 5);
//		}
//}
