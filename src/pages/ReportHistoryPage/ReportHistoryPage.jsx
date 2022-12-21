import * as usersService from '../../utilities/users-service';
import { checkToken } from "../../utilities/users-service";
import { Link } from "react-router-dom";
import ReportList from "../../components/ReportList/ReportList";
import ReportDetail from "../../components/ReportDetail/ReportDetail";
import { useState, useEffect } from "react";
import * as reportsAPI from "../../utilities/reports-api";


export default function ReportHistoryPage({ user, setUser }) {

    const [reports, setReports] = useState([]);
    const [activeReport, setActiveReport] = useState(null);

    useEffect(function() {
        async function getReports() {
            const reports = await reportsAPI.getAllForUser();
            setActiveReport(reports[0] || null);
            setReports(reports);
        }
        getReports();
    }, []);


    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
    }
    return (
        <>
            <h1>ReportHistoryPage</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
            {/* Render a ReportList component */}
            <ReportList
                reports={reports}
                activeReport={activeReport}
                setActiveReport={setActiveReport}
            />
            {/* Render the existing ReportDetail component */}
            <ReportDetail report={activeReport} />
        </>
    );
}
