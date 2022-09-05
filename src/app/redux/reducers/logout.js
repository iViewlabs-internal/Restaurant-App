const initialState = true;

const changeLogOut = ((state=initialState,action)=>{
        if(action.type === "LOGIOUT"){
            console.log(state)
            return state = false;
        }else{
            return state = true;
        }
})

export default changeLogOut;