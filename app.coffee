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
	image: "images/iPhone-X-bg-black.png"
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
	opacity: 0
# icon mempry 2
memory2 = new Layer
	parent: memoryBG2
	width: 298
	height: 96
	image: "images/memory-1.png"
	opacity: 0
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
save_icon = new Layer
	parent: layerBG
	x: 38 #kjb
	y: 890
	width: 195
	height: 96
	image: "images/save.png"
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
cursor = new Layer
	parent: layerBG
	width: 8
	height: 100
	y:296
	x:40
	backgroundColor: "#F28758"
	borderRadius: 4

cursor.states.default =
	opacity: 1
	animationOptions:
		time: 0.1
		delay: 0.4
cursor.states.opacity0 =
	opacity: 0
	animationOptions:
		time: 0.15
		delay: 0.35
#cursor.stateswitch("opacity0")
cursor.states.switchInstant "opacity0"
cursor.onStateSwitchEnd ->
	cursor.states.next()

cursorBlack = new Layer
	parent: layerBG
	width: 8
	height: 100
	y:296
	x:40
	backgroundColor: "#000000"
	opacity: 0



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
	width:1000
	height:200
	y:250
	x:40
	opacity: 1
#textLayer.states.animationOptions = curve: "spring(250, 20, 0)"
textLayer.input.style.font = "91px Helvetica"
#textLayer.input.style.font-style = "normal"
#textLayer.input.style.font-weight = "100"
#textLayer.input.style.padding = "24px"
textLayer.input.style.textAlign = "left"
textLayer.input.style.background = "transparent"
#textLayer.input.style.outline = '0.1'
textLayer.input.style.color = "#FFF"
#textLayer.input.style.border = "0px solid"
# textLayer.input.style.display = "none"
#textLayer.input.value = timeOn
#textLayer.input.placeholder = "0"
textLayer.backgroundColor = "rgba(0, 0, 0, 0)"

textLayer2 = new InputTextLayer
	parent: layerBG
	width: 1085 - 500
	height: 200
	y:835
	x:500
	opacity: 1
textLayer2.input.style.font = "108px/1.35em Helvetica"
textLayer2.input.style.textAlign = "right"
textLayer2.input.style.background = "transparent"
textLayer2.input.style.color = "#FFF"
#textLayer2.input.value = timeOff
textLayer2.input.placeholder = "0"
textLayer2.backgroundColor = "rgba(255, 255, 255, 0)"




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
scaleTap = 0.9

timeCircle = 0.5
#
# Button √ adn !
#
# Circle layers

l_sqrt_circle_parent = new Layer
	parent: layerBG
	x: 24 - 15
	y: 1106 - 100
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l_sqrt_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l_sqrt_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l_sqrt_circle_parent.states.switchInstant "default"

l_sqrt_circle_white = new Layer
	parent: l_sqrt_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l_sqrt_circle_white.states.default =
	opacity: 0.5
l_sqrt_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l_sqrt_circle_white.states.switchInstant "default"

l_sqrt_circle_black = new Layer
	parent: l_sqrt_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l_sqrt_circle = new Layer
	parent: l_sqrt_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l_sqrt_circle.states.default =
	opacity: 0.7
l_sqrt_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l_sqrt_circle.states.switchInstant "default"

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
	y: 1026
	opacity: 0.6
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
l_sqrt_bg.on Events.Click, (event) ->
	if (l_sqrt_bg.y is 1026)
		l_sqrt_circle_parent.opacity = 1
		l_sqrt_circle_parent.animate("tap")
		l_sqrt_circle_white.animate("tap")
		l_sqrt_circle.animate("tap")
		textLayer.input.value = textLayer.input.value + "√"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l_sqrt_circle_parent.onStateSwitchEnd ->
			if (l_sqrt_circle_parent.states.current.name is "tap")
				l_sqrt_circle_parent.states.switchInstant "default"
				l_sqrt_circle_white.states.switchInstant "default"
				l_sqrt_circle.states.switchInstant "default"


l_sqrt_bg.on Events.TouchStart, (event) ->
	if (l_sqrt_bg.y is 1026)
		l_sqrt.animate("tap")
l_sqrt_bg.on Events.TouchEnd, (event) ->
	l_sqrt.stateCycle("tap", "default")

# Swipe Animation
l_sqrt_bg.onSwipeDown ->
	if (l_sqrt.states.current.name is "default")
		l_sqrt_factorial.animate("swipe")
		l_sqrt.animate("swipe")
		textLayer.input.value = textLayer.input.value + "!"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
l_sqrt_bg.onSwipeEnd ->
	l_sqrt_factorial.animate("default")
	l_sqrt.animate("default")
	l_sqrt_bg.y = 1026
#
# Button pow and pow_n
#

# Circle layers

l_pow_circle_parent = new Layer
	parent: layerBG
	x: 294 - 15
	y: 1106 - 100
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l_pow_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l_pow_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l_pow_circle_parent.states.switchInstant "default"

l_pow_circle_white = new Layer
	parent: l_pow_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l_pow_circle_white.states.default =
	opacity: 0.5
l_pow_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l_pow_circle_white.states.switchInstant "default"

l_pow_circle_black = new Layer
	parent: l_pow_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l_pow_circle = new Layer
	parent: l_pow_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l_pow_circle.states.default =
	opacity: 0.7
l_pow_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l_pow_circle.states.switchInstant "default"


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
	opacity: 0.6
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

l_pow_bg.on Events.Click, (event) ->
	if (l_pow_bg.y is 1026)
		l_pow.animate("tap")
		textLayer.input.value = textLayer.input.value + "^2"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l_pow.onStateSwitchEnd ->
			if (l_pow.states.current.name is "tap")
				l_pow.stateCycle("tap", "default")

l_pow_bg.on Events.Click, (event) ->
	if (l_pow_bg.y is 1026)
		l_pow_circle_parent.opacity = 1
		l_pow_circle_parent.animate("tap")
		l_pow_circle_white.animate("tap")
		l_pow_circle.animate("tap")
		l_pow_circle_parent.onStateSwitchEnd ->
			if (l_pow_circle_parent.states.current.name is "tap")
				l_pow_circle_parent.states.switchInstant "default"
				l_pow_circle_white.states.switchInstant "default"
				l_pow_circle.states.switchInstant "default"
