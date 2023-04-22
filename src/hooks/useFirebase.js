import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import initializeFirebaseApp from "../firebase/Firebase.Init";

initializeFirebaseApp();
const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // create account
  const createAccount = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        addedName(name);
        const user = userCredential.user;
        setUser(user);
        saveUser(email, name, "POST");
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
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
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login useing google
  const loginUseingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const logOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    fetch(`https://wrishshop.onrender.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://wrishshop.onrender.com/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    createAccount,
    loginUser,
    logOutUser,
    user,
    loginUseingGoogle,
    setUser,
    setIsLoading,
    isLoading,
    saveUser,
    admin,
  };
};

export default useFirebase;
