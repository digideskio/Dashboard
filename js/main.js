// external js: packery.pkgd.js, draggabilly.pkgd.js

var pckry = new Packery( '.grid', {
  itemSelector: '.grid-item',
  columnWidth: 100
});

pckry.getItemElements().forEach( function( itemElem ) {
  var draggie = new Draggabilly( itemElem );
  pckry.bindDraggabillyEvents( draggie );
});

  // show item order after layout
  function orderItems() {
    pckry.getItemElements().forEach( function( itemElem, i ) {
      itemElem.textContent = i + 1;
    });
  }

  pckry.on( 'layoutComplete', orderItems );
  pckry.on( 'dragItemPositioned', orderItems );
