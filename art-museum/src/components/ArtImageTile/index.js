import { Link } from 'react-router-dom';

const ArtImageTile = (prop) => {
    const images = prop.art;
    const galleryId = prop.galleryId;

    return (
        <Link to={`/galleries/${galleryId}/art/${images[0].imageid}`}>
            <img src={`${images[0].baseimageurl}`} style={{ width: '300px' }} alt={`${images[0].imageid}`} />
        </Link>
    );
}

export default ArtImageTile;
