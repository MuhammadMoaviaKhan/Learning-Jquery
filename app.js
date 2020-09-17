// //////////////// FUNCTIONS ////////////////

// ///Normal Function

// function hello(){
//     document.write("Hello EveryBody");
//     document.write("I'm Moavia Khan");
// }

// function one(){
//     document.write("I'm 18 &");
//     document.write("I live in karachi");
// }


// hello();
// document.write("<br>");
// document.write("<br>");
// one();

// ///Function with Parameters

// function hello(fname , lname){
//     document.write("Hello"+ " " + fname + " " + lname );
// }

// function sum(a , b){
//     document.write(a * b);
// }


// hello("Moavia" , "Khan");
// document.write("<br>");
// document.write("<br>");
// sum(5,10);
// document.write("<br>");
// document.write("<br>");
// hello("Shaheer","Khan");

// ////Function with return value 

// function fullName(fname = "Moavia" , lname = "Khan"){
//     var a = fname + " " + lname 


//     return a;
// }

// var fn = fullName("Shaheer","Khan");

// document.write(fn);

// ////Function with return value second example

// function sum(math,english,urdu,islamiat,physics){
//     var s = math + english + urdu + + islamiat + physics;
//     return s;
// }
// function percentage(tt){
//     var per = tt/500 * 100;
//     document.write(per);
// }
// var total = sum(55,63,47,89,66);
// percentage(total);

// ///Local & Global variable


// var a = "Moavia"; // Global Variable
// var b = "Khan"; // Global Variable

// function hello(){
//     var c = "Muhammad";  //Local Variable
//     document.write(c + " " + a + " " + b + "<br>" )
// }

// hello();
// document.write(a + " " + b)


// ////////////////   LOOPS    //////////////

// ////while loop




// var a = 15

// while(a >= 10){
//     document.write(a + ") Hello World <br>");
//     a--
// }



// ///Do while loop


// var a = 1

// do{
//     document.write(a + ") Hello Moavia <br>");
//     a++
// }while(a <= 5)


// ////for loop


// for(a = 15; a >=10; a--){
//     document.write(a + ' Hello World <br>');
// }


// /////Break & Continue Statement in Loop


// for(a = 1; a <=10; a++){
//     if(a == 3){
//         document.write("Hey : " + a + "<br>");
//         continue 

//     }
//     document.write( "Number : " + a + ' <br>');
// }


// ////Nested loop

// for(a = 1; a<=10; a++){
//     for(b = a; b< a+10; a++){
//         document.write(a);
//     }
//     document.write("<br>" + " ");
// }

// /////////////// ARRAYS //////////////

// var a = [10,20,30,40,50]
// document.write(a[3]);



// var a = [10,20,30,40,50]

// for (b=0; b<=3;b++){
//     document.write("<ul>")
//     document.write("<li>" + a[b] + "<br>" + "</li>")
//     document.write("</ul>")
// }

// Sum in Array

// var a = [10,20,30,40,50]
// var sum = 0;

// for (b=0; b<=4;b++){
//    document.write("<ul>")
//     document.write("<li>" + a[b] + "<br>" + "</li>")
//     document.write("</ul>") 
//     sum = sum + a[b];
// }

// document.write("Total sum : " + sum);

// ////Array Mathod II

// var a = new Array ();
// a[0] = "Moavia";
// a[1] = true;
// a[2] = 18;

// for (b=0; b<3;b++){
//     document.write("<ul>")
//     document.write("<li>" + a[b] + "<br>" + "</li>")
//     document.write("</ul>") 
// }

// ////Array Mathod II with prompt

// var a = new Array (3);

// for(var c=0; c<3; c++){
//     a[c]= prompt("Enter Name,Gander & Age");
// }

// document.write("<ul>")
// for (b=0; b<3;b++){ 
//     document.write("<li>" + a[b] + "<br>" + "</li>")
// }
// document.write("</ul>")

///////////////// Objets ///////////////

