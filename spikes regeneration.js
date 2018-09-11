#pragma strict  

var max : float = 5;
var min : float = 0;
var obstacle : GameObject;
var regenerate : boolean = false;
var far : float = 0; 
var yes : boolean = true;
var amount : float = 0; 
var stuff : float = 0; 
var ding : AudioClip;



function Start () {


}

function Update () {  

if(amount >= 1) 
regenerate = (false);


regenerate = (false);


 }  

function OnTriggerEnter2D (collider : Collider2D) { 

 if(collider.gameObject.name == "flying fred"){
regenerate = (true);}

var x = Random.Range ( min, max); 
var y =  far + transform.position.y;  

if(regenerate){
var z = Instantiate(obstacle, Vector3(x,y,0),Quaternion.identity); 
amount += 1; 
stuff += 1; 
score.scorecount += 1; 
audio.PlayOneShot(ding); 
regenerate = (false);
} 

regenerate = (false);



}