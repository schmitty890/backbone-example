// Namespace our app
var app = app || {};

app.singleFlower = Backbone.Model.extend({

  defaults: {
    color: "pink",
    img: "images/placeholder.jpg"
  },
  initialize: function() {
    console.log(`a model instance named ${this.get("name")} has been created and it costs ${this.get("price")}`);
    
    //watch for change
    this.on('change', function() {
      console.log(`something in our model has changed`);
    });

    //watch for specific change (on the price)
    this.on('change:price', function() {
      console.log(`the price for the ${this.get("name")} model just changed to $${this.get("price")} dollars`);
    });

  }

});