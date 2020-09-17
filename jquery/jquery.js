// $(document).ready(function(){
//     alert(1212);
// });


///////// Basic syntax


// $(document).ready(function(){
//     var a = $('#test1').html();
//     console.log(a);

//     var b = $('#test2').html();
//     console.log(b);
// });

////////// CSS Selectors  {$('*')} iss ka matlab hai html k tamam tags 

// $(document).ready(function(){
//     $("*").css("border","2px solid green")
// });

///// select multiple classes

// $(document).ready(function(){
// $(".fruit").css("border","2px solid green")
// });

////// list selectors

// $(document).ready(function(){
// $("li").css("border","2px solid green")
// });

// $(document).ready(function(){
// $("li:first").css("border","2px solid green")
// });

// $(document).ready(function(){
// $("li:last").css("border","2px solid green")
// });

// $(document).ready(function(){
// $("ul li:eq(2)").css("border","2px solid green")
// });

/////// gt = greater then , lt = less then

// $(document).ready(function(){
// $("ul li:gt(2)").css("border","2px solid green")
// });

// (document).ready(function(){
// $("ul li:lt(3)").css("border","2px solid green")
// }); 

////////// mouse events /////

// $(document).ready(function(){
//     $("#box").click(function(){
//         $("#box").css("background","yellow")
//         var a = $("#box").html();
//         console.log(a)
//     });
//     $("#box").dblclick(function(){
//         $("#box").css("border","5px solid black")
//     });
//      $("#box").contextmenu(function(){
//         $("#box").css("background","pink")
//     });
//     $("#box").mouseenter(function(){
//         $("#box").css("background","orange")
//     });
//     $("#box").mouseleave(function(){
//         $("#box").css("background","red")
//     });
// });

//////// keyboard events

// $(document).ready(function(){
//     $("body").keypress(function(){
//         $("body").css("background","red");
//     });
//     $("body").keydown(function(){
//         $("body").css("background","red");
//     });
//     $("body").keyup(function(){
//         $("body").css("background","orange");
//     });
// });

///////// form events ///////////

// $(document).ready(function(){
//     $('#name,#class,#country').focus(function(){
//         $(this).css('background','red')
//     });
//     $('#name,#class,#country').blur(function(){
//         $(this).css('background','')
//     });
//     $('#name,#class,#country').change(function(){
//         $(this).css('background','orange');
//         var a = $(this).val();
//         $('#data').html(a);
//     });
//     $('#name,#class').select(function(){
//         $(this).css('background','yellow')
//     });
//     $('#form').submit(function(){
//         alert("Form Submited")
//     });
// });

///////// Window Events //////////

// $(document).ready(function(){
//     $("#box2").scroll(function(){
//         console.log("You are Scrolling")
//     });
//     $(window).resize(function(){
//         console.log("You are Resizing your window")
//     });
    
// });

////////// Get() Mathod ///////

// $(document).ready(function(){
//     var a = $("#box").html();
//     console.log(a)
// });

// $(document).ready(function(){
//     var a = $("#box").text();
//     console.log(a)
// });

// $(document).ready(function(){
//     var a = $("#box").attr("class");
//     console.log(a)
// });

// $(document).ready(function(){
//     $("#form").submit(function(){
//         var name = $("#name").val();
//         var classname = $("#class").val();
//         var country = $("#country").val();
//         alert("Hello " + name + " Class : " + classname + " Country : " + country)
//     });
// });

///////// Set() Mathod /////////

// $(document).ready(function(){
//     $("#clickbtn").click(function(){
//         $("#box h2").text("Hello Moavia Khan");
//         $("#box p").html("<b> Moavia Khan <b/> you have a nwe message");
//         $("#box h2").attr("class","red");
//     });
// });

// $(document).ready(function(){
//     $("#name").val("Moavia Khan");
//     $("#class").val("2nd Year")
// });

//////// Class Mathod /////////

