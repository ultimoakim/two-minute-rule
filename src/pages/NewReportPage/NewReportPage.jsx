import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as habitsAPI from '../../utilities/habits-api';
import * as reportsAPI from '../../utilities/reports-api';
import * as levelsAPI from '../../utilities/levels-api';
import AddHabit from '../../components/AddHabit/AddHabit';
import UnfinishedHabitsList from '../../components/UnfinishedHabitsList/UnfinishedHabitsList';
import LvlOfImpList from '../../components/LvlOfImpList/LvlOfImpList';
import FinishedHabitsList from '../../components/FinishedHabitsList/FinishedHabitsList';
import ReportDetail from '../../components/ReportDetail/ReportDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function NewReportPage({ user, setUser }) {

    const [unfinishedHabits, setUnfinishedHabits] = useState([]);
    const lvlsOfImpRef = useRef([]);
    const navigate = useNavigate();
    const [activeLvl, setActiveLvl] = useState('');
    const [notReadyHabits, setNotReadyHabits] = useState(null);
    const [levels, setLevels] = useState([]);

    useEffect(function () {
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

        async function getLevels() {
            const levels = await levelsAPI.getAll();
            setLevels(levels);
        }
        getLevels();
    }, []);

    // Event Handlers Below Here!
    async function handleAddToReport(habitId) {
        const updatedNotReadyHabits = await reportsAPI.addHabitToNotReadyHabits(habitId);
        setNotReadyHabits(updatedNotReadyHabits);
    }

    async function handleChangeQty(habitId, newQty) {
        const updatedNotReadyHabits = await reportsAPI.setHabitQtyInNotReadyHabits(habitId, newQty);
        setNotReadyHabits(updatedNotReadyHabits);
    }

    async function handleSubmitReport() {
        await reportsAPI.submitReport();
        navigate('/reports');
    }

    async function handleAddHabit(habitData) {
        const habit = await habitsAPI.addHabit(habitData);
        setUnfinishedHabits([...unfinishedHabits, habit]);
    }

    async function handleDeleteHabit(id) {
        const habit = await habitsAPI.deleteHabit(id);
    }

    async function handleEditHabit(id) {
        const habit = await habitsAPI.editHabit(id);
        setUnfinishedHabits([...unfinishedHabits]);
    }

    return (
        <>
        <div className="callout primary">
            <h1>Create a Report!</h1>
            {/* <button onClick={() => setUnfinishedHabits(Date.now())}>Trigger Re-Render!</button> */}
        </div>
            <AddHabit
                handleAddHabit={handleAddHabit}
                levels={levels} 
                setLevels={setLevels}
            />
            <LvlOfImpList
                lvls={lvlsOfImpRef.current}
                activeLvls={activeLvl}
                setActiveLvl={setActiveLvl}
            />
            <UnfinishedHabitsList
                unfinishedHabits={unfinishedHabits.filter(habit => habit.lvlOfImp.level === activeLvl)}
                handleAddToReport={handleAddToReport}
                handleDeleteHabit={handleDeleteHabit}
                handleAddHabit={handleAddHabit}
                levels={levels}
                setLevels={setLevels}
                handleEditHabit={handleEditHabit}
            />
            <FinishedHabitsList
                report={notReadyHabits}
                handleChangeQty={handleChangeQty}
                handleSubmitReport={handleSubmitReport}
            />
        </>
    );
}