import ReportListItem from "../ReportListItem/ReportListItem";

export default function ReportList({ reports, activeReport, setActiveReport }) {

    const reportList = reports.map(report => <ReportListItem
        report={report}
        activeReport={activeReport}
        setActiveReport={setActiveReport}
        key={report.id}
    />);

    return (
        <>
            <main className={`ReportList ${reports.length ? '' : 'no-reports'}`}>
                {reportList}
            </main>
        </>
    );
}