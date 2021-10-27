// in javascript variable convention: myName
// in python variable convention: my_name

// 처음에는 var만 있었는데 const, let이 추가됨. 
// 나는 let, const로 구분해서 쓰기. 코드에서 그 변수의 쓰임을 바로 유추할 수 있음.

// const amIFat = true; 
// 소문자로 boolean 쓰기 (파이썬은 대문자로 쓰니까 헷갈리지 않기.)
// console.log(amIFat);

// const nothing = null;
// console.log(nothing);

// let something;
// console.log(undefined);
// null은 자연적으로 발생하지 않음. 값이 비어있다는 것을 명시적으로 알리기 위해서 사용.
// undefined는 변수 선언은 됐는데 값이 할당되지 않았음을 보여줌.

// array
// const days = ["mon", "twe", "wed", "thu", "fri", "sat", "sun"];
// console.log(days[1]);
// days.push("anotherDay"); 
// // python의 append가 js에서는 push
// console.log(days);


// const playerName = "jay";
// const playerPoint = 12;

// const player = {
//     name : "jay",
//     point : 12,
//     sex : "male"
// }
// console.log(player);
// console.log(player.name);
// console.log(player.sex);

// player.point = 14;
// console.log(player.point);

// player.job = "언어재활사";
// console.log(player.job);
// objects 안의 변수를 추가하고 값을 바꾸는 것은 가능하지만 const로 선언된 object 자체를 변경시킬 수는 없음. 

// function hello(nameOfPerson, age) {
//     console.log("Hello "+ nameOfPerson + " and I am " + age);
// }
// hello("jaehyeong", 25);
// hello("jaehoon", 22);

function plus(x, y) {
    console.log(x+y);
}
plus(2, 2);

function divide(x, y) {
    console.log(x / y);
}
divide(6, 2);

const human = {
    name : "jaehyeong",
    age : 25,
    sayHello : function (otherPersonName) {
        console.log(otherPersonName + " Hello!");
    },
};

human.sayHello("jaehoon");