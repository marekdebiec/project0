using UnityEngine;
using System.Collections;

public class DoorsOpen : MonoBehaviour {


	//public float viewThreshold = -0.1f; // 0 = back
	
	Animator animator;
	bool doorOpen;
	//public AudioClip sound1;
	public AudioSource audio;
	public AudioSource audio2;
	public GameObject otherGameObject2;
	public GameObject otherGameObject3;

	void Start()
	{
		doorOpen = false;
		animator = GetComponent<Animator>();


	}
	void Update () {
		otherGameObject2 = GameObject.Find("/GameObject 2/Camera 1/DoorOpenDoorOpen");
		otherGameObject3 = GameObject.Find("/GameObject 2/Camera 1/DoorOpenDoorOpen/DoorClose");
		audio = otherGameObject2.GetComponent<AudioSource>();
		audio2 = otherGameObject3.GetComponent<AudioSource>();
	}
	void OnTriggerEnter(Collider col)
	{
	//	Vector3 dir = (col.transform.position - transform.position).normalized;
	//	float direction = Vector3.Dot(dir, transform.forward);

		//var forward = transform.forward;
		//var toOther = col.transform.position - transform.position;
		//var angle = Vector3.Dot(forward, toOther);
		if (col.gameObject.tag == "Player") {

		//	if(direction < 0) {
			//if (angle > viewThreshold) {
				//audio.PlayOneShot(sound1, 1.0F);
			if (audio) 
			{
				audio.Play();
			} 
				doorOpen = true;
				DoorControl ("Open");
			//}
			//}

		}
		
	}
	void OnTriggerStay(Collider col)
	{   
		var distance = Vector3.Distance(col.transform.position, transform.position);
		//Debug.Log ("dystans do drzwi:" + distance);
		if (col.gameObject.tag == "Player") {
			if (distance < 1){
				doorOpen = true;
				DoorControl ("Open");
			}
		}
	}
	void OnTriggerExit(Collider col)
	{
		if (doorOpen) 
		{
			if (audio2) {
			audio2.Play();
			}
			doorOpen = false; 
			DoorControl ("Close");
		}
	}
	void DoorControl(string direction)
	{
		if (animator) {
			animator.SetTrigger (direction);
		}
		}
	
}