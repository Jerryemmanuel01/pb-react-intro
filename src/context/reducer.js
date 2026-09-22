import { useReducer } from "react";

export const valueChangeFn = (state, action) => {
//   if (action.type === "increment") {
//     return state + 2;
//   }
//   if (action.type === "decrement") {
//     return state - 1;
//   }

    switch(action.type){
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "increment_by":
            return state + action.payload;
        case "reset": 
            return 0;
        default:
            return state
    }
};

// dispatch(action)


// const [state, dispatch] = useReducer(reducer, initialState)