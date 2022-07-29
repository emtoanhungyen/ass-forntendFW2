const intiaValue = {
    cart: [],
    total: 0
}
const rootReducer = (state = intiaValue, action: any) => {
    switch (action.type) {
        case "cart/add":

            return state;

        default:
            return state;
    }
}
export default rootReducer;