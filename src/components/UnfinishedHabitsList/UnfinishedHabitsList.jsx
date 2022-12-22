import UnfinishedHabitsListItems from "../UnfinishedHabitsListItems/UnfinishedHabitsListItems";

export default function UnfinishedHabitsList({ unfinishedHabits, handleAddToReport, handleDeleteHabit, handleAddHabit, levels, setLevels, handleEditHabit }) {

  const habits = unfinishedHabits.map(habit =>
    <UnfinishedHabitsListItems
      key={habit._id}
      habitItem={habit}
      handleAddToReport={handleAddToReport}
      handleDeleteHabit={handleDeleteHabit}
      handleAddHabit={handleAddHabit}
      levels={levels}
      setLevels={setLevels}
      handleEditHabit={handleEditHabit}
    />
  );
  console.log(habits);

  return (
    <>
      <div className="callout alert">
      <h2>❌ Unfinished Habits: </h2>
        <main className="UnfinishedHabitsList">
          {habits.length === 0 ? 'No habits created yet 😢' : habits}
        </main>
      </div>
    </>
  );
}