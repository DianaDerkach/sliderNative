export const initialState = {
  character: {
    bias: 0,
    answer: 'none'
  },
  score: 0,
  questionsScreen: {
    rightAnswer: '',
    question: '',
  },
  screenQuestion: {
    id: '',
    rightAnswer: '',
    wrongAnswer: '',
    question: ''
  },
  questions: [
    {
      id: '0',
      rightAnswer: 'Null',
      wrongAnswer: 'Five',
      question: 'What is the question number?'
    },
   {
      id: '1',
      rightAnswer: '24?',
      wrongAnswer: '21',
      question: 'How old is she?'
    },
    {
      id: '2',
      rightAnswer: 'no',
      wrongAnswer: 'yes',
      question: 'Does he goes to the theater?'
    },
    {
      id: '3',
      rightAnswer: 'i dont tell',
      wrongAnswer: 'okey',
      question: 'Tell me about a time you showed initiative on the job'
    },
    {
      id: '4',
      rightAnswer: 'cry',
      wrongAnswer: 'laugh',
      question: 'What do you do when a team member refuses to complete his or her quota of the work?'
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
