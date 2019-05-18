


export const initialstate = {
    email: "",
    pwd: "",
    rows: [],
    errorMgs: ""
}
export const ONCHANGE = "ONCHANGE";

export const handleChange = (name, value) => ({
    type: ONCHANGE, payload: { name: name, value: value }
})


// export const onChange = (name, value) => {
//     return async (dispatch, getState) => {
//         dispatch(handleChange(name, value));
//     }

// }
export const handlepress = (key) => {
    const { email, pwd, rows } = this.state;
    const { navigation } = this.props;
    if (key === "signup") {
        if (email === "" && pwd === "") {
            return navigation.navigate("SignUp", {
                handleChange: this.handleChange,
                handlePress: this.handlepress,
                parState: "Enter all fields"
            })
            //  return this.setState({ errorMgs: "Enter all fields" });

        }
        rows.push({ email, pwd });
        this.setState({ rows });
        this.props.navigation.navigate("Login");
    }
    else {
        if (email === "" && pwd === "") {
            return this.setState({ errorMgs: "Enter all fields" });
        }
        row.map((rw) => {
            if (rw.email === email && rw.pwd === pwd) {
                return this.props.navigation.navigate("Home");
            }
            else {
                console.log("sorry wrong")
            }
        })

    }
}
















export const loginReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ONCHANGE:
            return { ...state, [action.payload.name]: action.payload.value }
    }
    return state
}