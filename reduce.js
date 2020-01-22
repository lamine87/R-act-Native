import addContact from './action'
import { combineReducers } from 'redux'

function addContact (previousState,action){
  switch (action){
    case 'add_contact':
      return { ...{},...previousState, ...{contactList:previousState.contactList.push(action.contactObject)}}
  }
}

export default addContact