import axios from 'axios';

export const postRegister = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/signup', data)
            .then(res => {
                console.log(res);
                if (res.data.response !== false && res.data.status !== 404) {
                    console.log("object", res.data.user);
                    localStorage.setItem("token", res.data.jwt);
                    dispatch(logInUser(res.data.user));
                    /* const message = res.data.message;
                    swal({
                        text: message,
                        title: "Success",
                        icon: "success",
                        closeOnClickOutside: true,
                        timer: 3000
                    })
                    .then(() => {
                        this.props.history.push("/", true);
                    }); */
                    } 
                    else {
                    const message = res.data.message;
                    console.log(message);
                    /* swal({
                        text: message,
                        title: "Error",
                        icon: "error",
                        className: "red-bg",
                        closeOnClickOutside: true,
                        timer: 3000
                    }).then(() => {
                        this.props.history.push("/host");
                    }); */
                }
            })
    }
}

export const postLogIn = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/signin', data)
            .then(res => {
                console.log(res);
                if (res.data.response !== false && res.data.status !== 404) {
                    console.log("object", res);
                    localStorage.setItem("token", res.data.jwt);
                    dispatch(logInUser(res.data.user));
                    /* const message = res.data.message;
                    swal({
                    text: message,
                    title: "Success",
                    icon: "success",
                    closeOnClickOutside: true,
                    timer: 3000
                    })
                    .then(() => {
                    this.props.history.push("/", true);
                    }); */
                } 
                else {
                    const message = res.data.message;
                    console.log(message);
                    /* swal({
                    text: message,
                    title: "Error",
                    icon: "error",
                    className: "red-bg",
                    closeOnClickOutside: true,
                    timer: 3000
                    }).then(() => {
                    this.props.history.push("/host");
                    }); */
                }
            })
    }
}

const logInUser = (user) => ({
    type: 'LOGIN_USER',
    payload: user
})