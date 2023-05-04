export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            console.log(state)
            console.log(action)
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default:
            return state;
    }
}

export default reducer;