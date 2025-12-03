import React from "react";
import lineSvg from '../assets/images/header/line.svg';
import logo from '../assets/images/header/header-logo.svg';

function Header() {
    return (
        <>
            <header className="position-absolute top-0 start-0 z-3 w-100">
                <nav className="navbar navbar-expand-lg">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav gap-4 mb-lg-0">
                                    <li className="nav-item menu-item">
                                        <a className="nav-link active text-white fw-bold" aria-current="page" href="#">HOME</a>
                                    </li>
                                    <li className="nav-item menu-item">
                                        <a className="nav-link text-white fw-bold" href="#">ABOUT</a>
                                    </li>
                                    <li className="nav-item menu-item">
                                        <a className="nav-link text-white fw-bold" href="#">WATCH</a>
                                    </li>
                                    <li className="nav-item menu-item">
                                        <a className="nav-link text-white fw-bold" href="#">JEWELLERY</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a className="navbar-brand mx-auto position-absolute start-50 translate-middle-x text-center" href="#">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="d-flex align-items-center">
                            <ul className="navbar-nav gap-4 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-white fw-bold" href="#">PAGES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white fw-bold" href="#">CONTACT</a>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center gap-3">
                                <a className="bg-transparent text-white">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.084 18.3333C14.6403 18.3333 18.334 14.6397 18.334 10.0833C18.334 5.52698 14.6403 1.83333 10.084 1.83333C5.52764 1.83333 1.83398 5.52698 1.83398 10.0833C1.83398 14.6397 5.52764 18.3333 10.084 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M17.3517 18.9657C17.8376 20.4323 18.9467 20.579 19.7992 19.2957C20.5784 18.1223 20.0651 17.1598 18.6534 17.1598C17.6084 17.1507 17.0217 17.9665 17.3517 18.9657Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-white">
                                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0396 0C15.0078 0.0157747 13.9985 0.298881 13.1137 0.82073C12.2288 1.34258 11.4997 2.08469 11 2.97212C10.5003 2.08469 9.77118 1.34258 8.88632 0.82073C8.00146 0.298881 6.99216 0.0157747 5.96037 0C4.31556 0.0702418 2.76589 0.777484 1.64991 1.96721C0.533927 3.15695 -0.0576437 4.73245 0.00443589 6.34954C0.00443589 10.4448 4.38983 14.9174 8.06785 17.9498C8.88905 18.6281 9.92734 19 11 19C12.0727 19 13.1109 18.6281 13.9321 17.9498C17.6102 14.9174 21.9956 10.4448 21.9956 6.34954C22.0576 4.73245 21.4661 3.15695 20.3501 1.96721C19.2341 0.777484 17.6844 0.0702418 16.0396 0ZM12.7547 16.5718C12.2636 16.9784 11.6421 17.2013 11 17.2013C10.3579 17.2013 9.73644 16.9784 9.24529 16.5718C4.53736 12.6892 1.83703 8.96411 1.83703 6.34954C1.77439 5.20997 2.17273 4.09228 2.94517 3.24025C3.7176 2.38821 4.80147 1.87095 5.96037 1.80129C7.11927 1.87095 8.20313 2.38821 8.97557 3.24025C9.748 4.09228 10.1463 5.20997 10.0837 6.34954C10.0837 6.5884 10.1802 6.81748 10.3521 6.98639C10.5239 7.15529 10.757 7.25018 11 7.25018C11.243 7.25018 11.4761 7.15529 11.6479 6.98639C11.8198 6.81748 11.9163 6.5884 11.9163 6.34954C11.8537 5.20997 12.252 4.09228 13.0244 3.24025C13.7969 2.38821 14.8807 1.87095 16.0396 1.80129C17.1985 1.87095 18.2824 2.38821 19.0548 3.24025C19.8273 4.09228 20.2256 5.20997 20.163 6.34954C20.163 8.96411 17.4626 12.6892 12.7547 16.5682V16.5718Z" fill="currentColor"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-white">
                                    <span className="pe-3">bag 0</span>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.33315 6.33334V3.12501C5.33315 1.75001 6.24982 0.833344 7.62482 0.833344H10.3748C11.7498 0.833344 12.6665 1.75001 12.6665 3.12501V6.33334M16.709 14.6108H5.33315M5.70002 4.95834H12.3C15.4167 4.95834 15.7284 6.41584 15.9392 8.19418L16.7642 15.0692C17.03 17.3242 16.3334 19.1667 13.125 19.1667H4.88419C1.66669 19.1667 0.970022 17.3242 1.24502 15.0692L2.07003 8.19418C2.2717 6.41584 2.58336 4.95834 5.70002 4.95834Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <img src={lineSvg} alt="" className="line-img position-absolute" />
            </header>
        </>
    )
}
export default Header;