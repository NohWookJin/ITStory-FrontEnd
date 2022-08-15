import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Write from '../pages/Write';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/writes" element={<Write />} />
        <Route path="/posts/:postId" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
