let year;
year = parseInt(prompt("Укажите год:"));
if ((year % 4 == 0 && year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) { alert("Год является високосным") }
else { alert("Год не является високосным"); }








