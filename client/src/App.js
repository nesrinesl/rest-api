import './App.css';
import Navigation from './components/Navigation/Navigation';
import ContactDetails from './pages/ContactDetails/ContactDetails';
import Contacts from './pages/Contacts/Contacts';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import {Routes,Route}from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route  path='/contacts' element={<Contacts />}/>
        <Route  path='/contactDetails' element={<ContactDetails />}/>
        <Route  path='/*' element={<ErrorPage />}/>


      </Routes>
    </div>
  );
}

export default App;
