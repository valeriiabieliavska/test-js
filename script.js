// Задача 1
// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check summ. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3.   For cancelled input show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers, check summ can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check summ: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Вам необходимо рассчитать сумму чаевых, которую можно дать в ресторане/кафе.
// Рабочий процесс:
// 1. Пользователь вводит контрольную сумму. (Используйте функцию «подсказка»).
// 2. Пользователь вводит процент чаевых. (Используйте функцию «подсказка»)
// 3. Для отмены ввода отобразите «Отменено».
// 4. Необходимо проверить входные данные: оба значения должны быть числами, контрольная сумма не может быть
// отрицательное число, процент не может быть отрицательным и больше 100.
// 5. Если входные данные недействительны, вы должны показать сообщение «Неверные входные данные». (Используйте функцию «предупреждение»).
// 6. Вам необходимо рассчитать сумму чаевых и общую сумму к оплате.
// 7. Показать сообщение: (пример). Используйте функцию «оповещение»
// Контрольная сумма: 200
// Чаевые: 15%
// Сумма чаевых: 30
// Общая сумма к оплате: 230

// const sum = prompt("Input check sum !")
// const percentage = prompt("Input percentage !")
// if ( sum === null || percentage === null ) {
//     alert("Canceled");
// } else {
//     const parseSum = Number.parseFloat(sum);
//     const parsePercentage = Number.parseFloat(percentage);

//     if (Number.IsNaN(parseSum) || Number.IsNaN(parsePercentage) || parseSum <= 0 || parsePercentage <= 0 || parsePercentage > 100) {
//         alert("Invalid input data");
//     } else {
//         const percentageSum = Number((parseSum / 100 * parsePercentage).toFixed(2));
//         const total = (parseSum + parsePercentage).toFixed(2);
//         alert(` Check summ: ${parseSum}
// Tip: ${parsePercentage}%
// Tip amount: ${percentageSum}
// Total sum to pay:  ${total}`)
//     }
// }

const summ = prompt('Input check sum !');
const percentage = prompt('Input percentage !');
if (summ === null || percentage === null) {
  alert("Canceled");
} else {
  const parseSum = Number.parseFloat(summ);
  const parsePercentage = Number.parseFloat(percentage);
  // console.log(parseSum);
  // console.log(parsePercentage);
  // console.log(Number.isNaN(parseSum));
  if (Number.isNaN(parseSum) || Number.isNaN(parsePercentage) || parseSum <= 0 || parsePercentage <= 0 || parsePercentage > 100) {
    alert("Invalid input data");
  } else {
    const percentageSum = Number((parseSum / 100 * parsePercentage).toFixed(2));
    const total = (parseSum + percentageSum).toFixed(2);
    alert(`Check summ: ${parseSum}
Tip: ${parsePercentage}%
Tip amount: ${percentageSum}
Total sum to pay:  ${total}`);
  }
}

