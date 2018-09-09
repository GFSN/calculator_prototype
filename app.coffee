###
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

textLayer = new InputTextLayer width:Screen.width , height:120, y:52, x:15
textLayer.states.animationOptions = curve: "spring(250, 20, 0)"

textLayer.input.style.font = "56px/1.35em Helvetica"
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


timeAnimation = 0.15
curveAnimation = "Bezier(0.0, 0.0, 0.2, 1)"

backgroundLayer = new Layer
  image: "images/background.png"
  width: 720
  height: 1280

# Pi button
layer12 = new Layer
 x: 28
 y: 416
 width: 148
 height: 148
 opacity: 0
layer12.draggable.enabled = true
layer12.draggable.horizontal = false
layer12.draggable.constraints =
 x: 28
 y: 416
 width: 148
 height: 148

layer12Pi = new Layer
 image: "images/012_pi.png"
 x: 28
 y: 416
 width: 148
 height: 148
layer12Pi.states.stateDown =
 x: layer12Pi.x + 41
 y: layer12Pi.y + 83
 width: 70
 height: 70
 opacity: 0.4
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer12Pi.states.stateMiddle =
 x: layer12Pi.x
 y: layer12Pi.y
 width: 148
 height: 148
 opacity: 1
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer12Pi.states.stateTap =
 x: layer12Pi.x + 9
 y: layer12Pi.y + 9
 width: 130
 height: 130
 opacity: 1
 animationOptions:
  time: timeAnimation*0.5
  curve: curveAnimation

layer12Exp = new Layer
 image: "images/012_e.png"
 x: 69
 y: 403
 width: 70
 height: 70
 opacity: 0.4
layer12Exp.states.stateUp =
 x: 69
 y: 403
 width: 70
 height: 70
 opacity: 0.4
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer12Exp.states.stateMiddle =
 x: 28
 y: 416
 width: 148
 height: 148
 opacity: 1
 animationOptions:
  time: timeAnimation
  curve: curveAnimation

layer12.placeBefore(layer12Pi)
layer12.placeBefore(layer12Exp)
layer12Pi.placeBefore(layer12Exp)
textLayer.placeBefore(backgroundLayer)

layer12.onClick ->
 if (layer12.y is 416)
  textLayer.input.value = textLayer.input.value + "π"
  layer12Pi.animate("stateTap")
  layer12Pi.onStateSwitchEnd ->
   if layer12Pi.states.current.name is "stateTap"
    layer12Pi.stateCycle("stateTap", "stateMiddle")

layer12.onSwipeDown ->
 if (layer12Pi.states.current.name is "stateMiddle")
  textLayer.input.value = textLayer.input.value + "e"
  layer12Exp.animate("stateMiddle")
  layer12Pi.animate("stateDown")

layer12.onSwipeEnd ->
 layer12Exp.animate("stateUp")
 layer12Pi.animate("stateMiddle")
#square button

layer13 = new Layer
 x: 200
 y: 416
 width: 148
 height: 148
 opacity: 0
layer13.draggable.enabled = true
layer13.draggable.horizontal = false
layer13.draggable.constraints =
 x: 200
 y: 416
 width: 148
 height: 148

layer13Square = new Layer
 image: "images/013_square.png"
 x: layer13.x
 y: layer13.y
 width: 148
 height: 148
layer13Square.states.stateDown =
 x: layer13.x + 41
 y: layer13.y + 83
 width: 70
 height: 70
 opacity: 0.4
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer13Square.states.stateMiddle =
 x: layer13.x
 y: layer13.y
 width: 148
 height: 148
 opacity: 1
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer13Square.states.stateTap =
 x: layer13.x + 9
 y: layer13.y + 9
 width: 130
 height: 130
 opacity: 1
 animationOptions:
  time: timeAnimation*0.5
  curve: curveAnimation
layer13Square.states.stateUp =
 x: layer13.x + 41
 y: layer13.y - 13
 width: 70
 height: 70
 opacity: 0.4
 animationOptions:
  time: timeAnimation
  curve: curveAnimation

layer13Exponent = new Layer
 image: "images/013_exponent.png"
 x: layer13.x + 41
 y: layer13.y - 13
 width: 70
 height: 70
 opacity: 0.4
