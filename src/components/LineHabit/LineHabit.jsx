export default function LineHabit({ lineHabit, isSubmitted, handleChangeQty }) {
    return (
        <div className="callout secondary">
            {/* <div>{lineHabit.habit.lvlOfImp}</div> */}
            <div>
                <span>{lineHabit.habit.name}</span>
                <br />
                <span>{lineHabit.habit.description}</span>
            </div>
            <div className="qty" style={{ justifyContent: isSubmitted && 'center' }}>
                <br />
                {!isSubmitted &&
                    <button
                        className="button alert"
                        onClick={() => handleChangeQty(lineHabit.habit._id, lineHabit.qty - 1)}
                    >Send Back to Unfinished Habits</button>
                }
                {/* <span>Quantity: {lineHabit.qty}</span> */}
                {/* {!isSubmitted &&
                    <button
                        className="btn-xs"
                        // onClick={() => handleChangeQty(lineHabit.habit._id, lineHabit.qty + 1)}
                    >+</button>
                } */}
            </div>
            {/* Don't really need this thing below, but that's up to you. */}
            {/* <div className="ext-price">${lineHabit.habitDesc}</div> */}
        </div>
    );
}