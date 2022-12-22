import './UnfinishedHabitsListItems.css';
import { useState } from 'react';
import EditHabitForm from '../../components/EditHabitForm/EditHabitForm';

export default function UnfinishedHabitsListItems({ habitItem, handleAddToReport, handleDeleteHabit, handleAddHabit, levels, setLevels, handleEditHabit }) {

    const [editForm, setEditForm] = useState(false);

    return (
        <>
            <div className='callout secondary'>
                {/* If you want to use the CSS that was used, then set this main div's className to className='UnfinishedHabitsListItem'. */}
                {/* <p>User: {habitItem.user}</p> */}
                <div className='name'>{habitItem.name}</div>
                <div className='level'>Level of Importance: {habitItem.lvlOfImp.level}</div>
                <div className='description'>{habitItem.description}</div>
                <div>
                    <button className='button success' onClick={() => handleAddToReport(habitItem._id)}>Finished!</button>
                    &nbsp;
                    <button className='button alert' onClick={() => handleDeleteHabit(habitItem._id)}>Delete Habit</button>
                    &nbsp;
                    <button className='button warning' onClick={() => setEditForm(!editForm)}>
                        {editForm ? 'Cancel Editing' : 'Edit Habit'}
                    </button>
                    {
                        editForm ?
                            <EditHabitForm
                                handleAddHabit={handleAddHabit}
                                levels={levels}
                                setLevels={setLevels}
                                handleEditHabit={handleEditHabit}
                                habitItem={habitItem}
                            />
                            :
                            <h4></h4>
                    }
                </div>
            </div>
        </>
    );
}