# Swipe Animation
l_pow_bg.onSwipeDown ->
	if (l_pow.states.current.name is "default")
		l_pow_n.animate("swipe")
		l_pow.animate("swipe")
		textLayer.input.value = textLayer.input.value + "^"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
l_pow_bg.onSwipeEnd ->
	l_pow_n.animate("default")
	l_pow.animate("default")
	l_pow_bg.y = 1026

#
# Button del and cancel
#

# Circle layers

l_del_circle_parent = new Layer
	parent: layerBG
	x: 564 - 15
	y: 1106 - 100
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l_del_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l_del_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l_del_circle_parent.states.switchInstant "default"

l_del_circle_white = new Layer
	parent: l_del_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l_del_circle_white.states.default =
	opacity: 0.5
l_del_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l_del_circle_white.states.switchInstant "default"

l_del_circle_black = new Layer
	parent: l_del_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l_del_circle = new Layer
	parent: l_del_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l_del_circle.states.default =
	opacity: 0.7
l_del_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l_del_circle.states.switchInstant "default"


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
	opacity: 0.6
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
l_del_bg.on Events.Click, (event) ->
	if (l_del_bg.y is 1026)
		l_del.animate("tap")
		textLayer.input.value = textLayer.input.value.substring(0, textLayer.input.value.length - 1);
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l_del.onStateSwitchEnd ->
			if (l_del.states.current.name is "tap")
				l_del.stateCycle("tap", "default")

l_del_bg.on Events.Click, (event) ->
	if (l_del_bg.y is 1026)
		l_del_circle_parent.opacity = 1
		l_del_circle_parent.animate("tap")
		l_del_circle_white.animate("tap")
		l_del_circle.animate("tap")
		l_del_circle_parent.onStateSwitchEnd ->
			if (l_del_circle_parent.states.current.name is "tap")
				l_del_circle_parent.states.switchInstant "default"
				l_del_circle_white.states.switchInstant "default"
				l_del_circle.states.switchInstant "default"

# Swipe Animation
l_del_bg.onSwipeDown ->
	if (l_del.states.current.name is "default")
		l_cancel.animate("swipe")
		l_del.animate("swipe")
		textLayer.input.value = null
		textLayer2.input.value = null
		cursorBlack.opacity = 0
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
second_bg.onTouchStart ->
	second_bg_grey.states.next()
	second.states.next()
#
#
# Circle layers

l7_circle_parent = new Layer
	parent: layerBG
	x: 24 - 15
	y: 1260 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l7_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l7_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l7_circle_parent.states.switchInstant "default"

l7_circle_white = new Layer
	parent: l7_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l7_circle_white.states.default =
	opacity: 0.5
l7_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l7_circle_white.states.switchInstant "default"

l7_circle_black = new Layer
	parent: l7_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l7_circle = new Layer
	parent: l7_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l7_circle.states.default =
	opacity: 0.7
l7_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l7_circle.states.switchInstant "default"


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
	opacity: 0.6
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
l7_bg.on Events.Click, (event) ->
	if ((l7_bg.y is 1260) && (l_sqrt_bg.y is 1026))
		l7.animate("tap")
		textLayer.input.value = textLayer.input.value + "7"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l7.onStateSwitchEnd ->
			if (l7.states.current.name is "tap")
				l7.stateCycle("tap", "default")

l7_bg.on Events.Click, (event) ->
	if (l_del_bg.y is 1026)
		l7_circle_parent.opacity = 1
		l7_circle_parent.animate("tap")
		l7_circle_white.animate("tap")
		l7_circle.animate("tap")
		l7_circle_parent.onStateSwitchEnd ->
			if (l7_circle_parent.states.current.name is "tap")
				l7_circle_parent.states.switchInstant "default"
				l7_circle_white.states.switchInstant "default"
				l7_circle.states.switchInstant "default"
# Swipe Animation
l7_bg.onSwipeDown ->
	if (l7.states.current.name is "default")
		textLayer.input.value = textLayer.input.value + "ln("
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l7_ln.animate("swipe")
		l7.animate("swipe")

l7_bg.onSwipeEnd ->
	l7_ln.animate("default")
	l7.animate("default")
	l7_bg.y = 1260

#
# 8 and log(10)
#
#
# Circle layers

l8_circle_parent = new Layer
	parent: layerBG
	x: 294 - 15
	y: 1260 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"

l8_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l8_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l8_circle_parent.states.switchInstant "default"

l8_circle_white = new Layer
	parent: l8_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l8_circle_white.states.default =
	opacity: 0.5
l8_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l8_circle_white.states.switchInstant "default"

l8_circle_black = new Layer
	parent: l8_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l8_circle = new Layer
	parent: l8_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l8_circle.states.default =
	opacity: 0.7
l8_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l8_circle.states.switchInstant "default"


# Button 8
#
l8 = new Layer
	parent: layerBG
	image: "images/8.png"
# Button 8 States
l8.states.default =
	x: 294
	y: 1260
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
l8.states.swipe =
	x: 294
	y: 1340
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
l8.states.tap =
	x: 294
	y: 1260
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
l8.states.switchInstant "default"
# Button lg
l8_ln = new Layer
	parent: layerBG
	image: "images/lg.png"
# Button lg States
l8_ln.states.default =
	x: 294
	y: 1190
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l8_ln.states.swipe =
	x: 294
	y: 1260
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l8_ln.states.switchInstant "default"
# Button 8 Masc
l8_bg = new Layer
	parent: layerBG
	x: 294
	y: 1260
	width: 270
	height: 234
	opacity: 0
# Button 8 draggable
l8_bg.draggable.enabled = true
l8_bg.draggable.horizontal = false
l8_bg.draggable.constraints =
 x: 294
 y: 1260
 width: 270
 height: 234
#
# Button 8 Animation
#
# Tap Animation
l8_bg.on Events.Click, (event) ->
	if ((l8_bg.y is 1260) && (l_pow_bg.y is 1026))
		l8.animate("tap")
		textLayer.input.value = textLayer.input.value + "8"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l8.onStateSwitchEnd ->
			if (l8.states.current.name is "tap")
				l8.stateCycle("tap", "default")

