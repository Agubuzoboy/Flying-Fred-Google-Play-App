#pragma strict

var fallingspeed : float = 5; 
var inspeed: float = 0.5; 


function Start () {

}

function Update () {

transform.Translate(Vector3(0,-1,0) * fallingspeed * Time.deltaTime * inspeed);
 
 
 
inspeed += 0.05 * Time.deltaTime; 

if( inspeed > 4) 
{
inspeed = 4;
}
}