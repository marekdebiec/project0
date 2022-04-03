using UnityEngine;
using System.Collections;

public class Zax : MonoBehaviour {

	public Animator anim;
	public float speed = 10.0F;
	public Transform target;
	// Update is called once per frame
	void Update () {


		//bool fire = Input.GetButtonDown("Fire1");

		anim.SetFloat ("Speed", Input.GetAxis("Vertical"));
		anim.SetFloat ("Bok", Input.GetAxis("Horizontal"));



		float translation = Input.GetAxis("Horizontal") * speed;
		translation *= Time.deltaTime;
		// Move translation along the object's x-axis

		transform.Translate(translation, 0, 0);




		float translationz = Input.GetAxis("Vertical") * speed;
		translationz *= Time.deltaTime;
		// Move translation along the object's z-axis
		transform.Translate(0, 0, translationz);
		//anim.SetBool("Fire", fire);




	}
	void OnCollisionEnter(Collision col) {
		if (col.gameObject.CompareTag("Enemy"))
		{
			anim.SetTrigger("Die");
			Debug.Log("Die");
		}
		}
}
