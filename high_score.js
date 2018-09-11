#pragma strict 

static var highscore : float = 0; 
var scoring : float = 0;

function Start () {

}

function Update () {
 
 if(score.scorecount > highscore){
 high_score.highscore = score.scorecount;} 
 
 scoring = score.scorecount; 
 
 guiText.text = "score: " +score.scorecount;
 
 if(score.scorecount > PlayerPrefs.GetFloat("high_score.highscore")){ 
PlayerPrefs.SetFloat("high_score.highscore",score.scorecount);}
}