//-----------------------------------Part-2-Previous-Part-File-------------------------------

// ------------------------ (2) How To Handle Response?-------------------------------------


//----Remember-These-2-Terms-in-JS-----------------------------------------------------------


//(1) JSON:    JavaScript Object Notation:

//  It is  data format used for storing and exchanging data.It is easy for  humans to read and easy for machines to parse and gernerate.




// (2) AJAX:   Asynchronous JS  & XML :

// AJAX  is  a   technique  that  allows web pages to update asynchronously by exchanging data with a server in  the backgound. This means Parts of  a web page can be updated without reloading the entire page.





// (3) AJAJ (Asynchronous JavaScript and JSON);

// It  is  a  method  of   updating parts of   a  webpage  without reloading the whole page, using JSON to send receive data between the browser and the server. It is faster and easier than using XML.


//-------------------------JSON   is   USed Mostly widely  in  World-------------------------



// The Json() method is  used to parse a JSON response into a  JavaScript Object.it also returns Promise.  response.json();


const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
let img = document.querySelector("#idcate");
let btn = document.querySelector("#btn");

// let response = fetch(URL);
// console.log(response.status);

let cate = async () => {
  console.log("Getting Data From API.....")

  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  // console.log(data[0].url);
  img.src = data[0].url;
  console.log(response);
  // console.log(response.status);
}
btn.addEventListener("click", cate);
// cate();





//---------------------------------------------------------------------------------------------                                   HTTP Request-Methods                                      ---------------------------------------------------------------------------------------------

// HTTP  stands for  HyperText Transfer Protocol.HTTP request methods are used to define the action a  client wants to  perform  on  a  server. These specify the type of  operation (e.g., retrieving,creating,updating,or,deleting data).

// Here are  the  most  common ones:

//  (1)  GET     :    Retrieve  data from  a  server.
//  (2)  POST    :    Send  data  to  the server to  create a  new  resource.
//  (3)  PUT     :    Update  an  existing resource on  the server.
//  (4)  DELETE   :   Delete  a  resource on  the server.


//---------------------------------------------------------------------------------------------                          HTTP  Resposnse status codes                                       ---------------------------------------------------------------------------------------------

// HTTP  response  status codes indicate the result  of  a  request made to  the server.They are  grouped  into five categories:

// CATEGORIES:

// 1.1xx (informational): Request  received, processing.
//   Example:100 continue

// 2.2xx (success): Request  Succeeded.
//   Example:200  OK,201 created

// 3.3xx (Redirection): Further action needed to complete request.
//   Example:301 Moved  Permanently, 302 Found

// 4.4xx (Client Errors): Error caused by the  client.
//   Example:400 Bad Request, 404 Not Found

// 5.5xx (Server Error): Error caused by the server
//   Example:500  Internal Server Error,503 Service Unavailable

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