layer13Exponent.states.stateUp =
 x: layer13.x + 41
 y: layer13.y - 13
 width: 70
 height: 70
 opacity: 0.4
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer13Exponent.states.stateMiddle =
 x: layer13.x
 y: layer13.y
 width: 148
 height: 148
 opacity: 1
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer13Exponent.states.stateFly =
 x: layer13.x + 72
 y: layer13.y - 40
 width: 8
 height: 8
 opacity: 0
 animationOptions:
  time: timeAnimation
  curve: curveAnimation

layer13Radical = new Layer
 image: "images/013_radical.png"
 x: layer13.x + 41
 y: layer13.y + 83
 width: 70
 height: 70
 opacity: 0.4
layer13Radical.states.stateDown =
 x: layer13.x + 41
 y: layer13.y + 83
 width: 70
 height: 70
 opacity: 0.4
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer13Radical.states.stateMiddle =
 x: layer13.x
 y: layer13.y
 width: 148
 height: 148
 opacity: 1
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer13Radical.states.stateDdown =
 x: layer13.x + 72
 y: layer13.y + 120
 width: 8
 height: 8
 opacity: 0
 animationOptions:
  time: timeAnimation
  curve: curveAnimation

layer13.placeBefore(layer13Square)
layer13.placeBefore(layer13Exponent)
layer13.placeBefore(layer13Radical)
layer13Square.placeBefore(layer13Exponent)
layer13Square.placeBefore(layer13Radical)

layer13.onClick ->
	if (layer13.y is 416)
		textLayer.input.value = textLayer.input.value + "^2"
		layer13Square.animate("stateTap")
		layer13Square.onStateSwitchEnd ->
			if layer13Square.states.current.name is "stateTap"
				layer13Square.stateCycle("stateTap", "stateMiddle")

layer13.onSwipeUpStart ->
	 if (layer13Square.states.current.name is "stateMiddle")
		 textLayer.input.value = textLayer.input.value + "√"
		 layer13Exponent.animate("stateFly")
		 layer13Square.animate("stateUp")
		 layer13Radical.animate("stateMiddle")

layer13.onSwipeDown ->
	if (layer13Square.states.current.name is "stateMiddle")
		textLayer.input.value = textLayer.input.value + "^"
		layer13Exponent.animate("stateMiddle")
		layer13Square.animate("stateDown")
		layer13Radical.animate("stateDdown")

layer13.onSwipeEnd ->
	layer13Exponent.animate("stateUp")
	layer13Square.animate("stateMiddle")
	layer13Radical.animate("stateDown")

#delite button

layer14 = new Layer
 x: 372
 y: 416
 width: 148
 height: 148
 opacity: 0
layer12.draggable.enabled = true
layer12.draggable.horizontal = false
layer12.draggable.constraints =
 x: 372
 y: 416
 width: 148
 height: 148

layer14Delite = new Layer
 image: "images/014_delite.png"
 x: 372
 y: 416
 width: 148
 height: 148
layer14Delite.states.stateDown =
 x: layer14Delite.x + 41
 y: layer14Delite.y + 83
 width: 70
 height: 70
 opacity: 0.4
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer14Delite.states.stateMiddle =
 x: layer14Delite.x
 y: layer14Delite.y
 width: 148
 height: 148
 opacity: 1
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer14Delite.states.stateTap =
 x: layer14Delite.x + 9
 y: layer14Delite.y + 9
 width: 130
 height: 130
 opacity: 1
 animationOptions:
  time: timeAnimation*0.5
  curve: curveAnimation

layer14Cancel = new Layer
 image: "images/014_cancel.png"
 x: layer14.x + 41
 y: layer14.y - 13
 width: 70
 height: 70
 opacity: 0.4
layer14Cancel.states.stateUp =
 x: layer14.x + 41
 y: layer14.y - 13
 width: 70
 height: 70
 opacity: 0.4
 animationOptions:
  time: timeAnimation
  curve: curveAnimation
layer14Cancel.states.stateMiddle =
 x: layer14.x
 y: layer14.y
 width: 148
 height: 148
 opacity: 1
 animationOptions:
  time: timeAnimation
  curve: curveAnimation

