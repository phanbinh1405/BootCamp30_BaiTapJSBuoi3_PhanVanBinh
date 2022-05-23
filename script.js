const exerciseContainer1 = document.querySelector("#exercise1");
const exerciseContainer2 = document.querySelector("#exercise2");
const exerciseContainer3 = document.querySelector("#exercise3");
const exerciseContainer4 = document.querySelector("#exercise4");
const exerciseContainer5 = document.querySelector("#exercise5");
const exerciseContainer6 = document.querySelector("#exercise6");
const exerciseContainer7 = document.querySelector("#exercise7");
const exerciseContainer8 = document.querySelector("#exercise8");
const exerciseContainer9 = document.querySelector("#exercise9");

// Bài tập 1
function printAscendingNumber() {
  let num1 = parseInt(exerciseContainer1.querySelector("#num1").value);
  let num2 = parseInt(exerciseContainer1.querySelector("#num2").value);
  let num3 = parseInt(exerciseContainer1.querySelector("#num3").value);
  const resultElement = exerciseContainer1.querySelector("#result1");

  if (num1 < num2) {
    num2 = num1 + num2;
    num1 = num2 - num1;
    num2 = num2 - num1;
  }

  if (num1 < num3) {
    num3 = num1 + num3;
    num1 = num3 - num1;
    num3 = num3 - num1;
  }

  if (num2 < num3) {
    num3 = num2 + num3;
    num2 = num3 - num2;
    num3 = num3 - num2;
  }

  return (resultElement.innerText = `Ba số theo thứ tự tăng dần: ${num3}, ${num2}, ${num1}`);
}

