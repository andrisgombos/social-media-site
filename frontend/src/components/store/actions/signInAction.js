export const signInAction = (credentials, history) => {
    return (dispatch, getState) => {
        const url = "https://backpain.propulsion-learn.ch/backend/api/auth/token/";
    const config = {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    fetch(url, config)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          if(data.access || localStorage.getItem('token')){
        const user = {
          token: data.access,
          userInfo: data.user
        }    
        const action = {
          type: "USER_SIGNIN",
          payload: user,
        };
        dispatch(action);
        if(data.access)localStorage.setItem("token", data.access);
        localStorage.setItem("user", data.user.first_name);
        history.push('/')
        }else {
            alert('Ooops, try again!')
        }
      });
    }
}