using UnityEngine;
using System.Collections;


//[RequireComponent(typeof(AudioSource))]
public class kluczcs : MonoBehaviour {

	public GameObject otherGameObject;
	private Light  lt4;
	private konsolacs yetAnotherScript;
	private konsolacs yetAnotherScript66;
	//private Transform target;
	public GameObject napis;
	public GameObject kluczyk;
	public AudioClip sound1;
	public AudioSource audio;
	public Camera otherGameObject2;
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
			//StartCoroutine(Example());
			//audio.Play(); // play the current audio.clip AudioClip
			audio.PlayOneShot(sound1, 1.0F);
			
			napis.SetActive(true);
			yetAnotherScript = otherGameObject.GetComponent<konsolacs>();
			yetAnotherScript.enabled = true;
			yetAnotherScript66 = otherGameObject.GetComponent<konsolacs>();
			yetAnotherScript66.isShowing = true;
			//yetAnotherScript.isShowing = true;
			//yield return new WaitForSeconds(1);
			Destroy (gameObject);
			//gameObject.SetActive (false);
			
			kluczyk.SetActive (true);

		}
	}
	//IEnumerator Example() {

	//}
}
