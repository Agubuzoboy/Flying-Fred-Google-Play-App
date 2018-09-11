#pragma strict

var generate : boolean = false; 
var skyrocketgraphic : Transform; 
var min : float = 0;
var max : float = 5; 
var minz : float = 0;
var maxz : float = 5;  
var amount : float = 0; 
var remake : float = 15;
var more : float = 15;

function Start () { 




}


function Update () { 

 if(lifeanddeath.rocket){
 generate = false;}



if(lifeanddeath.rocket) 
{

remake = more;

}



remake -= 1 * Time.deltaTime; 



if(remake <= 0) 
{
generate = (true); 


if(generate)    
{
 make(); 
 }



if(remake >= 1)
{ generate = (false);}




} 
}

 function make(){ 
 
 
remake += more; 
 
 
var x = Random.Range(min,max); 
var z = Random.Range(minz,maxz); 
var clone = Instantiate(skyrocketgraphic, Vector3(x,z,0),Quaternion.identity);   



generate = (false);

 }

