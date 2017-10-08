
/*
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

layerA.placeBefore(layerB1)
layerA.placeBefore(layerB2)
layerA.placeBefore(layerB3)

layerA.onClick ->
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
      textLayer.input.value = textLayer.input.value + "2"
      layerB1.animate("stateMiddle")
      layerB2.animate("stateDown")
      layerB3.animate("stateDdown")
  if (layerA.draggable.direction is "up")
    if (layerA.draggable.direction isnt directionA)
      directionA = layerA.draggable.direction
      textLayer.input.value = textLayer.input.value + "3"
      layerB1.animate("stateFly")
      layerB2.animate("stateUp")
      layerB3.animate("stateMiddle")

layerA.onDragEnd ->
  directionA = 0
  layerB1.animate("stateUp")
  layerB2.animate("stateMiddle")
  layerB3.animate("stateDown")
 */
var InputTextLayer, backgroundLayer, curveAnimation, layer12, layer12Exp, layer12Pi, layer13, layer13Exponent, layer13Radical, layer13Square, layer14, layer14Cancel, layer14Delite, style, textLayer, timeAnimation, weight,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

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
  width: Screen.width,
  height: 120,
  y: 52,
  x: 15
});

textLayer.states.animationOptions = {
  curve: "spring(250, 20, 0)"
};

textLayer.input.style.font = "56px/1.35em Helvetica";

textLayer.input.style.font - (style = "normal");

textLayer.input.style.font - (weight = "100");

textLayer.input.style.padding = "24px";

textLayer.input.style.textAlign = "left";

textLayer.input.style.background = "transparent";

textLayer.input.style.outline = '0';

textLayer.input.style.color = "#000";

textLayer.input.style.border = "0px solid";

textLayer.backgroundColor = "rgba(255, 255, 255, 0)";

timeAnimation = 0.15;

curveAnimation = "Bezier(0.0, 0.0, 0.2, 1)";

backgroundLayer = new Layer({
  image: "images/background.png",
  width: 720,
  height: 1280
});

layer12 = new Layer({
  x: 28,
  y: 416,
  width: 148,
  height: 148,
  opacity: 0
});

layer12.draggable.enabled = true;

layer12.draggable.horizontal = false;

layer12.draggable.constraints = {
  x: 28,
  y: 416,
  width: 148,
  height: 148
};

layer12Pi = new Layer({
  image: "images/012_pi.png",
  x: 28,
  y: 416,
  width: 148,
  height: 148
});

