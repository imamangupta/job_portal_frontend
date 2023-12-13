import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<>
			<nav class="navbar navbar-expand-lg bg-body-tertiary">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">Navbar</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<Link class="nav-link active" aria-current="page" to="/">Home</Link>
							</li>
							{/* <li class="nav-item">
								<Link class="nav-link" to="/login">Login</Link>
							</li>

							<li class="nav-item">
								<Link class="nav-link" to="/register">Register</Link>
							</li> */}

							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								For Freelancer
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Action</a></li>
									<li><a class="dropdown-item" href="#">Another action</a></li>
									<li><hr class="dropdown-divider" /></li>
									<li><a class="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>

							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Find Freelancer 
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Action</a></li>
									<li><a class="dropdown-item" href="#">Another action</a></li>
									<li><hr class="dropdown-divider" /></li>
									<li><a class="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Profile
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Action</a></li>
									<li><a class="dropdown-item" href="#">Another action</a></li>
									<li><hr class="dropdown-divider" /></li>
									<li><a class="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
						</ul>
						<form class="d-flex" role="search">
						<Link class="nav-link" to="/register">
							<button class="btn btn-outline-success" type="submit">Create Account</button></Link>
						</form>
					</div>
				</div>
			</nav>

		</>
	)
}
