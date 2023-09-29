function helloWorld() {
	const greeting = localStorage.getItem('GREETING') || 'HELLO';
	return `${greeting} world`
}
localStorage.setItem('GREETING', 'YOLO')

const greetingMessage = helloWorld();
console.log(greetingMessage); 