l8_bg.on Events.Click, (event) ->
	if ((l8_bg.y is 1260) && (l_pow_bg.y is 1026))
		l8_circle_parent.opacity = 1
		l8_circle_parent.animate("tap")
		l8_circle_white.animate("tap")
		l8_circle.animate("tap")
		l8_circle_parent.onStateSwitchEnd ->
			if (l8_circle_parent.states.current.name is "tap")
				l8_circle_parent.states.switchInstant "default"
				l8_circle_white.states.switchInstant "default"
				l8_circle.states.switchInstant "default"
# Swipe Animation
l8_bg.onSwipeDown ->
	if (l8.states.current.name is "default")
		l8_ln.animate("swipe")
		l8.animate("swipe")
		textLayer.input.value = textLayer.input.value + "lg("
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

l8_bg.onSwipeEnd ->
	l8_ln.animate("default")
	l8.animate("default")
	l8_bg.y = 1260

#
#
# 9 and i
#
#
# Circle layers

l9_circle_parent = new Layer
	parent: layerBG
	x: 564 - 15
	y: 1260 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l9_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l9_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l9_circle_parent.states.switchInstant "default"

l9_circle_white = new Layer
	parent: l9_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l9_circle_white.states.default =
	opacity: 0.5
l9_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l9_circle_white.states.switchInstant "default"

l9_circle_black = new Layer
	parent: l9_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l9_circle = new Layer
	parent: l9_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l9_circle.states.default =
	opacity: 0.7
l9_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l9_circle.states.switchInstant "default"


# Button 8
#
l9 = new Layer
	parent: layerBG
	image: "images/9.png"
# Button 8 States
l9.states.default =
	x: 564
	y: 1260
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
l9.states.swipe =
	x: 564
	y: 1340
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
l9.states.tap =
	x: 564
	y: 1260
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
l9.states.switchInstant "default"
# Button lg
l9_ln = new Layer
	parent: layerBG
	image: "images/i.png"
# Button lg States
l9_ln.states.default =
	x: 564
	y: 1190
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l9_ln.states.swipe =
	x: 564
	y: 1260
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l9_ln.states.switchInstant "default"
# Button 8 Masc
l9_bg = new Layer
	parent: layerBG
	x: 564
	y: 1260
	width: 270
	height: 234
	opacity: 0
# Button 8 draggable
l9_bg.draggable.enabled = true
l9_bg.draggable.horizontal = false
l9_bg.draggable.constraints =
 x: 564
 y: 1260
 width: 270
 height: 234
#
# Button 8 Animation
#
# Tap Animation
l9_bg.on Events.Click, (event) ->
	if ((l9_bg.y is 1260) && (l_del_bg.y is 1026))
		l9.animate("tap")
		textLayer.input.value = textLayer.input.value + "9"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l9.onStateSwitchEnd ->
			if (l9.states.current.name is "tap")
				l9.stateCycle("tap", "default")

l9_bg.on Events.Click, (event) ->
	if ((l9_bg.y is 1260) && (l_del_bg.y is 1026))
		l9_circle_parent.opacity = 1
		l9_circle_parent.animate("tap")
		l9_circle_white.animate("tap")
		l9_circle.animate("tap")
		l9_circle_parent.onStateSwitchEnd ->
			if (l9_circle_parent.states.current.name is "tap")
				l9_circle_parent.states.switchInstant "default"
				l9_circle_white.states.switchInstant "default"
				l9_circle.states.switchInstant "default"
# Swipe Animation
l9_bg.onSwipeDown ->
	if (l9.states.current.name is "default")
		l9_ln.animate("swipe")
		l9.animate("swipe")
		textLayer.input.value = textLayer.input.value + "i"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

l9_bg.onSwipeEnd ->
	l9_ln.animate("default")
	l9.animate("default")
	l9_bg.y = 1260

#
# 4 and asin
#
#
# Circle layers

l4_circle_parent = new Layer
	parent: layerBG
	x: 24 - 15
	y: 1494 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l4_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l4_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l4_circle_parent.states.switchInstant "default"

l4_circle_white = new Layer
	parent: l4_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l4_circle_white.states.default =
	opacity: 0.5
l4_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l4_circle_white.states.switchInstant "default"

l4_circle_black = new Layer
	parent: l4_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l4_circle = new Layer
	parent: l4_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l4_circle.states.default =
	opacity: 0.7
l4_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l4_circle.states.switchInstant "default"


# Button 4
#
l4 = new Layer
	parent: layerBG
	image: "images/4.png"
# Button 7 States
l4.states.default =
	x: 24
	y: 1494
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
l4.states.swipe =
	x: 24
	y: 1574
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
l4.states.tap =
	x: 24
	y: 1494
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
l4.states.switchInstant "default"
# Button ln
l4_ln = new Layer
	parent: layerBG
	image: "images/asin.png"
# Button ln States
l4_ln.states.default =
	x: 24
	y: 1424
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l4_ln.states.swipe =
	x: 24
	y: 1494
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l4_ln.states.switchInstant "default"
# Button 4 Masc
l4_bg = new Layer
	parent: layerBG
	x: 48
	y: 1494
	width: 246
	height: 234
	opacity: 0
# Button 4 draggable
l4_bg.draggable.enabled = true
l4_bg.draggable.horizontal = false
l4_bg.draggable.constraints =
 x: 48
 y: 1494
 width: 246
 height: 234
#
# Circle
# Button 4 Animation
#
# Tap Animation
l4_bg.on Events.Click, (event) ->
	if ((l4_bg.y is 1494) && (l7_bg.y is 1260))
		l4.animate("tap")
		textLayer.input.value = textLayer.input.value + "4"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l4.onStateSwitchEnd ->
			if (l4.states.current.name is "tap")
				l4.stateCycle("tap", "default")

l4_bg.on Events.Click, (event) ->
	if ((l4_bg.y is 1494) && (l7_bg.y is 1260))
		l4_circle_parent.opacity = 1
		l4_circle_parent.animate("tap")
		l4_circle_white.animate("tap")
		l4_circle.animate("tap")
		l4_circle_parent.onStateSwitchEnd ->
			if (l4_circle_parent.states.current.name is "tap")
				l4_circle_parent.states.switchInstant "default"
				l4_circle_white.states.switchInstant "default"
				l4_circle.states.switchInstant "default"
# Swipe Animation
l4_bg.onSwipeDown ->
	if (l4.states.current.name is "default")
		l4_ln.animate("swipe")
		l4.animate("swipe")
		textLayer.input.value = textLayer.input.value + "asin("
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

