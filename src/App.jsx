import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";



import NavBar from "./components/NavBar/NavBar";

import Loader from "shared/component/Loader/Loader";

const AllPhonePage  = lazy(() => import ("./page/AllPhonePage/AllPhonePage")) ;
const HomePhonePage = lazy(() => import("./page/HomePhonePage/HomePhonePage"));
const WorkPhonePage = lazy(() => import("./page/WorkPhonePage/WorkPhonePage"));


export const App = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<Loader />}>
      <Routes>
          <Route path="/" element={<AllPhonePage />} />
          <Route path="/home-phone" element={<HomePhonePage />} />
          <Route path="/work-phone" element={<WorkPhonePage />} />
          <Route path="*" element={ <AllPhonePage />} />
        </Routes>
        </Suspense>
    </div>
  );
};
