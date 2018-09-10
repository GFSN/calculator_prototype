var curveAnimation, deg, degBG, deg_margin, eOff, eOn, l7, l7_bg, l7_circle, l7_circle_black, l7_circle_parent, l7_circle_white, l7_ln, l_cancel, l_del, l_del_bg, l_del_circle, l_del_circle_black, l_del_circle_parent, l_del_circle_white, l_pow, l_pow_bg, l_pow_circle, l_pow_circle_black, l_pow_circle_parent, l_pow_circle_white, l_pow_n, l_sqrt, l_sqrt_bg, l_sqrt_circle, l_sqrt_circle_black, l_sqrt_circle_parent, l_sqrt_circle_white, l_sqrt_factorial, layerBG, memory, memory2, memoryBG, memoryBG2, memory_margin, minus, minusBG, minusMargin, rounding, roundingBG, rounding_margin, save, saveMargin, scaleTap, screenScale, second, second_bg, second_bg_grey, time, timeBig, timeCircle, timeSmall;

screenScale = 1.5;

curveAnimation = "Bezier(0.0, 0.0, 0.2, 1)";

time = 0.3;

eOn = "ease-out";

eOff = "ease-in";

layerBG = new Layer({
  width: 1126,
  height: 2436,
  scale: 1 / screenScale,
  opacity: 1,
  image: "images/iPhone-X-bg.png"
});

layerBG.x = 0 - (layerBG.width - layerBG.width / screenScale) / 2;

layerBG.y = 0 - (layerBG.height - layerBG.height / screenScale) / 2;

rounding_margin = new Layer({
  parent: layerBG,
  x: 0,
  y: 150,
  width: 150,
  height: 132,
  opacity: 0
});

roundingBG = new Layer({
  parent: layerBG,
  x: 36,
  y: 168,
  width: 96,
  height: 96,
  borderRadius: 48,
  backgroundColor: "#333333"
});

rounding = new Layer({
  parent: roundingBG,
  width: 96,
  height: 96,
  image: "images/rounding.png",
  opacity: 0.8
});

roundingBG.states.active = {
  backgroundColor: "#b3b3b3",
  animationOptions: {
    time: 0.3,
    curve: "ease-out"
  }
};

roundingBG.states["default"] = {
  backgroundColor: "#333333",
  animationOptions: {
    time: time,
    curve: "ease-out"
  }
};

rounding.states.active = {
  image: "images/rounding-black.png"
};

rounding.states["default"] = {
  image: "images/rounding.png"
};

degBG = new Layer({
  parent: layerBG,
  x: 168,
  y: 168,
  width: 138,
  height: 96,
  borderRadius: 48,
  backgroundColor: "#333333"
});

deg = new Layer({
  parent: degBG,
  width: 138,
  height: 96,
  image: "images/deg.png",
  opacity: 0.8
});

deg_margin = new Layer({
  parent: layerBG,
  x: 150,
  y: 150,
  width: 174,
  height: 132,
  opacity: 0
});

degBG.states.tap = {
  backgroundColor: "#666666",
  animationOptions: {
    time: 0.25,
    curve: "ease-in"
  }
};

degBG.states["default"] = {
  backgroundColor: "#333333",
  animationOptions: {
    time: 0.2,
    curve: "ease-out"
  }
};

deg.states.rad = {
  image: "images/rad.png"
};

deg.states["default"] = {
  image: "images/deg.png"
};

memoryBG = new Layer({
  parent: layerBG,
  borderRadius: 48,
  backgroundColor: "rgba(255,255,255,0.35)",
  opacity: 0,
  width: 180,
  opacity: 0,
  height: 50,
  x: 300,
  y: 191
});

memory = new Layer({
  parent: memoryBG,
  width: 298,
  height: 96,
  image: "images/memory-1.png",
  opacity: 0,
  scale: 0.5,
  x: -110,
  y: -23
});

memory_margin = new Layer({
  parent: layerBG,
  x: 324,
  y: 150,
  width: 334,
  height: 132,
  opacity: 0
});

memoryBG2 = new Layer({
  parent: layerBG,
  x: 342,
  y: 168,
  width: 298,
  height: 96,
  borderRadius: 48,
  backgroundColor: "rgba(255,255,255,0.35)",
  opacity: 1
});

