#pragma strict

var timer : float = 5;
function Start () {

}

function Update () {

timer -= 1 * Time.deltaTime; 

if(timer <= 0) 
Application.LoadLevel("main menu");



}