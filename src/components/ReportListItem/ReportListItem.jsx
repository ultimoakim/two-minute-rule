export default function ReportListItem({ report, activeReport, setActiveReport }) {
    return (
        <>
            <div
                className={`OrderListItem ${report === activeReport ? 'selected' : ''}`}
                onClick={() => setActiveReport(report)}
            >
                <div>
                    <div>Report Id: <span className="smaller">{report.reportId}</span></div>
                    <div className="smaller">{new Date(report.updatedAt).toLocaleDateString()}</div>
                </div>
                <div className="align-rt">
                    {/* <div>${report.reportTotal.toFixed(2)}</div> */}
                    {/* <div className="smaller">{report.reportQty} Habit{report.reportQty > 1 ? 's' : ''}</div> */}
                </div>
            </div>
        </>
    );
}