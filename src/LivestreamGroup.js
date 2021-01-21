import React from 'react';
import Layout from './Layout';


function LivestreamGroup(props) {
    return (
        <>
            <Layout>
                <section class="text-center container layout">
                    <div class="row py-lg-4">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">Livestream Group Sessions</h1>
                            <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <p className="d-grid gap-2 d-md-flex justify-content-md-center">
                                <a href="#" class="btn btn-primary btn-lg ml-3">Sign Up For Up Coming Classes</a>
                                <a href="#" class="btn btn-secondary btn-lg mr-3">Add New Workout</a>
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
                                        <button type="button" class="btn btn-m btn-outline-secondary">Join</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg></button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Edit</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary">Delete</button>
                                    </div>
                                    <small class="text-muted">15 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1 ">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">Join</a>
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
                                        <button type="button" class="btn btn-m btn-outline-secondary">Join</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg></button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg></button>
                                    </div>
                                    <small class="text-muted">45 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">Join</a>
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
                                        <button type="button" class="btn btn-m btn-outline-secondary">Join</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg></button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg></button>
                                    </div>
                                    <small class="text-muted">30 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">Join</a>
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
                                        <button type="button" class="btn btn-m btn-outline-secondary">Join</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg></button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg></button>
                                    </div>
                                    <small class="text-muted">60 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">Join</a>
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
                                        <button type="button" class="btn btn-m btn-outline-secondary">Join</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg></button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg></button>
                                    </div>
                                    <small class="text-muted">15 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">Join</a>
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
                                        <button type="button" class="btn btn-m btn-outline-secondary">Join</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg></button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg></button>
                                    </div>
                                    <small class="text-muted">15 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">Join</a>
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
                                        <button type="button" class="btn btn-m btn-outline-secondary">Join</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg></button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg></button>
                                    </div>
                                    <small class="text-muted">30 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">Join</a>
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
                                        <button type="button" class="btn btn-m btn-outline-secondary">Join</button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg></button>
                                        <button type="button" class="btn btn-m btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg></button>
                                    </div>
                                    <small class="text-muted">15 mins</small>
                                </div>
                                {/* <div class="card-footer row row-cols-1 row-cols-md-2 g-1">
                                <small class="text-muted">Updated 3 mins ago</small>
                                <a href="#" class="btn btn-warning">Join</a>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default LivestreamGroup;