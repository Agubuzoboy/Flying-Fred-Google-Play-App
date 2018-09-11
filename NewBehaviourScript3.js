#pragma strict


var arrow : Transform; 
var targetpos : Vector3;
var speed : float = 3;

function Start () { 

targetpos = arrow.position;

}

function Update () {

arrow.position = Vector3.Lerp(arrow.position,targetpos,Time.deltaTime * speed);




} 



function OnTouchStay() 
{ 
var point : Vector3;

targetpos = new Vector3(point.x,targetpos.y,targetpos.z);

}