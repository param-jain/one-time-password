import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default class App extends React.Component {

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyD12zvqFo3hM-d-xNTC-BYsrxSrzLdDRVA",
      authDomain: "one-time-password-fc695.firebaseapp.com",
      databaseURL: "https://one-time-password-fc695.firebaseio.com",
      projectId: "one-time-password-fc695",
      storageBucket: "one-time-password-fc695.appspot.com",
      messagingSenderId: "758859683566"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
