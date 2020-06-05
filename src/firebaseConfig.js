import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAjXgxxZr-5uE79nypvnnCCjXHpHKLuPbY',
  authDomain: 'gobarber-96e65.firebaseapp.com',
  databaseURL: 'https://gobarber-96e65.firebaseio.com',
  projectId: 'gobarber-96e65',
  storageBucket: 'gobarber-96e65.appspot.com',
  messagingSenderId: '954928995701',
  appId: '1:954928995701:web:0a0c52ddde3a502065c73c',
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  /* Auth API */
  doCreateUserWithEmailAndPassword(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut() {
    this.auth.signOut();
  }

  doPasswordReset(email) {
    this.auth.sendPasswordResetEmail(email);
  }

  doPasswordUpdate(password) {
    this.auth.currentUser.updatePassword(password);
  }
}

export default Firebase;
