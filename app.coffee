layerA = new Layer
  opacity: 0
layerA.draggable.enabled = true
layerA.draggable.horizontal = false
layerA.draggable.constraints =
  x: 0
  y: 0
  width: 200
  height: 200


layerB1 = new Layer
  x: 90
  y: 20
  backgroundColor: "#000"
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
        time: 0.1
layerB1.states.stateMiddle =
    x: 60
    y: 60
    width: 80
    height: 80
    opacity: 1
    animationOptions:
        time: 0.1
layerB1.states.stateFly =
  width: 6
  height: 6
  x: 97
  y: 0
  opacity: 0
  animationOptions:
      time: 0.1


layerB2 = new Layer
  x: 60
  y: 60
  width: 80
  height: 80
  opacity: 1
  backgroundColor: "#000"
layerB2.states.stateUp =
    x: 90
    y: 10
    width: 20
    height: 20
    opacity: 0.4
    animationOptions:
        time: 0.1
layerB2.states.stateMiddle =
    x: 60
    y: 60
    width: 80
    height: 80
    opacity: 1
    animationOptions:
        time: 0.1
layerB2.states.stateDown =
    x: 90
    y: 160
    width: 20
    height: 20
    opacity: 0.4
    animationOptions:
        time: 0.1
layerB2.states.stateTap =
    x: 63
    y: 63
    width: 74
    height: 74
    opacity: 1
    animationOptions:
        time: 0.1

layerB3 = new Layer
  x: 90
  y: 160
  backgroundColor: "#000"
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
        time: 0.1
layerB3.states.stateDown =
    x: 90
    y: 160
    width: 20
    height: 20
    opacity: 0.4
    animationOptions:
        time: 0.1
layerB3.states.stateDdown =
  width: 6
  height: 6
  x: 97
  y: 194
  opacity: 0
  animationOptions:
      time: 0.1


layerB = new Layer
  y: 400
  opacity: 0.6
  width: 10
  height: 10
layerA.placeBefore(layerB1)
layerA.placeBefore(layerB2)
layerA.placeBefore(layerB3)


layerA.onTap ->
  if layerA.y is 0
    layerB.backgroundColor = "Green"
    layerB2.animate("stateTap")
    layerB2.onAnimationEnd ->
      layerB2.animate("stateMiddle")

layerA.on Events.DragMove, ->
  if (layerA.draggable.direction is "down") and (layerA.y in [0..200])
    layerB.backgroundColor = "#28AFFA"
    layerB1.animate("stateMiddle")
    layerB2.animate("stateDown")
    layerB3.animate("stateDdown")
    layerB1.onAnimationEnd ->
      layerB1.animate("stateUp")
      layerB2.animate("stateMiddle")
      layerB3.animate("stateDown")
  if (layerA.draggable.direction is "up") and (layerA.y in [-200..0])
    layerB.backgroundColor = "Red"
    layerB1.animate("stateFly")
    layerB2.animate("stateUp")
    layerB3.animate("stateMiddle")
    layerB2.onAnimationEnd ->
      layerB1.animate("stateUp")
      layerB2.animate("stateMiddle")
      layerB3.animate("stateDown")

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


textLayer = new InputTextLayer width:Screen.width , height:120, y:0, x:0
textLayer.states.animationOptions = curve: "spring(250, 20, 0)"

textLayer.input.style.font = "36px/1.35em Helvetica"
textLayer.input.style.font-style = "normal"
textLayer.input.style.font-weight = "100"
textLayer.input.style.padding = "24px"
textLayer.input.style.textAlign = "left"
textLayer.input.style.background = "transparent"
textLayer.input.style.outline = '0'
textLayer.input.style.color = "#fff"
textLayer.input.style.border = "0px solid"
# textLayer.input.style.display = "none"
textLayer.input.value = new Date().getSeconds()
textLayer.input.placeholder = "Search Me"
textLayer.backgroundColor = "rgba(0, 0, 0, 1)"

# textLayer.input.addEventListener "keyup", ->

layerWidth = new Layer
  x: 0
  y: 250
  width: 740
  height: 250
