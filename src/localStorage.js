export const loadState =() =>{
	try{
		debugger;
		const localData = localStorage.getItem('state')
		if(localData === null){
			return undefined;
		}
		return JSON.parse(localData)
	}catch(e){
		
	}


}

export const saveState =(state) =>{
	try{
		const localData = JSON.stringify(state.postReducer)
		if(localData != undefined){
			localStorage.setItem('state',localData)
		}	
		
	}catch(e){
		
	}


}