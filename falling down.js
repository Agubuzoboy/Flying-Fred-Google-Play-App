#pragma strict

var fallingspeed : float = 5; 
var jetpackspeed :float = 10;  
var defaultspeed  : float = 7;
var fastspeed : float = 10;

function Awake () {
 fallingspeed = defaultspeed;

}

function Update () { 


transform.Translate(Vector3(0,-1,0) * fallingspeed * Time.deltaTime);
 
 
 if(lifeanddeath.rocket){ 
 fallingspeed = jetpackspeed;}
 
 
 if(lifeanddeath.rocket == (false)){ 
 fallingspeed = defaultspeed;}
 
 if(lifeanddeath.timer <= 10){
 jetpackspeed = fastspeed ;} 
 
 if(lifeanddeath.timer <= 3){
 jetpackspeed = 11;} 
 
 if(lifeanddeath.timer <= 2){
 jetpackspeed = 9;} 
 
 if(lifeanddeath.timer <= 1){
 jetpackspeed = 7;} 
}