// $("#addbtn").click(function(){
//     $("#box,h1").addClass("first second");
// });

// $("#removebtn").click(function(){
//     $("#box").removeClass("second");
// });

// $("#togglebtn").click(function(){
//     $("#box").toggleClass("second");
// });

//////// css() ///////

// $(document).ready(function(){
//     $("#stylebtn").click(function(){
//         $("#box").css({"background":"yellow","color":"red"});
//     });
// });

/////// On & Of Mathod() ////////

// $(document).ready(function(){
//     $("#box").on({
//         "click" : function(){
//             $(this).css("background" , "pink");
//         },
//         "mouseover" : function(){
//             $(this).css("background" , "yellow");
//         },
//         "mouseout" : function(){
//             $(this).css("background" , "orange");
//         }
//     });
//     $("button").click(function(){
//         $("#box").off("mouseover mouseout")
//     });
// });

/////// Append & Prepend Mathod() ///////// yh mathod hm html k kisi bhi tag pr use kr sakte he

// $(document).ready(function(){
//     $("#apendbtn").click(function(){
//         $("#box").append("<h2>Moavia Khan</h2>")
//     });
//     $("#prepndbtn").click(function(){
//         $("#box").prepend("<h3>Moavia Khan</h3>")
//     });
// });

/////// After & Before Mathod() ////////

// $(document).ready(function(){
//     $("#afterbtn").click(function(){
//         $("#box").after("<h3>Afetr : Moavia Khan</h3><p>This is just a text</p>")
//     });
//     $("#beforebtn").click(function(){
//         $("#box").before("<h3>Before : Moavia Khan</h3>")
//     });
// });

/////// Empty & Remove Mathod() ////////

// $(document).ready(function(){
//     $("#emptybtn").click(function(){
//         $("#box h2").empty()
//     });
//     $("#removbtn").click(function(){
//         $("#box").remove()
//     });
// });

/////// appendTo & prependTo Mathod() ///////// iss mathod me pehele content dena he then selector 

// $(document).ready(function(){
//     $("#apendtobtn").click(function(){
//         $("<h3>AppendTo : Moavia Khan</h3>").appendTo("#box")
//     });
//     $("#prepndtobtn").click(function(){
//         $("<h3>PrependTo : Moavia Khan</h3>").prependTo("#box")
//     });
// });

////// Clone() Mathod //////

// $(document).ready(function(){
//     $("#clonebtn").click(function(){
//         $("#box h2").clone().prependTo("#box1");
//         $("#box p").clone().appendTo("#box1");
//     });
// });

//////// replaceWith & replaceAll Mathod() ////////

// $(document).ready(function(){
//     $("#replacebtn").click(function(){
//         $("#box p:first").replaceWith("<h2>Hello World i'm Moavia Khan</h2>")
//     });
//     $("#replaceallbtn").click(function(){
//         $("<h3>Hello World i'm Moavia khan</h3>").replaceAll("#box p")
//     });
// });

///////// wrap & unwrap Mathod() //////////

// $(document).ready(function(){
//     $("#wrapbtn").click(function(){
//         $("#box p").wrap("<h2></h2>")
//     });
//     $("#unwrapbtn").click(function(){
//         $("#box p").unwrap("")
//     });
// });

////// wrapAll & wrapInner Mathod() ////////

// $(document).ready(function(){
//     $("#wrapallbtn").click(function(){
//         $("p").wrapAll("<div class='fruit'></div>")
//     });
//     $("#wrapinnerbtn").click(function(){
//         $("h1").wrapAll("<div class='red'></div>")
//     });
// });

//////// Width & Height Methods ///////

