import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, HomePage, Landing, Projects, Contact } from './Pages';
import { loader as projectsLoader } from './Pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'Projects',
        element: <Projects />,
        loader: projectsLoader,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
