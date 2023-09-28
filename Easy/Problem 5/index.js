document.getElementById('toggleButton').addEventListener('click', function () {
	var header = document.getElementById('header')
	if (header.style.fontSize === '16px') {
		header.style.fontSize = '32px'
	} else {
		header.style.fontSize = '16px'
	}
})