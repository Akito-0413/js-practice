//一覧から自分の欲しい情報だけ絞り込むような書き方
var products = [
  { name: "きゅうり", type: "野菜" },
  { name: "バナナ", type: "フルーツ" },
  { name: "セロリ", type: "野菜" },
  { name: "オレンジ", type: "フルーツ" },
];

//新しい配列を作って入れた（データをミューテーとさせないことに繋がる）
var filterProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "フルーツ") {
    filterProducts.push(products[i]);
  }
}

//↑わかりづらい（filter使ってリファクタリングする
products.filter(function (product) {
  return product.type === "フルーツ";
});
