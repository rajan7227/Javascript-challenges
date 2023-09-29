const fetchBtn = document.getElementById("fetchBtn");

const handleDataFetch = async () => {
		await fetch("https://jsonplaceholder.typicode.com/posts/1")
		.then((response)=> response.json())
		.then((data) => {
			document.getElementById("dataContainer").innerHTML = `${data.title}`
		})
		.catch((err)=> {throw err})
}

fetchBtn.addEventListener("click", handleDataFetch)