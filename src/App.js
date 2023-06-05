import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { ThemeContext } from './Contexts/ThemeProvider';

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div data-theme={`${isDark ? "dark" : "corporate"}`}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
