var numbers = [1, 2, 3];
var doubleNumbers = []; //ミューテイトを防ぐ（中身を変えてはいけない。それに気づかずバグが起こったりする）

for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2); //2倍したものを新しい配列に入れる
}

//mapメソッドを使った場合
var doubled = numbers.map(function (number) {
  return number * 2; //戻り値なのでreturnする
});

//②
var cars = [
  { type: "軽自動車", price: "安い" },
  { type: "高級車", price: "高い" },
];

var prices = cars.map(function (car) {
  return car.price;
});
//オブジェクトの欲しい情報だけ抜き取ったりする
//mapは新しい配列を作る

//配列内のオブジェクトのheightだけ取得して、新しい配列を作る。（heightsという変数に格納）
var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];

var heights = images.map(function (image) {
  return image.height;
});

//距離と時間から速度を求める
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});

//pluckの実装
//'pluck'…オブジェクトの配列から特定のプロパティを抜き取ってくる関数
var colorObjects = [{ color: "赤" }, { color: "青" }, { color: "黄色" }];

var colorNames = pluck(colorObjects, "color");

function pluck(array, property) {
  return array.map(function (element) {
    return element[property];
  });
}
