export const initialState = {
  character: {
    bias: 0,
    category: 'none'
  },
  score: 0,
  thingsScreen: [
    {
      name: 'apple',
      category: 'eatable',
    }
  ],
}

export const combineReducers = reducers => {
  return (state, action) => {
    return Object.keys(reducers).reduce(
      (acc, prop) => {
        return ({
          ...acc,
          ...reducers[prop]({ [prop]: acc[prop] }, action),
        })
      },
      state
    )
  }
}
