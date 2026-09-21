"use strict";

// Задание 3: сводка выполнения задач.
// Вариант 5 (журнал № 21): totalTasks = 7, completedTasks = 2.
const totalTasks = 7;
const completedTasks = 2;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
  console.log("Ошибка: количество задач должно быть передано числом");
} else if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
  console.log("Ошибка: недопустимое числовое значение");
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
  console.log("Ошибка: количество задач должно быть целым числом");
} else if (totalTasks < 0 || totalTasks > 1000 || completedTasks < 0) {
  console.log("Ошибка: количество задач должно быть в диапазоне от 0 до 1000");
} else if (completedTasks > totalTasks) {
  console.log("Ошибка: выполнено больше задач, чем всего существует");
} else if (totalTasks === 0) {
  console.log("Задач пока нет");
} else {
  const remainingTasks = totalTasks - completedTasks;
  const percent = completedTasks / totalTasks * 100;

  let status;
  if (completedTasks === 0) {
    status = "Не начато";
  } else if (completedTasks === totalTasks) {
    status = "Завершено";
  } else {
    status = "В работе";
  }

  console.log(`Всего задач: ${totalTasks}`);
  console.log(`Выполнено: ${completedTasks}`);
  console.log(`Осталось: ${remainingTasks}`);
  console.log(`Прогресс: ${percent.toFixed(1)}%`);
  console.log(`Статус: ${status}`);
}