memory2 = new Layer({
  parent: memoryBG2,
  width: 298,
  height: 96,
  image: "images/memory-1.png",
  opacity: 0.9
});

memoryBG.states.create = {
  width: 298,
  height: 96,
  opacity: 1,
  scale: 1,
  x: 342,
  y: 168,
  animationOptions: {
    time: time,
    curve: "ease-in-out"
  }
};

memoryBG.states["default"] = {
  width: 180,
  opacity: 0,
  height: 50,
  x: 300,
  y: 191,
  animationOptions: {
    time: 0.6 * time,
    curve: "ease-in-out"
  }
};

memory.states.create = {
  scale: 1,
  opacity: 0.9,
  x: 0,
  y: 0,
  animationOptions: {
    time: time,
    curve: "ease-in-out"
  }
};

memory.states["default"] = {
  opacity: 0,
  scale: 0.5,
  x: -110,
  y: -23,
  animationOptions: {
    time: 0.6 * time,
    curve: "ease-in-out"
  }
};

memoryBG2.states.create = {
  x: 676,
  animationOptions: {
    time: 0.8 * time,
    curve: "ease-in-out"
  }
};

memoryBG2.states["default"] = {
  x: 342,
  animationOptions: {
    time: 0.8 * time,
    curve: "ease-in-out"
  }
};

minusBG = new Layer({
  parent: memoryBG,
  x: 260,
  y: -32,
  width: 66,
  height: 66,
  borderRadius: 33,
  backgroundColor: "#eb4e3d",
  scale: 1
});

minus = new Layer({
  parent: minusBG,
  x: 16,
  y: 31,
  width: 34,
  height: 4,
  backgroundColor: "#fff"
});

minusMargin = new Layer({
  parent: layerBG,
  x: 186 + 342,
  y: -32 + 168,
  width: 140,
  height: 130,
  opacity: 0
});

minusBG.states.tap = {
  scale: 1,
  animationOptions: {
    time: 0.5 * time,
    curve: "ease-out"
  }
};

minusBG.states["default"] = {
  scale: 0,
  animationOptions: {
    time: 0.3 * time
  }
};

minusBG.states.switchInstant("default");

minusMargin.states.tap = {
  scale: 1,
  animationOptions: {
    time: 0
  }
};

minusMargin.states["default"] = {
  scale: 0,
  animationOptions: {
    time: 0
  }
};

minusMargin.states.switchInstant("default");

memory_margin.states.create = {
  scale: 1,
  animationOptions: {
    time: 0
  }
};

memory_margin.states["default"] = {
  scale: 0,
  animationOptions: {
    time: 0
  }
};

memory_margin.states.switchInstant("default");

minusMargin.placeBefore(memory_margin);

save = new Layer({
  parent: layerBG,
  x: 36,
  y: 888,
  width: 195,
  height: 96,
  backgroundColor: "rgba(255,255,255,0.20)",
  borderRadius: 50
});

saveMargin = new Layer({
  parent: layerBG,
  x: 48,
  y: 870,
  width: 198,
  height: 132,
  opacity: 0
});

saveMargin.onTap(function() {
  memoryBG.states["switch"]("create");
  memory.states["switch"]("create");
  memoryBG2.states["switch"]("create");
  return memory_margin.states["switch"]("create");
});

memory_margin.onLongPress(function() {
  minusBG.states["switch"]("tap");
  return minusMargin.states["switch"]("tap");
});

minusMargin.onTap(function() {
  minusBG.states["switch"]("default");
  memory_margin.states["switch"]("default");
  minusMargin.states["switch"]("default");
  memoryBG.states.next();
  memory.states.next();
  return memoryBG2.states.next();
});


/* Кнопки управления

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
 * textLayer.input.style.display = "none"
textLayer.input.value = timeOn
 * textLayer.input.placeholder = "Search Me"
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
 */

rounding_margin.onClick(function() {
  roundingBG.states.next();
  return rounding.states.next();
});

deg_margin.onTap(function() {
  deg.states.next();
  degBG.states.next();
  return degBG.onStateSwitchEnd(function() {
    if (degBG.states.current.name === "tap") {
      return degBG.stateCycle("tap", "default");
    }
  });
});

timeBig = 0.15;

timeSmall = 0.15;

scaleTap = 0.9;

timeCircle = 0.6;

