let campaigns = [];

export default function(state= campaigns, action){
	switch(action.type){

        case 'ADD_CAMPAIGN' :
        let campaign = { name : action.payload, history : []}
        return [...state, campaign]

        case 'DELETE_CAMPAIGN':
        const stateTemp = [
            ...state.slice(0, action.payload),
            ...state.slice(action.payload + 1)
          ];
        return stateTemp;

        case 'RENAME_CAMPAIGN':
          let newst = state;
          newst[action.index]["name"] = action.newName;
          console.log(newst,action.newName, 'newst');
          return newst;

	}
	return state;
}