// $(document).ready(function(){
//     $("#widthbtn").click(function(){
//         console.clear();
//         console.log("Width : " + $("#box").width());
//         console.log("InnerWidth : " + $("#box").innerWidth());
//         console.log("OuterWidth : " + $("#box").outerWidth());
//         console.log("OuterWidth(true) : " + $("#box").outerWidth(true));
//     });
//     $("#heightbtn").click(function(){
//         console.clear();
//         console.log("Height : " + $("#box").height());
//         console.log("InnerHeight : " + $("#box").innerHeight());
//         console.log("OuterHeight : " + $("#box").outerHeight());
//         console.log("OuterHeight(true) : " + $("#box").outerHeight(true));
//     });
// });

///////// Position & Offset Method ////////

// $(document).ready(function(){
//     $("#positionbtn").click(function(){
//         console.log($("#box").position());
//     });
//     $("#offbtn").click(function(){
//         console.log($("#box").offset());
//     });
// });

// $(document).ready(function(){
//     $("#positionbtn").click(function(){
//         var a = $("#box").position()
//         console.log("Top : " + a.top + "Left : " + a.left);
//     });
//     $("#offbtn").click(function(){
//         var a = $("#box").offset()
//         console.log("Top : " + a.top + "Left : " + a.left);
//     });
// });

// $(document).ready(function(){
//     $("#positionbtn").click(function(){
//         console.log($("#box").position());
//     });
//     $("#offbtn").click(function(){
//         $("#box h2").offset({top:100,left:200});
//     });
// });

/////// scrollTop & scrollLeft Method ////////

// $(document).ready(function(){
//     $(window).scroll(function(){
//         console.clear();
//         console.log($(window).scrollTop());
//         console.log($(window).scrollLeft());
//     });
// });

// $(document).ready(function(){
//     $(window).scroll(function(){
//         $("#box3").html("");
//         $("#box3").append("Top : " + $(window).scrollTop());
//         $("#box3").append("<br>Left : " + $(window).scrollLeft());
//     });
// });

// $(document).ready(function(){
//     $(window).scroll(function(){
//         $("#box3").html("");
//         $("#box3").append("Top : " + $(window).scrollTop());
//         $("#box3").append("<br>Left : " + $(window).scrollLeft());
//     });
//     $("#scroltopbtn").click(function(){
//         $(window).scrollTop(150)
//     });
//     $("#scrolleftbtn").click(function(){
//         $(window).scrollLeft(150)
//     });
// });

/////// hasClass Method ////////

// $(document).ready(function(){
//     $("#hasclassbtn").click(function(){
//         console.log($("#box").hasClass("fruit"))
//     });
// });

// $(document).ready(function(){
//     $("#hasclassbtn").click(function(){
//         var a = $("#box h2").hasClass("heading");
//         if(a == true){
//             console.log("Yes")
//         }else{
//             console.log("No")
//         }
//     });
// });

/////// Hide,Show & Toggle Method ///////  toggle mathod hide or show dono ka kaam kr ta he  

// $(document).ready(function(){
//     $("#hidebtn").click(function(){
//         $("#box").hide()
//     });
//     $("#showbtn").click(function(){
//         $("#box").show()
//     });
// });

// $(document).ready(function(){
//     $("#hidebtn").click(function(){
        // $("#box").hide(6000,function(){
        //     console.log("Now it is hiden")
        // });
//     });
//     $("#showbtn").click(function(){
//         $("#box").show(6000,function(){
//             console.log("Now it is show")
//         });
//     });
// });

///////// fadeIn, fadeOut, fadeToggle, fadeTo Mathod ////////

// $(document).ready(function(){
//     $("#fadeoutbtn").click(function(){
//         $("#box").fadeOut(1000,function(){
//             console.log("Now it is hiden")
//         });
//     });
//     $("#fadeinbtn").click(function(){
//         $("#box").fadeIn(1100,function(){
//             console.log("Now it is show")
//         });
//     });
//     $("#fadetogglebtn").click(function(){
//         $("#box").fadeToggle(1100,function(){
//             console.log("Now it is show")
//         });
//     });
//     $("#fadetobtn").click(function(){
//         $("#box").fadeTo(2000,0.3)
//     });
// });

