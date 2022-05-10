import React, { useRef } from 'react';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const navigate = useNavigate();
    const navigateRegister = () => {
        navigate('/register')
    }
    const resetPassword = async (event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset Password Link Sent Email')
        }
        else {
            toast('Enter Your Email')
        }
    }
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (loading || sending) {
        return <Loading height='800px'></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-50 mx-auto login-form'>
            <h2 className='text-primary text-center mb-5'>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name='email' id='' placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='password' required />

                <input
                    type="submit"
                    className='btn btn-primary w-50 mx-auto mt-2'
                    value="Login" />
                <p className='text-danger'>{error?.message}</p>
            </form>
            <p>New to Genius car? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <button to='' className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;