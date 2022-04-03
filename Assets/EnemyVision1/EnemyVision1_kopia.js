#pragma strict

// http://unitycoder.com/blog
// ** remember to donate :) **

private var viewThreshold:float = 1.5; // 0 = back

// This would cast rays only against colliders in layer 8
private var layerMask = 1 << 8;

public var linemat : Material;
//private var startVertex : Vector3;
private var targetPos : Vector3;

private var lineRenderer : LineRenderer;

function Start()
{
	lineRenderer = GetComponent(LineRenderer);
	lineRenderer.SetPosition(0, transform.position);
	lineRenderer.SetPosition(1, transform.position);
}


function OnTriggerStay(other : Collider) 
{
	
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
			transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, 2 * Time.deltaTime);
			
			transform.position = Vector3.MoveTowards(transform.position, other.transform.position, 1*Time.deltaTime);
		//transform.position = Vector3(Mathf.MoveTowards(transform.position.x, target, speed * Time.deltaTime), 0, 0);
			
			//Debug.DrawLine (transform.position, other.transform.position, Color.red);
			lineRenderer.SetPosition(0, transform.position);
			lineRenderer.SetPosition(1, other.transform.position);
		}else{
			lineRenderer.SetPosition(0, transform.position);
			lineRenderer.SetPosition(1, transform.position);
		}
	}else{
		lineRenderer.SetPosition(0, transform.position);
		lineRenderer.SetPosition(1, transform.position);
	}
}

function OnTriggerExit(other : Collider) 
{
	lineRenderer.SetPosition(0, transform.position);
	lineRenderer.SetPosition(1, transform.position);
}