layer14.placeBefore(layer14Cancel)
layer14.placeBefore(layer14Delite)
layer14Delite.placeBefore(layer14Cancel)


layer14.onClick ->
	print "Click"
	if (layer14.y is 416)
		print "If click"
		#textLayer.input.value = textLayer.input.value + "π"
		layer14Delite.animate("stateTap")
		layer14Delite.onStateSwitchEnd ->
			print "onStateSwitchEnd"
			if layer14Delite.states.current.name is "stateTap"
				print "layer14Delite.states.current.name is stateTap"
				print layer14.y
				layer14Delite.stateCycle("stateTap", "stateMiddle")


layer14.onClick ->
	if (layer14.y is 416)
		textLayer.input.value = textLayer.input.value + "^2"
		layer14Delite.animate("stateTap")
		layer14Delite.onStateSwitchEnd ->
			if (layer14Delite.states.current.name is "stateTap")
				layer14Delite.stateCycle("stateTap", "stateMiddle")

layer14.onSwipeDown ->
	if (layer14Delite.states.current.name is "stateMiddle")
		#textLayer.input.value = textLayer.input.value + "e"
		layer14Cancel.animate("stateMiddle")
		layer14Delite.animate("stateDown")

layer14.onSwipeEnd ->
	layer14Cancel.animate("stateUp")
	layer14Delite.animate("stateMiddle")

# 7 button
layer7 = new Layer
	x: 28
	y: 588
	width: 148
	height: 148
	opacity: 0
layer7.draggable.enabled = true
layer7.draggable.horizontal = false
layer7.draggable.constraints =
 x: 28
 y: 588
 width: 148
 height: 148

layer7Numeral = new Layer
	x: 28
	y: 588
	width: 148
	height: 148
	image: "images/007_numeral.png"
layer7Numeral.states.stateTap =
	x: 37
	y: 597
	width: 130
	height: 130
	animationOptions:
		time: timeAnimation*0.5
		curve: curveAnimation
layer7Numeral.states.stateMiddle =
	x: 28
	y: 588
	width: 148
	height: 148
	animationOptions:
		time: timeAnimation
		curve: curveAnimation
layer7Numeral.stateSwitch("stateMiddle")
layer7.onClick ->
		textLayer.input.value = textLayer.input.value + "7"
		layer7Numeral.stateCycle("stateMiddle", "stateTap")
		layer7Numeral.onStateSwitchEnd ->
			if (layer7Numeral.states.current.name is "stateTap")
				layer7Numeral.stateCycle("stateTap", "stateMiddle")
###
screenScale = 1.5
curveAnimation = "Bezier(0.0, 0.0, 0.2, 1)"
time = 0.3



eOn = "ease-out"
eOff = "ease-in"

# Фон
layerBG = new Layer
	width: 1126
	height: 2436
	scale: 1 / screenScale
	opacity: 1
	image: "images/iPhone-X-bg.png"
layerBG.x = 0 - (layerBG.width - layerBG.width / screenScale) / 2
layerBG.y = 0 - (layerBG.height - layerBG.height / screenScale) / 2


#
# Округление #
# Площадь
rounding_margin = new Layer
	parent: layerBG
	x: 0
	y: 150
	width: 150
	height: 132
	opacity: 0
# Фон кнопки округления
roundingBG = new Layer
	parent: layerBG
	x: 36
	y: 168
	width: 96
	height: 96
	borderRadius: 48
	backgroundColor : "#333333"
# Иконка кнопки округления
rounding = new Layer
	parent: roundingBG
	width: 96
	height: 96
	image: "images/rounding.png"
	opacity: 0.8
# состояния кнопки округления
roundingBG.states.active =
	backgroundColor : "#b3b3b3"
	animationOptions:
		time: 0.3
		curve: "ease-out"
roundingBG.states.default =
	backgroundColor : "#333333"
	animationOptions:
		time: time
		curve: "ease-out"
rounding.states.active =
	image: "images/rounding-black.png"
rounding.states.default =
	image: "images/rounding.png"
