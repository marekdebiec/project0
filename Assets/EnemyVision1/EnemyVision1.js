#pragma strict



private var viewThreshold:float = 0.1; // 0 = back

// This would cast rays only against colliders in layer 8
private var layerMask = 1 << 8;

public var linemat : Material;
//private var startVertex : Vector3;
private var targetPos : Vector3;

private var lineRenderer : LineRenderer;
private var speed: float;

var agent : NavMeshAgent;
var targetA : Transform;
var targetB : Transform;
var targetC : Transform;
var targetD : Transform;
private var currentTarget : Transform;
private var proximity = 0.1f;
public var Patroluje : boolean;
//var script : skrypt_zax;

function Start(){
lineRenderer = GetComponent(LineRenderer);
	lineRenderer.SetPosition(0, transform.position);
	lineRenderer.SetPosition(1, transform.position);
	
	agent = GetComponent.<NavMeshAgent>(); 
	currentTarget = targetA; 
	Patroluje = true;
}
function Update () {
	//Vector3 Distance5 = currentTarget.transform.position - transform.position;
	var Distance5 : Vector3  = currentTarget.transform.position - transform.position;
			
			//if "player" is "1" unit far, change currentTarget to next one 
			if(Distance5.magnitude < proximity) 
			{ 
				if (currentTarget == targetA)  {currentTarget = targetB;}
				else if (currentTarget == targetB)  {currentTarget = targetC;}
				else if (currentTarget == targetC)  {currentTarget = targetD;}
				else if (currentTarget == targetD)  {currentTarget = targetA;}

			}

			if ( Patroluje == true) {
					Patrolowanie ();
					}
			
			
			
				
					
				
}
function LateUpdate () {
	Patroluje = true;
	
	//lineRenderer.SetPosition(0, transform.position);
	//lineRenderer.SetPosition(1, transform.position);
}
function Patrolowanie () {
		agent.SetDestination (currentTarget.position);
		
		
}
function OnTriggerStay(other : Collider) {

	
	
	// check angle, are we looking towards player
	//var forward = transform.TransformDirection(Vector3.forward);
	var forward = transform.forward;
	var toOther = other.transform.position - transform.position;
	var angle = Vector3.Dot(forward, toOther);
	
	if ( angle > viewThreshold)
	{
		// do linecast, check if we can reach player without hitting walls
		// linecast #1 middle
		if (!Physics.Linecast (transform.position, other.transform.position, layerMask)) 
		{
			// there was no hit, so we can see the player
			
			// lets move that way
			//rigidbody.MovePosition(
			//var MoveDir = Vector3.MoveTowards(transform.position, other.transform.position, 0.001); 
			//transform.Translate(MoveDir * Time.deltaTime);
			var targetRotation = Quaternion.LookRotation(other.transform.position - transform.position);
			transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, 10 * Time.deltaTime);
			
			
			//transform.position += transform.forward * 0.1 * Time.deltaTime;
			
			//transform.position = Vector3.MoveTowards(transform.position, other.transform.position, 0.2 * Time.deltaTime);
		//transform.position = Vector3(Mathf.MoveTowards(transform.position.x, target, speed * Time.deltaTime), 0, 0);
			
			//Debug.DrawLine (transform.position, other.transform.position, Color.red);
			//lineRenderer.enabled=true;
			lineRenderer.SetPosition(0, transform.position);
			lineRenderer.SetPosition(1, other.transform.position);
			
			//var zax= GameObject.FindWithTag ("enemy");
			//script = zax.GetComponent("skrypt_zax");
			//if ( script.zyje == true) {
				Patroluje = false;
				agent.SetDestination (other.transform.position);
			//}
		}else{
			lineRenderer.SetPosition(0, transform.position);
			lineRenderer.SetPosition(1, transform.position);
			//lineRenderer.enabled = true;
			Patroluje = true;
			
		}
		
	}
	
	else{
		//lineRenderer.enabled=false;
		lineRenderer.SetPosition(0, transform.position);
		lineRenderer.SetPosition(1, transform.position);
		Patroluje = true;
		Patrolowanie();
		
	}
}


function OnTriggerExit(other : Collider) {
	Patroluje = true;
	lineRenderer.SetPosition(0, transform.position);
	lineRenderer.SetPosition(1, transform.position);
	//lineRenderer.enabled  =  false;
}
//function OnTriggerEnter (other : Collider) {
	//lineRenderer.enabled  =  true;
//}