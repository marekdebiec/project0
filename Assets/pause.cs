using UnityEngine;
using System.Collections;
using UnityEngine.UI;


public class pause : MonoBehaviour {

	bool zmienna;

	//public GameObject wiadomosc ;
	public Text pauseText;


	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
		//if (Input.GetButtonDown("Fire1")) {
		if (Input.GetKeyDown(KeyCode.Escape)) {
			if (zmienna == false) {
			
				//if (Input.GetKeyDown (KeyCode.T)) {

				Time.timeScale = 0.0F;
				//wiadomosc.SetActive (true);
				pauseText.text = ("Pause");
				zmienna = true;
			}
			else if (zmienna == true) {
				Time.timeScale = 1.0F;
				//wiadomosc.SetActive (false);
				pauseText.text = ("");
				zmienna = false;
			}
		} 
			//else
				//Time.timeScale = 1.0F;
			//Time.fixedDeltaTime = 0.02F * Time.timeScale;
		
	}
	}

