#pragma strict

// Assigns a movie texture to the current material and plays it.

var movTexture : MovieTexture;

function Start () {
 //Renderer r = GetComponent<Renderer>();
            //MovieTexture movie = (MovieTexture)r.material.mainTexture;
	GetComponent.<Renderer>().material.mainTexture = movTexture;
	movTexture.Play();
	//yield WaitForSeconds(37);
	//Application.LoadLevel(1);
}
function Update () {
	if (movTexture.isPlaying == false) {
		Application.LoadLevel(1);
	}
	//movTexture.Play();
	if (Input.GetKeyDown(KeyCode.Escape)) {
			Application.LoadLevel(1);
		} 
}