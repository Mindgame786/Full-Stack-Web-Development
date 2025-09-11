//--------------------------------------API--------------------------------------------------

//--------------------------(Application Programming Interface)------------------------------


//  API is like a messenger that allows two different computer programs or systems to talk to each other and share information.                                                                                                                                                                           API is like a bridge that connects apps, websites,or devices,making it easier for them to work together.                                                                               API stand for (Application Programming Interface) It Provides a set of methods and rules to interact with external services or  data.


// FOR EXAMPLE:                                                                              To get Weather Information from other Source.                                                To get Currency Rate from other system.                                                      API use as a ALG.


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//      (1) How To Call API ?                   (2) How To Handle Response?

// (1)  How To Call API ?

//------------------------[ By: fetch() Method  in  JS ]-------------------------------------

// The fetch() method/function   is  used  to  make  API   requests.  (Like fetching data from a  server). It  returns  a  Promise, Which resolves to the response of  the request.


// Syntax:                                                                                                         fetch(url,[options]);


const URL = "https://api.thecatapi.com/v1/images/search?limit=10";

// let response = fetch(URL);
// console.log(response.status);

let cate = async () => {
  console.log("Getting Data From API.....")

  const response = await fetch(URL);
  console.log(response);
  console.log(response.status);
}

cate();
