var InputTextLayer, bg, cursor, cursorBlack, curveAnimation, deg, degBG, deg_margin, division, division_bg, division_circle, eOff, eOn, gdad_bg, l0, l0_bg, l0_circle, l0_circle_black, l0_circle_parent, l0_circle_white, l0_ln, l1, l1_bg, l1_circle, l1_circle_black, l1_circle_parent, l1_circle_white, l1_ln, l2, l2_bg, l2_circle, l2_circle_black, l2_circle_parent, l2_circle_white, l2_ln, l3, l3_bg, l3_circle, l3_circle_black, l3_circle_parent, l3_circle_white, l3_ln, l4, l4_bg, l4_circle, l4_circle_black, l4_circle_parent, l4_circle_white, l4_ln, l5, l5_bg, l5_circle, l5_circle_black, l5_circle_parent, l5_circle_white, l5_ln, l6, l6_bg, l6_circle, l6_circle_black, l6_circle_parent, l6_circle_white, l6_ln, l7, l7_bg, l7_circle, l7_circle_black, l7_circle_parent, l7_circle_white, l7_ln, l8, l8_bg, l8_circle, l8_circle_black, l8_circle_parent, l8_circle_white, l8_ln, l9, l9_bg, l9_circle, l9_circle_black, l9_circle_parent, l9_circle_white, l9_ln, l_cancel, l_del, l_del_bg, l_del_circle, l_del_circle_black, l_del_circle_parent, l_del_circle_white, l_pow, l_pow_bg, l_pow_circle, l_pow_circle_black, l_pow_circle_parent, l_pow_circle_white, l_pow_n, l_sqrt, l_sqrt_bg, l_sqrt_circle, l_sqrt_circle_black, l_sqrt_circle_parent, l_sqrt_circle_white, l_sqrt_factorial, layerBG, lc, lc_bg, lc_circle, lc_circle_black, lc_circle_parent, lc_circle_white, lc_ln, ldot, ldot_bg, ldot_circle, ldot_circle_black, ldot_circle_parent, ldot_circle_white, ldot_ln, memory, memory2, memoryBG, memoryBG2, memory_margin, minus, minusBG, minusMargin, minus_bg, minus_circle, multiply, multiply_bg, multiply_circle, onboard_8, onboard_ln, plus, plus_bg, plus_circle, rad, rounding, roundingBG, rounding_margin, save, saveMargin, save_icon, scaleTap, screenScale, second, second_bg, second_bg_grey, textLayer, textLayer2, time, timeBig, timeCircle, timeSmall,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

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
  image: "images/iPhone-X-bg-black.png"
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
  width: 270,
  height: 96,
  borderRadius: 48,
  backgroundColor: "#333333"
});

rad = new Layer({
  parent: layerBG,
  parent: degBG,
  width: 138,
  height: 96,
  x: 4,
  image: "images/rad.png",
  opacity: 0.8
});

deg = new Layer({
  parent: layerBG,
  parent: degBG,
  width: 138,
  height: 96,
  x: 120,
  image: "images/deg.png",
  opacity: 0.4
});

deg_margin = new Layer({
  parent: layerBG,
  x: 150,
  y: 150,
  width: 306,
  height: 132,
  opacity: 0
});

degBG.states["default"] = {
  backgroundColor: "#333333",
  animationOptions: {
    time: 0.15,
    curve: "ease-in"
  }
};

degBG.states.tap = {
  backgroundColor: "#808080",
  animationOptions: {
    time: 0.4,
    curve: "ease-out"
  }
};

rad.states["default"] = {
  opacity: 0.8,
  animationOptions: {
    time: 0.2,
    curve: "ease-in"
  }
};

rad.states.tap = {
  opacity: 0.4,
  animationOptions: {
    time: 0.2,
    curve: "ease-out"
  }
};

deg.states["default"] = {
  opacity: 0.4,
  animationOptions: {
    time: 0.2,
    curve: "ease-in"
  }
};

deg.states.tap = {
  opacity: 0.8,
  animationOptions: {
    time: 0.2,
    curve: "ease-out"
  }
};

deg_margin.on(Events.TouchStart, function(event) {
  return degBG.animate("tap");
});

deg_margin.on(Events.TouchEnd, function(event) {
  degBG.stateCycle("tap", "default");
  rad.states.next();
  return deg.states.next();
});

memoryBG = new Layer({
  parent: layerBG,
  borderRadius: 48,
  backgroundColor: "rgba(255,255,255,0.35)",
  opacity: 0,
  width: 180,
  opacity: 0,
  height: 50,
  x: 300 + 132,
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
  x: 324 + 132,
  y: 150,
  width: 334,
  height: 132,
  opacity: 0
});

memoryBG2 = new Layer({
  parent: layerBG,
  x: 342 + 132,
  y: 168,
  width: 298,
  height: 96,
  borderRadius: 48,
  backgroundColor: "rgba(255,255,255,0.35)",
  opacity: 0
});

memory2 = new Layer({
  parent: memoryBG2,
  width: 298,
  height: 96,
  image: "images/memory-1.png",
  opacity: 0
});

memoryBG.states.create = {
  width: 298,
  height: 96,
  opacity: 1,
  scale: 1,
  x: 342 + 132,
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
  x: 300 + 132,
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
  x: 676 + 132,
  animationOptions: {
    time: 0.8 * time,
    curve: "ease-in-out"
  }
};

