#pragma strict
var endgame : boolean = false;
function Start () {

}

function Update () {  

if(endgame){ 
Destroy (GameObject.FindWithTag("soundbox")); 
renderer.material.color = Color.red;
Application.Quit(); 
}


}

function OnMouseDown(){   

endgame = (true);

}


