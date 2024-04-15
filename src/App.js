

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin';
import Home from './pages/Home';
import FormPage from "./pages/FormPage";
import NotFound from './pages/NotFound';
import AdminDashboard from "./pages/AdminDashboard";
import Overview from "./pages/Overview";
import Response from "./pages/Response";
import ContactForm from "./components/ContactForm";
import Multipage from './pages/Multipage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
  
        <Route path="/response" element={<Response />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} /> 
        <Route path="/formPage" element={<FormPage />} /> 
        <Route path="/overview" element={<Overview />} />

        {/* <Route element={<ProtectedRoute />}>
          <Route element={<AdminDashboard />} path="/adminDashboard" exact />
          <Route element={<FormPage />} path="/formPage" />
          <Route path="/overview" element={<Overview />} />
        </Route> */}
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/multipage" element={<Multipage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
