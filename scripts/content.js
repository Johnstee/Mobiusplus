if (window == top) {
window.addEventListener('keyup', doKeyPress, false);
}

trigger_key = 71; // G key
function doKeyPress(e){
	if (e.shiftKey && e.keyCode == trigger_key){
		document.getElementById('doInSession.0').click();
	}
}