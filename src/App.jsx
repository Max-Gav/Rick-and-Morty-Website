import React from "react";
import CharactersPage from "./pages/Characters Page/CharactersPage";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/shared/NavigationBar";
import WatchlistPage from "./pages/Watch List Page/WatchlistPage";

const App = () => {
  return (
    <Routes>
      <Route element={<NavigationBar />}>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/watch-list" element={<WatchlistPage/>} />
      </Route>
    </Routes>
  );
};

export default App;