// var a = {
//     fname : "Moavia",
//     lname : "Khan",
//     age : 18,
//     email : "moaviakhan2001@gamil.com"
// }
// console.log(a);
// document.write(a.age);

//// Object with Array

// var a = {
//     fname : "Moavia",
//     lname : "Khan",
//     age : 18,
//     email : "moaviakhan2001@gamil.com",
//     favmovies : ['John Wick','Avengers','Mission Impossible']
// }
// console.log(a);
// document.write(a.favmovies[0]);

//// Object with Function

// var a = {
//     fname : "Moavia",
//     lname : "Khan",
//     age : 18,
//     email : "moaviakhan2001@gamil.com",
//     favmovies : ['John Wick','Avengers','Mission Impossible'],
//     salary : function(){
//         return 25000
//     }
// }
// console.log(a);
// document.write(a.salary());

//// Object with II Function

// var a = {
//     fname : "Moavia",
//     lname : "Khan",
//     age : 18,
//     email : "moaviakhan2001@gamil.com",
//     favmovies : ['John Wick','Avengers','Mission Impossible'],
//     salary : function(){
//         return 25000
//     },
//     fullName : function(){
//         return this.fname + " " + this.lname 
//     }
// }
// console.log(a);
// document.write(a.fullName());

//// Object in object 

// var a = {
//     fname : "Moavia",
//     lname : "Khan",
//     age : 18,
//     email : "moaviakhan2001@gamil.com",
//     favmovies : ['John Wick','Avengers','Mission Impossible'],
//     living : {
//         'city' : 'Karachi',
//         'country' : 'Pakistan'
//     },
//     salary : function(){
//         return 25000
//     },
//     fullName : function(){
//         return this.fname + " " + this.lname 
//     }
// }
// console.log(a);
// document.write(a.living.country);

//// IInd Mathod of Object 

// var country = new Object();

// country.first = 'Pakistan';
// country.second = 'Turkey';
// country.third = 'China';
// country.forth = 'Indonesia';
// country.fifth = 'Qatar';

// document.write(country.second);
// console.log(country);


// Array of Objects

// var student = [
//     {name : "Shaheer" , lname : "Khan" , age : 21 },
//     {name : "Moavia" , lname : "Khan" , age : 18 },
//     {name : "Khizer" , lname : "Khan" , age : 15 },
//     {name : "Mahad" , lname : "Khan" , age : 12 }
// ]

// console.log(student);

// for(a = 0; a = student.length; a++){
//   document.write(student[a]);
// };

// Const variable with Array asnd Objects

// const a = "Mahad";  ///// we can't change const variable 
// console.log(a);

/////////

// const b = ["Shaheer" , "Moavia" , "Khizer" , "Mahad"];

// b[1] = "Main nhi btaonga"///////// but we can change array with defined index of array 

// document.write(b);

// const c = { //////// we can change object like array but here we defined a property of object 
//     name : "Moavia",
//     age : 18
// }

// c.name = "Shaheer",
// c.age = 20 

// console.log(c);

///// For in loop

// var a = {
//     firstName : "Moavia",
//     lastName : "Khan",
//     age : 18,
//     email : "moaviakhan2001@gmail.com"
// }

// for (var b in a ){
//     document.write( b +" "+":"+" "+a[b] + "<br>");
// }

//// map() mathod of array

// var a = [13,15,54,,67]

// var b = a.map(test);
// document.write(b);


// function test(c){
//     return c * 10;
// }

//// map() mathod with array of object

// var a = [
//     {fname : "Shaheer" , lname : "Khan"},
//     {fname : "Moavia" , lname : "Khan"},
//     {fname : "Khizer" , lname : "Khan"},
//     {fname : "Mahad" , lname : "Khan"}
// ]

// var b = a.map(test);
// document.write(b);


// function test(c){
//     return c.fname + " " + c.lname  ;
// }

///////////// String Mathods //////////////

//// Lenght Property

// var str = "Javascript is a great language"
// var a = str.length;

// document.write(a);

//// toLowerCase() function

// var str = "Javascript is a GREAT Language"
// var a = str.toLowerCase();

