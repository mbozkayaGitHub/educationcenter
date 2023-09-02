import { useState } from "react";
import Lecturers from "../components/Lecturers";
import { lecturerData, officeHoursData } from "../helper/data";
import Navbar from "../components/Navbar";
import OfficeHoursList from "./../components/OfficeHoursList";
import Footer from "../components/styles/Footer";


const Home = () => {
  const [lecturers, setLecturers] = useState(lecturerData);

  const [officeHoursList, setOfficeHoursList] = useState(officeHoursData)

  console.log(officeHoursData);
console.log(setOfficeHoursList);
  console.log(lecturers);

  return (
    <main className="text-center mt-2">
      <Navbar />

      <Lecturers lecturers={lecturers} officeHoursList={officeHoursList} 
      setOfficeHoursList={setOfficeHoursList} />
      <OfficeHoursList officeHoursList={officeHoursList} setOfficeHoursList={setOfficeHoursList}/>
      <Footer/>
    </main>
  );
};

export default Home;
