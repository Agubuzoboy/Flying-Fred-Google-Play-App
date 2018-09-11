#pragma strict
var choose : boolean = false;
var jetpacksong : boolean = false; 
var play : boolean = true;
var song1 : AudioClip; 
var song2 : AudioClip; 
var song4 : AudioClip;
var kill : boolean = true; 
var count : float = 0;


function Start () {


}

function Update () {  

if(choose){
var x = Random.Range(1,3); 
choose = (false); }


 
  if(x == 1) {
 audio.clip = song1; 
audio.Play();
}
  
  
  if(x == 2){  
audio.clip = song2; 
 audio.Play(); 
} 
 


if(lifeanddeath.rocket == (true))
{ 
 audio.Pause();  
}
else 
{
if(audio.isPlaying == (false)){
audio.Play();}
}


}
	
 
 






function Awake () { 


		DontDestroyOnLoad (transform.gameObject); 

	
	
	}  
	
	

			
	

	
		
		
		
		
		
	