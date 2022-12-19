import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {getUser} from '../../utilities/users-service';
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import NewReportPage from "../NewReportPage/NewReportPage";
import ReportHistoryPage from "../ReportHistoryPage/ReportHistoryPage";
import NavBar from "../../components/NavBar/NavBar";


export default function App() {
  // If there's no token, then this will be null.
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/reports/new" element={<NewReportPage user={user} setUser={setUser} />} />
            <Route path="/reports" element={<ReportHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


