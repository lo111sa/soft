import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Registry from "./pages/registry/Registry";

import { useModalStore } from "./store/modalStore";
import ModalComponent from "./components/ModalComponent";

import PatientForm from "./pages/registry/components/patientForm/PatientForm";

function App() {
  return (
    <>
      <ModalComponent />
      <Header />
      <Registry />

      <Routes>
        {/*<Route path="/" element={<DoctorsHome />} />
          <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id/:subid" element={<ServicePosts />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<SingleDoctor />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/:id" element={<SingleOffer />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} /> */}
      </Routes>
    </>
  );
}

export default App;
