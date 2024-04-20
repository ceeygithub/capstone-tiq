import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../Firebase'; 
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc} from 'firebase/firestore';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // eslint-disable-next-line
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const [role, setRole] = useState('');
  const [user, setUser] = useState();

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUser(user);
      console.log('User logged in:', user);
      const userRef = doc(db, 'users', user.uid);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        setRole(userData.role); // Set the role based on the data fetched from Firestore
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

 const login = async (email, password) => {
  try {
    await signOut(auth);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
    console.log("User logged in:", userCredential.user);

    // Fetch user role from Firestore and set it in the state
    const userRef = doc(db, 'users', userCredential.user.uid);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      setRole(userData.role); 
    } else {
      console.error("User document does not exist");
      setError("User document does not exist");
      setRole(''); // Set role to empty string if user document does not exist
    }

    // Return the user object after successful login
    return userCredential.user;
  } catch (error) {
    console.error('Error during login:', error);
    setError(error.message);
    return null;
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

//   const getUserRole = async (userId) => {
//   try {
//     const userDoc = await db.collection('users').doc(userId).get();
//     if (userDoc.exists) {
//       const userData = userDoc.data();
//       return userData.role;
//     } else {
//       console.error('User document not found');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error getting user role:', error);
//     return null;
//   }
// };

  const isAuthenticated = () => {
    return user !== null; // Returns true if auth.user is not null, false otherwise
  };

 const isAdmin = () => {
    return user && user.email === 'admin@gmail.com'
  
  };
  const isRegularUser = () => {
    return user && !isAdmin();
  };

  const value = {
    user,
    login,
    logout,
    resetPassword,
    isAdmin,
    isRegularUser,
    isAuthenticated,
  
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
