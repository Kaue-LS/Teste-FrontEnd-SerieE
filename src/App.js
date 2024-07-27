import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes, { routes } from './router';
import HeroesProvider from './components/context/heroesContext';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
      <footer />
    </div>
  );
}

export default App;
