"use strict";

// Дополнительное задание, вариант А: данные поступают строками.
// Вариант 5: 7 задач всего, выполнено 2.
const totalInput = "7";
const completedInput = " 2 ";

if (typeof totalInput !== "string" || typeof completedInput !== "string") {
  console.log("Ошибка: входные данные должны быть строками");
} else {
  const totalText = totalInput.trim();
  const completedText = completedInput.trim();

  if (totalText === "" || completedText === "") {
    console.log("Ошибка: получена пустая строка");
  } else {
    const totalTasks = Number(totalText);
    const completedTasks = Number(completedText);

    if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
      console.log("Ошибка: строку не удалось преобразовать в число");
    } else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
      console.log("Ошибка: число должно быть конечным");
    } else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
      console.log("Ошибка: значения должны быть целыми числами");
    } else if (totalTasks < 0 || totalTasks > 1000 || completedTasks < 0 || completedTasks > totalTasks) {
      console.log("Ошибка: значения вне допустимого диапазона");
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
  }
}
