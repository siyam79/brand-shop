
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../FireBase/FireBaseConfig";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading , setLoading] =useState(true);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google login  

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //  Github Login 
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    // Profile handle 

    const handleUpdateProfile =( name , photo )=>{
        return updateProfile(auth.currentUser,{
            displayName: name , photoURL: photo 

        })
    }

    //   create User 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //   loging  Account 

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //   logOut account 

    const logOut = () => {
        return signOut(auth);
            
    }
    
    // using Obseverb    ata  user ke  deka suna kore  

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
           setLoading(false)

        });
        return () => {
            unSubcribe()
            
        }
    }, []);


    const authInformation = {
        googleLogin,
        githubLogin,
        createUser,
        user,
        signin,
        logOut,
        loading,
        handleUpdateProfile,
    }

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes
}
export default AuthProvider;