layer12Pi.states.stateDown = {
  x: layer12Pi.x + 41,
  y: layer12Pi.y + 83,
  width: 70,
  height: 70,
  opacity: 0.4,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer12Pi.states.stateMiddle = {
  x: layer12Pi.x,
  y: layer12Pi.y,
  width: 148,
  height: 148,
  opacity: 1,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer12Pi.states.stateTap = {
  x: layer12Pi.x + 9,
  y: layer12Pi.y + 9,
  width: 130,
  height: 130,
  opacity: 1,
  animationOptions: {
    time: timeAnimation * 0.5,
    curve: curveAnimation
  }
};

layer12Exp = new Layer({
  image: "images/012_e.png",
  x: 69,
  y: 403,
  width: 70,
  height: 70,
  opacity: 0.4
});

layer12Exp.states.stateUp = {
  x: 69,
  y: 403,
  width: 70,
  height: 70,
  opacity: 0.4,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer12Exp.states.stateMiddle = {
  x: 28,
  y: 416,
  width: 148,
  height: 148,
  opacity: 1,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer12.placeBefore(layer12Pi);

layer12.placeBefore(layer12Exp);

layer12Pi.placeBefore(layer12Exp);

textLayer.placeBefore(backgroundLayer);

layer12.onClick(function() {
  if (layer12.y === 416) {
    textLayer.input.value = textLayer.input.value + "π";
    layer12Pi.animate("stateTap");
    return layer12Pi.onStateSwitchEnd(function() {
      if (layer12Pi.states.current.name === "stateTap") {
        return layer12Pi.stateCycle("stateTap", "stateMiddle");
      }
    });
  }
});

layer12.onSwipeDown(function() {
  if (layer12Pi.states.current.name === "stateMiddle") {
    textLayer.input.value = textLayer.input.value + "e";
    layer12Exp.animate("stateMiddle");
    return layer12Pi.animate("stateDown");
  }
});

layer12.onSwipeEnd(function() {
  layer12Exp.animate("stateUp");
  return layer12Pi.animate("stateMiddle");
});

layer13 = new Layer({
  x: 200,
  y: 416,
  width: 148,
  height: 148,
  opacity: 0
});

layer13.draggable.enabled = true;

layer13.draggable.horizontal = false;

layer13.draggable.constraints = {
  x: 200,
  y: 416,
  width: 148,
  height: 148
};

layer13Square = new Layer({
  image: "images/013_square.png",
  x: layer13.x,
  y: layer13.y,
  width: 148,
  height: 148
});

layer13Square.states.stateDown = {
  x: layer13.x + 41,
  y: layer13.y + 83,
  width: 70,
  height: 70,
  opacity: 0.4,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer13Square.states.stateMiddle = {
  x: layer13.x,
  y: layer13.y,
  width: 148,
  height: 148,
  opacity: 1,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer13Square.states.stateTap = {
  x: layer13.x + 9,
  y: layer13.y + 9,
  width: 130,
  height: 130,
  opacity: 1,
  animationOptions: {
    time: timeAnimation * 0.5,
    curve: curveAnimation
  }
};

layer13Square.states.stateUp = {
  x: layer13.x + 41,
  y: layer13.y - 13,
  width: 70,
  height: 70,
  opacity: 0.4,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer13Exponent = new Layer({
  image: "images/013_exponent.png",
  x: layer13.x + 41,
  y: layer13.y - 13,
  width: 70,
  height: 70,
  opacity: 0.4
});

layer13Exponent.states.stateUp = {
  x: layer13.x + 41,
  y: layer13.y - 13,
  width: 70,
  height: 70,
  opacity: 0.4,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer13Exponent.states.stateMiddle = {
  x: layer13.x,
  y: layer13.y,
  width: 148,
  height: 148,
  opacity: 1,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer13Exponent.states.stateFly = {
  x: layer13.x + 72,
  y: layer13.y - 40,
  width: 8,
  height: 8,
  opacity: 0,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer13Radical = new Layer({
  image: "images/013_radical.png",
  x: layer13.x + 41,
  y: layer13.y + 83,
  width: 70,
  height: 70,
  opacity: 0.4
});

layer13Radical.states.stateDown = {
  x: layer13.x + 41,
  y: layer13.y + 83,
  width: 70,
  height: 70,
  opacity: 0.4,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer13Radical.states.stateMiddle = {
  x: layer13.x,
  y: layer13.y,
  width: 148,
  height: 148,
  opacity: 1,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer13Radical.states.stateDdown = {
  x: layer13.x + 72,
  y: layer13.y + 120,
  width: 8,
  height: 8,
  opacity: 0,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer13.placeBefore(layer13Square);

layer13.placeBefore(layer13Exponent);

layer13.placeBefore(layer13Radical);

layer13Square.placeBefore(layer13Exponent);

layer13Square.placeBefore(layer13Radical);

layer13.onClick(function() {
  if (layer13.y === 416) {
    textLayer.input.value = textLayer.input.value + "^2";
    layer13Square.animate("stateTap");
    return layer13Square.onStateSwitchEnd(function() {
      if (layer13Square.states.current.name === "stateTap") {
        return layer13Square.stateCycle("stateTap", "stateMiddle");
      }
    });
  }
});

layer13.onSwipeUpStart(function() {
  if (layer13Square.states.current.name === "stateMiddle") {
    textLayer.input.value = textLayer.input.value + "√";
    layer13Exponent.animate("stateFly");
    layer13Square.animate("stateUp");
    return layer13Radical.animate("stateMiddle");
  }
});

layer13.onSwipeDown(function() {
  if (layer13Square.states.current.name === "stateMiddle") {
    textLayer.input.value = textLayer.input.value + "^";
    layer13Exponent.animate("stateMiddle");
    layer13Square.animate("stateDown");
    return layer13Radical.animate("stateDdown");
  }
});

layer13.onSwipeEnd(function() {
  layer13Exponent.animate("stateUp");
  layer13Square.animate("stateMiddle");
  return layer13Radical.animate("stateDown");
});

layer14 = new Layer({
  x: 372,
  y: 416,
  width: 148,
  height: 148,
  opacity: 0
});

layer12.draggable.enabled = true;

layer12.draggable.horizontal = false;

layer12.draggable.constraints = {
  x: 372,
  y: 416,
  width: 148,
  height: 148
};

layer14Delite = new Layer({
  image: "images/014_delite.png",
  x: 372,
  y: 416,
  width: 148,
  height: 148
});

layer14Delite.states.stateDown = {
  x: layer14Delite.x + 41,
  y: layer14Delite.y + 83,
  width: 70,
  height: 70,
  opacity: 0.4,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer14Delite.states.stateMiddle = {
  x: layer14Delite.x,
  y: layer14Delite.y,
  width: 148,
  height: 148,
  opacity: 1,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer14Delite.states.stateTap = {
  x: layer14Delite.x + 9,
  y: layer14Delite.y + 9,
  width: 130,
  height: 130,
  opacity: 1,
  animationOptions: {
    time: timeAnimation * 0.5,
    curve: curveAnimation
  }
};

layer14Cancel = new Layer({
  image: "images/014_cancel.png",
  x: layer14.x + 41,
  y: layer14.y - 13,
  width: 70,
  height: 70,
  opacity: 0.4
});

layer14Cancel.states.stateUp = {
  x: layer14.x + 41,
  y: layer14.y - 13,
  width: 70,
  height: 70,
  opacity: 0.4,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer14Cancel.states.stateMiddle = {
  x: layer14.x,
  y: layer14.y,
  width: 148,
  height: 148,
  opacity: 1,
  animationOptions: {
    time: timeAnimation,
    curve: curveAnimation
  }
};

layer14.placeBefore(layer14Cancel);

layer14.placeBefore(layer14Delite);

layer14Delite.placeBefore(layer14Cancel);


/*
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
 */

layer14.onClick(function() {
  if (layer14.y === 416) {
    textLayer.input.value = textLayer.input.value + "^2";
    layer14Delite.animate("stateTap");
    return layer14Delite.onStateSwitchEnd(function() {
      if (layer14Delite.states.current.name === "stateTap") {
        return layer14Delite.stateCycle("stateTap", "stateMiddle");
      }
    });
  }
});

layer14.onSwipeDown(function() {
  if (layer14Delite.states.current.name === "stateMiddle") {
    layer14Cancel.animate("stateMiddle");
    return layer14Delite.animate("stateDown");
  }
});

layer14.onSwipeEnd(function() {
  layer14Cancel.animate("stateUp");
  return layer14Delite.animate("stateMiddle");
});
