#pragma strict

var speed : float = 0; 

var inspeed : float =0.1; 

var cheek : boolean = false;

function Start () {

}

function Update () { 


renderer.material.mainTextureOffset = new Vector2(0,(Time.time * speed)%1);

if(lifeanddeath.changecolor){
renderer.material.mainTexture = Resources.Load("dead sky back ground", Texture2D);
}
 
 cheek = lifeanddeath.changecolor;
 
}