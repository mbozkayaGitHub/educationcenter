import { useState } from "react";
import Lecturers from "../components/Lecturers";
import { lecturerData } from "../helper/data";
import { Navbar } from "react-bootstrap";




const Home = () => {
const [lecturers, setLecturers] = useState(lecturerData)

  return (
    <main className="text-center mt-2">
      <Navbar/>
    
    
   <Lecturers  lecturers={lecturers}/>
    </main>
  );
};

export default Home;
