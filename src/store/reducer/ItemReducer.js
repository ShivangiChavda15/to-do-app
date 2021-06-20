const initialState = {
    items: [],
}

export default function ItemReducer(state= initialState, action) {
    switch(action.type) {
        case 'ADD_ITEM': 
            return { 
                ...state,
                items: [
                    ...state.items,
                    action.payload,
                ]
            }
        case 'DELETE_ITEM':
            console.log(action.payload);

            const updatedItems = state.items.filter((item) => {
                return item.userName !== action.payload;
            });
            return {
                ...state,
                items: updatedItems,
            }
        default:
            return state;
    }
}