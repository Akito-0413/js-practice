//mapを使って配列内のオブジェクトの「height」だけを取得し、新しい配列を作成してください。その新しい配列は「heights」という変数に格納してください。「return」キーワードを忘れないように！
var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];

var heights = images.map(function (image) {
  return image.height;
});

//mapを使って、距離と時間からそれぞれの旅行(trips)での速度を求める。計算式は「距離/時間」となる。結果の配列を「speeds」という変数に格納する。
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});

//pluck関数の実装
//pluck関数…「オブジェクトの配列」と「プロパティ名」を表す文字列を受け付けて、渡したプロパティの値だけを含んだ配列を返す。
//[{ color: '赤' }, { color: '青' }, { color: '黄色' }] というオブジェクトの配列があったとします。
//この中からcolorプロパティの値だけを抜き取って、['赤', '青', '黄色']という、色の名前だけが含まれた配列がcolorNamesに入るようにpluck関数を実装してください！
var colorObjects = [{ color: "赤" }, { color: "青" }, { color: "黄色" }];

var colorNames = pluck(colorObjects, "color");

function pluck(array, property) {
  return array.map(function (element) {
    return element[property];
  });
}
