"use strict";

// Задание 5: программа после исправления двух ошибок отладки.
// Было: const completedTotal = completedText + additionalText; (конкатенация "3" + "2" → "32")
//       for (let taskNumber = 1; taskNumber < 4; ...) (цикл заканчивался на 3, а не на 4)
const plannedText = "8";
const completedText = "3";
const additionalText = "2";

const completedTotal = Number(completedText) + Number(additionalText);
const remainingTasks = Number(plannedText) - completedTotal;

console.log("Выполнено:", completedTotal);
console.log("Осталось:", remainingTasks);

let controlSum = 0;

for (let taskNumber = 1; taskNumber <= 4; taskNumber += 1) {
  controlSum += taskNumber;
}

console.log("Контрольная сумма:", controlSum);
