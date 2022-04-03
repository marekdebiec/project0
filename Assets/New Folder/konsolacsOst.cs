using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class konsolacsOst : MonoBehaviour {

	public GameObject napis;
	//public GameObject otherGameObject;
	public GameObject OstatnieDrzwi;
	//public GameObject otherGameObject2;
	//public GameObject otherGameObject22;
	private Light  lt;
	//private Halo lt22;
	//private Light  lth;
	//public GameObject otherGameObject3;
	//public GameObject otherGameObject33;
	private Light  lt2;
	//public GameObject otherGameObject4;
	//public GameObject otherGameObject44;
	private Light  lt3;
	//public GameObject otherGameObject5;
	//public GameObject otherGameObject55;
	//public GameObject drzwi01;
	//public GameObject drzwi02;
	//public GameObject drzwi03;
	//public GameObject drzwi04;
	//public Material drzwi011;
	//public GameObject wiadomosc ;
	public GameObject kluczyk;

	private Light  lt4;
	//private DoorsOpen yetAnotherScript;
	private DoorsOpenOstatnieDrzwi script;
	public bool isShowing;
	public Text pauseText;
	//public Transform prefab;
	public bool Czerwony;
	public bool Zielony;
	public AudioSource audio;



	// Use this for initialization
	void Start () {
		//lt = GetComponent<Light>();
		//wiadomosc.SetActive(false);
		audio = GetComponent<AudioSource>();
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	//void OnCollisionEnter () {

	//}
	//void OnCollisionStay (Collision col)
	void OnTriggerStay (Collider col)
	{
		if (isShowing == true) {

			if (col.gameObject.tag == "Player") {
				//wiadomosc.SetActive (true);

				if (Input.GetKeyDown (KeyCode.E)) {
					audio.Play(); 
					//Instantiate(prefab, otherGameObject2.transform.position, Quaternion.identity);
					//Instantiate(prefab, otherGameObject3.transform.position, Quaternion.identity);
					//Instantiate(prefab, otherGameObject4.transform.position, Quaternion.identity);
					//Instantiate(prefab, otherGameObject5.transform.position, Quaternion.identity);
					//Destroy (otherGameObject2);
					//Destroy (otherGameObject3);
					//Destroy (otherGameObject4);
					//Destroy (otherGameObject5);
					//drzwi01.GetComponent<Renderer> ().material = drzwi011;
					//drzwi02.GetComponent<Renderer> ().material = drzwi011;
					//drzwi03.GetComponent<Renderer> ().material = drzwi011;
					//drzwi04.GetComponent<Renderer> ().material = drzwi011;
					//otherGameObject33.SetActive (true);
					//otherGameObject44.SetActive (true);
					//otherGameObject22.SetActive (true);
					//otherGameObject55.SetActive (true);
					kluczyk.SetActive (false);
					napis.SetActive (false);				
					//yetAnotherScript = otherGameObject.GetComponent<DoorsOpen> ();
					//yetAnotherScript.enabled = true;
					pauseText.text = ("");
					//Ostatnie drzwi
					script = OstatnieDrzwi.GetComponent<DoorsOpenOstatnieDrzwi> ();
					if (Zielony == true) {
						script.ZielonyKlucz = true;
					}
					else if (Czerwony == true) {
						script.CzerwonyKlucz = true;
					}
					Destroy (this);
					//Destroy (wiadomosc);
				}
			}


		} 

	}
	void OnTriggerEnter (Collider col) {
		if (isShowing == true) {
			
			if (col.gameObject.tag == "Player") {
				//wiadomosc.SetActive (true);
				pauseText.text = ("Wciśnij E aby uzyć klucza");
			}
		} else if (isShowing == false) {
			if (col.gameObject.tag == "Player") {
				pauseText.text = ("Potrzebny klucz aby aktywować konsolę");
			}
		}
	}
	void OnTriggerExit () {
		//wiadomosc.SetActive(false);
		pauseText.text = ("");
	}
}