l4_bg.onSwipeEnd ->
	l4_ln.animate("default")
	l4.animate("default")
	l4_bg.y = 1494

#
# 5 and acos
#
#
# Circle layers

l5_circle_parent = new Layer
	parent: layerBG
	x: 294 - 15
	y: 1494 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l5_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l5_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l5_circle_parent.states.switchInstant "default"

l5_circle_white = new Layer
	parent: l5_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l5_circle_white.states.default =
	opacity: 0.5
l5_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l5_circle_white.states.switchInstant "default"

l5_circle_black = new Layer
	parent: l5_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l5_circle = new Layer
	parent: l5_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l5_circle.states.default =
	opacity: 0.7
l5_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l5_circle.states.switchInstant "default"


# Button 8
#
l5 = new Layer
	parent: layerBG
	image: "images/5.png"
# Button 8 States
l5.states.default =
	x: 294
	y: 1494
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
l5.states.swipe =
	x: 294
	y: 1574
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
l5.states.tap =
	x: 294
	y: 1494
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
l5.states.switchInstant "default"
# Button lg
l5_ln = new Layer
	parent: layerBG
	image: "images/acos.png"
# Button lg States
l5_ln.states.default =
	x: 294
	y: 1424
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l5_ln.states.swipe =
	x: 294
	y: 1494
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l5_ln.states.switchInstant "default"
# Button 8 Masc
l5_bg = new Layer
	parent: layerBG
	x: 294
	y: 1494
	width: 270
	height: 234
	opacity: 0
# Button 8 draggable
l5_bg.draggable.enabled = true
l5_bg.draggable.horizontal = false
l5_bg.draggable.constraints =
 x: 294
 y: 1494
 width: 270
 height: 234
#
# Button 5 Animation
#
# Tap Animation

l5_bg.on Events.Click, (event) ->
	if ((l5_bg.y is 1494) && (l8_bg.y is 1260) && (l_pow_bg.y is 1026))
		l5.animate("tap")
		textLayer.input.value = textLayer.input.value + "5"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l5.onStateSwitchEnd ->
			if (l5.states.current.name is "tap")
				l5.stateCycle("tap", "default")

l5_bg.on Events.Click, (event) ->
	if ((l5_bg.y is 1494) && (l8_bg.y is 1260) && (l_pow_bg.y is 1026))
		l5_circle_parent.opacity = 1
		l5_circle_parent.animate("tap")
		l5_circle_white.animate("tap")
		l5_circle.animate("tap")
		l5_circle_parent.onStateSwitchEnd ->
			if (l5_circle_parent.states.current.name is "tap")
				l5_circle_parent.states.switchInstant "default"
				l5_circle_white.states.switchInstant "default"
				l5_circle.states.switchInstant "default"
# Swipe Animation
l5_bg.onSwipeDown ->
	if (l5.states.current.name is "default")
		l5_ln.animate("swipe")
		l5.animate("swipe")
		textLayer.input.value = textLayer.input.value + "acos("
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

l5_bg.onSwipeEnd ->
	l5_ln.animate("default")
	l5.animate("default")
	l5_bg.y = 1494
#
#
# 6 and i
#
#
# Circle layers

l6_circle_parent = new Layer
	parent: layerBG
	x: 564 - 15
	y: 1494 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l6_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l6_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l6_circle_parent.states.switchInstant "default"

l6_circle_white = new Layer
	parent: l6_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l6_circle_white.states.default =
	opacity: 0.5
l6_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l6_circle_white.states.switchInstant "default"

l6_circle_black = new Layer
	parent: l6_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l6_circle = new Layer
	parent: l6_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l6_circle.states.default =
	opacity: 0.7
l6_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l6_circle.states.switchInstant "default"


# Button 6
#
l6 = new Layer
	parent: layerBG
	image: "images/6.png"
# Button 8 States
l6.states.default =
	x: 564
	y: 1494
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
l6.states.swipe =
	x: 564
	y: 1574
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
l6.states.tap =
	x: 564
	y: 1494
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
l6.states.switchInstant "default"
# Button lg
l6_ln = new Layer
	parent: layerBG
	image: "images/atan.png"
# Button lg States
l6_ln.states.default =
	x: 564
	y: 1424
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l6_ln.states.swipe =
	x: 564
	y: 1494
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l6_ln.states.switchInstant "default"
# Button 8 Masc
l6_bg = new Layer
	parent: layerBG
	x: 564
	y: 1494
	width: 270
	height: 234
	opacity: 0
# Button 8 draggable
l6_bg.draggable.enabled = true
l6_bg.draggable.horizontal = false
l6_bg.draggable.constraints =
 x: 564
 y: 1494
 width: 270
 height: 234
#
# Button 8 Animation
#
# Tap Animation
l6_bg.on Events.Click, (event) ->
	if ((l9_bg.y is 1260) && (l_del_bg.y is 1026) && (l6_bg.y is 1494))
		l6.animate("tap")
		textLayer.input.value = textLayer.input.value + "6"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l6.onStateSwitchEnd ->
			if (l6.states.current.name is "tap")
				l6.stateCycle("tap", "default")

l6_bg.on Events.Click, (event) ->
	if ((l9_bg.y is 1260) && (l_del_bg.y is 1026) && (l6_bg.y is 1494))
		l6_circle_parent.opacity = 1
		l6_circle_parent.animate("tap")
		l6_circle_white.animate("tap")
		l6_circle.animate("tap")
		l6_circle_parent.onStateSwitchEnd ->
			if (l6_circle_parent.states.current.name is "tap")
				l6_circle_parent.states.switchInstant "default"
				l6_circle_white.states.switchInstant "default"
				l6_circle.states.switchInstant "default"
# Swipe Animation
l6_bg.onSwipeDown ->
	if (l6.states.current.name is "default")
		l6_ln.animate("swipe")
		l6.animate("swipe")
		textLayer.input.value = textLayer.input.value + "atan("
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

l6_bg.onSwipeEnd ->
	l6_ln.animate("default")
	l6.animate("default")
	l6_bg.y = 1494

#
# 4 and asin
#
#
# Circle layers

l1_circle_parent = new Layer
	parent: layerBG
	x: 24 - 15
	y: 1728 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l1_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l1_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l1_circle_parent.states.switchInstant "default"

