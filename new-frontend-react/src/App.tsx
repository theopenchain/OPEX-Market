import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import MarketplacePage from './pages/marketplace';
import HomePage from './pages/home';
import NftSportsPage from 'pages/nft_sports';
import NftMusicPage from 'pages/nft_music';
import ItemDetailPage from 'pages/item_detail';
import ProfilePage from 'pages/profile';
import LiveAuctionsPage from 'pages/live_auctions';
import CompetitionPage from 'pages/competition';
import CommunityPage from 'pages/community';
import EducationalHubPage from 'pages/educational_hub';
import NewsPage from 'pages/news';
import NftArtNewsPage from 'pages/nft_art_news';

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/marketplace" element={<MarketplacePage/>}/>
          <Route path="/join" element={<HomePage/>}/>
          <Route path="/nft-art" element={<MarketplacePage/>}/>
          <Route path="/nft-sports" element={<NftSportsPage/>}/>
          <Route path="/nft-music" element={<NftMusicPage/>}/>
          <Route path="/item-detail" element={<ItemDetailPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/live-auctions" element={<LiveAuctionsPage/>}/>
          <Route path="/competition" element={<CompetitionPage/>}/>
          <Route path="/digital-collectibles" element={<MarketplacePage/>}/>
          <Route path="/physical-items" element={<MarketplacePage/>}/>
          <Route path="/educational-hub" element={<EducationalHubPage/>}/>
          <Route path="/news" element={<NewsPage/>}/>
          <Route path="/nft-art-news" element={<NftArtNewsPage/>}/>
          <Route path="/communities" element={<CommunityPage/>}/>
        </Routes>
        <AppFooter/>
      </Router>
    </div>
  );
}

export default App;
