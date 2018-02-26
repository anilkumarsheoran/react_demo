export const loadState =() =>{
	try{
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
		debugger;
		const localData = JSON.stringify(state)
		if(localData !== undefined){
			localStorage.setItem('state',localData)
			return true
		}	
		
	}catch(e){
		
	}


}

const ITEMS = [
  {title: 'user1',id: 1},
  {title: 'user2',id: 2},
  {title: 'user3',id: 3},
  {title: 'user4',id: 4},
  {title: 'user5', id: 5},
  {title: 'user6', id: 6},
  {title: 'user7', id: 7}
];

export const initialState =(ITEMS) =>{
	try{
		if(localStorage.getItem('state') === null){
			const initialData = JSON.stringify(ITEMS)
			if(initialData !== undefined){
				localStorage.setItem('state',initialData)
			}
		}
			
		
	}catch(e){
		
	}


}