import React from 'react';
import './UnlimitedClasses.css';
import Layout from './Layout';


function LivestreamPersonal(props) {
    return (
        <>
            <Layout>
                <section class="text-center container layout">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">Livestream Personal Training Sessions</h1>
                            <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <p>
                                <a href="#" class="btn btn-primary btn-lg">Schedule Your Next Session</a>
                            </p>
                        </div>
                    </div>
                </section>
                <div className="container-sm classes-container">
                    <div className="form-container">
                        <div className="form">
                            <h3 className="h1-form">Schedule Your Training Session</h3>
                            <h3>Sign Up Form</h3>
                            <form action='/products' method='POST'>
                                <fieldset>
                                    <label for="name">Your Full Name</label>
                                    <input className="form-input" type='text' name='name' />
                                    <label for="description">Instructor Name</label>
                                    <input className="form-input" type='text' name='instructor' />
                                    <label for="date">Requsted Session Date</label>
                                    <input className="form-input" type='date' name='date' />
                                    <label for="time">Requsted Session Time</label>
                                    <input className="form-input" type='time' name='time' />
                                </fieldset>
                                <input className="form-btn btn-lg btn-block btn btn-primary" type='submit' name='' value='Schedule Now' />
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default LivestreamPersonal;