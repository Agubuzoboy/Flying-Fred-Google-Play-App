#pragma strict

function Start () {

}

function Update () { 



if(lifeanddeath.rocket){ 
collider2D.enabled = false;} 

if(lifeanddeath.rocket == (false)){ 
collider2D.enabled = true;} 



if(transform.position.y <= -14.64019) 
Transform.Destroy(gameObject);


}