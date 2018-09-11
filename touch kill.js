#pragma strict

function Start () {

}

function Update () {


}



function OnCollisionEnter2D(collision:Collision2D){ 

Destroy(collision.gameObject);


}
