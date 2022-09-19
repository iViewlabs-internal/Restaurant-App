const initialState = true;

const changeLogOut = ((state=initialState,action)=>{
        if(action.type === "LOGOUT"){
            return state = false;
        }else{
            return state = true;
        }
})

export default changeLogOut;