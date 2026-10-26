import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ProgressProvider } from './state';
import { Dashboard } from './pages/Dashboard';
import { GrammarPage } from './pages/GrammarPage';
import { ReadingPage } from './pages/ReadingPage';
import { ListeningPage } from './pages/ListeningPage';
import { SpeakingPage } from './pages/SpeakingPage';
import { WritingPage } from './pages/WritingPage';
import { ExamPage } from './pages/ExamPage';
import { StatsPage } from './pages/StatsPage';
import { GuidePage } from './pages/GuidePage';

export default function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="grammar" element={<GrammarPage />} />
            <Route path="reading" element={<ReadingPage />} />
            <Route path="listening" element={<ListeningPage />} />
            <Route path="speaking" element={<SpeakingPage />} />
            <Route path="writing" element={<WritingPage />} />
            <Route path="exam" element={<ExamPage />} />
            <Route path="stats" element={<StatsPage />} />
            <Route path="guide" element={<GuidePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProgressProvider>
  );
}
