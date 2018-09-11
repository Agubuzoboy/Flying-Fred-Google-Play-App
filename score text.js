#pragma strict

function Start () {

}

function Update () {

guiText.text = "score: " + PlayerPrefs.GetFloat("score.scorecount");
}