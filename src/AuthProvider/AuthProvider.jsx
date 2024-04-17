import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import auth from '../firebase/Firebase.config.js';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleprovider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // const updateProfile = 


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, url) => {
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: url,
        })
        .then(console.log('profile updated!'))
        .catch(console.log('not updated!'))
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         if (currentUser) {
    //             setUser(currentUser)
    //         }

    //         setLoading(false)
    //     })

    //     return () => {
    //         return unsubscribe()
    //     };
    // }, [])
    
    useEffect(()=>{
        onAuthStateChanged(auth, (cur_User)=>{
            // console.log(cur_User);
            // cur_User && setUser(cur_User);
            setUser(cur_User);
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
        // setUser(null);
    }
    
    const allValues = {
        user,
        setUser,
        createUser,
        updateUser,
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