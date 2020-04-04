export default (state, action) => {
  const {key, value} = action
  if (key) {
    const newState = {
      ...state,
      [key]: value,
    }
    if (!value) delete newState[key]
    return newState
  } else return state
}
