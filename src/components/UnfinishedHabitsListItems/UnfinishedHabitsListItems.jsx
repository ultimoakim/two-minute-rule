import './UnfinishedHabitsListItems.css';

export default function UnfinishedHabitsListItems({ habitItem, handleAddToReport, handleDeleteHabit }) {

    // function seeMyHabit() {
    //     if (user._id === habitItem.user) {
    //         return <h4>{habitItem.name}</h4>;
    //     }
    // }

    return (
        <>
            <div>
                {/* If you want to use the CSS that was used, then set this main div's className to className='UnfinishedHabitsListItem'. */}
                <p>User: {habitItem.user}</p>
                <div className='name'>{habitItem.name}</div>
                <div className='level'>Level of Importance: {habitItem.lvlOfImp.level}</div>
                <div className='description'>{habitItem.description}</div>
                <div>
                    <button className='addBtn' onClick={() => handleAddToReport(habitItem._id)}>Finished!</button>
                    <button onClick={() => handleDeleteHabit(habitItem._id)}>Delete Habit</button>
                </div>
                <main>

                </main>
            </div>
        </>
    );
}