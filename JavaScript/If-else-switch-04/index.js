//----------------------------------If-else-Statement-JS---------------------------------------

//  If statement is used for decision making and can also be used with else Statement,

let
  marks = 40;

if (marks > 33) {
  console.log("Student is Pass");

} else {
  console.log("Student is Fail");
  console.log("Aglow School System");

}

// Example Assignment:


let
  empname = "UMARJUTT";
salary = 100000;
tax = 0;
netSalary = 0;


if (salary >= 80000) {
  tax = 10 / 100 * salary;
} else {
  tax = 5 / 100 * salary;
}
console.log("Employee Name :", empname, "  Employee Salary :", salary, "  Tax on Salary :", tax, "  Net Salary :", salary - tax);

// console.log("Employee Name :", empname);
// console.log("Employee Salary :", salary);
// console.log("Tax on Salary :", tax);
// console.log("Net Salary :", salary - tax);







//---------------------------If--n-[-else--If-]-----else----------------------------------

//  When we use an if statement within another if statement then it is called Nested if.

//  Example:-

// No1:-


// {
//   let input = prompt("Enter Salary:");
//   let salary = Number(input);
//   let tax = 0;
//   let taxRate = "";

//   // Invalid check: empty, non-numeric, or negative
//   if (input.trim() === "" || isNaN(salary) || salary <= 0) {
//     console.log("❌ Invalid salary input. Please enter a valid number greater than 0.");
//   }
//   else {

//     if (salary < 80000) {
//       tax = 5 / 100 * salary;
//       taxRate = "05%";
//     } else if (salary < 100000) {
//       tax = 10 / 100 * salary;
//       taxRate = "10%";
//     } else {
//       tax = 20 / 100 * salary;
//       taxRate = "20%";
//     }

//     console.log("✅ Salary:", salary);
//     console.log("💰 Tax Rate:", taxRate, "| Tax Amount:", tax);
//     console.log("🧾 Net Salary:", salary - tax);
//   }
// }



// -------------------------------Nested--If---------------------------------------------

//   No2:-

{
  let Student = prompt("Enter Your Name:");
  let input = prompt("Enter Marks (0 to 100):");
  let Marks = Number(input);
  let Grade = "";
  let Remark = "";

  // ✅ Input validation
  if (Student.trim() === "") {
    console.log("❌ Invalid Name. Please enter a valid name.");
  } else if (input.trim() === "" || isNaN(Marks) || Marks < 0 || Marks > 100) {
    console.log("❌ Invalid Marks input. Please enter a number between 0 and 100.");
  } else {
    // ✅ Grade Calculation
    if (Marks <= 32) {
      Grade = "F";
      Remark = "Fail";

    } else if (Marks <= 40) {
      Grade = "E";
      Remark = "Needs Improvement";

    } else if (Marks <= 60) {
      Grade = "C";
      Remark = "Average";

    } else if (Marks <= 80) {
      Grade = "B";
      Remark = "Good";

    } else {
      Grade = "A";
      Remark = "Excellent";
    }

    let Percentage = (Marks / 100) * 100;

    // ✅ Output
    console.log("👨‍🎓 Student:", Student);
    console.log("✅ Marks:", Marks);
    console.log("🎓 Grade:", Grade);
    console.log("📝 Remark:", Remark);
    console.log("📊 Percentage:", Percentage.toFixed(2) + "%");

    alert(`👨‍🎓 Student: ${Student}\n✅ Marks: ${Marks}\n🎓 Grade: ${Grade}\n📝 Remark: ${Remark}\n📊 Percentage: ${Percentage.toFixed(2)}%`);
  }
}



















