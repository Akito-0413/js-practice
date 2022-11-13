//forEachメソッドを使って画像の面積を求め、「areas」という新しい配列に格納してください。面積の計算方法は「image.height * image.width」となります。
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];

var areas = [];
images.forEach(function (image) {
  areas.push(image.height * image.width);
});
