#pragma strict

function Start () {

}

var speed : float = 0.2;
	function Update () {
		if (Input.touchCount > 0 && 
		  Input.GetTouch(0).phase == TouchPhase.Moved) {
		
			var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
			
			// Move object across XY plane
			transform.Translate (touchDeltaPosition.x * speed * Time.deltaTime, 0, 0);
		}
	}		