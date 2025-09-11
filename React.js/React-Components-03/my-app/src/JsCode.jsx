function JsCode() {
  // const fullName = null;
  const fullName = "UMAR JUtT";
  let age = 20;
  let x = 10;
  let y = 10;
  //------------------------------------------------------------------------------------------------
  function city() {
    alert("Lahore");
  }
  //------------------------------------------------------------------------------------------------

  function calc(a, b, opr) {
    if (opr == "+") {
      return a + b;
    } else if (opr == '-') {
      return a - b;
    } else if (opr == "/") {
      return a / b;
    } else {
      return a * b;
    }
  }

  //------------------------------------------------------------------------------------------------                            OBJECT IN JSX                                                       ------------------------------------------------------------------------------------------------

  const emp = {

    empName: "UmarJutT",
    empSalary: 50000,
    empEmil: "UMARJUTT@gMail.Com"
  }

  //------------------------------------------------------------------------------------------------                            Array in JSX                                                       ------------------------------------------------------------------------------------------------
  let Colors = ["RED", "YELLOW", "BLACK", "BLUE", "BROWN"]
  //------------------------------------------------------------------------------------------------

  let myImage = "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww"

  return (
    <>

      <h1 className="mt-8  font-bold mb-2">JavaScript Code in JSX</h1>
      <label htmlFor="" className="font-bold">TextBox</label>
      <input className="ml-2 border-2 pl-2 rounded align-content-start" type="text" name="fullName" id="" value={emp.empEmil} />
      <br />
      <br />

      <img src={myImage} width={400} alt="car-image" />
      <h2>{fullName} is {age}  Year Old</h2>
      <h2>{fullName ? fullName : "User Is Invalid"}</h2>
      <h3>{x + y}</h3>
      {city()}
      <h2>{calc(800, 777, "-")}</h2>
      <h2>{emp.empEmil}</h2>
      <h2 className="font-bold">Color: {Colors[2]}</h2>

    </>
  )
}

export default JsCode;