#
# Углы #
# Фон кнопки углов
degBG = new Layer
	parent: layerBG
	x: 168
	y: 168
	width: 138
	height: 96
	borderRadius: 48
	backgroundColor : "#333333"
# Иконка кнопки углов
deg = new Layer
	parent: degBG
	width: 138
	height: 96
	image: "images/deg.png"
	opacity: 0.8
# Площадь кнопки углов
deg_margin = new Layer
	parent: layerBG
	x: 150
	y: 150
	width: 174
	height: 132
	opacity: 0
# состояния кнопки углов
# tap background Rad
degBG.states.tap =
	backgroundColor : "#666666"
	animationOptions:
		time: 0.25
		curve: "ease-in"
#default background Rad
degBG.states.default =
	backgroundColor : "#333333"
	animationOptions:
		time: 0.2
		curve: "ease-out"
#tap icon Rad
deg.states.rad =
	image: "images/rad.png"
#default icon Rad
deg.states.default =
	image: "images/deg.png"
#
# memory 1 #
# background memory 1
memoryBG = new Layer
	parent: layerBG
	#x: 342
	#y: 168
	#width: 298
	#height: 96
	borderRadius: 48
	backgroundColor : "rgba(255,255,255,0.35)"
	opacity: 0
	width: 180
	opacity: 0
	height: 50
	x: 300
	y: 191
# icon mempry 1
memory = new Layer
	parent: memoryBG
	width: 298
	height: 96
	image: "images/memory-1.png"
	opacity: 0
	scale: 0.5
	x: -110
	y: -23
# margin memory 1
memory_margin = new Layer
	parent: layerBG
	x: 324
	y: 150
	width: 334
	height: 132
	opacity: 0
# memory 2 #
# background memory 2
memoryBG2 = new Layer
	parent: layerBG
	x: 342
	y: 168
	width: 298
	height: 96
	borderRadius: 48
	backgroundColor : "rgba(255,255,255,0.35)"
	opacity: 1
# icon mempry 2
memory2 = new Layer
	parent: memoryBG2
	width: 298
	height: 96
	image: "images/memory-1.png"
	opacity: 0.9
# states memory 1
#states background
memoryBG.states.create =
	width: 298
	height: 96
	opacity: 1
	scale: 1
	x: 342
	y: 168
	animationOptions:
		time: time
		curve: "ease-in-out"
memoryBG.states.default =
	width: 180
	opacity: 0
	#scale: 0.5
	height: 50
	x: 300
	y: 191
	animationOptions:
		time: 0.6 * time
		curve: "ease-in-out"
memory.states.create =
	scale: 1
	opacity: 0.9
	x: 0
	y: 0
	animationOptions:
		time: time
		curve: "ease-in-out"
memory.states.default =
	opacity: 0
	scale: 0.5
	x: -110
	y: -23
	animationOptions:
		time: 0.6 * time
		curve: "ease-in-out"
# states memory 2
memoryBG2.states.create =
	x: 676
	animationOptions:
		time: 0.8 * time
		curve: "ease-in-out"
memoryBG2.states.default =
	x: 342
	animationOptions:
		time: 0.8 * time
		curve: "ease-in-out"
#
# minus
minusBG = new Layer
	parent: memoryBG
	x: 260
	y: -32
	width: 66
	height: 66
	borderRadius: 33
	backgroundColor : "#eb4e3d"
	scale: 1

# minus
minus = new Layer
	parent: minusBG
	x: 16
	y: 31
	width: 34
	height: 4
	backgroundColor : "#fff"
minusMargin = new Layer
	parent: layerBG
	x: 186 + 342
	y: -32 + 168
	width: 140
	height: 130
	opacity: 0



# minus states
minusBG.states.tap =
	scale: 1
	animationOptions:
		time: 0.5 * time
		curve: "ease-out"
minusBG.states.default =
	scale: 0
	animationOptions:
		time: 0.3 * time
minusBG.states.switchInstant "default"
minusMargin.states.tap =
	scale: 1
	animationOptions:
		time: 0
minusMargin.states.default =
	scale: 0
	animationOptions:
		time: 0
minusMargin.states.switchInstant "default"



memory_margin.states.create =
	scale: 1
	animationOptions:
		time: 0
memory_margin.states.default =
	scale: 0
	animationOptions:
		time: 0
