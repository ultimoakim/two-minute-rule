import UnfinishedHabitsListItems from "../UnfinishedHabitsListItems/UnfinishedHabitsListItems";

export default function UnfinishedHabitsList({ unfinishedHabits, handleAddToReport, handleDeleteHabit }) {

  const habits = unfinishedHabits.map(habit =>
    <UnfinishedHabitsListItems
      key={habit._id}
      habitItem={habit}
      handleAddToReport={handleAddToReport}
      handleDeleteHabit={handleDeleteHabit}
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