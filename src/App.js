import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavouritesPage from './components/FavouritesPage';
import Header from './components/Header';
import { StudentProvider } from './components/StudentContext';
import StudentListPage from './components/StudentListPage';

function App() {
  return (
    <BrowserRouter>
      <StudentProvider>
        <div className="app-shell">
          <Header />
          <Routes>
            <Route path="/" element={<StudentListPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </div>
      </StudentProvider>
    </BrowserRouter>
  );
}

export default App;
