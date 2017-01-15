bg = new BackgroundLayer
    backgroundColor: "#28affa"

layerA = new Layer
  width: 200
  height: 200
  backgroundColor: 'fff'

layerA.center()
layerA.borderRadius = 20
layerA.opacity = 1


layerA.draggable.enabled = true

# Prevent vertical dragging
layerA.draggable.horizontal = true
layerA.draggable.vertical = false

# Alternative way by setting the speed
layerA.draggable.speedX = 0.5
layerA.draggable.speedY = 1