memory_margin.states.switchInstant "default"
minusMargin.placeBefore (memory_margin)
save = new Layer
	parent: layerBG
	x: 36 #kjb
	y: 888
	width: 195
	height: 96
	backgroundColor : "rgba(255,255,255,0.20)"
	borderRadius: 50
saveMargin = new Layer
	parent: layerBG
	x: 48
	y: 870
	width: 198
	height: 132
	opacity: 0

saveMargin.onTap ->
	memoryBG.states.switch "create"
	memory.states.switch "create"
	memoryBG2.states.switch "create"
	memory_margin.states.switch "create"
memory_margin.onLongPress ->
	#print "Click"
	minusBG.states.switch "tap"
	minusMargin.states.switch "tap"

minusMargin.onTap ->
	minusBG.states.switch "default"
	memory_margin.states.switch "default"
	minusMargin.states.switch "default"
	memoryBG.states.next()
	memory.states.next()
	memoryBG2.states.next()

	#print layer1.states.tap.animationOptions.curve




### Кнопки управления

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

textLayer = new InputTextLayer
	parent: layerBG
	width:150
	height:200
	y:2005
	x:107
	opacity: 0.1
#textLayer.states.animationOptions = curve: "spring(250, 20, 0)"
textLayer.input.style.font = "50px/1.35em Helvetica"
#textLayer.input.style.font-style = "normal"
#textLayer.input.style.font-weight = "100"
#textLayer.input.style.padding = "24px"
textLayer.input.style.textAlign = "center"
textLayer.input.style.background = "transparent"
#textLayer.input.style.outline = '0.1'
textLayer.input.style.color = "#FFF"
#textLayer.input.style.border = "0px solid"
# textLayer.input.style.display = "none"
textLayer.input.value = timeOn
# textLayer.input.placeholder = "Search Me"
textLayer.backgroundColor = "rgba(255, 255, 255, 0)"

textLayer2 = new InputTextLayer
	parent: layerBG
	width:150
	height:200
	y:2005
	x:465
	opacity: 0.1
textLayer2.input.style.font = "50px/1.35em Helvetica"
textLayer2.input.style.textAlign = "center"
textLayer2.input.style.background = "transparent"
textLayer2.input.style.color = "#FFF"
textLayer2.input.value = timeOff
textLayer2.backgroundColor = "rgba(255, 255, 255, 0)"

textLayer3 = new InputTextLayer
	parent: layerBG
	width:150
	height:200
	y:2005
	x:740
	opacity: 0.1
textLayer3.input.style.font = "50px/1.35em Helvetica"
textLayer3.input.style.textAlign = "center"
textLayer3.input.style.background = "transparent"
textLayer3.input.style.color = "#FFF"
textLayer3.input.value = eOn
textLayer3.backgroundColor = "rgba(255, 255, 255, 0)"

textLayer4 = new InputTextLayer
	parent: layerBG
	width:150
	height:200
	y:2005
	x:910
	opacity: 0.1
textLayer4.input.style.font = "50px/1.35em Helvetica"
textLayer4.input.style.textAlign = "center"
textLayer4.input.style.background = "transparent"
textLayer4.input.style.color = "#FFF"
textLayer4.input.value = eOff
textLayer4.backgroundColor = "rgba(255, 255, 255, 0)"


timeOnMinus = new Layer
	parent: layerBG
	x: 0
	y: 2000
	opacity: 0
	borderRadius: 10
	width: 180
timeOnPlus = new Layer
	parent: layerBG
	x: 180
	y: 2000
	opacity: 0
	borderRadius: 10
	width: 180
timeOffMinus = new Layer
	parent: layerBG
	x: 360
	y: 2000
	opacity: 0
	borderRadius: 10
	width: 180
timeOffPlus = new Layer
	parent: layerBG
	x: 540
	y: 2000
	opacity: 0
	borderRadius: 10
	width: 180
EaseOn = new Layer
	parent: layerBG
	x: 720
	y: 2000
	opacity: 0
	borderRadius: 10
	width: 180
EaseOff = new Layer
	parent: layerBG
	x: 900
	y: 2000
	opacity: 0
	borderRadius: 10
	width: 180





