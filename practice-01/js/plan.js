"use strict";

// Задание 4: план выполнения задач по дням (цикл while).
// Вариант 5 (журнал № 21): totalTasks = 7, completedTasks = 2, dailyLimit = 2.
const totalTasks = 7;
const completedTasks = 2;
const dailyLimit = 2;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number" || typeof dailyLimit !== "number") {
  console.log("Ошибка: все значения должны быть переданы числами");
} else if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks) || Number.isNaN(dailyLimit)) {
  console.log("Ошибка: недопустимое числовое значение");
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks) || !Number.isInteger(dailyLimit)) {
  console.log("Ошибка: значения должны быть целыми числами");
} else if (totalTasks < 0 || totalTasks > 1000 || completedTasks < 0 || completedTasks > totalTasks) {
  console.log("Ошибка: некорректное количество задач");
} else if (dailyLimit < 1 || dailyLimit > 1000) {
  console.log("Ошибка: дневная норма должна быть целым числом от 1 до 1000");
} else if (totalTasks - completedTasks === 0) {
  if (totalTasks === 0) {
    console.log("Задач пока нет");
  } else {
    console.log("Все задачи уже выполнены");
  }
  console.log("Потребуется дней: 0");
} else {
  let remainingTasks = totalTasks - completedTasks;
  let dayNumber = 0;

  console.log(`Осталось задач: ${remainingTasks}`);

  while (remainingTasks > 0) {
    dayNumber += 1;
    const tasksToday = Math.min(dailyLimit, remainingTasks);
    remainingTasks -= tasksToday;
    console.log(`День ${dayNumber}: выполнено ${tasksToday}, осталось ${remainingTasks}`);
  }

  console.log(`Потребуется дней: ${dayNumber}`);
}
