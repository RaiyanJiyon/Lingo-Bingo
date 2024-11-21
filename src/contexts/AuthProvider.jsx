import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase_init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        user,
        setUser,
        createUser,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            return () => unsubscribe();
        })
    }, [])



    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export { AuthProvider, authContext };