import {
    createBrowserRouter
  } from "react-router-dom";
import App from './App';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
        path: "online/check_coo_qrstatus/:id",
        element: <App />,
    },
  ]);

  export default router;