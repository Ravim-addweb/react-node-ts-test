import { BrowserRouter } from "react-router-dom";
import Router from "router";
import { ToastContainer } from "react-toastify";
import Navbar from "components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;