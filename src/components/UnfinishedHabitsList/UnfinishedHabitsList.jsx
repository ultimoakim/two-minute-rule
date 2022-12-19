import UnfinishedHabitsListItems from "../UnfinishedHabitsListItems/UnfinishedHabitsListItems";

export default function UnfinishedHabitsList({ unfinishedHabits, handleAddToReport }) {

  const habits = unfinishedHabits.map(habit =>
    <UnfinishedHabitsListItems
      key={habit._id}
      habitItem={habit}
      // handleAddToReport={handleAddToReport}
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