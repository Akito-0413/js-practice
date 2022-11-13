//forRoopのリファクタで説明
var users = [{ name: "太郎" }, { name: "次郎" }, { name: "三郎" }];

var user;

for (i = 0; i < user.length; i++) {
  if (users[i].name === "次郎") {
    user = users[i];
    break;
  }
}

//リファクタ後
users.find(function (user) {
  return user.name === "次郎";
}); //見つかった最初の要素だけが返されるため、その後に出てくる次郎は出てこない

function Car(model) {
  this.model = model; //与えられたモデルの保持
}

var cars = [new Car("プリウス"), new Car("ノート"), new Car("アクア")];

cars.find(function (car) {
  return car.model === "アクア";
});

var posts = [
  { id: 1, title: "古い投稿" },
  { id: 1, title: "古い投稿" },
];

var comment = { postId: 2, content: "イイね！" };

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

//findの使いどころ：一覧をクリックすると詳細ページに飛ぶみたいな
