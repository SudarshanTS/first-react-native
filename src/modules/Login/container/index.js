import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import * as loginActions from './actions';
import { connect } from 'react-redux'
class LoginContainer extends Component {
    static navigationOptions = {
        title: 'welcome',
    };
    render() {
        const { navigation, data, actions } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text>Login</Text>
                    <View>
                        <Text style={styles.errorBlock}>
                            {data.errorMgs}
                        </Text>
                    </View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="Enter Email"
                        style={styles.inputField}
                        onChangeText={(text) => actions.handleChange("email", text)}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder="Enter Password"
                        style={styles.inputField}
                        onChangeText={(text) => actions.handleChange("pwd", text)}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={actions.handlepress}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableHighlight onPress={() => navigation.navigate("SignUp", {
                    handleChange: actions.handleChange,
                    handlePress: actions.handlepress,
                    parState: data.errorMgs
                },
                )}
                >
                    <Text style={styles.color}>Create an Account</Text>
                </TouchableHighlight>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        backgroundColor: "#f1f1f1",
        width: 300,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    inputField: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "100%",
        marginBottom: 10,
    },
    label: {
        textAlign: "left",
        width: "100%",
    },
    loginButton: {
        marginTop: 10,
        backgroundColor: "blue",
        width: 100,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        color: "#fff"
    },
    color: {
        color: "blue",
        textDecorationLine: "underline",
        marginTop: 10
    },
    errorBlock: {
        backgroundColor: "pink",
        borderColor: "#f1f1f1",
    }
});

const mapState = (state) => {
    return {
        data: state.loginReducer
    }
}

export const bindDispatch = _.memoize(dispatch => ({
    dispatch,
    actions: bindActionCreators(loginActions, dispatch)
}));
export default connect(mapState, bindDispatch)(LoginContainer);