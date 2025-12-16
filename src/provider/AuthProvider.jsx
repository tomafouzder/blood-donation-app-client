import React, { createContext, useEffect, useState } from 'react';

import {
    createUserWithEmailAndPassword, getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [roleLoading, setRoleLoading] = useState(true);
    const [role, setRole] = useState('');
    const [userStatus, setUserStatus] = useState('')


    // Create user:
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // signIn:
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };


    // update profile
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // reset password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    // signout:
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    console.log(user)



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => {
            unsubscribe();
        }
    }, [])


    useEffect(() => {
        if (!user) return;
        axios.get(`http://localhost:5000/users/role/${user.email}`)
            .then(res => {
                setRole(res.data.role)
                setUserStatus(res.data.status)
                setRoleLoading(false)
            })

    }, [user])




    const authData = {
        user,
        loading,
        setUser,
        createUser,
        userSignIn,
        updateUserProfile,
        resetPassword,
        userSignOut,
        role,
        roleLoading,
        userStatus

    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;