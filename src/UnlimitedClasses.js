import React from 'react';
import './UnlimitedClasses.css';
import Layout from './Layout';

function UnlimitedClasses(props) {
    return (
        <>
            <Layout>
                <section class="text-center container layout">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">Unlimited, On Demand Classes</h1>
                            <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <p className="line">

                                {/* <a href="#" class="btn btn-primary m-2 my-2">Go to Dashboard</a>
                            <a href="#" class="btn btn-secondary m-2 my-2">View All</a> */}
                            </p>
                        </div>
                    </div>
                </section>
                <div className="container-sm classes-container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://via.placeholder.com/120" class="rounded card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Class Name</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                </div>
                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-m btn-outline-secondary">View Now</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Edit</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Delete</button>
                                    </div>
                                    <small class="text-muted">15 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1 ">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">View Now</a>
                            </div> */}
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://via.placeholder.com/120" class=" rounded card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Class Name</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-m btn-outline-secondary">View Now</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Edit</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Delete</button>
                                    </div>
                                    <small class="text-muted">45 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">View Now</a>
                            </div> */}
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://via.placeholder.com/120" class="rounded card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Class Name</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-m btn-outline-secondary">View Now</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Edit</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Delete</button>
                                    </div>
                                    <small class="text-muted">30 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">View Now</a>
                            </div> */}
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://via.placeholder.com/120" class="rounded card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Class Name</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-m btn-outline-secondary">View Now</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Edit</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Delete</button>
                                    </div>
                                    <small class="text-muted">60 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">View Now</a>
                            </div> */}
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://via.placeholder.com/120" class="rounded card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Class Name</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-m btn-outline-secondary">View Now</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Edit</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Delete</button>
                                    </div>
                                    <small class="text-muted">15 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">View Now</a>
                            </div> */}
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://via.placeholder.com/120" class="rounded card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Class Name</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-m btn-outline-secondary">View Now</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Edit</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Delete</button>
                                    </div>
                                    <small class="text-muted">15 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">View Now</a>
                            </div> */}
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://via.placeholder.com/120" class="rounded card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Class Name</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-m btn-outline-secondary">View Now</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Edit</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Delete</button>
                                    </div>
                                    <small class="text-muted">30 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">View Now</a>
                            </div> */}
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://via.placeholder.com/120" class="rounded card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Class Name</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-m btn-outline-secondary">View Now</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Edit</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Delete</button>
                                    </div>
                                    <small class="text-muted">15 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">View Now</a>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default UnlimitedClasses;