"use strict";

// Задание 2: исследование типов и преобразований.
// Перед каждой проверкой — предсказание значения и его типа, затем фактический вывод.

// 1. Предсказание: "82" (string) — при участии строки оператор + выполняет конкатенацию.
console.log("1) \"8\" + 2 →", "8" + 2, "| тип:", typeof ("8" + 2));

// 2. Предсказание: 6 (number) — у вычитания нет строкового режима, операнды приводятся к числам.
console.log("2) \"8\" - 2 →", "8" - 2, "| тип:", typeof ("8" - 2));

// 3. Предсказание: 10 (number) — явное преобразование строки, затем числовое сложение.
console.log("3) Number(\"8\") + 2 →", Number("8") + 2, "| тип:", typeof (Number("8") + 2));

// 4. Предсказание: false (boolean) — обе строки сравниваются посимвольно: "1" меньше "3".
console.log("4) \"12\" > \"3\" →", "12" > "3", "| тип:", typeof ("12" > "3"));

// 5. Предсказание: false (boolean) — строгое равенство не приводит типы: number !== string.
console.log("5) 12 === \"12\" →", 12 === "12", "| тип:", typeof (12 === "12"));

// 6. Предсказание: 0 (number) — пустая строка преобразуется в ноль.
console.log("6) Number(\"\") →", Number(""), "| тип:", typeof Number(""));

// 7. Предсказание: NaN (number) — непреобразуемая строка даёт NaN, но тип остаётся number.
console.log("7) Number(\"text\") →", Number("text"), "| тип:", typeof Number("text"));

// 8. Предсказание: true (boolean) — любая непустая строка при приведении к boolean истинна.
console.log("8) Boolean(\"false\") →", Boolean("false"), "| тип:", typeof Boolean("false"));

// 9. Предсказание: "object" (string) — историческая особенность typeof; сам null — примитив.
const typeOfNull = typeof null;
console.log("9) typeof null →", typeOfNull, "| тип результата:", typeof typeOfNull);

// 10. Предсказание: "number" (string) — NaN является значением числового типа.
const typeOfNaN = typeof NaN;
console.log("10) typeof NaN →", typeOfNaN, "| тип результата:", typeof typeOfNaN);