l1_circle_white = new Layer
	parent: l1_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l1_circle_white.states.default =
	opacity: 0.5
l1_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l1_circle_white.states.switchInstant "default"

l1_circle_black = new Layer
	parent: l1_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l1_circle = new Layer
	parent: l1_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l1_circle.states.default =
	opacity: 0.7
l1_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l1_circle.states.switchInstant "default"


# Button 4
#
l1 = new Layer
	parent: layerBG
	image: "images/1.png"
# Button 7 States
l1.states.default =
	x: 24
	y: 1728
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
l1.states.swipe =
	x: 24
	y: 1808
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
l1.states.tap =
	x: 24
	y: 1728
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
l1.states.switchInstant "default"
# Button ln
l1_ln = new Layer
	parent: layerBG
	image: "images/sin.png"
# Button ln States
l1_ln.states.default =
	x: 24
	y: 1658
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l1_ln.states.swipe =
	x: 24
	y: 1728
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l1_ln.states.switchInstant "default"
# Button 4 Masc
l1_bg = new Layer
	parent: layerBG
	x: 48
	y: 1728
	width: 246
	height: 234
	opacity: 0
# Button 4 draggable
l1_bg.draggable.enabled = true
l1_bg.draggable.horizontal = false
l1_bg.draggable.constraints =
 x: 48
 y: 1728
 width: 246
 height: 234
#
# Circle
# Button 4 Animation
#
# Tap Animation
l1_bg.on Events.Click, (event) ->
	if ((l4_bg.y is 1494) && (l7_bg.y is 1260) && (l1_bg.y is 1728))
		l1.animate("tap")
		textLayer.input.value = textLayer.input.value + "1"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l1.onStateSwitchEnd ->
			if (l1.states.current.name is "tap")
				l1.stateCycle("tap", "default")

l1_bg.on Events.Click, (event) ->
	if ((l4_bg.y is 1494) && (l7_bg.y is 1260) && (l1_bg.y is 1728))
		l1_circle_parent.opacity = 1
		l1_circle_parent.animate("tap")
		l1_circle_white.animate("tap")
		l1_circle.animate("tap")
		l1_circle_parent.onStateSwitchEnd ->
			if (l1_circle_parent.states.current.name is "tap")
				l1_circle_parent.states.switchInstant "default"
				l1_circle_white.states.switchInstant "default"
				l1_circle.states.switchInstant "default"
# Swipe Animation
l1_bg.onSwipeDown ->
	if (l1.states.current.name is "default")
		l1_ln.animate("swipe")
		l1.animate("swipe")
		textLayer.input.value = textLayer.input.value + "sin("
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

l1_bg.onSwipeEnd ->
	l1_ln.animate("default")
	l1.animate("default")
	l1_bg.y = 1728
#
# 5 and acos
#
#
# Circle layers

l2_circle_parent = new Layer
	parent: layerBG
	x: 294 - 15
	y: 1728 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l2_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l2_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l2_circle_parent.states.switchInstant "default"

l2_circle_white = new Layer
	parent: l2_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l2_circle_white.states.default =
	opacity: 0.5
l2_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l2_circle_white.states.switchInstant "default"

l2_circle_black = new Layer
	parent: l2_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l2_circle = new Layer
	parent: l2_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l2_circle.states.default =
	opacity: 0.7
l2_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l2_circle.states.switchInstant "default"


# Button 8
#
l2 = new Layer
	parent: layerBG
	image: "images/2.png"
# Button 8 States
l2.states.default =
	x: 294
	y: 1728
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
l2.states.swipe =
	x: 294
	y: 1808
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
l2.states.tap =
	x: 294
	y: 1728
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
l2.states.switchInstant "default"
# Button lg
l2_ln = new Layer
	parent: layerBG
	image: "images/cos.png"
# Button lg States
l2_ln.states.default =
	x: 294
	y: 1658
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l2_ln.states.swipe =
	x: 294
	y: 1728
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l2_ln.states.switchInstant "default"
# Button 8 Masc
l2_bg = new Layer
	parent: layerBG
	x: 294
	y: 1728
	width: 270
	height: 234
	opacity: 0
# Button 8 draggable
l2_bg.draggable.enabled = true
l2_bg.draggable.horizontal = false
l2_bg.draggable.constraints =
 x: 294
 y: 1728
 width: 270
 height: 234
#
# Button 5 Animation
#
# Tap Animation

l2_bg.on Events.Click, (event) ->
	if ((l5_bg.y is 1494) && (l8_bg.y is 1260) && (l_pow_bg.y is 1026) && (l2_bg.y is 1728))
		l2.animate("tap")
		textLayer.input.value = textLayer.input.value + "2"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l2.onStateSwitchEnd ->
			if (l2.states.current.name is "tap")
				l2.stateCycle("tap", "default")

l2_bg.on Events.Click, (event) ->
	if ((l5_bg.y is 1494) && (l8_bg.y is 1260) && (l_pow_bg.y is 1026) && (l2_bg.y is 1728))
		l2_circle_parent.opacity = 1
		l2_circle_parent.animate("tap")
		l2_circle_white.animate("tap")
		l2_circle.animate("tap")
		l2_circle_parent.onStateSwitchEnd ->
			if (l2_circle_parent.states.current.name is "tap")
				l2_circle_parent.states.switchInstant "default"
				l2_circle_white.states.switchInstant "default"
				l2_circle.states.switchInstant "default"
# Swipe Animation
l2_bg.onSwipeDown ->
	if (l2.states.current.name is "default")
		l2_ln.animate("swipe")
		l2.animate("swipe")
		textLayer.input.value = textLayer.input.value + "cos("
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

l2_bg.onSwipeEnd ->
	l2_ln.animate("default")
	l2.animate("default")
	l2_bg.y = 1728
#
#
# 6 and i
#
#
# Circle layers

l3_circle_parent = new Layer
	parent: layerBG
	x: 564 - 15
	y: 1728 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l3_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l3_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l3_circle_parent.states.switchInstant "default"

l3_circle_white = new Layer
	parent: l3_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l3_circle_white.states.default =
	opacity: 0.5
l3_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l3_circle_white.states.switchInstant "default"

l3_circle_black = new Layer
	parent: l3_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l3_circle = new Layer
	parent: l3_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l3_circle.states.default =
	opacity: 0.7
