import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";

import { login } from "../actions/auth";
import { JournalScreen } from "../components/journal/JournalScreen";
import { CircularIndeterminate } from "../util/CircularIndeterminate";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Persistir usuario autenticado
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <div className="d-flex justify-content-center">
                <CircularIndeterminate />
            </div>
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={AuthRouter} 
                        isAuthenticated={isLoggedIn}
                        />

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={JournalScreen} 
                        isAuthenticated={isLoggedIn}
                    />

                    <Route>
                        <Redirect to="/auth/login" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
