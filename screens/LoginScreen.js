import React, {useState} from 'react';
import { 
    KeyboardAvoidingView,
    View, 
    StyleSheet, 
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import * as FirebaseAPI from '../modules/firebaseAPI';
import firebase from 'firebase';

export default function LoginScreen(props) {

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const watchAuthState = (navigation) =>  {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            // User is signed in.
                navigation.push('Main');
            }
        });
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.spacer}>
                
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Login Screen</Text>
                <TextInput 
                    style={styles.textInput}
                    value={state.email}
                    placeholder={'Enter Your Email'}
                    onChangeText={(email) => setState({
                        email: email,
                        password: state.password
                    })}
                />
                <TextInput 
                    secureTextEntry={true}
                    style={styles.textInput}    
                    value={state.password}
                    placeholder={'Enter Your Password'}
                    onChangeText={(password) => setState({
                        email: state.email,
                        password
                    })}
                />

                <TouchableOpacity 
                    style={styles.textInput}
                    onPress={() => FirebaseAPI.createUser(state.email, state.password)}
                >
                <Text>Create a New Account</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.textInput}
                    onPress={() => {
                        FirebaseAPI.signInUser(state.email, state.password);
                        watchAuthState(props.navigation);
                    }}
                >
                <Text>Sign In</Text>
                </TouchableOpacity>
                
            </View> 
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  spacer: {
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 50,
    textAlign: 'center',
  },
  text: {
    color: 'rgba(96, 100, 109, 1)',
    fontSize: 18,
    lineHeight: 18,
    padding: 5,
    textAlign: 'center',
  },
  textInput: {
    color: 'rgba(96, 100, 109, 1)',
    fontSize: 16,
    padding: 10,
    width: '75%'
  },
});
