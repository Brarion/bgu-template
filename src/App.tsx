import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Images, Main } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/images",
    element: <Images />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
