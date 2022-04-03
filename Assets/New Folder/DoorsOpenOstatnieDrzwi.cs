using UnityEngine;
using System.Collections;

public class DoorsOpenOstatnieDrzwi : MonoBehaviour {


	//public float viewThreshold = -0.1f; // 0 = back
	
	Animator animator;
	bool doorOpen;
	public bool CzerwonyKlucz;
	public bool ZielonyKlucz;
	public GameObject CzerwoneSwiatelko1;
	public GameObject CzerwoneSwiatelko2;
	public GameObject CzerwoneSwiatelko3;
	public GameObject CzerwoneSwiatelko4;
	public GameObject drzwi01;
	public GameObject drzwi02;
	public GameObject drzwi03;
	public GameObject drzwi04;
	public Material drzwi011;
	public Transform prefab;
	public AudioSource audio;
	public AudioSource audio2;
	public GameObject otherGameObject2;
	public GameObject otherGameObject3;

	void Start()
	{
		doorOpen = false;
		animator = GetComponent<Animator>();
	}
	void Update () 
	{
		otherGameObject2 = GameObject.Find("/GameObject 2/Camera 1/DoorOpenDoorOpen");
		otherGameObject3 = GameObject.Find("/GameObject 2/Camera 1/DoorOpenDoorOpen/DoorClose");
		audio = otherGameObject2.GetComponent<AudioSource>();
		audio2 = otherGameObject3.GetComponent<AudioSource>();

		if (CzerwonyKlucz == true) {
			if (ZielonyKlucz == true) {
				Destroy (CzerwoneSwiatelko1);
				Destroy (CzerwoneSwiatelko2);
				Destroy (CzerwoneSwiatelko3);
				Destroy (CzerwoneSwiatelko4);
				drzwi01.GetComponent<Renderer> ().material = drzwi011;
				drzwi02.GetComponent<Renderer> ().material = drzwi011;
				drzwi03.GetComponent<Renderer> ().material = drzwi011;
				drzwi04.GetComponent<Renderer> ().material = drzwi011;
				Instantiate(prefab, CzerwoneSwiatelko1.transform.position, Quaternion.identity);
				Instantiate(prefab, CzerwoneSwiatelko2.transform.position, Quaternion.identity);
				Instantiate(prefab, CzerwoneSwiatelko3.transform.position, Quaternion.identity);
				Instantiate(prefab, CzerwoneSwiatelko4.transform.position, Quaternion.identity);
			}
		}
	}
	void OnTriggerEnter(Collider col)
	{
	//	Vector3 dir = (col.transform.position - transform.position).normalized;
	//	float direction = Vector3.Dot(dir, transform.forward);

		//var forward = transform.forward;
		//var toOther = col.transform.position - transform.position;
		//var angle = Vector3.Dot(forward, toOther);
		if (col.gameObject.tag == "Player") {
			if (CzerwonyKlucz == true) {
				if (ZielonyKlucz == true) {
		//	if(direction < 0) {
			//if (angle > viewThreshold) {
				audio.Play(); 
				doorOpen = true;
				DoorControl ("Open");
				}
			}
			//}
			//}
		}
		
	}
	void OnTriggerStay(Collider col)
	{   
		var distance = Vector3.Distance(col.transform.position, transform.position);
		//Debug.Log ("dystans do drzwi:" + distance);
		if (col.gameObject.tag == "Player") {
			if (CzerwonyKlucz == true) {
				if (ZielonyKlucz == true) {
					if (distance < 1){
						doorOpen = true;
						DoorControl ("Open");
					}
				}
			}
		}
	}
	void OnTriggerExit(Collider col)
	{
		if (doorOpen) 
		{
			audio2.Play(); 
			doorOpen = false; 
			DoorControl ("Close");
		}
	}
	void DoorControl(string direction)
	{
		animator.SetTrigger(direction);
	}
	
}