import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route exact path='/'>
          <center><h2>Harvard Art Museum</h2></center>
          <center><p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p></center>
        </Route>
        <Route>
          <center><h2>404: Page not found</h2></center>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
