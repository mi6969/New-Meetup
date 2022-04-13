import {BrowserRouter, Router, Routes, Route, Navigate} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritePage from './pages/Favorite';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';


function App() {
 return (
   <Layout>
      <Routes>
            <Route path='/' element={<AllMeetupsPage />} exact/>
            <Route path='/new-meetup' element={<NewMeetupPage />} />
            <Route path='/Favorites' element={<FavoritePage />} /> 
      </Routes>      
   </Layout>
 );
}

export default App;
