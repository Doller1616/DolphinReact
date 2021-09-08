
const userSignUp = {
    data: {},
    isLoading : true,
}

const userSignIn = {
    data: {},
    isLoading : true,
}

const initialState = {
    userSignUp,
    userSignIn
}
export const SignInSignUp = (state = initialState ,action) => {
    switch(action.type){
    case "ADD_USER" :
      return { 
        ...state, 
        ...{ ...loginUser, ...action?.payload }
    }
    default : 
     return {... state }
}}; 