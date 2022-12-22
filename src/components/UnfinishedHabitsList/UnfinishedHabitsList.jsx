import UnfinishedHabitsListItems from "../UnfinishedHabitsListItems/UnfinishedHabitsListItems";

export default function UnfinishedHabitsList({ unfinishedHabits, handleAddToReport, handleDeleteHabit, handleAddHabit, levels, setLevels }) {

  const habits = unfinishedHabits.map(habit =>
    <UnfinishedHabitsListItems
      key={habit._id}
      habitItem={habit}
      handleAddToReport={handleAddToReport}
      handleDeleteHabit={handleDeleteHabit}
      handleAddHabit={handleAddHabit}
      levels={levels}
      setLevels={setLevels}
    />
  );

  return (
    <>
      <main className="UnfinishedHabitsList">
        {habits}
      </main>
    </>
  );
}