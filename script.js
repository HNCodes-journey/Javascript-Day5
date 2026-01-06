// Arithemetic , Comparison , Logical , Assignment , unary , ternary

// 1) Arithematic (+ - * / %  **)
//  2 + 1 = 3
//  "Huss" + "nain" = " Hussnain"
// 2 -1 = 1
// 2 * 3 = 6
// 6 /3 = 2
// 12 % 3 = 0  Because it gives you remainder
// 2 ** 3 = 8  Power operator

// 2) Comparison Operator
// ==   ->     12== 13  Output : false  , 12 == "12" Output : true    / but it should be false, == don't properly check the type
// ===  ->    12 === "12"  Output : false    // Now output is correct because === check the type aswell
// >=   ->     12 >= 12 output : true
// <=   ->     11 <=11 output: true
// !=   ->   12 != 13  output : true
// !==  ->   12 !== "12"  output : true
// >    ->   12 > 11 output : true
// <    ->  11 > 12 output : false

// 3) Assignment Operator
// =   ->   let a = 12;
// +=  ->   a += 12 ;  output : a =24
// -=  ->   a-= 4   ;  output : a =20
// *=  ->   a*= 2   ;  output : a = 40
// /=  ->   a/= 2   ;  output : a = 20
// %=  ->   a%= 3   ;  output : a = 2


//  Practice Question:-
let a = 12;
a+= 12 ;   //output : a =24
a-= 4 ; // output : a =20
a*= 2 ; // output : a = 40
a/= 2 ; // output : a = 20
a%= 3 ; // output : a = 2

// 4) Logical Operator
// && ||  !
 
// 12 < 13 && 13 >=13  output: true
//    12 < 13 || 13 < 12  output : true
//   !12  output : false
//  !!12 output : true  //because of truthy falsy concept of js

// 5) Unary Operator 
// + - ! typeof ++(Pre-increment) --(pre-decrement)
// +"5" // output: 5 (convert into number)
// -5  //output: -5 negate the value
// !12 // Output: false 
// typeof 12 // output : number
// let a = 12
// ++a ;  output : 13
 
//6) Ternary Operator( ?:)
//  12 > 13 ? console.log("true") : console.log("false") ;

