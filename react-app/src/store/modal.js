const MODAL_OPEN_SEARCHINDEX = "searchindex/open"
const MODAL_CLOSE_SEARCHINDEX = "searchindex/close"
const MODAL_OPEN_LOGIN = "loginModal/open";
const MODAL_CLOSE_LOGIN = "loginModal/close";
const MODAL_OPEN_SIGNUP = "signupModal/open";
const MODAL_CLOSE_SIGNUP = "signupModal/close";
const MODAL_OPEN_COMINGSOON = "comingSoon/open";
const MODAL_CLOSE_COMINGSOON = "comingSoon/close";
const MODAL_OPEN_CHARACTER = "character/open"
const MODAL_CLOSE_CHARACTER = "character/close"
const MODAL_OPEN_CHEAT = "cheat/open"
const MODAL_CLOSE_CHEAT = "cheat/close"

export const openLogin = () => {
    return {
      type: MODAL_OPEN_LOGIN,
    };
  };
  
  export const closeLogin = () => {
    return {
      type: MODAL_CLOSE_LOGIN,
    };
  };
  
  export const openSignup = () => {
    return {
      type: MODAL_OPEN_SIGNUP,
    };
  };
  
  export const closeSignup = () => {
    return {
      type: MODAL_CLOSE_SIGNUP,
    };
  };

export const openSearchIndex = () =>{
    return {
        type: MODAL_OPEN_SEARCHINDEX,
    }
}

export const closeSearchIndex = () =>{
    return {
        type: MODAL_CLOSE_SEARCHINDEX,
    }
}

export const openComingSoon = () => {
    return {
      type: MODAL_OPEN_COMINGSOON,
    };
  };
  
  export const closeComingSoon = () => {
    return {
      type: MODAL_CLOSE_COMINGSOON,
    };
  };

export const openCharacter = () => {
  return {
    type: MODAL_OPEN_CHARACTER,
  }
}
export const closeCharacter = () => {
  return {
    type: MODAL_CLOSE_CHARACTER,
  }
}
export const openCheat = () => {
  return {
    type: MODAL_OPEN_CHEAT,
  }
}
export const closeCheat = () => {
  return {
    type: MODAL_CLOSE_CHEAT,
  }
}

const initialState = {
    searchIndexShow: false,
}

const modalReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case MODAL_OPEN_SEARCHINDEX:
            newState = Object.assign({}, state, { searchIndexShow: true });
            return newState;
        case MODAL_CLOSE_SEARCHINDEX:
            newState = Object.assign({}, state, { searchIndexShow: false });
            return newState;
            case MODAL_OPEN_LOGIN:
      newState = Object.assign({}, state, { loginShow: true });
      return newState;
    case MODAL_CLOSE_LOGIN:
      newState = Object.assign({}, state, { loginShow: false });
      return newState;
    case MODAL_OPEN_SIGNUP:
      newState = Object.assign({}, state, { signupShow: true });
      return newState;
    case MODAL_CLOSE_SIGNUP:
      newState = Object.assign({}, state, { signupShow: false });
      return newState;
      case MODAL_OPEN_COMINGSOON:
        newState = Object.assign({}, state, { comingSoonShow: true });
        return newState;
      case MODAL_CLOSE_COMINGSOON:
        newState = Object.assign({}, state, { comingSoonShow: false });
        return newState;
        case MODAL_OPEN_CHARACTER:
          newState = Object.assign({}, state, {characterShow: true})
          return newState
        case MODAL_CLOSE_CHARACTER:
          newState = Object.assign({}, state, {characterShow: false})
          return newState
        case MODAL_OPEN_CHEAT:
          newState = Object.assign({}, state, {cheatShow: true})
          return newState
        case MODAL_CLOSE_CHEAT:
          newState = Object.assign({}, state, {cheatShow: false})
          return newState
        default:
            return state
    }
}

export default modalReducer