// document.write(a);


//// toUpperCase() function

// var str = "Javascript is a GREAT Language"
// var a = str.toUpperCase();

// document.write(a);

//// includes() function  /////// yeh function exact match karega agr ek alphabate bhi match nhi hoa to ye false return karega ////

// var str = "Javascript is a GREAT Language"  
// var a = str.includes("Javas");

// document.write(a);

//// startWith() function  /////// yeh function exact match karega agr ek alphabate bhi match nhi hoa to ye false return karega ////

// var str = "Javascript is a GREAT Language"
// var a = str.startsWith('Java');

// document.write(a);

//// endsWith() funtion  /////// yeh function exact match karega agr ek alphabate bhi match nhi hoa to ye false return karega ////

// var str = "Javascript is a GREAT Language"
// var a = str.endsWith('uage');

// document.write(a);

//// serch() function  ////// yh function humaray search kiye hoe word ki idex batai ga or exact match hi karega 

// var str = "Javascript is a GREAT Language"
// var a = str.search('is');

// document.write(a);

//// match() funtion /////// yh funtion search kiye hoa words ka array bna kr return karega or yh regular expression mean /xyz/ is tarha lkha jai ga 

// var str = "Javascript is a GREAT is Language"
// var a = str.match(/is/g); ////  g mean is global

// document.write(a);

//// indexOf() function //// yh function hamaray search kiye hoa word ka index btai ga lkin agr is function ko ek bar word mil gya to doosray same word ko dekhay ga hi nhi 
/////example//

// var str = "Javascript is a GREAT is Language"
// var a = str.indexOf('is');

// document.write(a);

//// lastIndexOf() function ////// yh functin last se search karega 

// var str = "Javascript is a GREAT is Language"
// var a = str.lastIndexOf('is');

// document.write(a);

///// replace() funtion

// var str = "Javascript is a GREAT Language"
// var a = str.replace('Javascript','PHP');

// document.write(a);

//// another example

// var str = "Javascript is a GREAT is Language"
// var a = str.replace(/is/g,'are');

// document.write(a);

//// trim() function  ////// yh function extra space ko khatam kr dega lkin yh hamay paragrph main pta nhi chalay ga 

// var str = "Javascript is a GREAT Language"
// var str = "            Javascript    "
// var a = str.trim();

// alert(a);

//// charAt() function ////// is function ko hum index dengay or yeh batai ga k is index pr knsa alphabate hai

// var str = "Javascript is a GREAT is Language"
// var a = str.charAt(31);

// document.write(a);

//// charCodeAt() funtion ////// is function ko hm index dengay or yh hmay skycode return karega 
////// skycode ki pic mobile mai hai 

// var str = "Javascript is a GREAT is Language"
// var a = str.charCodeAt(9);

// document.write(a);

//// fromCharCode() function ///// is function ko hum skycode dengay or yh hamay uss num ki value return karagay or hamay is may kisi string ki zarorat nhi hoti

// var a = String.fromCharCode(110);

// document.write(a);

//// concat() funtion ///// yh funtion 2 ya 2 se zyada strings ko jorta he 

// var str = "Javascript is a GREAT is Language"
// var str2 = "But it's vary difficult" 
// var str3 = "& useful"
// var a = str.concat(" " + str2 +" "+ str3 );

// document.write(a);

///// split() function ///// is function ko hum ek word ya alphabate dengay or yh ossay array bna dega 

// var str = "Javascript is a GREAT is Language"
// var a = str.split(" ");

// document.write(a);

//// repeat() function ////// yh funtion same string function ko repeat kr dega jitni br hum chahay

// var str = "Javascript is a GREAT is Language"
// var a = str.repeat(9);

// document.write(a);

//// slice() funtion ///// iss function me hamay 2 parameter pass karanay hone hai start ka or end ka or yh dermiyaan ki bachay words or character return kr dega agr hum minus me value denge to yh hamay last ki values return karega 

// var str = "Javascript is a GREAT is Language"
// var a = str.slice(3,30);

