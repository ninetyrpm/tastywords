import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EssayPage from '../pages/EssayPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/:slug" element={<EssayPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
