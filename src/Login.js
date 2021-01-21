import React from 'react';
import Layout from './Layout';
import './Login.css';

function Login(props) {
    return (
        <>
            <div className='loginBody'>
                <Layout>
                    <div className='pageContent'>
                        <div className='pageItem loginContainer'>
                            <h2 className='title'>Log In</h2>
                            <form className='loginForm'>
                                <div>
                                    <label htmlFor='loginEmail'>Email</label><br />
                                    <input type='text' name='email' id='loginEmail' /><br />
                                </div>
                                <div>
                                    <label htmlFor='loginPassword'>Password</label><br />
                                    <input type='password' name='password' id='loginPassword' /><br />
                                </div>
                                <input type='submit' />
                            </form>
                        </div>
                        <div className='or'>
                            {/* <h2 className='orTitle title'>Or</h2> */}
                        </div>
                        <div className='pageItem signupContainer'>
                            <h2 className='title'>Sign Up</h2>
                            <form className='loginForm'>
                                <div>
                                    <label htmlFor='signupName'>Name</label><br />
                                    <input type='text' name='name' id='signupName' /><br />
                                </div>
                                <div>
                                    <label htmlFor='signupEmail'>Email</label><br />
                                    <input type='text' name='email' id='signupEmail' /><br />
                                </div>
                                <div>
                                    <label htmlFor='signupPassword'>Password</label><br />
                                    <input type='password' name='password' id='signupPassword' /><br />
                                </div>
                                <input type='submit' />
                            </form>
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    );
}

export default Login;