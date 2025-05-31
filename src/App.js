import { Suspense} from "react";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
const GetAllUsers = React.lazy(() => import("./components/GetAllUsers"));


function App() {

 
  return (
    <>
      {/* <Otp /> */}
      <Navbar />
      <Suspense fallback={()=><h1>Data is comming please wait.....</h1>}>
        <GetAllUsers />
      </Suspense>
    </>
  );
}

export default App;
