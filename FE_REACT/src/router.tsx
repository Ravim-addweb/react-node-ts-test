import { Route, Routes } from "react-router-dom";
import pages from "pages";

const Router = () => {
  const pageRoutes = pages.map(({ path, title, element }: { path: any; title: any; element: any }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;