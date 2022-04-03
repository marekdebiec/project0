using UnityEngine;
using System.Collections;




public class kluczcsOst : MonoBehaviour {

	public GameObject otherGameObject;
	private Light  lt4;
	private konsolacsOst yetAnotherScript;
	private konsolacsOst yetAnotherScript66;
	//private Transform target;
	public GameObject napis;
	public AudioClip sound1;
	public AudioSource audio;
	public Camera otherGameObject2;
	//public GameObject kluczyk;

	// Use this for initialization
	void Start () {
		audio = otherGameObject2.GetComponent<AudioSource>();
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnCollisionEnter (Collision col)
	{
		if(col.gameObject.tag == "Player")
		{
			
			audio.PlayOneShot(sound1, 1.0F);
			napis.SetActive(true);
			yetAnotherScript = otherGameObject.GetComponent<konsolacsOst>();
			yetAnotherScript.enabled = true;
			yetAnotherScript66 = otherGameObject.GetComponent<konsolacsOst>();
			yetAnotherScript66.isShowing = true;
			//yetAnotherScript.isShowing = true;
			Destroy (gameObject);

			//kluczyk.SetActive (true);
		}
	}
}