// document.write(a);

//// substr() function //// yeh function same slice function ki taraha kaam karega 

///// substring() function //// iss function ma humay 2 parameters pass karne hongay mean 4,8 to yh 4 ki value se le kr 7 tk print karega or 8 ko print nhi karega 

// var str = "Javascript is a GREAT is Language"
// var a = str.substring(4,8);

// document.write(a);

///// toString() funtion ///// yh function numeric value ko bhi string main convert kr dega 

// var str = 20  //// yh ek string value ban gai he is funtion ki waja se 
// var a = str.toString();

// document.write(a + 20);

/////// valueOf() ///// yh function same value print kr dega jo string ki ho gi 

// var str = "Javascript is a GREAT is Language"
// var a = str.valueOf();

// document.write(a);


//////////////// Number Mathod ///////////////

//// Number() function ///// yh funtion kisi bhi string value ko numeric value me tabdeel kr dega 

// var a = "50"; //// agr me yaha boolean value doonga to yh true pr "1" or false pr "0" return karega  

// var b = Number(a);

// document.write(a + 20);

//// parseInt() funtion //// yh funtion taqriban Number() funtion hi ki taraha kaam kr ta he or yh integer value ko detect kr k return kr ta he  

// var a = "50 is numeric value"; 

// var b = parseInt(a);

// document.write(a);

//// parseFloat() function //// yh function same parseInt() function ki taraha kaam kr ta he bs yh point k baad wali value bhi return kare ga

// var a = "50.55"; 

// var b = parseFloat(a);

// document.write(b);

//// isFinite() function //// yh function true or false return krta he wo value jo count ho skti he ya +,-,* and / ho skti he uss condition me true return kare ga otherwaise alphabate or words ki condition me false return kaega   

// var a = 30; 

// var b = isFinite(a);

// document.write(b);

//// Number.isIteger() function //// yh funtion numeric value pr true return karega agr numeri value point me de hum ya string k tarikay se de hum to yh function humay false return karega 

// var a = 15; 

// var b = Number.isInteger(a);

// document.write(b);

//// toFixed() function //// iss function k parameter ko change kr k dkh lo 

// var a = 8.56789; 

// var b = a.toFixed(2);

// document.write(b);

//// toPricision() function //// iss function k bhi parameter chang kr k dkh lo 

// var a = 8.56789; 

// var b = a.toPrecision(4);

// document.write(b);

/////////////// Math Mathod ////////////////

//// Math.ceil() function //// yh function humay upper word value return krta he example 2.54 return value is 3 , 6.1 return value is 7

// var a = Math.ceil(6.1);

// document.write(a);

//// Math.floor() function //// yh function ceil() funtion ka ualat kaam kr ta he example 2.54 return value is 2 , 6.1 return value is 6

// var a = Math.floor(2.54);

// document.write(a);

//// Math.round() function //// is function ko agr hum integer value k baad ".5" ya is se zyada value dengay to ye function humay upperword value return karega


// var a = Math.round(3.35);

// document.write(a);

//// Math.trunc() function //// yh function humay point k baad ki value return nhi karega 

// var a = Math.trunc(8.8787);

// document.write(a);

//// Math.max() function //// iss function me hum multiple value dengay or yh uss me se sub se bari value return kr de ga 
//*maximum 


// var a = Math.max(8,10,25,16);

// document.write(a);      

//// Math.min() function //// yh funtion max() function ka ulta kaam kr ta he 
//*minimum

// var a = Math.min(5,21,34,18);

// document.write(a);      

//// square root = sqrt() function //// yh function humay value ka square root return kare ga yh function bhi humay point me vlaue return karega

// var a = Math.sqrt(88);

// document.write(a);

//// cubic root = cbrt() function //// yh function humay value ika cubic root return karage yh function point me nhi value return karaga 

// var a = Math.cbrt(64);

// document.write(a);

//// powerof = pow() function //// yh function power ki value ko solve kr k return kare ga 

// var a = Math.pow(3,4); //// 3*3*3*3=81

// document.write(a);