timeOnMinus.onTap ->
	timeOn = timeOn - 0.05
	degBG.states.default.animationOptions.time = timeOn
	textLayer.input.value = timeOn
timeOnPlus.onTap ->
	timeOn = timeOn + 0.05
	degBG.states.default.animationOptions.time = timeOn
	textLayer.input.value = timeOn

timeOffMinus.onTap ->
	timeOff = timeOff - 0.05
	degBG.states.tap.animationOptions.time = timeOff
	textLayer2.input.value = timeOff
timeOffPlus.onTap ->
	timeOff = timeOff + 0.05
	degBG.states.tap.animationOptions.time = timeOff
	textLayer2.input.value = timeOff
EaseOn.onTap ->
	if (eOn is "ease-in")
		textLayer3.input.value = "out"
		eOn = "ease-out"
		degBG.states.default.animationOptions.curve = eOn
	else
		textLayer3.input.value = "in"
		eOn = "ease-in"
		degBG.states.default.animationOptions.curve = eOn

EaseOff.onTap ->
	if (eOff is "ease-in")
		textLayer4.input.value = "out"
		eOff = "ease-out"
		degBG.states.tap.animationOptions.curve = eOff
	else
		textLayer4.input.value = "in"
		eOff = "ease-in"
		degBG.states.tap.animationOptions.curve = eOff
###
rounding_margin.onClick ->
	roundingBG.states.next()
	rounding.states.next()


deg_margin.onTap ->
	deg.states.next()
	degBG.states.next()
	degBG.onStateSwitchEnd ->
		if (degBG.states.current.name is "tap")
			degBG.stateCycle("tap", "default")

#
# Button 7 and ln
#
timeBig = 0.15
timeSmall = 0.15
scaleTap = 0.8

#
# Button √ adn !
#
#Button √
l_sqrt = new Layer
	parent: layerBG
	image: "images/sqrt.png"
# Button √ States
l_sqrt.states.default =
	x: 24
	y: 1026
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeBig
		curve: "ease-in"
l_sqrt.states.switchInstant "default"
l_sqrt.states.swipe =
	x: 24
	y: 1106
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l_sqrt.states.tap =
	x: 24
	y: 1026
	width: 270
	height: 234
	opacity: 1
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
# Button !
l_sqrt_factorial = new Layer
	parent: layerBG
	image: "images/!.png"
# Button ! States
l_sqrt_factorial.states.default =
	x: 24
	y: 956
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l_sqrt_factorial.states.swipe =
	x: 24
	y: 1026
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l_sqrt_factorial.states.switchInstant "default"
# Button sqrt Masc
l_sqrt_bg = new Layer
	parent: layerBG
	x: 48
	y: 1026
	width: 246
	height: 234
	opacity: 0
# Button sqrt draggable
l_sqrt_bg.draggable.enabled = true
l_sqrt_bg.draggable.horizontal = false
l_sqrt_bg.draggable.constraints =
 x: 48
 y: 1026
 width: 246
 height: 234
# Button sqrt Animation
#
# Tap Animation
l_sqrt_bg.onClick ->
	if (l_sqrt_bg.y is 1026)
		l_sqrt.animate("tap")
		l_sqrt.onStateSwitchEnd ->
			if (l_sqrt.states.current.name is "tap")
				l_sqrt.stateCycle("tap", "default")
# Swipe Animation
l_sqrt_bg.onSwipeDown ->
	if (l_sqrt.states.current.name is "default")
		l_sqrt_factorial.animate("swipe")
		l_sqrt.animate("swipe")
l_sqrt_bg.onSwipeEnd ->
	l_sqrt_factorial.animate("default")
	l_sqrt.animate("default")
	l_sqrt_bg.y = 1026
#
# Button pow and pow_n
#
#Button pow
l_pow = new Layer
	parent: layerBG
	image: "images/pow.png"
	x: 294
	width: 270
	height: 234
# Button pow States
l_pow.states.default =
	y: 1026
	opacity: 1
	scale: 1
	animationOptions:
		time: timeBig
		curve: "ease-in"
