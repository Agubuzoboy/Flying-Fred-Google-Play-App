#pragma strict 

static var hurt : boolean = false;
 var ouch : AudioClip;
function Start () {

}

function Update () { 

if(hurt) 
audio.PlayOneShot(ouch); 
sound.hurt = (false);




}