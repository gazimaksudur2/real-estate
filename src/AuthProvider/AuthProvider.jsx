import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import auth from '../firebase/Firebase.config.js';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleprovider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (name, email, password, photoURL ) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth, (user)=>{
    //         console.log(user);
    //         setUser(user);
    //     });
    //     return unSubscribe();
    // },[]);
    useEffect(()=>{
        onAuthStateChanged(auth, (cur_User)=>{
            console.log(cur_User);
            cur_User && setUser(cur_User);
        });
    },[]);

    const googleLogin = ()=>{
        return signInWithPopup(auth, googleprovider);
    }

    const githubLogin = ()=>{
        return signInWithPopup(auth, githubProvider);
    }

    const logout = () => {
        signOut(auth);
    }
    
    const allValues = {
        val: 'hello',
        user,
        createUser,
        login,
        googleLogin,
        githubLogin,
        logout,
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;