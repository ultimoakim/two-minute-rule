import {useState} from 'react';

export default function EditHabitForm(handleAddHabit, levels, setLevels) {

    const [habitName, setHabitName] = useState('');
    const [habitDesc, setHabitDesc] = useState('');
    const [habitLvlLevel, setHabitLvlLevel] = useState();

    const newHabit = { name: habitName, lvlOfImp: habitLvlLevel, description: habitDesc };

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddHabit(newHabit);
        console.log(newHabit);
    }
    return(
        <>
        <h4>Edit Form</h4>
            <form onSubmit={handleSubmit}>
                <label>Name of Habit: </label>
                <input
                    value='Something'
                />
                <label>Level of Importance: </label>
                <select value={2}>
                    <option value={1}>{1}</option>
                    <option value={2}>{2}</option>
                    <option value={3}>{3}</option>
                </select>
                <label>Description: </label>
                <textarea
                    value='Something'
                ></textarea>
                <button type='submit'>Edit Habit!</button>
            </form>
        </>
    );
}