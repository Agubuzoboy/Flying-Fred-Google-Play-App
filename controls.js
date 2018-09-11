#pragma strict 

var mspeed : float = 5;

function Start () {

}

function Update () { 

if(Input.GetKey(KeyCode.LeftArrow)) 
transform.Translate(Vector3(-1,0,0) * mspeed * Time.deltaTime); 

if(Input.GetKey(KeyCode.RightArrow)) 
transform.Translate(Vector3(1,0,0) * mspeed * Time.deltaTime);

}