memoryBG2.states["default"] = {
  x: 342 + 132,
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
  x: 186 + 342 + 132,
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

save_icon = new Layer({
  parent: layerBG,
  x: 38,
  y: 890,
  width: 195,
  height: 96,
  image: "images/save.png"
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

cursor = new Layer({
  parent: layerBG,
  width: 8,
  height: 100,
  y: 296,
  x: 40,
  backgroundColor: "#F28758",
  borderRadius: 4
});

cursor.states["default"] = {
  opacity: 1,
  animationOptions: {
    time: 0.1,
    delay: 0.4
  }
};

cursor.states.opacity0 = {
  opacity: 0,
  animationOptions: {
    time: 0.15,
    delay: 0.35
  }
};

cursor.states.switchInstant("opacity0");

cursor.onStateSwitchEnd(function() {
  return cursor.states.next();
});

cursorBlack = new Layer({
  parent: layerBG,
  width: 8,
  height: 100,
  y: 296,
  x: 40,
  backgroundColor: "#000000",
  opacity: 0
});

InputTextLayer = (function(superClass) {
  extend(InputTextLayer, superClass);

  function InputTextLayer(options) {
    this._update = bind(this._update, this);
    InputTextLayer.__super__.constructor.call(this, options);
    this.ignoreEvents = false;
    this.input = document.createElement("input");
    _.extend(this.input.style, {
      "-webkit-user-select": "text",
      "-webkit-box-sizing": "border-box",
      "cursor": "auto"
    });
    this._update();
    this._element.appendChild(this.input);
    this.on("change:width", this._update);
    this.on("change:height", this._update);
  }

  InputTextLayer.prototype._update = function() {
    return _.extend(this.input.style, {
      width: this.width + "px",
      height: this.height + "px"
    });
  };

  return InputTextLayer;

})(Framer.Layer);

textLayer = new InputTextLayer({
  parent: layerBG,
  width: 1000,
  height: 100,
  y: 300,
  x: 40,
  opacity: 1
});

textLayer.input.style.font = "91px Helvetica";

textLayer.input.style.textAlign = "left";

textLayer.input.style.background = "transparent";

textLayer.input.style.color = "#FFF";

textLayer.backgroundColor = "rgba(0, 0, 0, 0)";

textLayer2 = new InputTextLayer({
  parent: layerBG,
  width: 1085 - 500,
  height: 200,
  y: 835,
  x: 500,
  opacity: 1
});

textLayer2.input.style.font = "108px/1.35em Helvetica";

textLayer2.input.style.textAlign = "right";

textLayer2.input.style.background = "transparent";

textLayer2.input.style.color = "#FFF";

textLayer2.input.placeholder = "0";

textLayer2.backgroundColor = "rgba(255, 255, 255, 0)";

rounding_margin.onClick(function() {
  roundingBG.states.next();
  return rounding.states.next();
});

timeBig = 0.15;

timeSmall = 0.15;

scaleTap = 0.9;

timeCircle = 0.5;

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
    textLayer.input.value = textLayer.input.value + "√";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
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
    l_sqrt.animate("swipe");
    textLayer.input.value = textLayer.input.value + "!";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
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
    textLayer.input.value = textLayer.input.value + "^2";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
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
    l_pow.animate("swipe");
    textLayer.input.value = textLayer.input.value + "^";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
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
    textLayer.input.value = textLayer.input.value.substring(0, textLayer.input.value.length - 1);
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
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
    l_del.animate("swipe");
    textLayer.input.value = null;
    textLayer2.input.value = null;
    return cursorBlack.opacity = 0;
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
  y: 1260 - 20,
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
    textLayer.input.value = textLayer.input.value + "7";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
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
    textLayer.input.value = textLayer.input.value + "ln(";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    l7_ln.animate("swipe");
    return l7.animate("swipe");
  }
});

l7_bg.onSwipeEnd(function() {
  l7_ln.animate("default");
  l7.animate("default");
  return l7_bg.y = 1260;
});

