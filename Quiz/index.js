const tile9 = $("<li>");
tile9.addClass("Tile Tile9");

$(".SlidingPuzzle").append(tile9);

jQuery.fn.shuffleChildren = function() {
  var p = this[0];
  for (var i = p.children.length; i >= 0; i--) {
    p.appendChild(p.children[(Math.random() * i) | 0]);
  }
};

$(".SlidingPuzzle").shuffleChildren();

$(document).on("click", ".Tile", function() {
  if($(this) )
});