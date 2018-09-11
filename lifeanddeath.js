#pragma strict
var gameover : boolean = false;
var speed : float = 5;
var screentimer : float = 3;  
static var timer : float = 10; 
var ten : boolean = false; 
static var rocket : boolean = false; 
var time : float = 10;
var flyingfredjetpack : Sprite;
var flyingfrednojetpack : Sprite;
var cheek : float = lifeanddeath.timer; 
static var changecolor : boolean = false; 


function Start () {

lifeanddeath.rocket = false;

lifeanddeath.timer = time; 

lifeanddeath.changecolor = false;

}

function Update () {

if(gameover){ 
collider2D.enabled = false;
transform.Rotate(Vector3(360,0,0) * speed * Time.deltaTime); 
sound.hurt = true;
PlayerPrefs.SetFloat("score.scorecount",score.scorecount);
screentimer -= 1 * Time.deltaTime; 
lifeanddeath.changecolor = true;  
}




if(screentimer <= 0){   
score.scorecount = 0;
Application.LoadLevel("dead screen");}


if(lifeanddeath.rocket){ 
lifeanddeath.timer -= 1 * Time.deltaTime; 
 GetComponent(SpriteRenderer).sprite = flyingfredjetpack;

}

if(lifeanddeath.timer <= 0){
lifeanddeath.rocket = (false); 
lifeanddeath.timer = time;
}  

if(lifeanddeath.rocket == (false)){ 
 GetComponent(SpriteRenderer).sprite = flyingfrednojetpack;}

cheek = lifeanddeath.timer;

}




function OnCollisionEnter2D (collision:Collision2D) {

{
gameover = (true);  
} 
}

function OnTriggerEnter2D (collider : Collider2D) { 

  if(collider.gameObject.name == "sky rocket"){
lifeanddeath.rocket = (true);
}  




}