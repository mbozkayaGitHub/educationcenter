import { useState } from "react";
import Lecturers from "../components/Lecturers";
import { lecturerData } from "../helper/data";




const Home = () => {
const [lecturers, setLecturers] = useState(lecturerData)

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">BOZKAYA EDUCATION CENTER</h1>
    
   <Lecturers  lecturers={lecturers}/>
    </main>
  );
};

export default Home;
