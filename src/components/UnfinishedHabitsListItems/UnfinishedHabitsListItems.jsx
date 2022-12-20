import './UnfinishedHabitsListItems.css';

export default function UnfinishedHabitsListItems({habitItem, handleAddToReport}) {
    return (
        <>
            <div className='UnfinishedHabitsListItem'>
                <div className='name'>{habitItem.name}</div>
                <div className='level'>Level of Importance: {habitItem.lvlOfImp.level}</div>
                <div className='description'>{habitItem.description}</div>
                <div>
                    <button className='addBtn' onClick={() => handleAddToReport(habitItem._id)}>Finished!</button>
                </div>
            </div>
        </>
    );
}