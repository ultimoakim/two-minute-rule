export default function LineHabit({ lineHabit, isSubmitted, handleChangeQty }) {
    return (
        <div className="LineItem">
            <div className="flex-ctr-ctr">{lineHabit.habit.lvlOfImp}</div>
            <div className="flex-ctr-ctr flex-col">
                <span className="align-ctr">{lineHabit.habit.name}</span>
                <span>{lineHabit.habit.description}</span>
            </div>
            <div className="qty" style={{ justifyContent: isSubmitted && 'center' }}>
                {!isSubmitted &&
                    <button
                        className="btn-xs"
                        onClick={() => handleChangeQty(lineHabit.habit._id, lineHabit.qty - 1)}
                    >Remove</button>
                }
                <span>Quantity: {lineHabit.qty}</span>
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