import LineHabit from '../LineHabit/LineHabit';

export default function ReportDetail({ report, handleChangeQty, handleSubmitReport }) {
    if (!report) return null;

    const lineHabits = report.lineHabits.map(habit =>
        <LineHabit
            lineHabit={habit}
            isSubmitted={report.isSubmitted}
            handleChangeQty={handleChangeQty}
            key={habit._id}
        />
    )

    return (
        <>
            <div className="ReportDetail">
                <div className="section-heading">
                    {report.isSubmitted ?
                        <span>REPORT <span className="smaller">{report.reportId}</span></span>
                        :
                        <span>NEW REPORT</span>
                    }
                    <br />
                    <span>Date Created: {new Date(report.updatedAt).toLocaleDateString()}</span>
                </div>
                <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
                    {lineHabits.length ?
                        <>
                            {lineHabits}
                            <section className="total">
                                {report.isSubmitted ?
                                    <span className="right">Bottom of Page</span>
                                    :
                                    <button
                                        className="btn-sm"
                                        onClick={handleSubmitReport}
                                        disabled={!lineHabits.length}
                                    >Submit Report!</button>
                                }
                                {/* <span>{report.totalQty}</span> */}
                                {/* <span className="right">${report.reportTotal.toFixed(2)}</span> */}
                            </section>
                        </>
                        :
                        <div className="hungry">No reports yet!</div>
                    }
                </div>
            </div>
        </>
    );
}