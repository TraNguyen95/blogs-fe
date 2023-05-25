import { combineReducers } from 'redux'

const INCREMENT_BIRD = 'INCREMENT_BIRD'
const ADD_BIRD = 'ADD_BIRD'
export function addBird(bird) {
  return {
    type: 'ADD_BIRD',
    bird
  }
}

export function incrementBird(bird) {
  return {
    type: INCREMENT_BIRD,
    bird
  }
}

const defaultBirds = [
  {
    name: 'robin',
    views: 1
  }
]

function birds(state = defaultBirds, action) {
  switch (action.type) {
    case ADD_BIRD:
      return [
        ...state,
        {
          name: action.bird,
          views: 1
        }
      ]
    case INCREMENT_BIRD: {
      let bird = state.find((b) => action.bird === b.name)
      let birds = state.filter((b) => action.bird !== b.name)
      return [...birds, { ...bird, views: bird.views + 1 }]
    }
    default:
      return state
  }
}

const bird_app = combineReducers({
  birds
})

export default bird_app
