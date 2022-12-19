import { useState, useEffect, useRef } from 'react';
import * as habitsAPI from '../../utilities/habits-api';
import * as reportsAPI from '../../utilities/reports-api';
import UnfinishedHabitsList from '../../components/UnfinishedHabitsList/UnfinishedHabitsList';
import LvlOfImpList from '../../components/LvlOfImpList/LvlOfImpList';
import FinishedHabitsList from '../../components/FinishedHabitsList/FinishedHabitsList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function NewReportPage({user, setUser}) {

    const [unfinishedHabits, setUnfinishedHabits] = useState([]);
    const lvlsOfImpRef = useRef([]);
    const [activeLvl, setActiveLvl] = useState('');
    const [notReadyHabits, setNotReadyHabits] = useState(null);

    useEffect(function() {
        async function getHabits() {
            const habits = await habitsAPI.getAll();
            lvlsOfImpRef.current = [...new Set(habits.map(habit => habit.lvlOfImp.level))];
            setUnfinishedHabits(habits);
            setActiveLvl(lvlsOfImpRef.current[0]);
        }
        getHabits();

        async function getNotReadyHabits() {
            const notReadyHabits = await reportsAPI.getNotReadyHabits();
            setNotReadyHabits(notReadyHabits);
        }
        getNotReadyHabits();
    }, []);


    return (
        <>
            <h1>NewReportPage</h1>
            <button onClick={() => setUnfinishedHabits(Date.now())}>Trigger Re-Render!</button>
            <h2>Level of Importance: </h2>
            <h4>NOTE: As a general rule, Level 3 should be the most important habits, while Level 1 is the less-important habits.</h4>
            <LvlOfImpList
                lvls={lvlsOfImpRef.current}
                activeLvls={activeLvl}
                setActiveLvl={setActiveLvl}
            />
            <h2>❌ Unfinished Habits: </h2>
            <UnfinishedHabitsList
                unfinishedHabits={unfinishedHabits.filter(habit => habit.lvlOfImp.level === activeLvl)}
                // handleAddToReport={handleAddToReport}
            />
            <FinishedHabitsList report={notReadyHabits} />
        </>
    );
}