export const listUsersAction = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        const config = {
            method: "GET",
            headers: new Headers ({
                "Authorization": `Bearer ${token}`
            })
        }
        
        fetch("https://motion.propulsion-home.ch/backend/api/users/", config)
        .then(res => res.json())
        .then(data => {
            // console.log('data:', data);
            const action = {
                type: 'LIST_USERS',
                payload: data
            }
            dispatch(action)
        })
    }
}