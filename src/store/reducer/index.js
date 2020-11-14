
// global state
const INITIAL_STATE = {
    users: [{
        name : 'Kainat',
        email : 'faryashah555@gmail.com'
    }]
}

//here state is default param
export default (state = INITIAL_STATE, action) => {
    console.log('auth_action => ', action)
    return state;
}