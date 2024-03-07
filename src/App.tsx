import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Images, Main, Counter } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/images",
    element: <Images />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

function App() {

  return (
  <RouterProvider router={router} />
  );
}

export default App;
