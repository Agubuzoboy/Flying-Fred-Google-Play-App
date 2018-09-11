#pragma strict
var maingame : boolean = false;
function Start () {

}

function Update () {  

if(maingame){ 
Destroy (GameObject.FindWithTag("soundbox"));
Application.LoadLevel("main game"); 
renderer.material.color = Color.green;


}


}

function OnMouseDown(){   

maingame = (true);

}




 
 
 
 

 
 
 
