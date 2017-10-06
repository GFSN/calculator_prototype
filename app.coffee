class InputTextLayer extends Framer.Layer

	constructor: (options) ->

		super options

		@ignoreEvents = false
		@input = document.createElement("input")

		_.extend @input.style,
			"-webkit-user-select": "text"
			"-webkit-box-sizing": "border-box"
			"cursor": "auto"
		@_update()
		@_element.appendChild(@input)

		@on "change:width", @_update
		@on "change:height", @_update

	_update: =>
		_.extend @input.style,
			width: "#{@width}px"
			height: "#{@height}px"


textLayer = new InputTextLayer width:Screen.width , height:120, y:300, x:0
textLayer.states.animationOptions = curve: "spring(250, 20, 0)"

textLayer.input.style.font = "36px/1.35em Helvetica"
textLayer.input.style.font-style = "normal"
textLayer.input.style.font-weight = "100"
textLayer.input.style.padding = "24px"
textLayer.input.style.textAlign = "left"
textLayer.input.style.background = "transparent"
textLayer.input.style.outline = '0'
textLayer.input.style.color = "#000"
textLayer.input.style.border = "0px solid"
# textLayer.input.style.display = "none"
# textLayer.input.value = 0
# textLayer.input.placeholder = "Search Me"
textLayer.backgroundColor = "rgba(255, 255, 255, 0)"

layerA = new Layer
  opacity: 0
layerA.draggable.enabled = true
layerA.draggable.horizontal = false
layerA.draggable.constraints =
  x: 0
  y: 0
  width: 200
  height: 200

timeAnimation = 0.3
curveAnimation = "Bezier(0.0, 0.0, 0.2, 1)"

layerB1 = new Layer
  x: 90
  y: 20
  backgroundColor: "#F00"
  width: 20
  height: 20
  opacity: 0.4
layerB1.states.stateUp =
    x: 90
    y: 20
    width: 20
    height: 20
    opacity: 0.4
    animationOptions:
        time: timeAnimation
        curve: curveAnimation
layerB1.states.stateMiddle =
    x: 60
    y: 60
    width: 80
    height: 80
    opacity: 1
    animationOptions:
        time: timeAnimation
        curve: curveAnimation
layerB1.states.stateFly =
  width: 6
  height: 6
  x: 97
  y: 0
  opacity: 0
  animationOptions:
      time: timeAnimation
      curve: curveAnimation


layerB2 = new Layer
  x: 60
  y: 60
  width: 80
  height: 80
  opacity: 1
  backgroundColor: "#0F0"
layerB2.states.stateUp =
    x: 90
    y: 10
    width: 20
    height: 20
    opacity: 0.4
    animationOptions:
        time: timeAnimation
        curve: curveAnimation
layerB2.states.stateMiddle =
    x: 60
    y: 60
    width: 80
    height: 80
    opacity: 1
    animationOptions:
        time: timeAnimation
        curve: curveAnimation
layerB2.states.stateDown =
    x: 90
    y: 160
    width: 20
    height: 20
    opacity: 0.4
    animationOptions:
        time: timeAnimation
        curve: curveAnimation
layerB2.states.stateTap =
    x: 63
    y: 63
    width: 74
    height: 74
    opacity: 1
    animationOptions:
        time: timeAnimation*0.25
        curve: curveAnimation

layerB3 = new Layer
  x: 90
  y: 160
  backgroundColor: "#00F"
  width: 20
  height: 20
  opacity: 0.4
layerB3.states.stateMiddle =
    x: 60
    y: 60
    width: 80
    height: 80
    opacity: 1
    animationOptions:
        time: timeAnimation
        curve: curveAnimation
layerB3.states.stateDown =
    x: 90
    y: 160
    width: 20
    height: 20
    opacity: 0.4
    animationOptions:
        time: timeAnimation
        curve: curveAnimation
layerB3.states.stateDdown =
  width: 6
  height: 6
  x: 97
  y: 194
  opacity: 0
  animationOptions:
      time: timeAnimation
      curve: curveAnimation

layerA.onTap ->
  if (layerA.y is 0)
    textLayer.input.value = textLayer.input.value + "1"
    layerB2.animate("stateTap")
    layerB2.onAnimationEnd ->
      layerB2.animate("stateMiddle")

directionA = 0
layerA.on Events.DragMove, ->
  if (layerA.draggable.direction is "down")
    if (layerA.draggable.direction isnt directionA)
      directionA = layerA.draggable.direction
      textLayer.input.value = textLayer.input.value + "sin"
      layerB1.animate("stateMiddle")
      layerB2.animate("stateDown")
      layerB3.animate("stateDdown")
  if (layerA.draggable.direction is "up")
    if (layerA.draggable.direction isnt directionA)
      directionA = layerA.draggable.direction
      textLayer.input.value = textLayer.input.value + "arctg"
      layerB1.animate("stateFly")
      layerB2.animate("stateUp")
      layerB3.animate("stateMiddle")

layerA.onDragEnd ->
  directionA = 0
  layerB1.animate("stateUp")
  layerB2.animate("stateMiddle")
  layerB3.animate("stateDown")
