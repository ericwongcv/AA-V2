import { Link, useParams } from 'react-router-dom';

const ArtDescription = (prop) => {
    const gallery = prop.gallery;
    const galleryId = prop.galleryId;
    const { artId } = useParams();

    const artObject = gallery.objects.find(object => {
        return `${object.images[0].imageid}` === artId;
    })

    const img = artObject.images[0];
    console.log(img)
    return (
        <div className='art-description'>
            <div className='tile-links'>
                <center><p>
                    <Link to={`/galleries/${galleryId}`}>Back to "{gallery.name}"</Link>
                </p></center>
                <center><p>
                    <a href={img.baseimageurl}>{`${artObject.title}`}</a>
                </p></center>
            </div>
            <img src={img.baseimageurl} style={{ width: '500px' }} alt={img.imageid} />

            <div className='details'>
                <div className='details-section'>
                    <h3>Description:</h3>
                    <span>{`${artObject.description}`}</span>
                </div>

                <div className='details-section'>
                    <h3><b>Credit:</b></h3>
                    <span>{`${artObject.creditline}`}</span>
                </div>

                <div className='details-section'>
                    <h3><b>Technique:</b></h3>
                    <span>{`${artObject.technique}`}</span>
                </div>
            </div>
        </div>
    )
}

export default ArtDescription;
