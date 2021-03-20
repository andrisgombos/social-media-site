export const listPostsAction = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        const config = {
            method: "GET",
            headers: new Headers ({
                "Authorization": `Bearer ${token}`
            })
        }
        
        const response = await fetch("https://motion.propulsion-home.ch/backend/api/social/posts/", config)
        const data = await response.json()
        const posts = data.slice(0, 10);
        const action = {
            type: "LIST_POSTS",
            payload: posts
        }
        dispatch(action)
    }
}