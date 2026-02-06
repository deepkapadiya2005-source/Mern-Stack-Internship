import { Routes, Route } from "react-router-dom";
import { TeamsList } from "./Components/TeamsList";
import { India } from "./Components/India";
import { Australia } from "./Components/Australia";
import { England } from "./Components/England";
import { Csk } from "./Components/Csk";
import { Rcb } from "./Components/Rcb";
import { Mi } from "./Components/Mi";
import { Kkr } from "./Components/Kkr";
import { Gt } from "./Components/Gt";
import { Srh } from "./Components/Srh";
import { Rr } from "./Components/Rr";
import {Portfolio} from "./Components/Portfolio";

function App() {
  return (
    <>
      <TeamsList />

      <Routes>
        <Route path="/teams/india" element={<India />} />
        <Route path="/teams/australia" element={<Australia />} />
        <Route path="/teams/england" element={<England />} />
        <Route path="/teams/csk" element={<Csk />} />
        <Route path="/teams/rcb" element={<Rcb />} />
        <Route path="/teams/mi" element={<Mi />} />
        <Route path="/teams/kkr" element={<Kkr />} />
        <Route path="/teams/gt" element={<Gt />} />
        <Route path="/teams/srh" element={<Srh />} />
        <Route path="/teams/rr" element={<Rr />} />

        <Route path="*" element={<Portfolio/>} />
      </Routes>
    </>
  );
}

export default App;
