var listNumber = [];

document.getElementById("nhapSo").onclick = function () {
  var number = document.getElementById("soNguyen").value * 1;
  var content = "";

  listNumber.push(number);

  for (var i = 0; i < listNumber.length; i++) {
    content += listNumber[i] + ", ";
    document.getElementById("inSo").innerHTML = content;
  }
};

// Câu 1:
document.getElementById("tinhTong").onclick = function () {
  var tong = 0;
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      tong += listNumber[i];
    }
  }
  document.getElementById("answer-1").innerHTML =
    "Tổng các số dương là: " + tong;
};

// Câu 2:
document.getElementById("demSoDuong").onclick = function () {
  var count = 0;
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      count += 1;
    }
  }
  document.getElementById("answer-2").innerHTML = "Có " + count + " số dương";
};

// Câu 3:
document.getElementById("timMin").onclick = function () {
  var iMin = 0;
  var min = listNumber[iMin];

  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < listNumber[iMin]) {
      min = listNumber[i];
      iMin = i;
    }
  }
  document.getElementById("answer-3").innerHTML = "Số nhỏ nhất là: " + min;
};

// Câu 4:
var listDuong = [];

document.getElementById("timDuongMin").onclick = function () {
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }

  for (var index = 0; index < listNumber.length; index++) {
    if (listNumber[index] >= 0) {
      listDuong.push(listNumber[index]);
    }
  }

  var iDuongMin = 0;
  var duongMin = listDuong[iDuongMin];

  if (listDuong.length === 0) {
    alert("Không có số dương trong mảng!");
    return;
  }

  for (var i = 0; i < listDuong.length; i++) {
    if (listDuong[i] < listDuong[iDuongMin]) {
      duongMin = listDuong[i];
      iDuongMin = i;
    }
  }

  document.getElementById("answer-4").innerHTML =
    "Số dương nhỏ nhất là: " + duongMin;
};

// Câu 5:
var listChan = [];

document.getElementById("timSoChan").onclick = function () {
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 === 0) {
      listChan.push(listNumber[i]);
    }
  }

  var iLast = 0;
  var chanLast = listChan[iLast];
  if (listChan.length === 0) {
    chanLast = -1;
    document.getElementById("answer-5").innerHTML = "-1";
    return;
  }

  for (var i = 0; i < listChan.length; i++) {
    if (i > iLast) {
      chanLast = listChan[i];
      iLast = i;
    }
  }

  document.getElementById("answer-5").innerHTML =
    "Số chẵn cuối cùng trong mảng là: " + chanLast;
};

// Câu 6:
function swap(listNumber, viTri1, viTri2) {
  var temp = listNumber[viTri1];
  listNumber[viTri1] = listNumber[viTri2];
  listNumber[viTri2] = temp;
  return listNumber;
}

document.getElementById("doiViTri").onclick = function () {
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }

  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;

  var listThayDoi = swap(listNumber, viTri1, viTri2);
  document.getElementById("answer-6").innerHTML =
    "Danh sách sau khi thay đổi: " + listThayDoi;
};

// Câu 7:
function sortTheoSo(listNumber) {
  var result = listNumber.sort(function (num, numTruoc) {
    return num - numTruoc;
  });
  return result;
}

document.getElementById("sapXep").onclick = function () {
  var sapXep = sortTheoSo(listNumber);
  document.getElementById("answer-7").innerHTML = "Thứ tự tăng dần: " + sapXep;
};

// Câu 8:
function checkSNT(n) {
  var flag = 1;

  if (n < 2) {
    return (flag = 0);
  }

  var i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }
  return flag;
}

var soNT = 0;

document.getElementById("timSNT").onclick = function () {
  for (let i = 0; i < listNumber.length; i++) {
    if (checkSNT(listNumber[i]) == 1) {
      soNT = "Số nguyên tố đầu tiên là: " + listNumber[i];
      break;
    } else {
      soNT = -1;
    }
  }
  document.getElementById("answer-8").innerHTML = soNT;
};

// Câu 9:
var soThuc = [];

document.getElementById("nhapSoThuc").onclick = function () {
  var number = document.getElementById("soThuc").value * 1;
  var content = "";

  soThuc.push(number);

  for (var i = 0; i < soThuc.length; i++) {
    content += soThuc[i] + ", ";
    document.getElementById("mangSoThuc").innerHTML = content;
  }
};

document.getElementById("demSoNguyen").onclick = function () {
  var count = 0;
  for (var i = 0; i < soThuc.length; i++) {
    if (Number.isInteger(soThuc[i])) {
      count += 1;
    }
  }
  document.getElementById("answer-9").innerHTML =
    "Trong mảng có: " + count + " số nguyên";
};

// Câu 10:
document.getElementById("soSanh").onclick = function () {
  var countAm = 0;
  var countDuong = 0;
  var ketQua = "";
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < 0) {
      countAm += 1;
    } else {
      countDuong += 1;
    }
  }
  if (countAm < countDuong) {
    ketQua =
      "<p>Có " +
      countAm +
      " số âm</p>" +
      "Có " +
      countDuong +
      " số dương</p>" +
      "<p>Số dương nhiều hơn số âm</p>";
  } else if (countAm > countDuong) {
    ketQua =
      "<p>Có " +
      countAm +
      " số âm</p>" +
      "Có " +
      countDuong +
      " số dương</p>" +
      "<p>Số âm nhiều hơn số dương</p>";
  } else if (countAm === countDuong) {
    ketQua =
      "<p>Có " +
      countAm +
      " số âm</p>" +
      "Có " +
      countDuong +
      " số dương</p>" +
      "<p>Số lượng 2 số bằng nhau</p>";
  }

  document.getElementById("answer-10").innerHTML = ketQua;
};
