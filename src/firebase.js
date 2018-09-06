import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyD_lFoGBYhEE9ACLqWmVfpd-VtpgP_f2qs",
  authDomain: "todo-d318b.firebaseapp.com",
  databaseURL: "https://todo-d318b.firebaseio.com",
  projectId: "todo-d318b",
  storageBucket: "todo-d318b.appspot.com",
  messagingSenderId: "670974559888"
};

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots:true })

export default firestore