// Bài tập 2
function printDate() {
  let date = parseInt(exerciseContainer2.querySelector("#date").value);
  let month = parseInt(exerciseContainer2.querySelector("#month").value);
  let year = parseInt(exerciseContainer2.querySelector("#year").value);

  let nextDay;
  let nextMonth;
  let nextYear;
  let prevDay;
  let prevMonth;
  let prevYear;

  const resultElement = exerciseContainer2.querySelector("#result2");

  // Năm nhuận
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    if (month === 1) {
      if (date === 1) {
        prevDay = 31;
        prevMonth = 12;
        prevYear = year - 1;

        nextDay = 2;
        nextMonth = month;
        nextYear = year;
      } else if (date === 31) {
        prevDay = 30;
        prevMonth = month;
        prevYear = year;

        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    } else if (month === 12) {
      if (date === 1) {
        prevDay = 31;
        prevMonth = month - 1;
        prevYear = year;

        nextDay = 1;
        nextMonth = month;
        nextYear = year;
      } else if (date === 31) {
        prevDay = 30;
        prevMonth = month;
        prevYear = year;

        nextDay = 1;
        nextMonth = 1;
        nextYear = year + 1;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    } else if (month === 2) {
      if (date === 1) {
        prevDay = 31;
        prevMonth = month - 1;
        prevYear = year;

        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      } else if (date === 29) {
        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;

        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    } else if (month === 8) {
      if (date === 1) {
        prevDay = 31;
        prevMonth = month - 1;
        prevYear = year;

        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      } else if (date === 31) {
        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;

        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    } else if (month === 3 || month === 5 || month === 7 || month === 10) {
      if (date === 1 && month === 3) {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = 29;
        prevMonth = month - 1;
        prevYear = year;
      } else if (date === 1) {
        prevDay = 30;
        prevMonth = month - 1;
        prevYear = year;

        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      } else if (date === 31) {
        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;

        prevDay = 30;
        prevMonth = month;
        prevYear = year;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    } else {
      if (date === 1) {
        prevDay = 31;
        prevMonth = month - 1;
        prevYear = year;

        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      } else if (date === 30) {
        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    }
  } else {
    // Năm không nhuận
    if (month === 1) {
      if (date === 1) {
        prevDay = 31;
        prevMonth = 12;
        prevYear = year - 1;

        nextDay = 2;
        nextMonth = month;
        nextYear = year;
      } else if (date === 31) {
        prevDay = 30;
        prevMonth = month;
        prevYear = year;

        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    } else if (month === 12) {
      if (date === 1) {
        prevDay = 31;
        prevMonth = month - 1;
        prevYear = year;

        nextDay = 1;
        nextMonth = month;
        nextYear = year;
      } else if (date === 31) {
        prevDay = 30;
        prevMonth = month;
        prevYear = year;

        nextDay = 1;
        nextMonth = 1;
        nextYear = year + 1;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    } else if (month === 2) {
      if (date === 1) {
        prevDay = 31;
        prevMonth = month - 1;
        prevYear = year;

        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      } else if (date === 28) {
        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;

        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    } else if (month === 8) {
      if (date === 1) {
        prevDay = 31;
        prevMonth = month - 1;
        prevYear = year;

        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      } else if (date === 31) {
        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;

        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    } else if (month === 3 || month === 5 || month === 7 || month === 10) {
      if (date === 1 && month === 3) {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = 28;
        prevMonth = month - 1;
        prevYear = year;
      } else if (date === 1) {
        prevDay = 30;
        prevMonth = month - 1;
        prevYear = year;

        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      } else if (date === 31) {
        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;

        prevDay = 30;
        prevMonth = month;
        prevYear = year;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    } else {
      if (date === 1) {
        prevDay = 31;
        prevMonth = month - 1;
        prevYear = year;

        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      } else if (date === 30) {
        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;

        prevDay = date - 1;
        prevMonth = month;
        prevYear = year;
      }
    }
  }

  return (resultElement.innerHTML = `
  <p>Ngày/Tháng/Năm tiếp theo là: ${nextDay}/${nextMonth}/${nextYear}</p>  <br/>
  <p>Ngày/Tháng/Năm trước đó là: ${prevDay}/${prevMonth}/${prevYear}</p>
  `);
}

// Bài tập 3
function printHello() {
  const user = exerciseContainer3.querySelector("#user").value.toLowerCase();

  if (user === "bố") {
    alert("Máy tính chào Bố !!");
  }
  if (user === "mẹ") {
    alert("Máy tính chào Mẹ !!");
  }
  if (user === "anh trai") {
    alert("Máy tính chào Anh Trai !!");
  }
  if (user === "em gái") {
    alert("Máy tính chào Em Gái !!");
  }
}

// Bài tập 4
function countNumber() {
  let totalOddNum = 0;
  let totalEvenNum = 0;
  let num1 = parseInt(exerciseContainer4.querySelector("#num1").value);
  let num2 = parseInt(exerciseContainer4.querySelector("#num2").value);
  let num3 = parseInt(exerciseContainer4.querySelector("#num3").value);
  const resultElement = exerciseContainer4.querySelector("#result4");

  if (num1 % 2 === 0) {
    totalEvenNum += 1;
  } else {
    totalOddNum += 1;
  }
  if (num2 % 2 === 0) {
    totalEvenNum += 1;
  } else {
    totalOddNum += 1;
  }
  if (num3 % 2 === 0) {
    totalEvenNum += 1;
  } else {
    totalOddNum += 1;
  }

  return (resultElement.innerText = `Có tất cả  ${totalEvenNum} số chẵn và ${totalOddNum} số lẻ !`);
}

// Bài tập 5
function checkDate() {
  const month = parseInt(exerciseContainer5.querySelector("#month").value);
  const year = parseInt(exerciseContainer5.querySelector("#year").value);
  const resultElement = exerciseContainer5.querySelector("#result5");

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return (resultElement.innerText = `Tháng ${month} có 31 ngày`);

      case 2:
        return (resultElement.innerText = `Tháng ${month} có 29 ngày`);

      default:
        return (resultElement.innerText = `Tháng ${month} có 30 ngày`);
    }
  } else {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return (resultElement.innerText = `Tháng ${month} có 31 ngày`);

      case 2:
        return (resultElement.innerText = `Tháng ${month} có 28 ngày`);

      default:
        return (resultElement.innerText = `Tháng ${month} có 30 ngày`);
    }
  }
}

// Bài tập 6
function checkDistance() {
  let max = 0;
  let student = 0;

  const resultElement = exerciseContainer6.querySelector("#result6");

  const x1 = parseFloat(exerciseContainer6.querySelector("#x1").value);
  const y1 = parseFloat(exerciseContainer6.querySelector("#y1").value);
  const x2 = parseFloat(exerciseContainer6.querySelector("#x2").value);
  const y2 = parseFloat(exerciseContainer6.querySelector("#y2").value);
  const x3 = parseFloat(exerciseContainer6.querySelector("#x3").value);
  const y3 = parseFloat(exerciseContainer6.querySelector("#y3").value);

  const distance1 = Math.sqrt(x1 * x1 + y1 * y1);
  const distance2 = Math.sqrt(x2 * x2 + y2 * y2);
  const distance3 = Math.sqrt(x3 * x3 + y3 * y3);

  if (distance1 > max) {
    max = distance1;
    student = `sinh viên 1`;
  }

  if (distance2 > max) {
    max = distance2;
    student = `sinh viên 2`;
  }

  if (distance3 > max) {
    max = distance3;
    student = `sinh viên 3`;
  }

  return (resultElement.innerText = `Sinh viên xa trường nhất là ${student}`);
}

// Bài tập 7
function printAbs() {
  let num1 = parseInt(exerciseContainer7.querySelector("#num1").value);
  let num2 = parseInt(exerciseContainer7.querySelector("#num2").value);
  let num3 = parseInt(exerciseContainer7.querySelector("#num3").value);
  const resultElement = exerciseContainer7.querySelector("#result7");

  if (num1 < 0) {
    num1 = -num1;
  }
  if (num2 < 0) {
    num2 = -num2;
  }
  if (num3 < 0) {
    num3 = -num3;
  }

  return (resultElement.innerHTML = `Ba số là: ${num1}, ${num2}, ${num3}`);
}

// Bài tập 8
function checkNum(num) {
  let result;
  switch (num) {
    case 1:
      result = `Một`;
      break;
    case 2:
      result = `Hai`;
      break;
    case 3:
      result = `Ba`;
      break;
    case 4:
      result = `Bốn`;
      break;
    case 5:
      result = `Năm`;
      break;
    case 6:
      result = `Sáu`;
      break;
    case 7:
      result = `Bảy`;
      break;
    case 8:
      result = `Tám`;
      break;
    case 9:
      result = `Chín`;
      break;

    default:
      result = "Không";
      break;
  }

  return result;
}

function printPronouce() {
  let num = parseInt(exerciseContainer8.querySelector("#num").value);
  const resultElement = exerciseContainer8.querySelector("#result8");

  const hangTram = Math.floor(num / 100);
  const hangChuc = Math.floor((num / 10) % 10);
  const hangDonVi = Math.floor(num % 10);

  if (hangTram === 0) {
    alert(`Nhập vào số có 3 chữ số`);
    return;
  }

  if (hangChuc === 1 && hangDonVi === 0) {
    return (resultElement.innerText = `Cách đọc số là: ${checkNum(
      hangTram
    )} trăm mười`);
  } else if (hangChuc != 0 && hangDonVi === 0) {
    return (resultElement.innerText = `Cách đọc số là: ${checkNum(
      hangTram
    )} trăm ${checkNum(hangChuc)} mươi`);
  } else if (hangChuc === 1 && hangDonVi != 0) {
    return (resultElement.innerText = `Cách đọc số là: ${checkNum(
      hangTram
    )} trăm mười ${checkNum(hangDonVi)}`);
  } else if (hangChuc != 1 && hangDonVi === 1) {
    return (resultElement.innerText = `Cách đọc số là: ${checkNum(
      hangTram
    )} trăm ${checkNum(hangChuc)} mươi mốt`);
  } else if (hangChuc === 0 && hangDonVi === 0) {
    return (resultElement.innerText = `Cách đọc số là: ${checkNum(
      hangTram
    )} trăm`);
  } else if (hangChuc === 0 && hangDonVi === 1) {
    return (resultElement.innerText = `Cách đọc số là: ${checkNum(
      hangTram
    )} trăm lẻ một`);
  } else if (hangChuc === 0 && hangDonVi != 1) {
    return (resultElement.innerText = `Cách đọc số là: ${checkNum(
      hangTram
    )} trăm lẻ ${checkNum(hangDonVi)}`);
  } else {
    return (resultElement.innerText = `Cách đọc số là: ${checkNum(
      hangTram
    )} trăm ${checkNum(hangChuc)} mươi ${checkNum(hangDonVi)}`);
  }
}

// Bài tập 9
function typeOfTriangle() {
  let a = parseInt(exerciseContainer9.querySelector("#a").value);
  let b = parseInt(exerciseContainer9.querySelector("#b").value);
  let c = parseInt(exerciseContainer9.querySelector("#c").value);
  const resultElement = exerciseContainer9.querySelector("#result9");

  let result;

  if (a < b + c && b < a + c && c < a + b) {
    if (
      a * a == b * b + c * c ||
      b * b == a * a + c * c ||
      c * c == a * a + b * b
    ) {
      result = "Đây là tam giác vuông";
    } else if (a == b && b == c) {
      result = "Đây là tam giác đều";
    } else if (a == b || a == c || b == c) {
      result = "Đây là tam giác cân";
    } else if (
      a * a > b * b + c * c ||
      b * b > a * a + c * c ||
      c * c > a * a + b * b
    ) {
      result = "Đây là tam giác tù";
    } else {
      result = "Đây là tam giác nhọn";
    }
  } else {
    result = "Đây không phải là ba cạnh của tam giác";
  }

  return resultElement.innerText = result
}
