import './navbar.css';
import '../../assets/images/profile.jpg'
export function Navbar() {
    return (
        <nav className="custom-navbar d-flex">
            <div className='topLeft'>
                <a href='https://github.com/ratneshgujarathi' target='_blank' rel="noreferrer">
                    <i className="topIcons fa-brands fa-github"></i>
                </a>
                <a href='https://linkedin.com/in/' target='_blank' rel="noreferrer">
                    <i className="topIcons fa-brands fa-linkedin-in"></i>
                </a>
                <a href='https://instagram.com/ratneshgujarathi' target='_blank' rel="noreferrer">
                    <i className="topIcons fa-brands fa-instagram"></i>
                </a>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className="topList-items">Blogs</li>
                    <li className="topList-items">About</li>
                    <li className="topList-items">Contact</li>
                    <li className="topList-items">Login</li>
                </ul>
            </div>
            <div className='topRight'>
                <img src="https://thumbnails.production.thenounproject.com/OTyRPs1ww1Tb29tA4cNc7kqOd8A=/fit-in/1000x1000/photos.production.thenounproject.com/photos/8128DB0B-19CA-42DB-BC9F-68EF00625FBE.jpg" alt="" className='topImage' />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </nav>
    )
}