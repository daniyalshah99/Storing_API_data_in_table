fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector('#tableBody');
	let out="";
	for(let i=0;i<products.length;i++){
		out+=`
		<tr>
			<td>${products[i].id}</td>
			<td>${products[i].name}</td>
			<td>${products[i].email}</td>
			<td>${products[i].address.street},${products[i].address.city},${products[i].address.zipcode}</td>
		</tr>
		`;
	}
	placeholder.innerHTML=out;
})