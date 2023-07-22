import { Route, Routes } from "react-router-dom";
import Topbar from "./components/navbar";
import Cards from "./components/cards";
import FormContainer from "./components/formContainer";
import UniversityContainer from "./components/universityContainer";
import NotificationContainer from "./components/notificationContainer";
import Home from "./components/home";
function App() {
  return (
    <div className="bg-slate-200 w-full h-screen">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormContainer />} />
        <Route path="/notification" element={<NotificationContainer />} />
        <Route path="/university" element={<UniversityContainer />} />
      </Routes>
    </div>
  );
}

export default App;
