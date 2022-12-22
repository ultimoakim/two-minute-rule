import LineHabit from "../LineHabit/LineHabit";

export default function FinishedHabitsList({report, handleChangeQty, handleSubmitReport}) {

    if (!report) return null;

    const lineHabits = report.lineHabits.map(habit => 
        <LineHabit 
            lineHabit={habit}
            isSubmitted={report.isSubmitted}
            key={habit._id}
            handleChangeQty={handleChangeQty}
        />
        )

    return (
        <div className="callout success">
            <div className="section-heading">
                {report.isSubmitted ?
                    <span>REPORT <h3 className="smaller">{report.reportId}</h3></span>
                    :
                    <h2>✅ Completed Habits: </h2>
                }
                <br />
                <span>Today's date is: {new Date(report.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
                {lineHabits.length ?
                    <>
                        {lineHabits}
                        <section className="total">
                            {report.isSubmitted ?
                                <span className="right">TOTAL&nbsp;&nbsp;</span>
                                :
                                <button
                                    className="submit success button"
                                    onClick={handleSubmitReport}
                                    disabled={!lineHabits.length}
                                >Finished with your habits? Submit Report!</button>
                            }
                            {/* <span>{report.totalQty}</span> */}
                            {/* <span className="right">${report.orderTotal.toFixed(2)}</span> */}
                        </section>
                    </>
                    :
                    <div className="hungry">No completed habits yet! 😢 Maybe get some done? It only takes two minutes to complete one habit!</div>
                }
            </div>
        </div>
    );
}