l3_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l3_circle.states.switchInstant "default"


# Button 6
#
l3 = new Layer
	parent: layerBG
	image: "images/3.png"
# Button 8 States
l3.states.default =
	x: 564
	y: 1728
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
l3.states.swipe =
	x: 564
	y: 1808
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
l3.states.tap =
	x: 564
	y: 1728
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
l3.states.switchInstant "default"
# Button lg
l3_ln = new Layer
	parent: layerBG
	image: "images/tan.png"
# Button lg States
l3_ln.states.default =
	x: 564
	y: 1658
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l3_ln.states.swipe =
	x: 564
	y: 1728
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l3_ln.states.switchInstant "default"
# Button 8 Masc
l3_bg = new Layer
	parent: layerBG
	x: 564
	y: 1728
	width: 270
	height: 234
	opacity: 0
# Button 8 draggable
l3_bg.draggable.enabled = true
l3_bg.draggable.horizontal = false
l3_bg.draggable.constraints =
 x: 564
 y: 1728
 width: 270
 height: 234
#
# Button 8 Animation
#
# Tap Animation
l3_bg.on Events.Click, (event) ->
	if ((l9_bg.y is 1260) && (l_del_bg.y is 1026) && (l6_bg.y is 1494) && (l3_bg.y is 1728))
		l3.animate("tap")
		textLayer.input.value = textLayer.input.value + "3"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l3.onStateSwitchEnd ->
			if (l3.states.current.name is "tap")
				l3.stateCycle("tap", "default")

l3_bg.on Events.Click, (event) ->
	if ((l9_bg.y is 1260) && (l_del_bg.y is 1026) && (l6_bg.y is 1494) && (l3_bg.y is 1728))
		l3_circle_parent.opacity = 1
		l3_circle_parent.animate("tap")
		l3_circle_white.animate("tap")
		l3_circle.animate("tap")
		l3_circle_parent.onStateSwitchEnd ->
			if (l3_circle_parent.states.current.name is "tap")
				l3_circle_parent.states.switchInstant "default"
				l3_circle_white.states.switchInstant "default"
				l3_circle.states.switchInstant "default"
# Swipe Animation
l3_bg.onSwipeDown ->
	if (l3.states.current.name is "default")
		l3_ln.animate("swipe")
		l3.animate("swipe")
		textLayer.input.value = textLayer.input.value + "tan("
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

l3_bg.onSwipeEnd ->
	l3_ln.animate("default")
	l3.animate("default")
	l3_bg.y = 1728
#
# 4 and asin
#
#
# Circle layers

l0_circle_parent = new Layer
	parent: layerBG
	x: 24 - 15
	y: 1962 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
l0_circle_parent.states.default =
	scale: 0.3
	opacity: 0
l0_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
l0_circle_parent.states.switchInstant "default"

l0_circle_white = new Layer
	parent: l0_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
l0_circle_white.states.default =
	opacity: 0.5
l0_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
l0_circle_white.states.switchInstant "default"

l0_circle_black = new Layer
	parent: l0_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

l0_circle = new Layer
	parent: l0_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
l0_circle.states.default =
	opacity: 0.7
l0_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
l0_circle.states.switchInstant "default"


# Button 4
#
l0 = new Layer
	parent: layerBG
	image: "images/0.png"
# Button 7 States
l0.states.default =
	x: 24
	y: 1962
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
l0.states.swipe =
	x: 24
	y: 2042
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
l0.states.tap =
	x: 24
	y: 1962
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
l0.states.switchInstant "default"
# Button ln
l0_ln = new Layer
	parent: layerBG
	image: "images/pi.png"
# Button ln States
l0_ln.states.default =
	x: 24
	y: 1892
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
l0_ln.states.swipe =
	x: 24
	y: 1962
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
l0_ln.states.switchInstant "default"
# Button 4 Masc
l0_bg = new Layer
	parent: layerBG
	x: 48
	y: 1962
	width: 246
	height: 234
	opacity: 0
# Button 4 draggable
l0_bg.draggable.enabled = true
l0_bg.draggable.horizontal = false
l0_bg.draggable.constraints =
 x: 48
 y: 1962
 width: 246
 height: 234
#
# Circle
# Button 4 Animation
#
# Tap Animation
l0_bg.on Events.Click, (event) ->
	if ((l4_bg.y is 1494) && (l7_bg.y is 1260) && (l1_bg.y is 1728) && (l0_bg.y is 1962))
		l0.animate("tap")
		textLayer.input.value = textLayer.input.value + "0"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		l0.onStateSwitchEnd ->
			if (l0.states.current.name is "tap")
				l0.stateCycle("tap", "default")

l0_bg.on Events.Click, (event) ->
	if ((l4_bg.y is 1494) && (l7_bg.y is 1260) && (l1_bg.y is 1728) && (l0_bg.y is 1962))
		l0_circle_parent.opacity = 1
		l0_circle_parent.animate("tap")
		l0_circle_white.animate("tap")
		l0_circle.animate("tap")
		l0_circle_parent.onStateSwitchEnd ->
			if (l0_circle_parent.states.current.name is "tap")
				l0_circle_parent.states.switchInstant "default"
				l0_circle_white.states.switchInstant "default"
				l0_circle.states.switchInstant "default"
# Swipe Animation
l0_bg.onSwipeDown ->
	if (l0.states.current.name is "default")
		l0_ln.animate("swipe")
		l0.animate("swipe")
		textLayer.input.value = textLayer.input.value + "π"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

l0_bg.onSwipeEnd ->
	l0_ln.animate("default")
	l0.animate("default")
	l0_bg.y = 1962
#
# dot and e
#
#
# Circle layers

ldot_circle_parent = new Layer
	parent: layerBG
	x: 294 - 15
	y: 1962 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
ldot_circle_parent.states.default =
	scale: 0.3
	opacity: 0
ldot_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
ldot_circle_parent.states.switchInstant "default"

ldot_circle_white = new Layer
	parent: ldot_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
ldot_circle_white.states.default =
	opacity: 0.5
ldot_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
ldot_circle_white.states.switchInstant "default"

ldot_circle_black = new Layer
	parent: ldot_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

ldot_circle = new Layer
	parent: ldot_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
ldot_circle.states.default =
	opacity: 0.7
ldot_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
ldot_circle.states.switchInstant "default"


