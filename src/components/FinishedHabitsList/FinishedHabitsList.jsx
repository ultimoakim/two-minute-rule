import LineHabit from "../LineHabit/LineHabit";

export default function FinishedHabitsList({report}) {

    if (!report) return null;

    const lineHabits = report.lineHabits.map(habit => 
        <LineHabit 
            lineHabit={habit}
            isSubmitted={report.isSubmitted}
            key={habit._id}
        />
        )

    return (
        <div className="OrderDetail">
            <div className="section-heading">
                {report.isSubmitted ?
                    <span>REPORT <span className="smaller">{report.reportId}</span></span>
                    :
                    <span>NEW REPORT</span>
                }
                <span>{new Date(report.updatedAt).toLocaleDateString()}</span>
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
                                    className="btn-sm"
                                    // onClick={handleCheckout}
                                    disabled={!lineHabits.length}
                                >CHECKOUT</button>
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