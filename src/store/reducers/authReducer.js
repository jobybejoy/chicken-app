
const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    // Login States
    case 'LOGIN_ERROR':
      console.log('Login Error');
      return {
        ...state,
        authError: 'Login Failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login Succes');
      return {
        ...state,
        authError: null
      }

    // Sign Out States
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state

    // SignUp States 
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.error.message
      }

    default: return state
  }
}

export default authReducer 