# Button 8
#
ldot = new Layer
	parent: layerBG
	image: "images/dot.png"
# Button 8 States
ldot.states.default =
	x: 294
	y: 1962
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
ldot.states.swipe =
	x: 294
	y: 2042
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
ldot.states.tap =
	x: 294
	y: 1962
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
ldot.states.switchInstant "default"
# Button lg
ldot_ln = new Layer
	parent: layerBG
	image: "images/e.png"
# Button lg States
ldot_ln.states.default =
	x: 294
	y: 1892
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
ldot_ln.states.swipe =
	x: 294
	y: 1962
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
ldot_ln.states.switchInstant "default"
# Button 8 Masc
ldot_bg = new Layer
	parent: layerBG
	x: 294
	y: 1962
	width: 270
	height: 234
	opacity: 0
# Button 8 draggable
ldot_bg.draggable.enabled = true
ldot_bg.draggable.horizontal = false
ldot_bg.draggable.constraints =
 x: 294
 y: 1962
 width: 270
 height: 234
#
# Button 5 Animation
#
# Tap Animation

ldot_bg.on Events.Click, (event) ->
	if ((l5_bg.y is 1494) && (l8_bg.y is 1260) && (l_pow_bg.y is 1026) && (l2_bg.y is 1728) && (ldot_bg.y is 1962))
		ldot.animate("tap")
		textLayer.input.value = textLayer.input.value + ","
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		ldot.onStateSwitchEnd ->
			if (ldot.states.current.name is "tap")
				ldot.stateCycle("tap", "default")

ldot_bg.on Events.Click, (event) ->
	if ((l5_bg.y is 1494) && (l8_bg.y is 1260) && (l_pow_bg.y is 1026) && (l2_bg.y is 1728) && (ldot_bg.y is 1962))
		ldot_circle_parent.opacity = 1
		ldot_circle_parent.animate("tap")
		ldot_circle_white.animate("tap")
		ldot_circle.animate("tap")
		ldot_circle_parent.onStateSwitchEnd ->
			if (ldot_circle_parent.states.current.name is "tap")
				ldot_circle_parent.states.switchInstant "default"
				ldot_circle_white.states.switchInstant "default"
				ldot_circle.states.switchInstant "default"
# Swipe Animation
ldot_bg.onSwipeDown ->
	if (ldot.states.current.name is "default")
		ldot_ln.animate("swipe")
		ldot.animate("swipe")
		textLayer.input.value = textLayer.input.value + "e"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

ldot_bg.onSwipeEnd ->
	ldot_ln.animate("default")
	ldot.animate("default")
	ldot_bg.y = 1962
#
#
# 6 and i
#
#
# Circle layers

lc_circle_parent = new Layer
	parent: layerBG
	x: 564 - 15
	y: 1962 - 20
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
lc_circle_parent.states.default =
	scale: 0.3
	opacity: 0
lc_circle_parent.states.tap =
	scale: 1
	opacity: 1
	animationOptions:
		time: timeCircle
		curve: "ease-out"
lc_circle_parent.states.switchInstant "default"

lc_circle_white = new Layer
	parent: lc_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
lc_circle_white.states.default =
	opacity: 0.5
lc_circle_white.states.tap =
	opacity: 0
	animationOptions:
		time: timeCircle - 0.05
		curve: "ease-out"
lc_circle_white.states.switchInstant "default"

lc_circle_black = new Layer
	parent: lc_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#000"
	scale: 0.95

lc_circle = new Layer
	parent: lc_circle_parent
	width: 300
	height: 300
	borderRadius: 150
	backgroundColor: "#fff"
	scale: 0.96
lc_circle.states.default =
	opacity: 0.7
lc_circle.states.tap =
	opacity: 0.0
	animationOptions:
		time: timeCircle * 0.6
		curve: "ease-out"
lc_circle.states.switchInstant "default"


# Button 6
#
lc = new Layer
	parent: layerBG
	image: "images/().png"
# Button 8 States
lc.states.default =
	x: 564
	y: 1962
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-in"
lc.states.swipe =
	x: 564
	y: 2042
	width: 270
	height: 234
	opacity: 0
	scale: 0.4
	animationOptions:
		time: timeBig
		curve: "ease-out"
lc.states.tap =
	x: 564
	y: 1962
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
lc.states.switchInstant "default"
# Button lg
lc_ln = new Layer
	parent: layerBG
	image: "images/%.png"
# Button lg States
lc_ln.states.default =
	x: 564
	y: 1892
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: timeBig
		curve: "ease-in"
lc_ln.states.swipe =
	x: 564
	y: 1962
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
lc_ln.states.switchInstant "default"
# Button 8 Masc
lc_bg = new Layer
	parent: layerBG
	x: 564
	y: 1962
	width: 270
	height: 234
	opacity: 0
# Button 8 draggable
lc_bg.draggable.enabled = true
lc_bg.draggable.horizontal = false
lc_bg.draggable.constraints =
 x: 564
 y: 1962
 width: 270
 height: 234
#
# Button 8 Animation
#
# Tap Animation
lc_bg.on Events.Click, (event) ->
	if ((l9_bg.y is 1260) && (l_del_bg.y is 1026) && (l6_bg.y is 1494) && (l3_bg.y is 1728) && (lc_bg.y is 1962))
		lc.animate("tap")
		textLayer.input.value = textLayer.input.value + ")"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1
		lc.onStateSwitchEnd ->
			if (lc.states.current.name is "tap")
				lc.stateCycle("tap", "default")

lc_bg.on Events.Click, (event) ->
	if ((l9_bg.y is 1260) && (l_del_bg.y is 1026) && (l6_bg.y is 1494) && (l3_bg.y is 1728) && (lc_bg.y is 1962))
		lc_circle_parent.opacity = 1
		lc_circle_parent.animate("tap")
		lc_circle_white.animate("tap")
		lc_circle.animate("tap")
		lc_circle_parent.onStateSwitchEnd ->
			if (lc_circle_parent.states.current.name is "tap")
				lc_circle_parent.states.switchInstant "default"
				lc_circle_white.states.switchInstant "default"
				lc_circle.states.switchInstant "default"
# Swipe Animation
lc_bg.onSwipeDown ->
	if (lc.states.current.name is "default")
		lc_ln.animate("swipe")
		lc.animate("swipe")
		textLayer.input.value = textLayer.input.value + "%"
		textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
		cursorBlack.opacity = 1

