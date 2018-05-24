var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  img: "images/rainbowRoses.jpg",
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom Roses",
  price: 19.95,
  img: "images/heirloomRoses.jpg",
  link: "heirloomRose"
});

var flowerGroup = new app.FlowersCollection([
  redRoses, rainbowRoses, heirloomRoses
]);

var flowerGroupView = new app.allFlowersView({ collection: flowerGroup });

$('#allFlowers').html(flowerGroupView.render().el);

var flowerRouter = new app.Router(); // instantiated configured routes

Backbone.history.start(); //we have to tell backBone to keep track of the historical clicks so my routes will work

// flowerGroup.add(heirloomRoses);
// console.log(flowerGroup.toJSON());
// flowerGroup.remove(heirloomRoses);
// console.log(flowerGroup.toJSON());

// change a model to see the change in initialize function in singleFlowerModel.js
// rainbowRoses.set('price', 20);

// console log to see in browser
// console.log(heirloomRoses.toJSON());
// console.log(rainbowRoses.toJSON());
// console.log(redRoses.toJSON());