l_sqrt_circle_parent = new Layer({
  parent: layerBG,
  x: 24 - 15,
  y: 1106 - 100,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l_sqrt_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l_sqrt_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l_sqrt_circle_parent.states.switchInstant("default");

l_sqrt_circle_white = new Layer({
  parent: l_sqrt_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l_sqrt_circle_white.states["default"] = {
  opacity: 0.5
};

l_sqrt_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l_sqrt_circle_white.states.switchInstant("default");

l_sqrt_circle_black = new Layer({
  parent: l_sqrt_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l_sqrt_circle = new Layer({
  parent: l_sqrt_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l_sqrt_circle.states["default"] = {
  opacity: 0.7
};

l_sqrt_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l_sqrt_circle.states.switchInstant("default");

l_sqrt = new Layer({
  parent: layerBG,
  image: "images/sqrt.png"
});

l_sqrt.states["default"] = {
  x: 24,
  y: 1026,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l_sqrt.states.switchInstant("default");

l_sqrt.states.swipe = {
  x: 24,
  y: 1106,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l_sqrt.states.tap = {
  y: 1026,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l_sqrt_factorial = new Layer({
  parent: layerBG,
  image: "images/!.png"
});

l_sqrt_factorial.states["default"] = {
  x: 24,
  y: 956,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l_sqrt_factorial.states.swipe = {
  x: 24,
  y: 1026,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l_sqrt_factorial.states.switchInstant("default");

l_sqrt_bg = new Layer({
  parent: layerBG,
  x: 48,
  y: 1026,
  width: 246,
  height: 234,
  opacity: 0
});

l_sqrt_bg.draggable.enabled = true;

l_sqrt_bg.draggable.horizontal = false;

l_sqrt_bg.draggable.constraints = {
  x: 48,
  y: 1026,
  width: 246,
  height: 234
};

l_sqrt_bg.on(Events.Click, function(event) {
  if (l_sqrt_bg.y === 1026) {
    l_sqrt_circle_parent.opacity = 1;
    l_sqrt_circle_parent.animate("tap");
    l_sqrt_circle_white.animate("tap");
    l_sqrt_circle.animate("tap");
    return l_sqrt_circle_parent.onStateSwitchEnd(function() {
      if (l_sqrt_circle_parent.states.current.name === "tap") {
        l_sqrt_circle_parent.states.switchInstant("default");
        l_sqrt_circle_white.states.switchInstant("default");
        return l_sqrt_circle.states.switchInstant("default");
      }
    });
  }
});

l_sqrt_bg.on(Events.TouchStart, function(event) {
  if (l_sqrt_bg.y === 1026) {
    return l_sqrt.animate("tap");
  }
});

l_sqrt_bg.on(Events.TouchEnd, function(event) {
  return l_sqrt.stateCycle("tap", "default");
});

l_sqrt_bg.onSwipeDown(function() {
  if (l_sqrt.states.current.name === "default") {
    l_sqrt_factorial.animate("swipe");
    return l_sqrt.animate("swipe");
  }
});

l_sqrt_bg.onSwipeEnd(function() {
  l_sqrt_factorial.animate("default");
  l_sqrt.animate("default");
  return l_sqrt_bg.y = 1026;
});

l_pow_circle_parent = new Layer({
  parent: layerBG,
  x: 294 - 15,
  y: 1106 - 100,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l_pow_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l_pow_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l_pow_circle_parent.states.switchInstant("default");

l_pow_circle_white = new Layer({
  parent: l_pow_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l_pow_circle_white.states["default"] = {
  opacity: 0.5
};

l_pow_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l_pow_circle_white.states.switchInstant("default");

l_pow_circle_black = new Layer({
  parent: l_pow_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l_pow_circle = new Layer({
  parent: l_pow_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l_pow_circle.states["default"] = {
  opacity: 0.7
};

l_pow_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l_pow_circle.states.switchInstant("default");

l_pow = new Layer({
  parent: layerBG,
  image: "images/pow.png",
  x: 294,
  width: 270,
  height: 234
});

l_pow.states["default"] = {
  y: 1026,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l_pow.states.switchInstant("default");

l_pow.states.swipe = {
  y: 1106,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l_pow.states.tap = {
  y: 1026,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l_pow_n = new Layer({
  parent: layerBG,
  image: "images/pow_n.png",
  x: 294,
  width: 270,
  height: 234
});

l_pow_n.states["default"] = {
  y: 956,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l_pow_n.states.swipe = {
  y: 1026,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l_pow_n.states.switchInstant("default");

l_pow_bg = new Layer({
  parent: layerBG,
  x: 294,
  y: 1026,
  width: 270,
  height: 234,
  opacity: 0
});

l_pow_bg.draggable.enabled = true;

l_pow_bg.draggable.horizontal = false;

l_pow_bg.draggable.constraints = {
  x: 294,
  y: 1026,
  width: 270,
  height: 234
};

l_pow_bg.on(Events.Click, function(event) {
  if (l_pow_bg.y === 1026) {
    l_pow.animate("tap");
    return l_pow.onStateSwitchEnd(function() {
      if (l_pow.states.current.name === "tap") {
        return l_pow.stateCycle("tap", "default");
      }
    });
  }
});

l_pow_bg.on(Events.Click, function(event) {
  if (l_pow_bg.y === 1026) {
    l_pow_circle_parent.opacity = 1;
    l_pow_circle_parent.animate("tap");
    l_pow_circle_white.animate("tap");
    l_pow_circle.animate("tap");
    return l_pow_circle_parent.onStateSwitchEnd(function() {
      if (l_pow_circle_parent.states.current.name === "tap") {
        l_pow_circle_parent.states.switchInstant("default");
        l_pow_circle_white.states.switchInstant("default");
        return l_pow_circle.states.switchInstant("default");
      }
    });
  }
});

l_pow_bg.onSwipeDown(function() {
  if (l_pow.states.current.name === "default") {
    l_pow_n.animate("swipe");
    return l_pow.animate("swipe");
  }
});

l_pow_bg.onSwipeEnd(function() {
  l_pow_n.animate("default");
  l_pow.animate("default");
  return l_pow_bg.y = 1026;
});

l_del_circle_parent = new Layer({
  parent: layerBG,
  x: 564 - 15,
  y: 1106 - 100,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l_del_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l_del_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l_del_circle_parent.states.switchInstant("default");

l_del_circle_white = new Layer({
  parent: l_del_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l_del_circle_white.states["default"] = {
  opacity: 0.5
};

l_del_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l_del_circle_white.states.switchInstant("default");

l_del_circle_black = new Layer({
  parent: l_del_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l_del_circle = new Layer({
  parent: l_del_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l_del_circle.states["default"] = {
  opacity: 0.7
};

l_del_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l_del_circle.states.switchInstant("default");

l_del = new Layer({
  parent: layerBG,
  image: "images/del.png",
  x: 564,
  width: 270,
  height: 234
});

l_del.states["default"] = {
  y: 1026,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l_del.states.switchInstant("default");

l_del.states.swipe = {
  y: 1106,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l_del.states.tap = {
  y: 1026,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l_cancel = new Layer({
  parent: layerBG,
  image: "images/cancel.png",
  x: 564,
  width: 270,
  height: 234
});

l_cancel.states["default"] = {
  y: 956,
  scale: 0.45,
  opacity: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l_cancel.states.swipe = {
  y: 1026,
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l_cancel.states.switchInstant("default");

l_del_bg = new Layer({
  parent: layerBG,
  x: 564,
  y: 1026,
  width: 270,
  height: 234,
  opacity: 0
});

l_del_bg.draggable.enabled = true;

l_del_bg.draggable.horizontal = false;

l_del_bg.draggable.constraints = {
  x: 564,
  y: 1026,
  width: 270,
  height: 234
};

l_del_bg.on(Events.Click, function(event) {
  if (l_del_bg.y === 1026) {
    l_del.animate("tap");
    return l_del.onStateSwitchEnd(function() {
      if (l_del.states.current.name === "tap") {
        return l_del.stateCycle("tap", "default");
      }
    });
  }
});

l_del_bg.on(Events.Click, function(event) {
  if (l_del_bg.y === 1026) {
    l_del_circle_parent.opacity = 1;
    l_del_circle_parent.animate("tap");
    l_del_circle_white.animate("tap");
    l_del_circle.animate("tap");
    return l_del_circle_parent.onStateSwitchEnd(function() {
      if (l_del_circle_parent.states.current.name === "tap") {
        l_del_circle_parent.states.switchInstant("default");
        l_del_circle_white.states.switchInstant("default");
        return l_del_circle.states.switchInstant("default");
      }
    });
  }
});

l_del_bg.onSwipeDown(function() {
  if (l_del.states.current.name === "default") {
    l_cancel.animate("swipe");
    return l_del.animate("swipe");
  }
});

l_del_bg.onSwipeEnd(function() {
  l_cancel.animate("default");
  l_del.animate("default");
  return l_del_bg.y = 1026;
});

second_bg_grey = new Layer({
  parent: layerBG,
  x: 849,
  y: 1086,
  width: 228,
  height: 156,
  borderRadius: 80,
  backgroundColor: "#333333"
});

second = new Layer({
  parent: layerBG,
  image: "images/2nd.png",
  x: 834,
  width: 270,
  height: 234,
  y: 1026
});

second_bg = new Layer({
  parent: layerBG,
  x: 834,
  y: 1026,
  width: 270,
  height: 234,
  opacity: 0
});

second_bg_grey.states.active = {
  backgroundColor: "#b3b3b3",
  animationOptions: {
    time: 0.3,
    curve: "ease-out"
  }
};

second_bg_grey.states["default"] = {
  backgroundColor: "#333333",
  animationOptions: {
    time: time,
    curve: "ease-out"
  }
};

second.states.active = {
  image: "images/2nd_black.png"
};

second.states["default"] = {
  image: "images/2nd.png"
};

second_bg.onTouchStart(function() {
  second_bg_grey.states.next();
  return second.states.next();
});

l7_circle_parent = new Layer({
  parent: layerBG,
  x: 24 - 15,
  y: 1340 - 100,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l7_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l7_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l7_circle_parent.states.switchInstant("default");

l7_circle_white = new Layer({
  parent: l7_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l7_circle_white.states["default"] = {
  opacity: 0.5
};

l7_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l7_circle_white.states.switchInstant("default");

l7_circle_black = new Layer({
  parent: l7_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l7_circle = new Layer({
  parent: l7_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l7_circle.states["default"] = {
  opacity: 0.7
};

l7_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l7_circle.states.switchInstant("default");

l7 = new Layer({
  parent: layerBG,
  image: "images/7.png"
});

l7.states["default"] = {
  x: 24,
  y: 1260,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-in"
  }
};

l7.states.swipe = {
  x: 24,
  y: 1340,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-out"
  }
};

l7.states.tap = {
  x: 24,
  y: 1260,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l7.states.switchInstant("default");

l7_ln = new Layer({
  parent: layerBG,
  image: "images/ln.png"
});

l7_ln.states["default"] = {
  x: 24,
  y: 1190,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l7_ln.states.swipe = {
  x: 24,
  y: 1260,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l7_ln.states.switchInstant("default");

l7_bg = new Layer({
  parent: layerBG,
  x: 48,
  y: 1260,
  width: 246,
  height: 234,
  opacity: 0
});

l7_bg.draggable.enabled = true;

l7_bg.draggable.horizontal = false;

l7_bg.draggable.constraints = {
  x: 48,
  y: 1260,
  width: 246,
  height: 234
};

l7_bg.on(Events.Click, function(event) {
  if ((l7_bg.y === 1260) && (l_sqrt_bg.y === 1026)) {
    l7.animate("tap");
    return l7.onStateSwitchEnd(function() {
      if (l7.states.current.name === "tap") {
        return l7.stateCycle("tap", "default");
      }
    });
  }
});

l7_bg.on(Events.Click, function(event) {
  if (l_del_bg.y === 1026) {
    l7_circle_parent.opacity = 1;
    l7_circle_parent.animate("tap");
    l7_circle_white.animate("tap");
    l7_circle.animate("tap");
    return l7_circle_parent.onStateSwitchEnd(function() {
      if (l7_circle_parent.states.current.name === "tap") {
        l7_circle_parent.states.switchInstant("default");
        l7_circle_white.states.switchInstant("default");
        return l7_circle.states.switchInstant("default");
      }
    });
  }
});

l7_bg.onSwipeDown(function() {
  if (l7.states.current.name === "default") {
    l7_ln.animate("swipe");
    return l7.animate("swipe");
  }
});

l7_bg.onSwipeEnd(function() {
  l7_ln.animate("default");
  l7.animate("default");
  return l7_bg.y = 1260;
});
