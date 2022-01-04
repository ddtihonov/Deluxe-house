import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header  from "./Header.js";
import Footer from "./Footer.js";
import Main from './Main.js';
import Housing from './Housing.js';
import Commercial from './Commercial.js';
import Repiair from './Repiair.js';
import Services from './Services.js';
import Team from './Team.js';
import Contacts from './Contacts.js';
import Articles from './Articles.js';
import PageTemplate from './PageTemplate.js';


export default function App() {

return (
        <div className="page">
                <Header />
                <Routes>
                        <Route exact path='/housing'  element={
                                <Housing/>}
                        />
                        <Route exact path='/commercial'  element={
                                <Commercial/>}
                        />
                        <Route exact path='/repiair'  element={
                                <Repiair/>}
                        />
                        <Route exact path='/services'  element={
                                <Services/>}
                        />
                        <Route  exact path='/team'  element={
                                <Team/>}
                        />
                        <Route  exact path='/contacts'  element={
                                <Contacts/>}
                        />
                        <Route  exact path='/articles'  element={
                                <Articles/>}
                        />
                        <Route  exact path='/'  element={
                                <Main/>}
                        />
                        <Route  exact path='/article'  element={
                                <PageTemplate
                                subtitle={'вася'}
                                />}
                        />
                </Routes>  
                <Footer />     
        </div>
);
}