l_pow.states.switchInstant "default"
l_pow.states.swipe =
	y: 1106
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l_pow.states.tap =
	y: 1026
	opacity: 1
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
# Button pow_n
l_pow_n = new Layer
	parent: layerBG
	image: "images/pow_n.png"
	x: 294
	width: 270
	height: 234
# Button pow_n States
l_pow_n.states.default =
	y: 956
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l_pow_n.states.swipe =
	y: 1026
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l_pow_n.states.switchInstant "default"
# Button pow Masc
l_pow_bg = new Layer
	parent: layerBG
	x: 294
	y: 1026
	width: 270
	height: 234
	opacity: 0
# Button pow draggable
l_pow_bg.draggable.enabled = true
l_pow_bg.draggable.horizontal = false
l_pow_bg.draggable.constraints =
 x: 294
 y: 1026
 width: 270
 height: 234
# Button pow Animation
#
# Tap Animation
l_pow_bg.onClick ->
	if (l_pow_bg.y is 1026)
		l_pow.animate("tap")
		l_pow.onStateSwitchEnd ->
			if (l_pow.states.current.name is "tap")
				l_pow.stateCycle("tap", "default")
# Swipe Animation
l_pow_bg.onSwipeDown ->
	if (l_pow.states.current.name is "default")
		l_pow_n.animate("swipe")
		l_pow.animate("swipe")
l_pow_bg.onSwipeEnd ->
	l_pow_n.animate("default")
	l_pow.animate("default")
	l_pow_bg.y = 1026

#
# Button del and cancel
#
#Button del
l_del = new Layer
	parent: layerBG
	image: "images/del.png"
	x: 564
	width: 270
	height: 234
# Button del States
l_del.states.default =
	y: 1026
	opacity: 1
	scale: 1
	animationOptions:
		time: timeBig
		curve: "ease-in"
l_del.states.switchInstant "default"
l_del.states.swipe =
	y: 1106
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l_del.states.tap =
	y: 1026
	opacity: 1
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
# Button cancel
l_cancel = new Layer
	parent: layerBG
	image: "images/cancel.png"
	x: 564
	width: 270
	height: 234
# Button cancel States
l_cancel.states.default =
	y: 956
	scale: 0.45
	opacity: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-in"
l_cancel.states.swipe =
	y: 1026
	scale: 1
	opacity: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l_cancel.states.switchInstant "default"
# Button del Masc
l_del_bg = new Layer
	parent: layerBG
	x: 564
	y: 1026
	width: 270
	height: 234
	opacity: 0
# Button del draggable
l_del_bg.draggable.enabled = true
l_del_bg.draggable.horizontal = false
l_del_bg.draggable.constraints =
 x: 564
 y: 1026
 width: 270
 height: 234
# Button del Animation
#
# Tap Animation
l_del_bg.onClick ->
	if (l_del_bg.y is 1026)
		l_del.animate("tap")
		l_del.onStateSwitchEnd ->
			if (l_del.states.current.name is "tap")
				l_del.stateCycle("tap", "default")
# Swipe Animation
l_del_bg.onSwipeDown ->
	if (l_del.states.current.name is "default")
		l_cancel.animate("swipe")
		l_del.animate("swipe")
l_del_bg.onSwipeEnd ->
	l_cancel.animate("default")
	l_del.animate("default")
	l_del_bg.y = 1026
#
# Button 2nd
#
# Button 2nd bg
second_bg_grey = new Layer
	parent: layerBG
	x: 849
	y: 1086
	width: 228
	height: 156
	borderRadius: 80
	backgroundColor : "#333333"
# Button 2nd
second = new Layer
	parent: layerBG
	image: "images/2nd.png"
	x: 834
	width: 270
	height: 234
	y: 1026
# Button 2nd Masc
second_bg = new Layer
	parent: layerBG
	x: 834
	y: 1026
	width: 270
	height: 234
	opacity: 0
# Station
second_bg_grey.states.active =
	backgroundColor : "#b3b3b3"
	animationOptions:
		time: 0.3
		curve: "ease-out"
second_bg_grey.states.default =
	backgroundColor : "#333333"
	animationOptions:
		time: time
		curve: "ease-out"
second.states.active =
	image: "images/2nd_black.png"
