import './UnfinishedHabitsListItems.css';
import { useState } from 'react';
import EditHabitForm from '../../components/EditHabitForm/EditHabitForm';

export default function UnfinishedHabitsListItems({ habitItem, handleAddToReport, handleDeleteHabit, handleAddHabit, levels, setLevels }) {

    const [editForm, setEditForm] = useState(false);

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
                    <button onClick={() => setEditForm(!editForm)}>
                        {editForm ? 'Cancel' : 'Edit Habit'}
                    </button>
                    {
                        editForm ? 
                        <EditHabitForm
                            handleAddHabit={handleAddHabit}
                            levels={levels}
                            setLevels={setLevels}
                        />
                        :
                        <h4></h4>
                    }
                </div>
                <main>

                </main>
            </div>
        </>
    );
}