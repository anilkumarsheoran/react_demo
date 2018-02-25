


export  const postData =(data, id	) => {
	return {
		type: 'POST_DATA',
		data,
		id 

	}
}

export  const updateData =(data, id	) => {
	return {
		type: 'UPDATE_DATA',
		data,
		id 

	}
}

export const fetchData = (data) => {

	return {type: 'GET_DATA',
	data
	}
}


export const successFetchData = (data) =>{
	return {
		type: 'DISPLAY_DATA',
		data
	}
}
