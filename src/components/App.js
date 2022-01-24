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
import Escort from './Escort.js';
import DraftProject from './DraftProject.js';
import TechnicalTask from './TechnicalTask.js';
import WorkingDraft from './WorkingDraft.js';
import CentralPark from './CentralPark.js';
import RayResidence from './RayResidence.js';
import AustrianQuarter from './AustrianQuarter.js';
import Arman from './Arman.js';
import HeavenAstana from './HeavenAstana.js';
import DiplomaticTown from './DiplomaticTown.js';
import PremiereRestaurant from './PremiereRestaurant.js';
import Bathhouse from './Bathhouse.js';
import FamilyVillage from './FamilyVillage.js';
import MoodFashion from './MoodFashion.js';
import Timas from './Timas.js';
import Trattoria from './Trattoria.js';
import GolfArman from './GolfArman.js';
import Garderob from './Garderob.js';
import Kmg from './Kmg.js';
import AstanaGolf from './AstanaGolf.js';
import Kcell from './Kcell.js';
import KidsRoom from './KidsRoom.js';
import Plaster from './Plaster.js';
import Cocina from './Cocina.js';
import LargeRoom from './LargeRoom.js';
import Textures from './Textures.js';
import Budget from './Budget.js';

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
                        <Route  exact path='/escort'  element={
                                <Escort/>}
                        />
                        <Route  exact path='/draft-project'  element={
                                <DraftProject/>}
                        />
                        <Route  exact path='/technical-task'  element={
                                <TechnicalTask/>}
                        />
                        <Route  exact path='/working-draft'  element={
                                <WorkingDraft/>}
                        />
                        <Route  exact path='/central-park'  element={
                                <CentralPark/>}
                        />
                        <Route  exact path='/ray-residence'  element={
                                <RayResidence/>}
                        />
                        <Route  exact path='/austrian-quarter'  element={
                                <AustrianQuarter/>}
                        />
                        <Route  exact path='/arman'  element={
                                <Arman/>}
                        />
                        <Route  exact path='/heaven-astana'  element={
                                <HeavenAstana/>}
                        />
                        <Route  exact path='/diplomatic-town'  element={
                                <DiplomaticTown/>}
                        />
                        <Route  exact path='/premiere-restaurant'  element={
                                <PremiereRestaurant/>}
                        />
                        <Route  exact path='/bathhouse'  element={
                                <Bathhouse/>}
                        />
                        <Route  exact path='/family-village'  element={
                                <FamilyVillage/>}
                        />
                        <Route  exact path='/mood-fashion'  element={
                                <MoodFashion/>}
                        />
                        <Route  exact path='/timas'  element={
                                <Timas/>}
                        />
                        <Route  exact path='/trattoria'  element={
                                <Trattoria/>}
                        />
                        <Route  exact path='/golf-arman'  element={
                                <GolfArman/>}
                        />
                        <Route  exact path='/garderob'  element={
                                <Garderob/>}
                        />
                        <Route  exact path='/kmg'  element={
                                <Kmg/>}
                        />
                        <Route  exact path='/astana-golf'  element={
                                <AstanaGolf/>}
                        />
                        <Route  exact path='/kcell'  element={
                                <Kcell/>}
                        />
                        <Route  exact path='/kids-room'  element={
                                <KidsRoom/>}
                        />
                        <Route  exact path='/plaster'  element={
                                <Plaster/>}
                        />
                        <Route  exact path='/cocina'  element={
                                <Cocina/>}
                        />
                        <Route  exact path='/large-room'  element={
                                <LargeRoom/>}
                        />
                        <Route  exact path='/textures'  element={
                                <Textures/>}
                        />
                        <Route  exact path='/budget'  element={
                                <Budget/>}
                        />
                </Routes>  
                <Footer />     
        </div>
);
}