l8_circle_parent = new Layer({
  parent: layerBG,
  x: 294 - 15,
  y: 1260 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l8_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l8_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l8_circle_parent.states.switchInstant("default");

l8_circle_white = new Layer({
  parent: l8_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l8_circle_white.states["default"] = {
  opacity: 0.5
};

l8_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l8_circle_white.states.switchInstant("default");

l8_circle_black = new Layer({
  parent: l8_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l8_circle = new Layer({
  parent: l8_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l8_circle.states["default"] = {
  opacity: 0.7
};

l8_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l8_circle.states.switchInstant("default");

l8 = new Layer({
  parent: layerBG,
  image: "images/8.png"
});

l8.states["default"] = {
  x: 294,
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

l8.states.swipe = {
  x: 294,
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

l8.states.tap = {
  x: 294,
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

l8.states.switchInstant("default");

l8_ln = new Layer({
  parent: layerBG,
  image: "images/lg.png"
});

l8_ln.states["default"] = {
  x: 294,
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

l8_ln.states.swipe = {
  x: 294,
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

l8_ln.states.switchInstant("default");

l8_bg = new Layer({
  parent: layerBG,
  x: 294,
  y: 1260,
  width: 270,
  height: 234,
  opacity: 0
});

l8_bg.draggable.enabled = true;

l8_bg.draggable.horizontal = false;

l8_bg.draggable.constraints = {
  x: 294,
  y: 1260,
  width: 270,
  height: 234
};

l8_bg.on(Events.Click, function(event) {
  if ((l8_bg.y === 1260) && (l_pow_bg.y === 1026)) {
    l8.animate("tap");
    textLayer.input.value = textLayer.input.value + "8";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return l8.onStateSwitchEnd(function() {
      if (l8.states.current.name === "tap") {
        return l8.stateCycle("tap", "default");
      }
    });
  }
});

l8_bg.on(Events.Click, function(event) {
  if ((l8_bg.y === 1260) && (l_pow_bg.y === 1026)) {
    l8_circle_parent.opacity = 1;
    l8_circle_parent.animate("tap");
    l8_circle_white.animate("tap");
    l8_circle.animate("tap");
    return l8_circle_parent.onStateSwitchEnd(function() {
      if (l8_circle_parent.states.current.name === "tap") {
        l8_circle_parent.states.switchInstant("default");
        l8_circle_white.states.switchInstant("default");
        return l8_circle.states.switchInstant("default");
      }
    });
  }
});

l8_bg.onSwipeDown(function() {
  if (l8.states.current.name === "default") {
    l8_ln.animate("swipe");
    l8.animate("swipe");
    textLayer.input.value = textLayer.input.value + "lg(";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

l8_bg.onSwipeEnd(function() {
  l8_ln.animate("default");
  l8.animate("default");
  return l8_bg.y = 1260;
});

l9_circle_parent = new Layer({
  parent: layerBG,
  x: 564 - 15,
  y: 1260 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l9_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l9_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l9_circle_parent.states.switchInstant("default");

l9_circle_white = new Layer({
  parent: l9_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l9_circle_white.states["default"] = {
  opacity: 0.5
};

l9_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l9_circle_white.states.switchInstant("default");

l9_circle_black = new Layer({
  parent: l9_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l9_circle = new Layer({
  parent: l9_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l9_circle.states["default"] = {
  opacity: 0.7
};

l9_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l9_circle.states.switchInstant("default");

l9 = new Layer({
  parent: layerBG,
  image: "images/9.png"
});

l9.states["default"] = {
  x: 564,
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

l9.states.swipe = {
  x: 564,
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

l9.states.tap = {
  x: 564,
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

l9.states.switchInstant("default");

l9_ln = new Layer({
  parent: layerBG,
  image: "images/i.png"
});

l9_ln.states["default"] = {
  x: 564,
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

l9_ln.states.swipe = {
  x: 564,
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

l9_ln.states.switchInstant("default");

l9_bg = new Layer({
  parent: layerBG,
  x: 564,
  y: 1260,
  width: 270,
  height: 234,
  opacity: 0
});

l9_bg.draggable.enabled = true;

l9_bg.draggable.horizontal = false;

l9_bg.draggable.constraints = {
  x: 564,
  y: 1260,
  width: 270,
  height: 234
};

l9_bg.on(Events.Click, function(event) {
  if ((l9_bg.y === 1260) && (l_del_bg.y === 1026)) {
    l9.animate("tap");
    textLayer.input.value = textLayer.input.value + "9";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return l9.onStateSwitchEnd(function() {
      if (l9.states.current.name === "tap") {
        return l9.stateCycle("tap", "default");
      }
    });
  }
});

l9_bg.on(Events.Click, function(event) {
  if ((l9_bg.y === 1260) && (l_del_bg.y === 1026)) {
    l9_circle_parent.opacity = 1;
    l9_circle_parent.animate("tap");
    l9_circle_white.animate("tap");
    l9_circle.animate("tap");
    return l9_circle_parent.onStateSwitchEnd(function() {
      if (l9_circle_parent.states.current.name === "tap") {
        l9_circle_parent.states.switchInstant("default");
        l9_circle_white.states.switchInstant("default");
        return l9_circle.states.switchInstant("default");
      }
    });
  }
});

l9_bg.onSwipeDown(function() {
  if (l9.states.current.name === "default") {
    l9_ln.animate("swipe");
    l9.animate("swipe");
    textLayer.input.value = textLayer.input.value + "i";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

l9_bg.onSwipeEnd(function() {
  l9_ln.animate("default");
  l9.animate("default");
  return l9_bg.y = 1260;
});

l4_circle_parent = new Layer({
  parent: layerBG,
  x: 24 - 15,
  y: 1494 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l4_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l4_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l4_circle_parent.states.switchInstant("default");

l4_circle_white = new Layer({
  parent: l4_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l4_circle_white.states["default"] = {
  opacity: 0.5
};

l4_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l4_circle_white.states.switchInstant("default");

l4_circle_black = new Layer({
  parent: l4_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l4_circle = new Layer({
  parent: l4_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l4_circle.states["default"] = {
  opacity: 0.7
};

l4_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l4_circle.states.switchInstant("default");

l4 = new Layer({
  parent: layerBG,
  image: "images/4.png"
});

l4.states["default"] = {
  x: 24,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-in"
  }
};

l4.states.swipe = {
  x: 24,
  y: 1574,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-out"
  }
};

l4.states.tap = {
  x: 24,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l4.states.switchInstant("default");

l4_ln = new Layer({
  parent: layerBG,
  image: "images/asin.png"
});

l4_ln.states["default"] = {
  x: 24,
  y: 1424,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l4_ln.states.swipe = {
  x: 24,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l4_ln.states.switchInstant("default");

l4_bg = new Layer({
  parent: layerBG,
  x: 48,
  y: 1494,
  width: 246,
  height: 234,
  opacity: 0
});

l4_bg.draggable.enabled = true;

l4_bg.draggable.horizontal = false;

l4_bg.draggable.constraints = {
  x: 48,
  y: 1494,
  width: 246,
  height: 234
};

l4_bg.on(Events.Click, function(event) {
  if ((l4_bg.y === 1494) && (l7_bg.y === 1260)) {
    l4.animate("tap");
    textLayer.input.value = textLayer.input.value + "4";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return l4.onStateSwitchEnd(function() {
      if (l4.states.current.name === "tap") {
        return l4.stateCycle("tap", "default");
      }
    });
  }
});

l4_bg.on(Events.Click, function(event) {
  if ((l4_bg.y === 1494) && (l7_bg.y === 1260)) {
    l4_circle_parent.opacity = 1;
    l4_circle_parent.animate("tap");
    l4_circle_white.animate("tap");
    l4_circle.animate("tap");
    return l4_circle_parent.onStateSwitchEnd(function() {
      if (l4_circle_parent.states.current.name === "tap") {
        l4_circle_parent.states.switchInstant("default");
        l4_circle_white.states.switchInstant("default");
        return l4_circle.states.switchInstant("default");
      }
    });
  }
});

l4_bg.onSwipeDown(function() {
  if (l4.states.current.name === "default") {
    l4_ln.animate("swipe");
    l4.animate("swipe");
    textLayer.input.value = textLayer.input.value + "asin(";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

l4_bg.onSwipeEnd(function() {
  l4_ln.animate("default");
  l4.animate("default");
  return l4_bg.y = 1494;
});

l5_circle_parent = new Layer({
  parent: layerBG,
  x: 294 - 15,
  y: 1494 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l5_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l5_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l5_circle_parent.states.switchInstant("default");

l5_circle_white = new Layer({
  parent: l5_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l5_circle_white.states["default"] = {
  opacity: 0.5
};

l5_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l5_circle_white.states.switchInstant("default");

l5_circle_black = new Layer({
  parent: l5_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l5_circle = new Layer({
  parent: l5_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l5_circle.states["default"] = {
  opacity: 0.7
};

l5_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l5_circle.states.switchInstant("default");

l5 = new Layer({
  parent: layerBG,
  image: "images/5.png"
});

l5.states["default"] = {
  x: 294,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-in"
  }
};

l5.states.swipe = {
  x: 294,
  y: 1574,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-out"
  }
};

l5.states.tap = {
  x: 294,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l5.states.switchInstant("default");

l5_ln = new Layer({
  parent: layerBG,
  image: "images/acos.png"
});

l5_ln.states["default"] = {
  x: 294,
  y: 1424,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l5_ln.states.swipe = {
  x: 294,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l5_ln.states.switchInstant("default");

l5_bg = new Layer({
  parent: layerBG,
  x: 294,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 0
});

l5_bg.draggable.enabled = true;

l5_bg.draggable.horizontal = false;

l5_bg.draggable.constraints = {
  x: 294,
  y: 1494,
  width: 270,
  height: 234
};

l5_bg.on(Events.Click, function(event) {
  if ((l5_bg.y === 1494) && (l8_bg.y === 1260) && (l_pow_bg.y === 1026)) {
    l5.animate("tap");
    textLayer.input.value = textLayer.input.value + "5";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return l5.onStateSwitchEnd(function() {
      if (l5.states.current.name === "tap") {
        return l5.stateCycle("tap", "default");
      }
    });
  }
});

l5_bg.on(Events.Click, function(event) {
  if ((l5_bg.y === 1494) && (l8_bg.y === 1260) && (l_pow_bg.y === 1026)) {
    l5_circle_parent.opacity = 1;
    l5_circle_parent.animate("tap");
    l5_circle_white.animate("tap");
    l5_circle.animate("tap");
    return l5_circle_parent.onStateSwitchEnd(function() {
      if (l5_circle_parent.states.current.name === "tap") {
        l5_circle_parent.states.switchInstant("default");
        l5_circle_white.states.switchInstant("default");
        return l5_circle.states.switchInstant("default");
      }
    });
  }
});

l5_bg.onSwipeDown(function() {
  if (l5.states.current.name === "default") {
    l5_ln.animate("swipe");
    l5.animate("swipe");
    textLayer.input.value = textLayer.input.value + "acos(";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

l5_bg.onSwipeEnd(function() {
  l5_ln.animate("default");
  l5.animate("default");
  return l5_bg.y = 1494;
});

l6_circle_parent = new Layer({
  parent: layerBG,
  x: 564 - 15,
  y: 1494 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l6_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l6_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l6_circle_parent.states.switchInstant("default");

l6_circle_white = new Layer({
  parent: l6_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l6_circle_white.states["default"] = {
  opacity: 0.5
};

l6_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l6_circle_white.states.switchInstant("default");

l6_circle_black = new Layer({
  parent: l6_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l6_circle = new Layer({
  parent: l6_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l6_circle.states["default"] = {
  opacity: 0.7
};

l6_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l6_circle.states.switchInstant("default");

l6 = new Layer({
  parent: layerBG,
  image: "images/6.png"
});

l6.states["default"] = {
  x: 564,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-in"
  }
};

l6.states.swipe = {
  x: 564,
  y: 1574,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-out"
  }
};

l6.states.tap = {
  x: 564,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l6.states.switchInstant("default");

l6_ln = new Layer({
  parent: layerBG,
  image: "images/atan.png"
});

l6_ln.states["default"] = {
  x: 564,
  y: 1424,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l6_ln.states.swipe = {
  x: 564,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l6_ln.states.switchInstant("default");

l6_bg = new Layer({
  parent: layerBG,
  x: 564,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 0
});

l6_bg.draggable.enabled = true;

l6_bg.draggable.horizontal = false;

l6_bg.draggable.constraints = {
  x: 564,
  y: 1494,
  width: 270,
  height: 234
};

l6_bg.on(Events.Click, function(event) {
  if ((l9_bg.y === 1260) && (l_del_bg.y === 1026) && (l6_bg.y === 1494)) {
    l6.animate("tap");
    textLayer.input.value = textLayer.input.value + "6";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return l6.onStateSwitchEnd(function() {
      if (l6.states.current.name === "tap") {
        return l6.stateCycle("tap", "default");
      }
    });
  }
});

l6_bg.on(Events.Click, function(event) {
  if ((l9_bg.y === 1260) && (l_del_bg.y === 1026) && (l6_bg.y === 1494)) {
    l6_circle_parent.opacity = 1;
    l6_circle_parent.animate("tap");
    l6_circle_white.animate("tap");
    l6_circle.animate("tap");
    return l6_circle_parent.onStateSwitchEnd(function() {
      if (l6_circle_parent.states.current.name === "tap") {
        l6_circle_parent.states.switchInstant("default");
        l6_circle_white.states.switchInstant("default");
        return l6_circle.states.switchInstant("default");
      }
    });
  }
});

l6_bg.onSwipeDown(function() {
  if (l6.states.current.name === "default") {
    l6_ln.animate("swipe");
    l6.animate("swipe");
    textLayer.input.value = textLayer.input.value + "atan(";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

l6_bg.onSwipeEnd(function() {
  l6_ln.animate("default");
  l6.animate("default");
  return l6_bg.y = 1494;
});

l1_circle_parent = new Layer({
  parent: layerBG,
  x: 24 - 15,
  y: 1728 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l1_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l1_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l1_circle_parent.states.switchInstant("default");

l1_circle_white = new Layer({
  parent: l1_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l1_circle_white.states["default"] = {
  opacity: 0.5
};

l1_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l1_circle_white.states.switchInstant("default");

l1_circle_black = new Layer({
  parent: l1_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l1_circle = new Layer({
  parent: l1_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l1_circle.states["default"] = {
  opacity: 0.7
};

l1_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l1_circle.states.switchInstant("default");

l1 = new Layer({
  parent: layerBG,
  image: "images/1.png"
});

l1.states["default"] = {
  x: 24,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-in"
  }
};

l1.states.swipe = {
  x: 24,
  y: 1808,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-out"
  }
};

l1.states.tap = {
  x: 24,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l1.states.switchInstant("default");

l1_ln = new Layer({
  parent: layerBG,
  image: "images/sin.png"
});

l1_ln.states["default"] = {
  x: 24,
  y: 1658,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l1_ln.states.swipe = {
  x: 24,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l1_ln.states.switchInstant("default");

l1_bg = new Layer({
  parent: layerBG,
  x: 48,
  y: 1728,
  width: 246,
  height: 234,
  opacity: 0
});

l1_bg.draggable.enabled = true;

l1_bg.draggable.horizontal = false;

l1_bg.draggable.constraints = {
  x: 48,
  y: 1728,
  width: 246,
  height: 234
};

l1_bg.on(Events.Click, function(event) {
  if ((l4_bg.y === 1494) && (l7_bg.y === 1260) && (l1_bg.y === 1728)) {
    l1.animate("tap");
    textLayer.input.value = textLayer.input.value + "1";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return l1.onStateSwitchEnd(function() {
      if (l1.states.current.name === "tap") {
        return l1.stateCycle("tap", "default");
      }
    });
  }
});

l1_bg.on(Events.Click, function(event) {
  if ((l4_bg.y === 1494) && (l7_bg.y === 1260) && (l1_bg.y === 1728)) {
    l1_circle_parent.opacity = 1;
    l1_circle_parent.animate("tap");
    l1_circle_white.animate("tap");
    l1_circle.animate("tap");
    return l1_circle_parent.onStateSwitchEnd(function() {
      if (l1_circle_parent.states.current.name === "tap") {
        l1_circle_parent.states.switchInstant("default");
        l1_circle_white.states.switchInstant("default");
        return l1_circle.states.switchInstant("default");
      }
    });
  }
});

l1_bg.onSwipeDown(function() {
  if (l1.states.current.name === "default") {
    l1_ln.animate("swipe");
    l1.animate("swipe");
    textLayer.input.value = textLayer.input.value + "sin(";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

l1_bg.onSwipeEnd(function() {
  l1_ln.animate("default");
  l1.animate("default");
  return l1_bg.y = 1728;
});

l2_circle_parent = new Layer({
  parent: layerBG,
  x: 294 - 15,
  y: 1728 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l2_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l2_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l2_circle_parent.states.switchInstant("default");

l2_circle_white = new Layer({
  parent: l2_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l2_circle_white.states["default"] = {
  opacity: 0.5
};

l2_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l2_circle_white.states.switchInstant("default");

l2_circle_black = new Layer({
  parent: l2_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l2_circle = new Layer({
  parent: l2_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l2_circle.states["default"] = {
  opacity: 0.7
};

l2_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l2_circle.states.switchInstant("default");

l2 = new Layer({
  parent: layerBG,
  image: "images/2.png"
});

l2.states["default"] = {
  x: 294,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-in"
  }
};

l2.states.swipe = {
  x: 294,
  y: 1808,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-out"
  }
};

l2.states.tap = {
  x: 294,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l2.states.switchInstant("default");

l2_ln = new Layer({
  parent: layerBG,
  image: "images/cos.png"
});

l2_ln.states["default"] = {
  x: 294,
  y: 1658,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l2_ln.states.swipe = {
  x: 294,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l2_ln.states.switchInstant("default");

l2_bg = new Layer({
  parent: layerBG,
  x: 294,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 0
});

l2_bg.draggable.enabled = true;

l2_bg.draggable.horizontal = false;

l2_bg.draggable.constraints = {
  x: 294,
  y: 1728,
  width: 270,
  height: 234
};

l2_bg.on(Events.Click, function(event) {
  if ((l5_bg.y === 1494) && (l8_bg.y === 1260) && (l_pow_bg.y === 1026) && (l2_bg.y === 1728)) {
    l2.animate("tap");
    textLayer.input.value = textLayer.input.value + "2";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return l2.onStateSwitchEnd(function() {
      if (l2.states.current.name === "tap") {
        return l2.stateCycle("tap", "default");
      }
    });
  }
});

l2_bg.on(Events.Click, function(event) {
  if ((l5_bg.y === 1494) && (l8_bg.y === 1260) && (l_pow_bg.y === 1026) && (l2_bg.y === 1728)) {
    l2_circle_parent.opacity = 1;
    l2_circle_parent.animate("tap");
    l2_circle_white.animate("tap");
    l2_circle.animate("tap");
    return l2_circle_parent.onStateSwitchEnd(function() {
      if (l2_circle_parent.states.current.name === "tap") {
        l2_circle_parent.states.switchInstant("default");
        l2_circle_white.states.switchInstant("default");
        return l2_circle.states.switchInstant("default");
      }
    });
  }
});

l2_bg.onSwipeDown(function() {
  if (l2.states.current.name === "default") {
    l2_ln.animate("swipe");
    l2.animate("swipe");
    textLayer.input.value = textLayer.input.value + "cos(";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

l2_bg.onSwipeEnd(function() {
  l2_ln.animate("default");
  l2.animate("default");
  return l2_bg.y = 1728;
});

l3_circle_parent = new Layer({
  parent: layerBG,
  x: 564 - 15,
  y: 1728 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l3_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l3_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l3_circle_parent.states.switchInstant("default");

l3_circle_white = new Layer({
  parent: l3_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l3_circle_white.states["default"] = {
  opacity: 0.5
};

l3_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l3_circle_white.states.switchInstant("default");

l3_circle_black = new Layer({
  parent: l3_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l3_circle = new Layer({
  parent: l3_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l3_circle.states["default"] = {
  opacity: 0.7
};

l3_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l3_circle.states.switchInstant("default");

l3 = new Layer({
  parent: layerBG,
  image: "images/3.png"
});

l3.states["default"] = {
  x: 564,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-in"
  }
};

l3.states.swipe = {
  x: 564,
  y: 1808,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-out"
  }
};

l3.states.tap = {
  x: 564,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l3.states.switchInstant("default");

l3_ln = new Layer({
  parent: layerBG,
  image: "images/tan.png"
});

l3_ln.states["default"] = {
  x: 564,
  y: 1658,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l3_ln.states.swipe = {
  x: 564,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l3_ln.states.switchInstant("default");

l3_bg = new Layer({
  parent: layerBG,
  x: 564,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 0
});

l3_bg.draggable.enabled = true;

l3_bg.draggable.horizontal = false;

l3_bg.draggable.constraints = {
  x: 564,
  y: 1728,
  width: 270,
  height: 234
};

l3_bg.on(Events.Click, function(event) {
  if ((l9_bg.y === 1260) && (l_del_bg.y === 1026) && (l6_bg.y === 1494) && (l3_bg.y === 1728)) {
    l3.animate("tap");
    textLayer.input.value = textLayer.input.value + "3";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return l3.onStateSwitchEnd(function() {
      if (l3.states.current.name === "tap") {
        return l3.stateCycle("tap", "default");
      }
    });
  }
});

l3_bg.on(Events.Click, function(event) {
  if ((l9_bg.y === 1260) && (l_del_bg.y === 1026) && (l6_bg.y === 1494) && (l3_bg.y === 1728)) {
    l3_circle_parent.opacity = 1;
    l3_circle_parent.animate("tap");
    l3_circle_white.animate("tap");
    l3_circle.animate("tap");
    return l3_circle_parent.onStateSwitchEnd(function() {
      if (l3_circle_parent.states.current.name === "tap") {
        l3_circle_parent.states.switchInstant("default");
        l3_circle_white.states.switchInstant("default");
        return l3_circle.states.switchInstant("default");
      }
    });
  }
});

l3_bg.onSwipeDown(function() {
  if (l3.states.current.name === "default") {
    l3_ln.animate("swipe");
    l3.animate("swipe");
    textLayer.input.value = textLayer.input.value + "tan(";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

l3_bg.onSwipeEnd(function() {
  l3_ln.animate("default");
  l3.animate("default");
  return l3_bg.y = 1728;
});

l0_circle_parent = new Layer({
  parent: layerBG,
  x: 24 - 15,
  y: 1962 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

l0_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

l0_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

l0_circle_parent.states.switchInstant("default");

l0_circle_white = new Layer({
  parent: l0_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

l0_circle_white.states["default"] = {
  opacity: 0.5
};

l0_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

l0_circle_white.states.switchInstant("default");

l0_circle_black = new Layer({
  parent: l0_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

l0_circle = new Layer({
  parent: l0_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

l0_circle.states["default"] = {
  opacity: 0.7
};

l0_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

l0_circle.states.switchInstant("default");

l0 = new Layer({
  parent: layerBG,
  image: "images/0.png"
});

l0.states["default"] = {
  x: 24,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-in"
  }
};

l0.states.swipe = {
  x: 24,
  y: 2042,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-out"
  }
};

l0.states.tap = {
  x: 24,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

l0.states.switchInstant("default");

l0_ln = new Layer({
  parent: layerBG,
  image: "images/pi.png"
});

l0_ln.states["default"] = {
  x: 24,
  y: 1892,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

l0_ln.states.swipe = {
  x: 24,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

l0_ln.states.switchInstant("default");

l0_bg = new Layer({
  parent: layerBG,
  x: 48,
  y: 1962,
  width: 246,
  height: 234,
  opacity: 0
});

l0_bg.draggable.enabled = true;

l0_bg.draggable.horizontal = false;

l0_bg.draggable.constraints = {
  x: 48,
  y: 1962,
  width: 246,
  height: 234
};

l0_bg.on(Events.Click, function(event) {
  if ((l4_bg.y === 1494) && (l7_bg.y === 1260) && (l1_bg.y === 1728) && (l0_bg.y === 1962)) {
    l0.animate("tap");
    textLayer.input.value = textLayer.input.value + "0";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return l0.onStateSwitchEnd(function() {
      if (l0.states.current.name === "tap") {
        return l0.stateCycle("tap", "default");
      }
    });
  }
});

l0_bg.on(Events.Click, function(event) {
  if ((l4_bg.y === 1494) && (l7_bg.y === 1260) && (l1_bg.y === 1728) && (l0_bg.y === 1962)) {
    l0_circle_parent.opacity = 1;
    l0_circle_parent.animate("tap");
    l0_circle_white.animate("tap");
    l0_circle.animate("tap");
    return l0_circle_parent.onStateSwitchEnd(function() {
      if (l0_circle_parent.states.current.name === "tap") {
        l0_circle_parent.states.switchInstant("default");
        l0_circle_white.states.switchInstant("default");
        return l0_circle.states.switchInstant("default");
      }
    });
  }
});

l0_bg.onSwipeDown(function() {
  if (l0.states.current.name === "default") {
    l0_ln.animate("swipe");
    l0.animate("swipe");
    textLayer.input.value = textLayer.input.value + "π";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

l0_bg.onSwipeEnd(function() {
  l0_ln.animate("default");
  l0.animate("default");
  return l0_bg.y = 1962;
});

ldot_circle_parent = new Layer({
  parent: layerBG,
  x: 294 - 15,
  y: 1962 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

ldot_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

ldot_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

ldot_circle_parent.states.switchInstant("default");

ldot_circle_white = new Layer({
  parent: ldot_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

ldot_circle_white.states["default"] = {
  opacity: 0.5
};

ldot_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

ldot_circle_white.states.switchInstant("default");

ldot_circle_black = new Layer({
  parent: ldot_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

ldot_circle = new Layer({
  parent: ldot_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

ldot_circle.states["default"] = {
  opacity: 0.7
};

ldot_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

ldot_circle.states.switchInstant("default");

ldot = new Layer({
  parent: layerBG,
  image: "images/dot.png"
});

ldot.states["default"] = {
  x: 294,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-in"
  }
};

ldot.states.swipe = {
  x: 294,
  y: 2042,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-out"
  }
};

ldot.states.tap = {
  x: 294,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

ldot.states.switchInstant("default");

ldot_ln = new Layer({
  parent: layerBG,
  image: "images/e.png"
});

ldot_ln.states["default"] = {
  x: 294,
  y: 1892,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

ldot_ln.states.swipe = {
  x: 294,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

ldot_ln.states.switchInstant("default");

ldot_bg = new Layer({
  parent: layerBG,
  x: 294,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 0
});

ldot_bg.draggable.enabled = true;

ldot_bg.draggable.horizontal = false;

ldot_bg.draggable.constraints = {
  x: 294,
  y: 1962,
  width: 270,
  height: 234
};

ldot_bg.on(Events.Click, function(event) {
  if ((l5_bg.y === 1494) && (l8_bg.y === 1260) && (l_pow_bg.y === 1026) && (l2_bg.y === 1728) && (ldot_bg.y === 1962)) {
    ldot.animate("tap");
    textLayer.input.value = textLayer.input.value + ",";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return ldot.onStateSwitchEnd(function() {
      if (ldot.states.current.name === "tap") {
        return ldot.stateCycle("tap", "default");
      }
    });
  }
});

ldot_bg.on(Events.Click, function(event) {
  if ((l5_bg.y === 1494) && (l8_bg.y === 1260) && (l_pow_bg.y === 1026) && (l2_bg.y === 1728) && (ldot_bg.y === 1962)) {
    ldot_circle_parent.opacity = 1;
    ldot_circle_parent.animate("tap");
    ldot_circle_white.animate("tap");
    ldot_circle.animate("tap");
    return ldot_circle_parent.onStateSwitchEnd(function() {
      if (ldot_circle_parent.states.current.name === "tap") {
        ldot_circle_parent.states.switchInstant("default");
        ldot_circle_white.states.switchInstant("default");
        return ldot_circle.states.switchInstant("default");
      }
    });
  }
});

ldot_bg.onSwipeDown(function() {
  if (ldot.states.current.name === "default") {
    ldot_ln.animate("swipe");
    ldot.animate("swipe");
    textLayer.input.value = textLayer.input.value + "e";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

ldot_bg.onSwipeEnd(function() {
  ldot_ln.animate("default");
  ldot.animate("default");
  return ldot_bg.y = 1962;
});

lc_circle_parent = new Layer({
  parent: layerBG,
  x: 564 - 15,
  y: 1962 - 20,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000"
});

lc_circle_parent.states["default"] = {
  scale: 0.3,
  opacity: 0
};

lc_circle_parent.states.tap = {
  scale: 1,
  opacity: 1,
  animationOptions: {
    time: timeCircle,
    curve: "ease-out"
  }
};

lc_circle_parent.states.switchInstant("default");

lc_circle_white = new Layer({
  parent: lc_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff"
});

lc_circle_white.states["default"] = {
  opacity: 0.5
};

lc_circle_white.states.tap = {
  opacity: 0,
  animationOptions: {
    time: timeCircle - 0.05,
    curve: "ease-out"
  }
};

lc_circle_white.states.switchInstant("default");

lc_circle_black = new Layer({
  parent: lc_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#000",
  scale: 0.95
});

lc_circle = new Layer({
  parent: lc_circle_parent,
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: "#fff",
  scale: 0.96
});

lc_circle.states["default"] = {
  opacity: 0.7
};

lc_circle.states.tap = {
  opacity: 0.0,
  animationOptions: {
    time: timeCircle * 0.6,
    curve: "ease-out"
  }
};

lc_circle.states.switchInstant("default");

lc = new Layer({
  parent: layerBG,
  image: "images/().png"
});

lc.states["default"] = {
  x: 564,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-in"
  }
};

lc.states.swipe = {
  x: 564,
  y: 2042,
  width: 270,
  height: 234,
  opacity: 0,
  scale: 0.4,
  animationOptions: {
    time: timeBig,
    curve: "ease-out"
  }
};

lc.states.tap = {
  x: 564,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall * 0.5,
    curve: "ease-out"
  }
};

lc.states.switchInstant("default");

lc_ln = new Layer({
  parent: layerBG,
  image: "images/persent.png"
});

lc_ln.states["default"] = {
  x: 564,
  y: 1892,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: timeBig,
    curve: "ease-in"
  }
};

lc_ln.states.swipe = {
  x: 564,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

lc_ln.states.switchInstant("default");

lc_bg = new Layer({
  parent: layerBG,
  x: 564,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 0
});

lc_bg.draggable.enabled = true;

lc_bg.draggable.horizontal = false;

lc_bg.draggable.constraints = {
  x: 564,
  y: 1962,
  width: 270,
  height: 234
};

lc_bg.on(Events.Click, function(event) {
  if ((l9_bg.y === 1260) && (l_del_bg.y === 1026) && (l6_bg.y === 1494) && (l3_bg.y === 1728) && (lc_bg.y === 1962)) {
    lc.animate("tap");
    textLayer.input.value = textLayer.input.value + ")";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    cursorBlack.opacity = 1;
    return lc.onStateSwitchEnd(function() {
      if (lc.states.current.name === "tap") {
        return lc.stateCycle("tap", "default");
      }
    });
  }
});

lc_bg.on(Events.Click, function(event) {
  if ((l9_bg.y === 1260) && (l_del_bg.y === 1026) && (l6_bg.y === 1494) && (l3_bg.y === 1728) && (lc_bg.y === 1962)) {
    lc_circle_parent.opacity = 1;
    lc_circle_parent.animate("tap");
    lc_circle_white.animate("tap");
    lc_circle.animate("tap");
    return lc_circle_parent.onStateSwitchEnd(function() {
      if (lc_circle_parent.states.current.name === "tap") {
        lc_circle_parent.states.switchInstant("default");
        lc_circle_white.states.switchInstant("default");
        return lc_circle.states.switchInstant("default");
      }
    });
  }
});

lc_bg.onSwipeDown(function() {
  if (lc.states.current.name === "default") {
    lc_ln.animate("swipe");
    lc.animate("swipe");
    textLayer.input.value = textLayer.input.value + "%";
    textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
    return cursorBlack.opacity = 1;
  }
});

lc_bg.onSwipeEnd(function() {
  lc_ln.animate("default");
  lc.animate("default");
  return lc_bg.y = 1962;
});

gdad_bg = new Layer({
  parent: layerBG,
  x: 849,
  y: 1287,
  width: 228,
  height: 921,
  image: "images/grad.png"
});

division_circle = new Layer({
  parent: layerBG,
  x: 849,
  y: 1300,
  width: 228,
  height: 228,
  borderRadius: 125,
  backgroundColor: "#fff"
});

division_circle.states["default"] = {
  opacity: 0,
  scale: 0.3
};

division_circle.states.tap = {
  opacity: 0,
  scale: 1,
  animationOptions: {
    time: 0.2,
    curve: "ease-out"
  }
};

division_circle.states.switchInstant("default");

division = new Layer({
  parent: layerBG,
  image: "images/division.png"
});

division.states["default"] = {
  x: 834,
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

division.states.tap = {
  x: 834,
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

division.states.switchInstant("default");

division_bg = new Layer({
  parent: layerBG,
  x: 834,
  y: 1260,
  width: 246,
  height: 234,
  opacity: 0
});

division_bg.on(Events.Click, function(event) {
  division_circle.opacity = 0.5;
  division_circle.animate("tap");
  textLayer.input.value = textLayer.input.value + "÷";
  textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
  cursorBlack.opacity = 1;
  return division_circle.onStateSwitchEnd(function() {
    if (division_circle.states.current.name === "tap") {
      return division_circle.states.switchInstant("default");
    }
  });
});

division_bg.on(Events.TouchStart, function(event) {
  return division.animate("tap");
});

division_bg.on(Events.TouchEnd, function(event) {
  return division.stateCycle("tap", "default");
});

multiply_circle = new Layer({
  parent: layerBG,
  x: 849,
  y: 1518,
  width: 228,
  height: 228,
  borderRadius: 125,
  backgroundColor: "#fff"
});

multiply_circle.states["default"] = {
  opacity: 0,
  scale: 0.3
};

multiply_circle.states.tap = {
  opacity: 0,
  scale: 1,
  animationOptions: {
    time: 0.2,
    curve: "ease-out"
  }
};

multiply_circle.states.switchInstant("default");

multiply = new Layer({
  parent: layerBG,
  image: "images/multiply.png"
});

multiply.states["default"] = {
  x: 834,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: 0.225,
    curve: "ease-out"
  }
};

multiply.states.tap = {
  x: 834,
  y: 1494,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

multiply.states.switchInstant("default");

multiply_bg = new Layer({
  parent: layerBG,
  x: 834,
  y: 1494,
  width: 246,
  height: 234,
  opacity: 0
});

multiply_bg.on(Events.Click, function(event) {
  multiply_circle.opacity = 0.5;
  multiply_circle.animate("tap");
  textLayer.input.value = textLayer.input.value + "×";
  textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
  cursorBlack.opacity = 1;
  return multiply_circle.onStateSwitchEnd(function() {
    if (multiply_circle.states.current.name === "tap") {
      return multiply_circle.states.switchInstant("default");
    }
  });
});

multiply_bg.on(Events.TouchStart, function(event) {
  return multiply.animate("tap");
});

multiply_bg.on(Events.TouchEnd, function(event) {
  return multiply.stateCycle("tap", "default");
});

minus_circle = new Layer({
  parent: layerBG,
  x: 849,
  y: 1743,
  width: 228,
  height: 228,
  borderRadius: 125,
  backgroundColor: "#fff"
});

minus_circle.states["default"] = {
  opacity: 0,
  scale: 0.3
};

minus_circle.states.tap = {
  opacity: 0,
  scale: 1,
  animationOptions: {
    time: 0.2,
    curve: "ease-out"
  }
};

minus_circle.states.switchInstant("default");

minus = new Layer({
  parent: layerBG,
  image: "images/minus.png"
});

minus.states["default"] = {
  x: 834,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: 0.225,
    curve: "ease-out"
  }
};

minus.states.tap = {
  x: 834,
  y: 1728,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

minus.states.switchInstant("default");

minus_bg = new Layer({
  parent: layerBG,
  x: 834,
  y: 1728,
  width: 246,
  height: 234,
  opacity: 0
});

minus_bg.on(Events.Click, function(event) {
  minus_circle.opacity = 0.5;
  minus_circle.animate("tap");
  textLayer.input.value = textLayer.input.value + "-";
  textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
  cursorBlack.opacity = 1;
  return minus_circle.onStateSwitchEnd(function() {
    if (minus_circle.states.current.name === "tap") {
      return minus_circle.states.switchInstant("default");
    }
  });
});

minus_bg.on(Events.TouchStart, function(event) {
  return minus.animate("tap");
});

minus_bg.on(Events.TouchEnd, function(event) {
  return minus.stateCycle("tap", "default");
});

plus_circle = new Layer({
  parent: layerBG,
  x: 849,
  y: 1967,
  width: 228,
  height: 228,
  borderRadius: 125,
  backgroundColor: "#fff"
});

plus_circle.states["default"] = {
  opacity: 0,
  scale: 0.3
};

plus_circle.states.tap = {
  opacity: 0,
  scale: 1,
  animationOptions: {
    time: 0.2,
    curve: "ease-out"
  }
};

plus_circle.states.switchInstant("default");

plus = new Layer({
  parent: layerBG,
  image: "images/plus.png"
});

plus.states["default"] = {
  x: 834,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: 0.225,
    curve: "ease-out"
  }
};

plus.states.tap = {
  x: 834,
  y: 1962,
  width: 270,
  height: 234,
  opacity: 0.6,
  scale: scaleTap,
  animationOptions: {
    time: timeSmall,
    curve: "ease-out"
  }
};

plus.states.switchInstant("default");

plus_bg = new Layer({
  parent: layerBG,
  x: 834,
  y: 1962,
  width: 246,
  height: 234,
  opacity: 0
});

plus_bg.on(Events.Click, function(event) {
  plus_circle.opacity = 0.5;
  plus_circle.animate("tap");
  textLayer.input.value = textLayer.input.value + "+";
  textLayer2.input.value = Math.floor(Math.random() * (2511 - 0));
  cursorBlack.opacity = 1;
  return plus_circle.onStateSwitchEnd(function() {
    if (plus_circle.states.current.name === "tap") {
      return plus_circle.states.switchInstant("default");
    }
  });
});

plus_bg.on(Events.TouchStart, function(event) {
  return plus.animate("tap");
});

plus_bg.on(Events.TouchEnd, function(event) {
  return plus.stateCycle("tap", "default");
});

bg = new Layer({
  parent: layerBG,
  x: 0,
  y: 0,
  width: 1126,
  height: 2436,
  opacity: 1,
  image: "images/iPhone-X-onboarding.png"
});

onboard_8 = new Layer({
  parent: bg,
  image: "images/8.png",
  x: 294,
  y: 1260,
  width: 270,
  height: 234
});

onboard_8.states["default"] = {
  x: 294,
  y: 1260,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 1,
  animationOptions: {
    time: 0.4
  }
};

onboard_8.states.swipe = {
  x: 294,
  y: 1300,
  width: 270,
  height: 234,
  opacity: 0.8,
  scale: 0.88,
  animationOptions: {
    time: 0.8,
    delay: 2.5,
    curve: "ease-out"
  }
};

onboard_ln = new Layer({
  parent: bg,
  image: "images/lg.png"
});

onboard_ln.states["default"] = {
  x: 294,
  y: 1190,
  width: 270,
  height: 234,
  opacity: 0.4,
  scale: 0.45,
  animationOptions: {
    time: 0.4
  }
};

onboard_ln.states.swipe = {
  x: 294,
  y: 1220,
  width: 270,
  height: 234,
  opacity: 1,
  scale: 0.6,
  animationOptions: {
    time: 0.8,
    delay: 2.5,
    curve: "ease-out"
  }
};

onboard_ln.states.switchInstant("default");

onboard_8.x = 295;

onboard_8.animate("default");

onboard_8.onStateSwitchEnd(function() {
  onboard_8.states.next();
  return onboard_ln.states.next();
});

bg.on(Events.Click, function(event) {
  bg.scale = 0;
  return bg.opacity = 0;
});


/*
onboardBG = new Layer
	parent: layerBG
	x: 294
	y: 1260
	width: 270
	height: 234
	opacity: 1
	backgroundColor: "#000"

onboard_8 = new Layer
	parent: layerBG
	image: "images/8.png"
	x: 294
	y: 1260
	width: 270
	height: 234
onboard_8.states.default =
	x: 294
	y: 1260
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: 0.4
		#curve: "ease-in"
onboard_8.states.swipe =
	x: 294
	y: 1300
	width: 270
	height: 234
	opacity: 0.8
	scale: 0.88
	animationOptions:
		time: 0.8
		delay: 2.5
		curve: "ease-out"

onboard_8.states.default2 =
	x: 294
	y: 1260
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: 0.5
onboard_8.states.up =
	x: 294
	y: 1230
	width: 270
	height: 234
	opacity: 1
	scale: 1
	animationOptions:
		time: 0.5
		#curve: "ease-in"

onboard_8.states.switchInstant "default"

onboard_ln = new Layer
	parent: layerBG
	image: "images/lg.png"
onboard_ln.states.default =
	x: 294
	y: 1190
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: 0.4
		#curve: "ease-in"

onboard_ln.states.swipe =
	x: 294
	y: 1220
	width: 270
	height: 234
	opacity: 1
	scale: 0.6
	animationOptions:
		time: 0.8
		delay: 2.5
		curve: "ease-out"

onboard_ln.states.default2 =
	x: 294
	y: 1190
	width: 270
	height: 234
	opacity: 0.4
	scale: 0.45
	animationOptions:
		time: 0.5
onboard_ln.states.up =
	x: 294
	y: 1180
	width: 270
	height: 234
	opacity: 0
	scale: 0.3
	animationOptions:
		time: 0.5
		#curve: "ease-out"
		#curve: "ease-out"

onboard_ln.states.switchInstant "default"


l8 = new Layer
	parent: layerBG
	image: "images/8.png"
 * Button 8 States
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
 * Button lg
l8_ln = new Layer
	parent: layerBG
	image: "images/lg.png"
 * Button lg States
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
 * Button 8 Masc
l8_bg = new Layer
	parent: layerBG
	x: 294
	y: 1260
	width: 270
	height: 234
	opacity: 0
 * Button 8 draggable
l8_bg.draggable.enabled = true
l8_bg.draggable.horizontal = false
l8_bg.draggable.constraints =
 x: 294
 y: 1260
 width: 270
 height: 234


onboard_8.x = 295
onboard_8.animate("default")
onboard_8.onStateSwitchEnd ->
	#print onboard_8.states.current.name
	onboard_8.states.next()
	onboard_ln.states.next()


bg.on Events.Click, (event) ->
	bg.scale = 0
	onboard_8.states.default =
		opacity: 0
	onboard_8.states.swipe =
		opacity: 0
	onboard_ln.states.default =
		opacity: 0
	onboard_ln.states.swipe =
		opacity: 0

	#onboardBG.scale = 0
	#onboardBG.opacity = 0   l8 l8_ln l8_bg
	 * l8_circle_parent l8_circle_white l8_circle_black l8_circle
	onboardBG.placeBefore (onboard_8)
	onboardBG.placeBefore (onboard_ln)
	l8.placeBefore (onboardBG)
	l8_ln.placeBefore (onboardBG)
	l8_circle_parent.placeBefore (onboardBG)
	l8_circle_white.placeBefore (onboardBG)
	l8_circle_black.placeBefore (onboardBG)
	l8_circle.placeBefore (onboardBG)
	l8_bg.placeBefore (onboardBG)
	onboardBG.scale = 0
	onboardBG.opacity = 0
	#onboard_ln.placebefore (onboardBG)
	#onboardBG.placebefore(onboard_8)
	#onboardBG.placebefore(onboard_ln)
 */
