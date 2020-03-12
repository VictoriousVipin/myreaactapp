var authReducer = function (state = { pen: 10, cart: [], cartInitialised: false }, action) {
    switch (action.type) {
        // case 'INCREMENT':
        //     state = { ...state };
        //     state["pen"] = state["pen"] + 1;
        //     break;
        // case 'DECREMENT':
        //     state = { ...state };
        //     state["pen"] = state["pen"] - 1;
        //     break;
        // default:            
        //     break;

        case 'USERINIT': {
            state = { ...state };
            state["email"] = localStorage.email;
            state["name"] = localStorage.name;
            break;
        }
        case 'CARTINIT': {
            state = { ...state };
            state["cartInitialised"] = action.payload.cartInitialised;
            break;
        }
        case 'LOGIN': {
            state = { ...state };
            state["email"] = action.payload.email;
            state["isLoggedIn"] = action.payload.isLoggedIn;
            state["name"] = action.payload.name;
            break;
        }
        case 'LOGOUT': {
            state = { ...state };
            state["email"] = null;
            state["name"] = null;
            break;
        }
        case 'ADDTOCART': {
            state = { ...state };
            state["cart"].push(action.payload.product);
            break;
        }
        case 'REMOVEFROMCART': {
            state = { ...state };
            var index = state["cart"].indexOf(action.payload.product);
            state["cart"].splice(index, 1);
            break;
        }
        default:
            state = { ...state };
            break;
    }

    return state;
};

export default authReducer;