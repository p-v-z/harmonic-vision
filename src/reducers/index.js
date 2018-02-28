export default function(state = {
}, action) {
	
	switch(action.type) {
		// case 'ADD_MOVIE':
		// 	action.payload.id = state.IDcount++;
		// 	return {
		// 		...state,
		// 		movies: state.movies.concat(action.payload)
		// 	}
		// 
		// case 'START_EDIT_MOVIE':
		// 	return {
		// 		...state,
		// 		editingMovie: action.payload				
		// 	}
		
		default :
			console.log("Does not exist");
	}
	return state;
}
