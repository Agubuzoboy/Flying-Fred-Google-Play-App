#pragma strict
var speed : float = 5; 
var inspeed : float = 0.5;
function Start () {

}

function Update () {

transform.Translate(Vector3(0,1,0) * speed * Time.deltaTime); 

speed += inspeed * Time.deltaTime;


}