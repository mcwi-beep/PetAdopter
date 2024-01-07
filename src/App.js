import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
    
       <Switch>
         <Route path='/petadopter/pet-details-not-found'> {/* Adjusted path */}
          <PetDetailsNotFound/>
        </Route>
        <Route path='/petadopter/search'> {/* Adjusted path */}
          <SearchPage />
        </Route>
        <Route path='/petadopter/:type/:id'> {/* Adjusted path */}
          <PetDetailsPage />
        </Route>
        <Route path='/petadopter/:type?'> {/* Adjusted path */}
          <HomePage />
        </Route>
       </Switch>
    </Router>
  );
}

export default App;
