import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EmailForm } from './modules/EmailForm';
import { EmailPage } from './pages/EmailPage/EmailPage';
import { Route, Routes } from 'react-router-dom';
import { NamePage } from './pages/NameForm/NamePage';
import { CityPage } from './pages/City/CityPage';
import { PasswordPage } from './pages/Password/PasswordPage';
import { DisplaySummary } from './modules/Summary/DisplaySummary';
import { CountryPage } from './pages/Country/CountryPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<EmailPage/>}/>
      <Route path='/nameForm' element={<NamePage/>}/>
      <Route path='/city' element={<CityPage/>}/>
      <Route path='/country' element={<CountryPage/>}/>
      <Route path='/password' element={<PasswordPage/>}/>
      <Route path='/summary' element={<DisplaySummary/>}/>
    </Routes>
  );
}

export default App;
