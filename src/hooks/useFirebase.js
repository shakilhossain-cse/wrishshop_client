import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeFirebaseApp from "../firebase/Firebase.Init";

initializeFirebaseApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  // create account
  const createAccount = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        addedName(name);
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  // Added user name
  const addedName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };

  // Login User
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    createAccount,
    loginUser,
    logOutUser,
    user,
  };
};

export default useFirebase;
