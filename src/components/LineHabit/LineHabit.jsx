export default function LineHabit({ lineHabit, isSubmitted }) {
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
                        // onClick={() => handleChangeQty(lineHabit.habit._id, lineHabit.qty - 1)}
                    >−</button>
                }
                <span>{lineHabit.qty}</span>
                {!isSubmitted &&
                    <button
                        className="btn-xs"
                        // onClick={() => handleChangeQty(lineHabit.habit._id, lineHabit.qty + 1)}
                    >+</button>
                }
            </div>
            <div className="ext-price">${lineHabit.habitDesc}</div>
        </div>
    );
}