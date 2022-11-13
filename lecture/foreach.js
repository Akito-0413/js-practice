var colors = ["red", "blue", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function (color) {
  console.log(color);
});

//forEach応用

var numbers = [1, 2, 3, 4, 5]; //数の配列準備
var sum = 0; //変数
numbers.forEach(function (number) {
  sum += number;
});

//forループではなくforEachメソッドを使ってリファクタする（savePostという関数を3回呼び出している）
function handlePosts() {
  var posts = [
    { id: 2, title: "野球" },
    { id: 5, title: "サッカー" },
    { id: 8, title: "バスケットボール" },
  ];

  posts.forEach(function (post) {
    savePost(posts[i]);
  });
}

//forEachメソッドを使って画像の面積を求めて、「areas」という新しい配列に格納。面積の計算方法がポイント
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];

var areas = [];
images.forEach(function (image) {
  areas.push(image.height * image.width);
});
