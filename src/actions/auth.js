import Swal from "sweetalert2";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { FinishLoading, StartLoading } from "./ui";
import { noteLogout } from "./notes";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(StartLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(FinishLoading());
            })
            .catch((e) => {
                dispatch(FinishLoading());
                Swal.fire("Error", e.message, "error");
            });
    };
};

export const startLoginWithForm = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });

                dispatch(login(user.uid, user.displayName));
            })
            .catch((e) => {
                Swal.fire("Error", e.message, "error");
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
        });
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await signOut(auth);

        dispatch(logout());
        dispatch(noteLogout());
    };
};

export const logout = () => ({
    type: types.logout
});
