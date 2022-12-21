import { useState } from 'react';

export default function AddHabit({handleAddHabit}) {

    let habitLvl;
    const [habitName, setHabitName] = useState('');
    const [habitDesc, setHabitDesc] = useState('');
    const [habitLvlLevel, setHabitLvlLevel] = useState(1);

    if (habitLvlLevel === 1) {
        habitLvl = '63a361115888cece75835663';
    } else if (habitLvlLevel === 2) {
        habitLvl = '63a361115888cece75835664';
    } else {
        habitLvl = '63a361115888cece75835665';
    }

    const newHabit = { name: habitName, lvlOfImp: habitLvl, description: habitDesc };

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddHabit(newHabit);
        console.log(newHabit);
    }

    return (
        <>
            <h4>Feeling Motivated? Add another habit down below here!</h4>
            <form onSubmit={handleSubmit}>
                <label>Name of Habit: </label>
                <input
                    value={habitName}
                    onChange={evt => setHabitName(evt.target.value)}
                />
                <label>Level of Importance: </label>
                <select value={habitLvlLevel} onChange={evt => setHabitLvlLevel(evt.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                <label>Description: </label>
                <textarea
                    value={habitDesc}
                    onChange={evt => setHabitDesc(evt.target.value)}
                ></textarea>
                <button type='submit'>Add Habit!</button>
            </form>
        </>
    );
}