/////// slideUp , slideDown & SlideToggle /////////

// $(document).ready(function(){
//     $("#slideupbtn").click(function(){
//         $("#box").slideUp(2000);
//     });
//     $("#slidedownbtn").click(function(){
//         $("#box").slideDown(2000);
//     });
//     $("#slidetogglebtn").click(function(){
//         $("#box").slideToggle(2000);
//     });
// });

//////// Animate Method //////////

// $(document).ready(function(){
//     $("#animatebtn").click(function(){
//         $("#box4").animate({left : '350px',borderWidth : '5px',borderRadius : '+=5px'},2000);
//         $("#box4").animate({top : '350px'},2000);
//         $("#box4").animate({left : '-=350px'},2000);
//         $("#box4").animate({top : '-=350px'},2000);
//     });
//     $("#stopbtn").click(function(){
//         $("#box4").stop(true,true)
//     });
// });

/////// Chaining Mathod /////////

// $(document).ready(function(){
//     $("#animatebtn").click(function(){
//         $("#box").slideUp(1000).slideDown().css("background","yellow")
//     });
// });

///// Ancestors Mathod() ////// parent, parentsUntil, closest, offsetParent //////
//// video num 33 to 36
// $(document).ready(function(){
//     $("#inner").parents().css("background","red");
// });

///// has & Is Method ///// iss mathod se attribute se bhi designing kr saktay he   

// $(document).ready(function(){
// //      $('body').has("p").css("background","red")
//         $("p").click(function(){
//                 if($(this).parent().is("div")){
//                         $(this).css("background","red")
//                 }
//         });
// });

////// each Method /////

// $(document).ready(function(){
//         $("li").each(function(){
//                 $(this).text("Hello")
//         });
// });

////// Event Objects: Proporties & Mathod ////
////// PageX & PageY ///////

// $(document).ready(function(){
//         $(document).mousemove(function(event){
//                 $("#box5").text("X: " + event.pageX + " Y: " + event.pageY)

//                 var x = event.pageX;
//                 var y = event.pageY;

//                 $("#box6").offset({top:y,left:x})
//         });
// });

///// Event Type 

// $(document).ready(function(){
//         $("#box5").on("click dblclick mouseover mouseout",function(event){
//                 $("h2").html("Event: " + event.type)
//         });
// });

////////  Event Which Property

// $(document).ready(function(){
//         $("#box5").on("mouseover mouseout mousedown",function(){
//                 $("h2").html(event.type + ":" + event.which);
//         });
//         $('#inputbox').on("Keydown",function(){
//                 $('h2').html(event.type + ":" + event.which);
//         });
// });

///////  Event Target Property

// $(document).ready(function(){
//         $("#box").on(click,function(){
//                 $("h3").html("Target Element: " + event.target.innerHTML);
//         });
// });

////// Event preventDefault Method 

// $(document).ready(function(){
//         $("#result").click(function(event){
//                 event.preventDefault();

//                 var a = event.isDefaultPrevented();
//                 $("h3").html(a);
//         });
// });

/////// Event stopPropagation Method

// $(document).ready(function(){
//         $("#box").click(function(){
//                 alert("The div element was clicked")
//         });
//         $("h2").click(function(){
//                 alert("The h2 element was clicked")
//         });
//         $("p").click(function(event){
//                 event.stopPropagation();
//                 alert("The p element was clicked: " + event.isPropagationStopped)
//         });
//         $("button").click(function(){
//                 alert("The button element was clicked")
//         });
// });

//////  Event Data Property

// $(document).ready(function(){
//         $("p").each(function(i){
//                 $(this).on("click",{value:i},function(event){
//                         alert(event.data.value);
//                 });
//         });
// });

///// DatePicker //////

$(document).ready(function(){
        $("#datebtn").datepicker({
                changeDate:"yy-dd-yy",
                changeMonth: true,
                changeYear: true
        });
});