second.states.default =
	image: "images/2nd.png"
# Button 2nd Animation
#
# Tap Animation
second_bg.onClick ->
	second_bg_grey.states.next()
	second.states.next()
#
# Button 7
#
l7 = new Layer
	parent: layerBG
	image: "images/7.png"
# Button 7 States
l7.states.default =
	x: 24
	y: 1260
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
l7.states.swipe =
	x: 24
	y: 1340
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
l7.states.tap =
	x: 24
	y: 1260
	width: 270
	height: 234
	opacity: 1
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
l7.states.switchInstant "default"
# Button ln
l7_ln = new Layer
	parent: layerBG
	image: "images/ln.png"
# Button ln States
l7_ln.states.default =
	x: 24
	y: 1190
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l7_ln.states.swipe =
	x: 24
	y: 1260
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l7_ln.states.switchInstant "default"
# Button 7 Masc
l7_bg = new Layer
	parent: layerBG
	x: 48
	y: 1260
	width: 246
	height: 234
	opacity: 0
# Button 7 draggable
l7_bg.draggable.enabled = true
l7_bg.draggable.horizontal = false
l7_bg.draggable.constraints =
 x: 48
 y: 1260
 width: 246
 height: 234
#
# Circle
# Button 7 Animation
#
# Tap Animation
l7_bg.onClick ->
	if ((l7_bg.y is 1260) && (l_sqrt_bg.y is 1026))
		l7.animate("tap")
		l7.onStateSwitchEnd ->
			if (l7.states.current.name is "tap")
				l7.stateCycle("tap", "default")
# Swipe Animation
l7_bg.onSwipeDown ->
	if (l7.states.current.name is "default")
		#textLayer.input.value = textLayer.input.value + "e"
		l7_ln.animate("swipe")
		l7.animate("swipe")

l7_bg.onSwipeEnd ->
	l7_ln.animate("default")
	l7.animate("default")
	l7_bg.y = 1260


layerA = new Layer
	parent: layerBG
	x: 524
	y: 1400
	width: 250
	height: 250
	borderRadius: 125
	backgroundColor: "#000"
layerA.states.default =
	scale: 0
layerA.states.tap =
	scale: 1
	#opacity: 0
	animationOptions:
		time: 0.7
		curve: "ease-out"
layerA.states.switchInstant "default"

layerC = new Layer
	parent: layerA
	width: 250
	height: 250
	borderRadius: 125
	backgroundColor: "#fff"
layerC.states.default =
	opacity: 0.5
layerC.states.tap =
	opacity: 0
	animationOptions:
		time: layerA.states.tap.animationOptions.time - 0.05
		curve: "ease-out"
		#delay: 0.4
layerC.states.switchInstant "default"

layerD = new Layer
	parent: layerA
	width: 250
	height: 250
	borderRadius: 125
	backgroundColor: "#000"
	scale: 0.98
layerD.states.default =
	scale: 0.4
layerD.states.tap =
	scale: 0.98
	animationOptions:
		time: layerA.states.tap.animationOptions.time - 0.05
		curve: "ease-out"
		#delay: 0.4
layerD.states.switchInstant "default"

layerE = new Layer
	parent: layerA
	width: 250
	height: 250
	borderRadius: 125
	backgroundColor: "#fff"
	scale: 0.96
layerE.states.default =
	opacity: 0.5
layerE.states.tap =
	opacity: 0.0
	animationOptions:
		time: 0.5
		curve: "ease-out"
		#delay: 0.4
layerE.states.switchInstant "default"


layerB = new Layer
	parent: layerBG
	x: 524
	y: 1400
	width: 250
	height: 250
	opacity: 0

layerB.onClick ->
	layerA.animate("tap")
	layerC.animate("tap")
	layerD.animate("tap")
	layerE.animate("tap")
	layerA.onStateSwitchEnd ->
		if (layerA.states.current.name is "tap")
			layerA.states.switchInstant "default"
			layerC.states.switchInstant "default"
			layerD.states.switchInstant "default"
			layerE.states.switchInstant "default"

l_pow_test = new Layer
	parent: layerBG
	image: "images/pow.png"
	x: 523
	y: 1388
	width: 270
	height: 234
