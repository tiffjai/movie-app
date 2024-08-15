import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./layouts";
import * as Pages from './pages';

import { ShowProvider } from './components/contexts';

export default function App() {
  return (
    <ShowProvider>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="shows">
          <Route index element={<Pages.ShowsPage />} />
          <Route path=":id" element={<Pages.ShowPage />} />
        </Route>
        <Route path="search" element={<Pages.SearchPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
    </ShowProvider>
  );
}
