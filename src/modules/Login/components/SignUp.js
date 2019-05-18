import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
class SignUp extends Component {

    render() {
        const { navigation } = this.props;
        const { params } = navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text>SignUp</Text>
                    <View>
                        <Text style={styles.errorBlock}>
                            {params.parState}
                        </Text>
                    </View>
                    <Text style={styles.label}>Email</Text>

                    <TextInput
                        placeholder="Enter Email"
                        style={styles.inputField}
                        onChangeText={(text) => params.handleChange("email", text)}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder="Enter Password"
                        style={styles.inputField}
                        onChangeText={(text) => params.handleChange("pwd", text)}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.signUpButton} >
                    <Text style={styles.signUpText} onPress={() => params.handlePress("signup")}>SignUp</Text>
                </TouchableOpacity>
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
    signUpButton: {
        marginTop: 10,
        backgroundColor: "blue",
        width: 100,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    signUpText: {
        color: "#fff",
    },
    errorBlock: {
        backgroundColor: "pink",
        borderColor: "#f1f1f1",
    }
});


export default SignUp;
