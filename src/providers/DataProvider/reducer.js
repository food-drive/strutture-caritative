export default (state, action) => {
  const {key, value, clear} = action
  if (key) {
    return {
      ...state,
      [key]: {
        ...state[key],
        value,
      },
    }
  } else if (clear) {
    const newState = {}
    Object.keys(state).forEach(key => {
      newState[key] = {...state[key], value: ''}
    })
    return newState
  } else return state
}
