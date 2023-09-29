document.getElementById("muteButton").addEventListener('click', ()=> {
	const video = document.getElementById('video');
	video.muted = !video.muted
})