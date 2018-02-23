  
const url1 = "http://localhost:5000/comment"
const url = "https://jsonplaceholder.typicode.com/posts"



export   function fetchAPI(){

	return (fetch(url)
  		.then((response) => response.json()) )	
}

export function postAPI(data){
	return(fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: data,
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })

		)
}