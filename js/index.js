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
    document.getElementById("answer-5a").innerHTML = "-1";
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
document.getElementById("timSNT").onclick = function () {
  var soNT = 0;

  for (var i = 0; i < listNumber.length; i++) {
    var checkSNT = true;
    for (var i = 2; i <= Math.sqrt(listNumber[i]); i++) {
      if (listNumber[i] % 2 === 0) {
        checkSNT = false;
        break;
      }
    }
    if (checkSNT) {
      soNT = iSo + " ";
    }
  }
};
