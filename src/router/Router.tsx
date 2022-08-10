import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Write from '../pages/Write';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/writes/" element={<Write />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
