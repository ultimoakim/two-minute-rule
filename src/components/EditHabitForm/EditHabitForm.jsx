import {useState} from 'react';

export default function EditHabitForm({handleAddHabit, levels, setLevels, handleEditHabit, habitItem}) {
    const levelsIdList = levels.map(l => l._id);
    const levelsLevelList = levels.map(l => l.level);
    const [habitName, setHabitName] = useState(habitItem.name);
    const [habitDesc, setHabitDesc] = useState(habitItem.description);
    const [habitLvlLevel, setHabitLvlLevel] = useState(habitItem.lvlOfImp);

    const existingHabit = { name: habitName, lvlOfImp: habitLvlLevel, description: habitDesc };

    function handleSubmit(evt) {
        evt.preventDefault();
        handleEditHabit(existingHabit);
        console.log(existingHabit);
    }
    return(
        <>
        <h4>Edit Form</h4>
            <form onSubmit={handleSubmit}>
                <label>Name of Habit: </label>
                <input
                    value={habitName}
                    onChange={(evt) => setHabitName(evt.target.value)}
                />
                <label>Level of Importance: </label>
                <select value={2} onChange={(evt) => setHabitLvlLevel(evt.target.value)}>
                    <option value={levelsIdList[0]}>{levelsLevelList[0]}</option>
                    <option value={levelsIdList[1]}>{levelsLevelList[1]}</option>
                    <option value={levelsIdList[2]}>{levelsLevelList[2]}</option>
                </select>
                <label>Description: </label>
                <textarea
                    value={habitDesc}
                    onChange={(evt) => setHabitDesc(evt.target.value)}
                ></textarea>
                <button type='submit'>Edit Habit!</button>
            </form>
        </>
    );
}