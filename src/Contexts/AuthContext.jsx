
import React, { useContext, useState, useEffect } from 'react';
import { auth, db,storage } from '../Firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import {  ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

// eslint-disable-next-line no-unused-vars
const [error, setError] = useState("");
// eslint-disable-next-line no-unused-vars
const [role, setRole] = useState('');
  const [user, setUser] = useState();

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      // Check if there is a user authenticated
      const currentUser = auth.currentUser;

      // If there is a user authenticated and it's not the same as the current user, sign out the current user
      if (currentUser && currentUser.uid !== user.uid) {
        try {
            await auth.signOut();
          console.log('Previous user signed out successfully');
        } catch (error) {
          console.error('Error signing out previous user:', error);
          // Handle error if needed
        }
      }

      // Proceed with setting the new user and role
      setUser(user);
      console.log('User logged in:', user);
      const userRef = doc(db, 'users', user.uid);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        setRole(userData.role);
      } else {
        console.error('User document does not exist');
        setError('User document does not exist');
      }
    } else {
      setUser(null);
      setRole('');
      console.log('User logged out');
    }
  });

  return () => {
    unsubscribe(); // Unsubscribe from the auth state change listener
    setUser(null); // Clear user state when component unmounts
  };
}, []);




  const signup = async (email, password) => {
  setError(""); // Clear any previous error messages

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Set up profileData object
    const profileData = {
      userId: userCredential.user.uid,
      email: email,
      role: 'regular',
    };

    // Add user data to Firestore
    const userRef = await addDoc(collection(db, 'users'), profileData);

    console.log("Document written with ID:", userRef.id);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      setError("Email already in use. Please try another email.");
    } else {
      setError(error.message);
    }
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
    console.log("User logged in:", userCredential.user);

    // Fetch user role from Firestore and set it in the state
    const userRef = doc(db, 'users', userCredential.user.uid); // Use user UID to fetch user document
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      setRole(userData.role); 
    } else {
      console.error("User document does not exist");
      setError("User document does not exist");
    }

    // Return the user object after successful login
    return userCredential.user;
  } catch (error) {
    console.error('Error during login:', error);
    setError(error.message);
    return null;
  }
};
  
const updateUserProfile = async (profileData, image, setUploadProgress) => {
  try {
    if (!image) {
      console.error('Image is not selected.');
      return;
    }

    // Update user profile data
    await updateProfile(user, profileData);

    // Fetch the updated user data
    const updatedUser = auth.currentUser;

    // Upload image to Firebase Storage
    const storageRef = ref(storage, `userImages/${user.uid}/${image.name}`);
    const uploadTask = uploadBytes(storageRef, image);

    // Observe state changes, errors, and completion of the upload.
    uploadTask
      .then(snapshot => {
        // Get the upload progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        console.log('Upload is ' + progress + '% done');
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });

    // Upload completed successfully, get the download URL of the image
    const snapshot = await uploadTask;
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    // Update user's profile data with the image URL
    await updateProfile(user, { ...profileData, photoURL: downloadURL });

    // Update user state
    setUser(auth.currentUser);
    console.log('User profile and display picture updated successfully:', updatedUser);
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};


  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      throw error;
    }
  };

  const resetPassword = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (error) {
      throw error;
    }
  };


const isAuthenticated = () => {
  return !!user; // Returns true if auth.user is not null, false otherwise
};

const isAdmin = () => {
  return  user && user.email === 'admin@gmail.com';
};


const isRegularUser = () => {
  return !isAdmin();
};


  const value = {
    user,
    login,
    signup,
    logout,
    resetPassword,
    isAdmin,
    isRegularUser,
    isAuthenticated,
updateUserProfile ,

  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
