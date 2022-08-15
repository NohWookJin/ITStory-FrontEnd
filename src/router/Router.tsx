import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Write from '../pages/Write';
import Detail from '../pages/Detail';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/writes" element={<Write />} />
        <Route path="/posts/:postId" element={<Detail />} />
        <Route path="/search/:search" element={<Search />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