//// random() function //// yh function huamay '0' se le klr '1' k darmiyaan ki ek random value return kr de ga 

// var a = Math.random();

// document.write(a);

//// me chata hoo k '0' se le kr '100' k darmiyaan ki random value return karay 

// var a = Math.floor(Math.random() * 100) + 1;

// document.write(a);

//// abselute = abs() function //// yh function humay abselute value return karta he 

// var a = Math.abs(-650.264);

// document.write(a);

//// PI Propert //// yh function "pie" ki value return karega 

// var a = Math.PI;

// document.write(a);

//////////// Date Mathod //////////////

//// toDateString() function //// yh function humay sirf date or day return karega 

// var now = new Date(hum apni bhi koi date de kr day month year maloom kr skatay he);

// document.write(now.toDateString());

//// getDate() function //// yh function simple humay sirf date return kr dega 

// var now = new Date();

// document.write(now.getDate());

//// getFullYear() function //// yh function simple jo year hai wo return kr de ga 

// var now = new Date();

// document.write(now.getFullYear());

//// getMonth() funtion //// yh function simple month ki index return kr dega jo month chl raha he 

// var now = new Date();

// document.write(now.getMonth());

//// getDay() function //// yh function jo day he us ki index return kr de ga 

// var now = new Date();

// document.write(now.getDay());

//////////// Time Function

//// getHours() function //// yh function simple humay hour return kr de ga 

// var now = new Date();

// document.write(now.getHours());

//// getMinutes() function //// yh function wo minutereturn kare ga jo chal rha he 

// var now = new Date();

// document.write(now.getMinutes());

//// getSeconds() function //// yh function humay seconds return kare ga 

// var now = new Date();

// document.write(now.getSeconds());

//// getMilliSeconds() function //// yh function humay milisecons return kare ga 

// var now = new Date();

// document.write(now.getMilliseconds());

//// set() function pic in mobile 

//////////////////// DOM /////////////////////
////// in sub k liye HTML file uncomment krna ho gi////// 

//// innerText //// yh mathod humay id ka sara text return kare ga lakin koi bhi tag return nhi kare ga

// var element;

// element=document.getElementById("h1").innerText;

// console.log(element);

//// innerHTML //// yh mathod html return kare ga uss k tag or text dono

// var element;

// element=document.getElementById("h1").innerHTML;

// console.log(element);

//// getAttribute //// iss mathod may hum attribute ka naam dengay or yh humay uss ki value return kare ga 

// var element;

// element=document.getElementById("h1").getAttribute('class');

// console.log(element);

//// getAttributeNode //// yh mathod same getAttribute mathod ki taraha kaam kr ta he bs yh attribut anme or uss ki value return kr ta he 

// var element;

// element=document.getElementById("h1").getAttributeNode('class'); ////// agr me attribute name k braket ik baad .value write kr do to sirf attribute ki value return kare ga 

// console.log(element);

//// attributes //// yh mathod hummay saray attribute ka array bna kr return kare ga lakin wo array form me hongay array ka koi bhi mathod unn pr apply nh hjo ga  

// var element;

// element=document.getElementById("h1").attributes////[2].value;

// console.log(element);

//// innerText ////// iss mathod ka doosra kaam text change kr na hota he lakin sirf yh text change kare ga iss pr koi bhi html tag apply nhi ho ga

// var element;

// document.getElementById("h1").innerText="this is new text"

// element=document.getElementById("h1").getAttribute('class');

// console.log(element);

//// innerHTML //// yh mathod html k element create kre ga 

// var element;

// element=document.getElementById("h1").getAttribute('class');

// console.log(element);

// document.getElementById("h1").innerHTML="<h1>this is new text</h1>"

// console.log(element);

//// setAttribute //// yh mathod attribute ko change krnay me kaam ata he 

// var element;

// document.getElementById('h1').setAttribute("class","moavia");

// element=document.getElementById('h1').getAttribute('class');

// console.log(element);

//// removeAttribute ///// 

// var element;

// element=document.getElementById('h1').removeAttribute('class');

