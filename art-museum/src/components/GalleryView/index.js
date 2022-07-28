import { Route, useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile"
import ArtDescription from "../ArtDescription";

const GalleryView = (prop) => {
    const galleries = prop.galleries;
    const { galleryId } = useParams();

    const gallery = galleries.find(gallery => {
        return (
            `${gallery.id}` === galleryId
        );
    });

    return (
        <div className="gallery-view">
                <center><h2>{gallery.name}</h2></center>
                <Route exact path='/galleries/:galleryId'>
                    {gallery.objects.map(gallery => {
                        if (gallery.images.length !== 0) {
                            return (
                                <div className='art-tile' key={gallery.id}>
                                    <ArtImageTile art={gallery.images} galleryId={galleryId} />
                                </div>
                            );
                        }

                        return null;
                    })}
                </Route>
            <Route path='/galleries/:galleryId/art/:artId'>
                <ArtDescription gallery={gallery} galleryId={galleryId} />
            </Route>
        </div>
    )
}

export default GalleryView;
