import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EssayPage from './pages/EssayPage';
import NotFoundPage from './pages/NotFoundPage';
import cyclingLetter from './content/essays/open-letter-cycling';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path={`/${cyclingLetter.slug}`}
        element={<EssayPage essay={cyclingLetter} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
