import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location?.state?.from || '/';

    // Redirect user to the actual destination after sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(res => history.push(redirect_uri));
    }

    return (
        <div className="text-center mb-5">
            <h2>Please Sign in</h2>
            <Button onClick={handleGoogleSignIn} variant="primary">Google sign in</Button>
        </div>
    );
};

export default SignIn;