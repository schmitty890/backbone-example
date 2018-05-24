// Namespace our flowerApp
var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "": "noCopy",
    "heirloomRose": "heirloomRoseMessage",
    "rainbowRose": "rainbowRoseMessage",
    "redRose": "redRoseMessage"
  },
  noCopy: function() {
    $('#copy').html("");
  },
  heirloomRoseMessage: function() {
    $('#copy').html("Heirloom roses are great for mothers day!");
  },
  rainbowRoseMessage: function() {
    $('#copy').html("Rainbow roses?");
  },
  redRoseMessage: function() {
    $('#copy').html("On valentines day, give someone special some red roses");
  }

});