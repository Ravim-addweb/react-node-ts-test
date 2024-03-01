import React from "react";
import { Route, Routes } from "react-router-dom";
import pages from "pages";

const Router: React.FC = () => {
  const pageRoutes = pages.map(
    ({
      path,
      title,
      element,
    }: {
      path: string;
      title: string;
      element: JSX.Element;
    }) => {
      return <Route key={title} path={`/${path}`} element={element} />;
    }
  );

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