// console.log(element);

//// querySlector ///// is mathod ko hum id ya class dengay or yh huma uss ki value return kare ga or yn sirf peheli id ya class ki value return kare ga 

// var name;

// document.querySelector(".intro").innerHTML="<p>HELLO WORLD</p>";

// name = document.querySelector(".intro").getAttribute("class")

// console.log(name);

//// querySelector //// yh mathod same querySlector mathod ki taraha kaam krta he lakin yh selector peheli nahi sari classes ya id return kare dega

// var name;

// document.querySelector(".intro").innerHTML="<p>HELLO WORLD</p>";

// name = document.querySelector(".intro");

// console.log(name);

////////// DOM Events //////////

// var element;


// document.getElementById("ftor").onmouseenter = abc;
// document.getElementById("ftor").onmouseleave = xyz;
// document.getElementById("ftor").addEventListener("click",function(){
//       this.style.background = "red"
// });
// document.getElementById("ftor").addEventListener("dblclick",function(){
//       this.style.background = "yellow"
// })



// function abc(){
//       document.getElementById("ftor").style.background = "black"
// }

// function xyz(){
//       document.getElementById("ftor").style.background = "pink"
// }

//// remove mathod /////

// var element;

// document.getElementById("ftor").addEventListener("mouseleave",abc);
// document.getElementById("ftor").addEventListener("click",xyz);

// function abc(){
//       document.getElementById("ftor").style.background = "black";
// }

// function xyz(){
//       document.getElementById("ftor").removeEventListener("mouseleave",abc)
// }

///////// DOM ClassList() Mathod //////// video num 67

///////// Create Mathod ////////

// var newElement = document.createElement("h2");
// var newText = document.createTextNode("Heading 2");
// var nweComment = document.createComment("It's just a paragraph");

// console.log(newElement);
// console.log(newText);
// console.log(nweComment);

///////// Apend Mathods /////////

///// apendChild()

// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just a Heading");

// newElement.appendChild(newText);

// document.getElementById("test").appendChild(newElement);

// console.log(newElement);

////// insertBefore()

// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just a Heading");

// newElement.appendChild(newText);

// var target = document.getElementById("test");

// target.insertBefore(newElement,target.childNodes[1]);

// console.log(newElement);

////////////// insertAdjacent Mathod()////////////////

////// insertAdjacentElement

// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just a Heading");

// newElement.appendChild(newText);

// var target = document.getElementById("test");

// target.insertAdjacentElement("beforeend",newElement)

///// insertAdjacentHTML

// var target = document.getElementById("test");

// var newElement = "<h2>This is just a Heading</h2>"

// target.insertAdjacentHTML("beforebegin",newElement)

////// insertAdjacentText

// var target = document.getElementById("test");

// var newElement = "This is just a Heading"

// target.insertAdjacentText("afterbegin",newElement)

///// replaceChild

// var newElement = document.createElement("li");
// var newText = document.createTextNode("Mango");

// newElement.appendChild(newText);

// let target = document.getElementById("list");
// const abc = target.children[0];

// target.replaceChild(newElement,abc );

////// removeChild

// let target = document.getElementById("list");
// const abc = target.children[3];

// target.removeChild(abc);

///// cloneNode()

// let target = document.getElementById("list").children[2];
// let copyElement = target.cloneNode(true);

// console.log(copyElement)

// document.getElementById("list1").appendChild(copyElement);

////// contains Mathod() /////// yeh mathod id ko find kr ta he 

// let perentElement = document.getElementById("test");
// let target = document.getElementById("abc");

// let find = perentElement.contains(target);
// console.log(find)

////// hasAttribute ////// yh mathod koi bhi attribute ko find ke ta he 

// let target = document.getElementById("test");
// let find = target.hasAttribute("class");


// console.log(find)

///// hasChildNodes ///////// yh mathod kisi bhi tag k inder k content ko dkh kr true ya false return kr ta he yh ek space ko bhi count kr ta he

// let target = document.getElementById("test");
// let find = target.hasChildNodes();

