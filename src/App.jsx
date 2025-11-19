import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProfileSelection from './pages/ProfileSelection';


import Channels from './pages/Channels';
import Search from "./pages/Search";
import Movies from './pages/Movies';
import Series from './pages/Series';
import Cartoons from './pages/Cartoons';
import My from './pages/My';
import Subscription from './pages/Subscription';
import SelectedChannel from './pages/SelectedChannel';
import Home from './pages/Home';
import MovieDetailUnified from "./pages/MovieDetailUnified";
import MoviePage from "./pages/MoviePageReal";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="channels" element={<Channels />} />
        <Route path="channels/:id" element={<SelectedChannel />} />
        <Route path="search" element={<Search />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetailUnified />} />
        <Route path="series" element={<Series />} />
        <Route path="cartoons" element={<Cartoons />} />
        <Route path="my" element={<My />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="profiles" element={<ProfileSelection />} />
<Route path="/movie/:id" element={<MoviePage />} />      </Route>
    </Routes>
  );
}








