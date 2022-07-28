import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';
import { AiTwotoneHome } from "react-icons/ai";

const GalleryNavigation = (prop) => {
    const galleries = prop.galleries;

    return (
        <nav>
            <p><NavLink to='/'><AiTwotoneHome className='home-button' size='30px' /></NavLink></p>
            <div className='dropdown'>
                <button class="dropbtn">Galleries</button>
                <div class="dropdown-content">
                    {galleries.map(gallery => (
                        <div key={`${gallery.id}`}>
                            <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default GalleryNavigation;
