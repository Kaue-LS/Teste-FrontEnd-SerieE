import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './router';
import { ApiProvider } from './components/context/apiContext';

function App() {
  return (
    <ApiProvider>
      <div className="App">
        <RouterProvider router={routes} />
        <footer />
      </div>
    </ApiProvider>
  );
}

export default App;
