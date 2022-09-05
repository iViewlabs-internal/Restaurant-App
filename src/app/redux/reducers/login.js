const initialState = false;

const changeLogin = ((state=initialState,action)=>{
        if(action.type === "LOGIN"){
            console.log(state)
            return state = true;
        }else{
            return state = false;
        }
})

export default changeLogin;