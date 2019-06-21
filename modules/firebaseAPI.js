import * as firebase from 'firebase';

export const createUser = (email, password) => {
  console.log('inside createUser func');
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => console.log('createUser error:', error));
}

// .then((data) => {
//   getUserCb(data.uid, (user) => cb(user))
// })

export const getUser = () => {

}

export const signInUser = (email, password) => {
  console.log('inside signInUser');
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => console.log('signInUser error:', error));
}

export const logoutUser = () => {
  firebase.auth().signOut()
}