lc_bg.onSwipeEnd ->
	lc_ln.animate("default")
	lc.animate("default")
	lc_bg.y = 1962

gdad_bg = new Layer
	parent: layerBG
	x: 849
	y: 1287
	width: 228
	height: 921
	image: "images/grad.png"

division_circle = new Layer
	parent: layerBG
	x: 849
	y: 1300
	width: 228
	height: 228
	borderRadius: 125
	backgroundColor: "#fff"
division_circle.states.default =
	opacity: 0
	scale: 0.3
division_circle.states.tap =
	opacity: 0
	scale: 1
	animationOptions:
		time: 0.2
		curve: "ease-out"
division_circle.states.switchInstant "default"
division = new Layer
	parent: layerBG
	image: "images/division.png"
# Button 8 States
division.states.default =
	x: 834
	y: 1260
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: timeSmall
		curve: "ease-out"
division.states.tap =
	x: 834
	y: 1260
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall * 0.5
		curve: "ease-out"
division.states.switchInstant "default"
division_bg = new Layer
	parent: layerBG
	x: 834
	y: 1260
	width: 246
	height: 234
	opacity: 0


division_bg.on Events.Click, (event) ->
	division_circle.opacity = 0.5
	division_circle.animate("tap")
	textLayer.input.value = textLayer.input.value + "÷"
	textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
	cursorBlack.opacity = 1
	division_circle.onStateSwitchEnd ->
		if (division_circle.states.current.name is "tap")
			division_circle.states.switchInstant "default"

division_bg.on Events.TouchStart, (event) ->
	division.animate("tap")
division_bg.on Events.TouchEnd, (event) ->
	division.stateCycle("tap", "default")

#
#
#
#
multiply_circle = new Layer
	parent: layerBG
	x: 849
	y: 1518
	width: 228
	height: 228
	borderRadius: 125
	backgroundColor: "#fff"
multiply_circle.states.default =
	opacity: 0
	scale: 0.3
multiply_circle.states.tap =
	opacity: 0
	scale: 1
	animationOptions:
		time: 0.2
		curve: "ease-out"
multiply_circle.states.switchInstant "default"
multiply = new Layer
	parent: layerBG
	image: "images/multiply.png"
# Button 8 States
multiply.states.default =
	x: 834
	y: 1494
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: 0.225
		curve: "ease-out"
multiply.states.tap =
	x: 834
	y: 1494
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall
		curve: "ease-out"
multiply.states.switchInstant "default"
multiply_bg = new Layer
	parent: layerBG
	x: 834
	y: 1494
	width: 246
	height: 234
	opacity: 0


multiply_bg.on Events.Click, (event) ->
	multiply_circle.opacity = 0.5
	multiply_circle.animate("tap")
	textLayer.input.value = textLayer.input.value + "×"
	textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
	cursorBlack.opacity = 1
	multiply_circle.onStateSwitchEnd ->
		if (multiply_circle.states.current.name is "tap")
			multiply_circle.states.switchInstant "default"

multiply_bg.on Events.TouchStart, (event) ->
	multiply.animate("tap")
multiply_bg.on Events.TouchEnd, (event) ->
	multiply.stateCycle("tap", "default")

#
#
#
#
minus_circle = new Layer
	parent: layerBG
	x: 849
	y: 1743
	width: 228
	height: 228
	borderRadius: 125
	backgroundColor: "#fff"
minus_circle.states.default =
	opacity: 0
	scale: 0.3
minus_circle.states.tap =
	opacity: 0
	scale: 1
	animationOptions:
		time: 0.2
		curve: "ease-out"
minus_circle.states.switchInstant "default"
minus = new Layer
	parent: layerBG
	image: "images/minus.png"
# Button 8 States
minus.states.default =
	x: 834
	y: 1728
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: 0.225
		curve: "ease-out"
minus.states.tap =
	x: 834
	y: 1728
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall
		curve: "ease-out"
minus.states.switchInstant "default"
minus_bg = new Layer
	parent: layerBG
	x: 834
	y: 1728
	width: 246
	height: 234
	opacity: 0


minus_bg.on Events.Click, (event) ->
	minus_circle.opacity = 0.5
	minus_circle.animate("tap")
	textLayer.input.value = textLayer.input.value + "-"
	textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
	cursorBlack.opacity = 1
	minus_circle.onStateSwitchEnd ->
		if (minus_circle.states.current.name is "tap")
			minus_circle.states.switchInstant "default"

minus_bg.on Events.TouchStart, (event) ->
	minus.animate("tap")
minus_bg.on Events.TouchEnd, (event) ->
	minus.stateCycle("tap", "default")
#
#
#
#
plus_circle = new Layer
	parent: layerBG
	x: 849
	y: 1967
	width: 228
	height: 228
	borderRadius: 125
	backgroundColor: "#fff"
plus_circle.states.default =
	opacity: 0
	scale: 0.3
plus_circle.states.tap =
	opacity: 0
	scale: 1
	animationOptions:
		time: 0.2
		curve: "ease-out"
plus_circle.states.switchInstant "default"
plus = new Layer
	parent: layerBG
	image: "images/plus.png"
# Button 8 States
plus.states.default =
	x: 834
	y: 1962
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: 0.225
		curve: "ease-out"
plus.states.tap =
	x: 834
	y: 1962
	width: 270
	height: 234
	opacity: 0.6
	scale: scaleTap
	animationOptions:
		time: timeSmall
		curve: "ease-out"
plus.states.switchInstant "default"
plus_bg = new Layer
	parent: layerBG
	x: 834
	y: 1962
	width: 246
	height: 234
	opacity: 0


plus_bg.on Events.Click, (event) ->
	plus_circle.opacity = 0.5
	plus_circle.animate("tap")
	textLayer.input.value = textLayer.input.value + "+"
	textLayer2.input.value = Math.floor(Math.random() * (2511 - (0)))
	cursorBlack.opacity = 1
	plus_circle.onStateSwitchEnd ->
		if (plus_circle.states.current.name is "tap")
			plus_circle.states.switchInstant "default"

plus_bg.on Events.TouchStart, (event) ->
	plus.animate("tap")
plus_bg.on Events.TouchEnd, (event) ->
	plus.stateCycle("tap", "default")
