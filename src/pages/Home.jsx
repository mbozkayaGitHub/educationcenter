import { useState } from "react";
import Lecturers from "../components/Lecturers";
import { lecturerData } from "../helper/data";
import Navbar from "../components/Navbar";
import OfficeHoursList from "../components/OfficeHoursList";

const Home = () => {
  const [lecturers, setLecturers] = useState(lecturerData);

  return (
    <main className="text-center mt-2">
      <Navbar />

      <Lecturers lecturers={lecturers} />
      <OfficeHoursList/>
    </main>
  );
};

export default Home;
