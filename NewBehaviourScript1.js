#pragma strict

var song4 : AudioClip;
var highspeed : float = 1.25;
var normal : float = 1;

function Start () {

}

function Update () { 

audio.Pause();

if(lifeanddeath.rocket) 
{ 
audio.clip = song4;  
audio.Play();
} 

if(lifeanddeath.timer <= 2){ 
audio.pitch = highspeed;
} 
else 
{
audio.pitch = normal;
}



}