// console.log(find)

///// isEqualNode /////// yh mathod kisi bhi same tag k childs ko dkh kr bta ta he k wo0 equal he ya nhi is ke attribute,attribute value,node etc sb kch same ho na chahiye

// var target1 = document.getElementById("list").firstElementChild;
// var target2 = document.getElementsById("list1").children[2];

// var equal = target1.isEqualNode(target2);
// console.log(equal)

///////////// form Event /////////////

//// focusFunction()

// function focusFunction(){
//       document.getElementById("fname").style.background = "red";
// }

//// IInd Mathod 

// function focusFunction(element){
//       element.style.background = "red";
// }

///// blurFunction()

// function focusFunction(element){
//       element.style.background = "red";
// }

// function blurFunction(element){
//       element.style.background = "";
// }

///// inputFunction()

// function focusFunction(element) {
//       element.style.background = "red";
// };
// function blurFunction(element) {
//       element.style.background = "";
// };
// function inputFunction(element) {
//       const x = element.value;
//       document.getElementById("tes").innerHTML = x;
// }

////// changeFunction()

// function focusFunction(element) {
//     element.style.background = "red";
// };
// function blurFunction(element) {
//     element.style.background = "";
// };
// function inputFunction(element) {
//     const x = element.value;
//     document.getElementById("tes").innerHTML = x;
// }
// function changeFunction(element){
//     const x = element.value;
//     document.getElementById("tes").innerHTML = x; 
// }

////// setInterval() & clearInetval() Mathod

// let a = 0; 

// let id = setInterval(Anim,500);

// function Anim(){
//     a = a + 10
//     if(a == 200){
//         clearInterval(id);
//     }else{
//         var target = document.getElementById("black");
//         target.style.marginLeft = a + "px";
//     }
// }

/////////// setTimeOut() & clearTimeOut() Mathod

// var id = setTimeout(Anim,5000);

// function Anim(){
//     var target = document.getElementById("black");
//     target.style.width = "500px"
// }

// function stopAnimation(){
//     clearTimeout(id);
// }

///////////// BOM stand for Browser Object Model

///// Window Height & Width Mathod)()

// function resizeEvent() {
//     console.clear();
//     const a = window.innerHeight;
//     console.log('Inner Height:' + a);

//     const b = window.outerHeight;
//     console.log('Inner Height:' + b);
// }

// function resizeEvent() {
//     console.clear();
//     const a = window.innerWidth;
//     console.log('Inner Width:' + a);

//     const b = window.outerWidth;
//     console.log('Outer Width:' + b);
// }

///// Window Open & Close Mathod

// var myWindow;

// function openWindow(){
//    myWindow = window.open("https://www.facebook.com","","width = 450px,height = 450px,left = 200px,top = 200px")
// }

// function closeWindow(){
//     myWindow.close();
// }

///// Window moveTo & moveBy Mathod


// var myWindow;

// function openWindow(){
//     myWindow = window.open("","_blank","width = 450px,height = 450px,left = 100px,top = 100px")
//     myWindow.document.write("<p>This is just a windw</p>")
// }

// function moveWindow(){
//     myWindow.moveBy(200,200);
//     myWindow.focus();
// }

///// Window resizeTo() yh mathod width or height ko change kr de ga resizeBy() yh mathod jo width or height hum ne di hui he uss me nai width or height ko add kr de ga 

// var myWindow;

// function openWindow(){
//     myWindow = window.open("","_blank","width = 200px,height = 200px,left = 100px,top = 100px")
//     myWindow.document.write("<p>This is just a windw</p>")
// }

// function resizeWindow(){
//     myWindow.resizeTo(400,400);
// }

// var myWindow;

// function openWindow(){
//     myWindow = window.open("","_blank","width = 200px,height = 200px,left = 100px,top = 100px")
//     myWindow.document.write("<p>This is just a windw</p>")
// }

// function resizeWindow(){
//     myWindow.resizeBy(400,400);
// }

///////////// ECMA Script 6 ////////////

