export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        value: users
    }
}

export const getUsersFromAPI = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(results => dispatch(setUsers(results)))
    }
}