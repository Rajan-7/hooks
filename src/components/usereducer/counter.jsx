const counter = (state, action) => {
  if (action.type === "IN") {
    return (state = state + 1)
  }
  if(action.type === "DE"){
    let num =0;
    state >=1 ? num = state - 1 : num = 0;
    return num;
  }
  return state;
};

export default counter;