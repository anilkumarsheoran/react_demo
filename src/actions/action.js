


export  const postData =(data, id , data1	) => {
	return {
		type: 'POST_DATA',
		data,
		id , data1
	}
}

export  const updateData =(data, id	, data1) => {
	return {
		type: 'UPDATE_DATA',
		data,
		id , data1

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
