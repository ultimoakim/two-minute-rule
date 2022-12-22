import { useState } from 'react';
import LevelList from "../../components/LevelList/LevelList";

export default function AddHabit({ handleAddHabit, levels, setLevels }) {
    const levelsIdList = levels.map(l => l._id);
    const levelsLevelList = levels.map(l => l.level);
    const [habitName, setHabitName] = useState('');
    const [habitDesc, setHabitDesc] = useState('');
    const [habitLvlLevel, setHabitLvlLevel] = useState(levelsIdList[2]);

    console.log(levelsIdList[0]);
    console.log(levelsIdList[1]);
    console.log(levelsIdList[2]);


    const newHabit = { name: habitName, lvlOfImp: habitLvlLevel, description: habitDesc };

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
                    <option value={levelsIdList[0]}>{levelsLevelList[0]}</option>
                    <option value={levelsIdList[1]}>{levelsLevelList[1]}</option>
                    <option value={levelsIdList[2]}>{levelsLevelList[2]}</option>
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