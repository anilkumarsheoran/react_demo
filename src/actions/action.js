
import UUID from 'uuid/v4'

export  const postData =(data, id	) => {
	return {
		type: 'POST_DATA',
		data,
		id : UUID()

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
