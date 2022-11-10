async function fetchProducts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    let placeholder = document.querySelector('#tableBody');
	let out="";
	for(let i=0;i<data.length;i++){
		out+=`
		<tr>
			<td>${data[i].id}</td>
			<td>${data[i].name}</td>
			<td>${data[i].email}</td>
			<td>${data[i].address.street},${data[i].address.city},${data[i].address.zipcode}</td>
		</tr>
		`;
	}
	placeholder.innerHTML=out;
    

  }
  catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();