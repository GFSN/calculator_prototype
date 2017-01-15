var bg, layerA;

bg = new BackgroundLayer({
  backgroundColor: "#28affa"
});

layerA = new Layer({
  width: 200,
  height: 200,
  backgroundColor: 'fff'
});

layerA.center();

layerA.borderRadius = 20;

layerA.opacity = 1;

layerA.draggable.enabled = true;

layerA.draggable.horizontal = true;

layerA.draggable.vertical = false;

layerA.draggable.speedX = 0.5;

layerA.draggable.speedY = 1;
