using UnityEngine;
using System.Collections;

public class SampleAgentScript : MonoBehaviour {


	

	//GameObject target;

	public Transform targetA;
	public Transform targetB;
	public Transform targetC;
	private Transform currentTarget;
	private float proximity = 0.1f;
	//float speed  = 1.0f;


	NavMeshAgent agent;


	// Use this for initialization
	void Start () {
		agent = GetComponent<NavMeshAgent>();
		currentTarget = targetA; 
		//target = GameObject.FindWithTag ("Player");

	}


	
	// Update is called once per frame
	void Update () {
		//target = GameObject.FindWithTag ("Player");

	//	float distance = Vector3.Distance (target.transform.position, transform.position);
	//	Vector3 dir = (target.transform.position - transform.position).normalized;
	//	float direction = Vector3.Dot (dir, transform.forward);

		//if (distance < 0.5f) {
		//	if (direction > 0) {agent.SetDestination (target.transform.position);	}
		//	else if (direction < 0) {agent.SetDestination (currentTarget.position);}
		//}

		//else {
			Vector3 Distance5 = currentTarget.transform.position - transform.position;
			
			//if "player" is "1" unit far, change currentTarget to next one 
			if(Distance5.magnitude < proximity) 
			{ 
				if (currentTarget == targetA)  {currentTarget = targetB;}
				else if (currentTarget == targetB)  {currentTarget = targetC;}
				else if (currentTarget == targetC)  {currentTarget = targetA;}

			}

			//wracaj!
			agent.SetDestination (currentTarget.position);

		//}
	//	Vector3 fwd = transform.TransformDirection(Vector3.forward); //od tad
	//	Debug.DrawRay(transform.position, fwd, Color.red);
		//RaycastHit hit;
	//	if (Physics.Raycast(transform.position, fwd, out hit,  1))
		//	if (hit.collider != null)
		//		hit.collider.enabled = false;
		//if (hit.rigidbody != null)
			//hit.rigidbody.AddForce(ray.direction * hitForce);
		//RaycastHit.transform;
		
		//print("There is something in front of the object!"); //do tad
	}
	
	//void OnDrawGizmos() {
		//Gizmos.color = Color.yellow;
		//Gizmos.DrawWireSphere (transform.position, 0.5f);
	//}
}
