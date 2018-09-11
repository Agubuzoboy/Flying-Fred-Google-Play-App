#pragma strict


function update(){  



}

function OnTriggerEnter2D (collider : Collider2D) { 

  if(collider.gameObject.name == "flying fred")
  {
  lifeanddeath.rocket = (true);
  Transform.Destroy(gameObject);  
  }
  
  }
