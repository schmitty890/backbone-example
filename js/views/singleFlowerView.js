// Namespace our flowerApp
var app = app || {};

// The view for a single flower
app.singleFlowerView = Backbone.View.extend({
  //tagName and className are optional. tagName would default to div.
  tagName: "article",
  className: "flowerListItem",
  template: _.template( $("#flowerElement").html() ),
  render: function() {
    var flowerTemplate = this.template(this.model.toJSON());
    this.$el.html(flowerTemplate); // Backbone is doing this with $el, $el contains properties I defined above and passes them to backbone as one entire package, as an easy reference. $el also has a dollar sign in front of it. Meaning, I'm referencing it with jQuery in this line of code.
    return this;
  },
  events: {
    'mouseover': 'addBgColor',
    'mouseout': 'removeBgColor'
  },
  addBgColor: function() {
    this.$el.addClass('bgColorImage');
  },
  removeBgColor: function() {
    this.$el.removeClass('bgColorImage');
  }
});