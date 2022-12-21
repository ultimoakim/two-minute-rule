require('dotenv').config();
require('./config/database');

const LvlOfImp = require('./models/lvlofimp');
const Habit = require('./models/habit');

(async function() {
  await LvlOfImp.deleteMany({});
  const lvlOfImps = await LvlOfImp.create([
    {level: 1, sortOrder: 30},
    {level: 2, sortOrder: 20},
    {level: 3, sortOrder: 10},
  ]);

  await Habit.deleteMany({});
  const habits = await Habit.create([
    {name: 'Studying French', lvlOfImp: lvlOfImps[2], description: `I will study at least ten pages of my textbook a day.`},
    {name: 'Learning how to cook', lvlOfImp: lvlOfImps[2], description: `Watch Gordon Ramsay's videos and copy his style of cooking!`},
    {name: 'Exercise', lvlOfImp: lvlOfImps[1], description: `10 squats, 10 burpees, 10 push-ups, 10 sit-ups`},
    {name: 'Improving social skills', lvlOfImp: lvlOfImps[0], description: `I will learn how to talk to people by talking to someone new every day.`},
  ]);

  console.log(habits);

  process.exit();
})();