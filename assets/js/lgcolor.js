/* lgcolor.js ver.1.0.0 November 2018 by mohammedrishad.com */
(function() {
	// append lgcolor html
	var elem = '<div class="lg-row lg-white" style="display:none;"> <div class="lg-col m12" id="main"> <div class="lg-container lg-padding-large" style="background-color:#f1f1f1;border:1px solid #d3d3d3;"> <div class="lg-row"> <div class="lg-col m6"> <div id="result01"></div><br></div><div class="lg-col m1">&nbsp;</div><div class="lg-col m5"> <div style="font-family:Consolas, \'courier new\';padding-bottom:8px;"> <input id="color1" class="jscolor{uppercase:false, hash:true}" type="text" class="lg-input lg-border" onchange="setGradient()" onkeydown="submitOnEnter(event)" value="#00f260" > <div style="height:5px"></div><input id="color2" class="jscolor{uppercase:false, hash:true}" type="text" class="lg-input lg-border" onchange="setGradient()" onkeydown="submitOnEnter(event)" value="#0575e6" > </div><div class="lg-col s3 directionbtn"><div id="dir1" onclick="setGradient(\'bottom\')"></div></div><div class="lg-col s3 directionbtn"><div id="dir2" onclick="setGradient(\'right\')"></div></div><div class="lg-col s3 directionbtn"><div id="dir3" onclick="setGradient(\'top left\')"></div></div><div class="lg-col s3 directionbtn"><div id="dir4" onclick="setGradient(\'top right\')"></div></div><div class="lg-col s3 directionbtn"><div id="dir5" onclick="setGradient(\'top\')"></div></div><div class="lg-col s3 directionbtn"><div id="dir6" onclick="setGradient(\'left\')"></div></div><div class="lg-col s3 directionbtn"><div id="dir7" onclick="setGradient(\'bottom left\')"></div></div><div class="lg-col s3 directionbtn"><div id="dir8" onclick="setGradient(\'bottom right\')"></div></div></div></div><div class="lg-row" style="height: 22px;margin: 15px 0;" ><div class="lg-col m2" style="font-family:Consolas, \'courier new\';"> <div id="touchbutton1" style="text-align:center;display:none;"> <button ontouchstart="touchslider(1, -1, event)" ontouchend="stoptouchslider()" onmousedown="touchslider(1, -1, event)" onmouseup="stoptouchslider()">&#10094;</button> <button ontouchstart="touchslider(1, 1, event)" ontouchend="stoptouchslider()" onmousedown="touchslider(1, 1, event)" onmouseup="stoptouchslider()">&#10095;</button> </div><input class="lg-input lg-border" type="number" id="pow1" oninput="setGradient()" onchange="setGradient()" value="0"><br class="lg-hide-medium lg-hide-large"></div><div class="lg-col m8" style="position:relative;"> <div id="shield"></div><div id="redtable"></div></div><div class="lg-col m2" style="font-family:Consolas, \'courier new\';"> <br class="lg-hide-medium lg-hide-large"> <input class="lg-input lg-border" type="number" id="pow2" oninput="setGradient()" onchange="setGradient()" value="100"> <div id="touchbutton2" style="display:none;text-align:center;"> <button ontouchstart="touchslider(2, -1, event)" ontouchend="stoptouchslider()" onmousedown="touchslider(2, -1, event)" onmouseup="stoptouchslider()">&#10094;</button> <button ontouchstart="touchslider(2, 1, event)" ontouchend="stoptouchslider()" onmousedown="touchslider(2, 1, event)" onmouseup="stoptouchslider()">&#10095;</button> </div></div></div><div class="lg-row"><div class="lg-col l12 m12 lg-center" style="font-family:Consolas, \'courier new\';"> <input type="hidden" id="gradientinput" name="gradientinput" value=""> <button class="lg-button lg-close">Close</button> <button class="lg-button lg-apply">Apply</button> <br class="lg-hide-medium lg-hide-large"></div></div></div></div></div>';
	var bodyTag = document.getElementsByTagName('body')[0];
	bodyTag.insertAdjacentHTML('beforeend', elem);

	function lgcolor(color, elmnt) {
		if(!(this instanceof lgcolor)) {
			return new lgcolor(color, elmnt);
		}
		if(typeof color == "object") {
			return color;
		}
		this.attachValues(toColorObject(color));
		if(elmnt) {
			elmnt.style.backgroundColor = this.toRgbString();
		}
	}
	lgcolor.prototype = {
		toRgbString: function() {
			return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
		},
		toRgbaString: function() {
			return "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.opacity + ")";
		},
		toHwbString: function() {
			return "hwb(" + this.hue + ", " + Math.round(this.whiteness * 100) + "%, " + Math.round(this.blackness * 100) + "%)";
		},
		toHwbStringDecimal: function() {
			return "hwb(" + this.hue + ", " + this.whiteness + ", " + this.blackness + ")";
		},
		toHwbaString: function() {
			return "hwba(" + this.hue + ", " + Math.round(this.whiteness * 100) + "%, " + Math.round(this.blackness * 100) + "%, " + this.opacity + ")";
		},
		toHslString: function() {
			return "hsl(" + this.hue + ", " + Math.round(this.sat * 100) + "%, " + Math.round(this.lightness * 100) + "%)";
		},
		toHslStringDecimal: function() {
			return "hsl(" + this.hue + ", " + this.sat + ", " + this.lightness + ")";
		},
		toHslaString: function() {
			return "hsla(" + this.hue + ", " + Math.round(this.sat * 100) + "%, " + Math.round(this.lightness * 100) + "%, " + this.opacity + ")";
		},
		toCmykString: function() {
			return "cmyk(" + Math.round(this.cyan * 100) + "%, " + Math.round(this.magenta * 100) + "%, " + Math.round(this.yellow * 100) + "%, " + Math.round(this.black * 100) + "%)";
		},
		toCmykStringDecimal: function() {
			return "cmyk(" + this.cyan + ", " + this.magenta + ", " + this.yellow + ", " + this.black + ")";
		},
		toNcolString: function() {
			return this.ncol + ", " + Math.round(this.whiteness * 100) + "%, " + Math.round(this.blackness * 100) + "%";
		},
		toNcolStringDecimal: function() {
			return this.ncol + ", " + this.whiteness + ", " + this.blackness;
		},
		toNcolaString: function() {
			return this.ncol + ", " + Math.round(this.whiteness * 100) + "%, " + Math.round(this.blackness * 100) + "%, " + this.opacity;
		},
		toName: function() {
			var r, g, b, colorhexs = getColorArr('hexs');
			for(i = 0; i < colorhexs.length; i++) {
				r = parseInt(colorhexs[i].substr(0, 2), 16);
				g = parseInt(colorhexs[i].substr(2, 2), 16);
				b = parseInt(colorhexs[i].substr(4, 2), 16);
				if(this.red == r && this.green == g && this.blue == b) {
					return getColorArr('names')[i];
				}
			}
			return "";
		},
		toHexString: function() {
			var r = toHex(this.red);
			var g = toHex(this.green);
			var b = toHex(this.blue);
			return "#" + r + g + b;
		},
		toRgb: function() {
			return {
				r: this.red,
				g: this.green,
				b: this.blue,
				a: this.opacity
			};
		},
		toHsl: function() {
			return {
				h: this.hue,
				s: this.sat,
				l: this.lightness,
				a: this.opacity
			};
		},
		toHwb: function() {
			return {
				h: this.hue,
				w: this.whiteness,
				b: this.blackness,
				a: this.opacity
			};
		},
		toCmyk: function() {
			return {
				c: this.cyan,
				m: this.magenta,
				y: this.yellow,
				k: this.black,
				a: this.opacity
			};
		},
		toNcol: function() {
			return {
				ncol: this.ncol,
				w: this.whiteness,
				b: this.blackness,
				a: this.opacity
			};
		},
		isDark: function(n) {
			var m = (n || 128);
			return(((this.red * 299 + this.green * 587 + this.blue * 114) / 1000) < m);
		},
		saturate: function(n) {
			var x, rgb, color;
			x = (n / 100 || 0.1);
			this.sat += x;
			if(this.sat > 1) {
				this.sat = 1;
			}
			rgb = hslToRgb(this.hue, this.sat, this.lightness);
			color = colorObject(rgb, this.opacity, this.hue, this.sat);
			this.attachValues(color);
		},
		desaturate: function(n) {
			var x, rgb, color;
			x = (n / 100 || 0.1);
			this.sat -= x;
			if(this.sat < 0) {
				this.sat = 0;
			}
			rgb = hslToRgb(this.hue, this.sat, this.lightness);
			color = colorObject(rgb, this.opacity, this.hue, this.sat);
			this.attachValues(color);
		},
		lighter: function(n) {
			var x, rgb, color;
			x = (n / 100 || 0.1);
			this.lightness += x;
			if(this.lightness > 1) {
				this.lightness = 1;
			}
			rgb = hslToRgb(this.hue, this.sat, this.lightness);
			color = colorObject(rgb, this.opacity, this.hue, this.sat);
			this.attachValues(color);
		},
		darker: function(n) {
			var x, rgb, color;
			x = (n / 100 || 0.1);
			this.lightness -= x;
			if(this.lightness < 0) {
				this.lightness = 0;
			}
			rgb = hslToRgb(this.hue, this.sat, this.lightness);
			color = colorObject(rgb, this.opacity, this.hue, this.sat);
			this.attachValues(color);
		},
		attachValues: function(color) {
			this.red = color.red;
			this.green = color.green;
			this.blue = color.blue;
			this.hue = color.hue;
			this.sat = color.sat;
			this.lightness = color.lightness;
			this.whiteness = color.whiteness;
			this.blackness = color.blackness;
			this.cyan = color.cyan;
			this.magenta = color.magenta;
			this.yellow = color.yellow;
			this.black = color.black;
			this.ncol = color.ncol;
			this.opacity = color.opacity;
			this.valid = color.valid;
		}
	};

	function toColorObject(c) {
		var x, y, typ, arr = [],
			arrlength, i, opacity, match, a, hue, sat, rgb, colornames = [],
			colorhexs = [];
		c = lgtrim(c.toLowerCase());
		x = c.substr(0, 1).toUpperCase();
		y = c.substr(1);
		a = 1;
		if((x == "R" || x == "Y" || x == "G" || x == "C" || x == "B" || x == "M" || x == "W") && !isNaN(y)) {
			if(c.length == 6 && c.indexOf(",") == -1) {} else {
				c = "ncol(" + c + ")";
			}
		}
		if(c.length != 3 && c.length != 6 && !isNaN(c)) {
			c = "ncol(" + c + ")";
		}
		if(c.indexOf(",") > 0 && c.indexOf("(") == -1) {
			c = "ncol(" + c + ")";
		}
		if(c.substr(0, 3) == "rgb" || c.substr(0, 3) == "hsl" || c.substr(0, 3) == "hwb" || c.substr(0, 4) == "ncol" || c.substr(0, 4) == "cmyk") {
			if(c.substr(0, 4) == "ncol") {
				if(c.split(",").length == 4 && c.indexOf("ncola") == -1) {
					c = c.replace("ncol", "ncola");
				}
				typ = "ncol";
				c = c.substr(4);
			} else if(c.substr(0, 4) == "cmyk") {
				typ = "cmyk";
				c = c.substr(4);
			} else {
				typ = c.substr(0, 3);
				c = c.substr(3);
			}
			arrlength = 3;
			opacity = false;
			if(c.substr(0, 1).toLowerCase() == "a") {
				arrlength = 4;
				opacity = true;
				c = c.substr(1);
			} else if(typ == "cmyk") {
				arrlength = 4;
				if(c.split(",").length == 5) {
					arrlength = 5;
					opacity = true;
				}
			}
			c = c.replace("(", "");
			c = c.replace(")", "");
			arr = c.split(",");
			if(typ == "rgb") {
				if(arr.length != arrlength) {
					return emptyObject();
				}
				for(i = 0; i < arrlength; i++) {
					if(arr[i] == "" || arr[i] == " ") {
						arr[i] = "0";
					}
					if(arr[i].indexOf("%") > -1) {
						arr[i] = arr[i].replace("%", "");
						arr[i] = Number(arr[i] / 100);
						if(i < 3) {
							arr[i] = Math.round(arr[i] * 255);
						}
					}
					if(isNaN(arr[i])) {
						return emptyObject();
					}
					if(parseInt(arr[i]) > 255) {
						arr[i] = 255;
					}
					if(i < 3) {
						arr[i] = parseInt(arr[i]);
					}
					if(i == 3 && Number(arr[i]) > 1) {
						arr[i] = 1;
					}
				}
				rgb = {
					r: arr[0],
					g: arr[1],
					b: arr[2]
				};
				if(opacity == true) {
					a = Number(arr[3]);
				}
			}
			if(typ == "hsl" || typ == "hwb" || typ == "ncol") {
				while(arr.length < arrlength) {
					arr.push("0");
				}
				if(typ == "hsl" || typ == "hwb") {
					if(parseInt(arr[0]) >= 360) {
						arr[0] = 0;
					}
				}
				for(i = 1; i < arrlength; i++) {
					if(arr[i].indexOf("%") > -1) {
						arr[i] = arr[i].replace("%", "");
						arr[i] = Number(arr[i]);
						if(isNaN(arr[i])) {
							return emptyObject();
						}
						arr[i] = arr[i] / 100;
					} else {
						arr[i] = Number(arr[i]);
					}
					if(Number(arr[i]) > 1) {
						arr[i] = 1;
					}
					if(Number(arr[i]) < 0) {
						arr[i] = 0;
					}
				}
				if(typ == "hsl") {
					rgb = hslToRgb(arr[0], arr[1], arr[2]);
					hue = Number(arr[0]);
					sat = Number(arr[1]);
				}
				if(typ == "hwb") {
					rgb = hwbToRgb(arr[0], arr[1], arr[2]);
				}
				if(typ == "ncol") {
					rgb = ncolToRgb(arr[0], arr[1], arr[2]);
				}
				if(opacity == true) {
					a = Number(arr[3]);
				}
			}
			if(typ == "cmyk") {
				while(arr.length < arrlength) {
					arr.push("0");
				}
				for(i = 0; i < arrlength; i++) {
					if(arr[i].indexOf("%") > -1) {
						arr[i] = arr[i].replace("%", "");
						arr[i] = Number(arr[i]);
						if(isNaN(arr[i])) {
							return emptyObject();
						}
						arr[i] = arr[i] / 100;
					} else {
						arr[i] = Number(arr[i]);
					}
					if(Number(arr[i]) > 1) {
						arr[i] = 1;
					}
					if(Number(arr[i]) < 0) {
						arr[i] = 0;
					}
				}
				rgb = cmykToRgb(arr[0], arr[1], arr[2], arr[3]);
				if(opacity == true) {
					a = Number(arr[4]);
				}
			}
		} else if(c.substr(0, 3) == "ncs") {
			rgb = ncsToRgb(c);
		} else {
			match = false;
			colornames = getColorArr('names');
			for(i = 0; i < colornames.length; i++) {
				if(c.toLowerCase() == colornames[i].toLowerCase()) {
					colorhexs = getColorArr('hexs');
					match = true;
					rgb = {
						r: parseInt(colorhexs[i].substr(0, 2), 16),
						g: parseInt(colorhexs[i].substr(2, 2), 16),
						b: parseInt(colorhexs[i].substr(4, 2), 16)
					};
					break;
				}
			}
			if(match == false) {
				c = c.replace("#", "");
				if(c.length == 3) {
					c = c.substr(0, 1) + c.substr(0, 1) + c.substr(1, 1) + c.substr(1, 1) + c.substr(2, 1) + c.substr(2, 1);
				}
				for(i = 0; i < c.length; i++) {
					if(!isHex(c.substr(i, 1))) {
						return emptyObject();
					}
				}
				arr[0] = parseInt(c.substr(0, 2), 16);
				arr[1] = parseInt(c.substr(2, 2), 16);
				arr[2] = parseInt(c.substr(4, 2), 16);
				for(i = 0; i < 3; i++) {
					if(isNaN(arr[i])) {
						return emptyObject();
					}
				}
				rgb = {
					r: arr[0],
					g: arr[1],
					b: arr[2]
				};
			}
		}
		return colorObject(rgb, a, hue, sat);
	}

	function colorObject(rgb, a, h, s) {
		var hsl, hwb, cmyk, ncol, color, hue, sat;
		if(!rgb) {
			return emptyObject();
		}
		if(!a) {
			a = 1;
		}
		hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
		hwb = rgbToHwb(rgb.r, rgb.g, rgb.b);
		cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
		hue = (h || hsl.h);
		sat = (s || hsl.s);
		ncol = hueToNcol(hue);
		color = {
			red: rgb.r,
			green: rgb.g,
			blue: rgb.b,
			hue: hue,
			sat: sat,
			lightness: hsl.l,
			whiteness: hwb.w,
			blackness: hwb.b,
			cyan: cmyk.c,
			magenta: cmyk.m,
			yellow: cmyk.y,
			black: cmyk.k,
			ncol: ncol,
			opacity: a,
			valid: true
		};
		color = roundDecimals(color);
		return color;
	}

	function emptyObject() {
		return {
			red: 0,
			green: 0,
			blue: 0,
			hue: 0,
			sat: 0,
			lightness: 0,
			whiteness: 0,
			blackness: 0,
			cyan: 0,
			magenta: 0,
			yellow: 0,
			black: 0,
			ncol: "R",
			opacity: 1,
			valid: false
		};
	}

	function getColorArr(x) {
		if(x == "names") {
			return ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];
		}
		if(x == "hexs") {
			return ['f0f8ff', 'faebd7', '00ffff', '7fffd4', 'f0ffff', 'f5f5dc', 'ffe4c4', '000000', 'ffebcd', '0000ff', '8a2be2', 'a52a2a', 'deb887', '5f9ea0', '7fff00', 'd2691e', 'ff7f50', '6495ed', 'fff8dc', 'dc143c', '00ffff', '00008b', '008b8b', 'b8860b', 'a9a9a9', 'a9a9a9', '006400', 'bdb76b', '8b008b', '556b2f', 'ff8c00', '9932cc', '8b0000', 'e9967a', '8fbc8f', '483d8b', '2f4f4f', '2f4f4f', '00ced1', '9400d3', 'ff1493', '00bfff', '696969', '696969', '1e90ff', 'b22222', 'fffaf0', '228b22', 'ff00ff', 'dcdcdc', 'f8f8ff', 'ffd700', 'daa520', '808080', '808080', '008000', 'adff2f', 'f0fff0', 'ff69b4', 'cd5c5c', '4b0082', 'fffff0', 'f0e68c', 'e6e6fa', 'fff0f5', '7cfc00', 'fffacd', 'add8e6', 'f08080', 'e0ffff', 'fafad2', 'd3d3d3', 'd3d3d3', '90ee90', 'ffb6c1', 'ffa07a', '20b2aa', '87cefa', '778899', '778899', 'b0c4de', 'ffffe0', '00ff00', '32cd32', 'faf0e6', 'ff00ff', '800000', '66cdaa', '0000cd', 'ba55d3', '9370db', '3cb371', '7b68ee', '00fa9a', '48d1cc', 'c71585', '191970', 'f5fffa', 'ffe4e1', 'ffe4b5', 'ffdead', '000080', 'fdf5e6', '808000', '6b8e23', 'ffa500', 'ff4500', 'da70d6', 'eee8aa', '98fb98', 'afeeee', 'db7093', 'ffefd5', 'ffdab9', 'cd853f', 'ffc0cb', 'dda0dd', 'b0e0e6', '800080', '663399', 'ff0000', 'bc8f8f', '4169e1', '8b4513', 'fa8072', 'f4a460', '2e8b57', 'fff5ee', 'a0522d', 'c0c0c0', '87ceeb', '6a5acd', '708090', '708090', 'fffafa', '00ff7f', '4682b4', 'd2b48c', '008080', 'd8bfd8', 'ff6347', '40e0d0', 'ee82ee', 'f5deb3', 'ffffff', 'f5f5f5', 'ffff00', '9acd32'];
		}
	}

	function roundDecimals(c) {
		c.red = Number(c.red.toFixed(0));
		c.green = Number(c.green.toFixed(0));
		c.blue = Number(c.blue.toFixed(0));
		c.hue = Number(c.hue.toFixed(0));
		c.sat = Number(c.sat.toFixed(2));
		c.lightness = Number(c.lightness.toFixed(2));
		c.whiteness = Number(c.whiteness.toFixed(2));
		c.blackness = Number(c.blackness.toFixed(2));
		c.cyan = Number(c.cyan.toFixed(2));
		c.magenta = Number(c.magenta.toFixed(2));
		c.yellow = Number(c.yellow.toFixed(2));
		c.black = Number(c.black.toFixed(2));
		c.ncol = c.ncol.substr(0, 1) + Math.round(Number(c.ncol.substr(1)));
		c.opacity = Number(c.opacity.toFixed(2));
		return c;
	}

	function hslToRgb(hue, sat, light) {
		var t1, t2, r, g, b;
		hue = hue / 60;
		if(light <= 0.5) {
			t2 = light * (sat + 1);
		} else {
			t2 = light + sat - (light * sat);
		}
		t1 = light * 2 - t2;
		r = hueToRgb(t1, t2, hue + 2) * 255;
		g = hueToRgb(t1, t2, hue) * 255;
		b = hueToRgb(t1, t2, hue - 2) * 255;
		return {
			r: r,
			g: g,
			b: b
		};
	}

	function hueToRgb(t1, t2, hue) {
		if(hue < 0) hue += 6;
		if(hue >= 6) hue -= 6;
		if(hue < 1) return(t2 - t1) * hue + t1;
		else if(hue < 3) return t2;
		else if(hue < 4) return(t2 - t1) * (4 - hue) + t1;
		else return t1;
	}

	function hwbToRgb(hue, white, black) {
		var i, rgb, rgbArr = [],
			tot;
		rgb = hslToRgb(hue, 1, 0.50);
		rgbArr[0] = rgb.r / 255;
		rgbArr[1] = rgb.g / 255;
		rgbArr[2] = rgb.b / 255;
		tot = white + black;
		if(tot > 1) {
			white = Number((white / tot).toFixed(2));
			black = Number((black / tot).toFixed(2));
		}
		for(i = 0; i < 3; i++) {
			rgbArr[i] *= (1 - (white) - (black));
			rgbArr[i] += (white);
			rgbArr[i] = Number(rgbArr[i] * 255);
		}
		return {
			r: rgbArr[0],
			g: rgbArr[1],
			b: rgbArr[2]
		};
	}

	function cmykToRgb(c, m, y, k) {
		var r, g, b;
		r = 255 - ((Math.min(1, c * (1 - k) + k)) * 255);
		g = 255 - ((Math.min(1, m * (1 - k) + k)) * 255);
		b = 255 - ((Math.min(1, y * (1 - k) + k)) * 255);
		return {
			r: r,
			g: g,
			b: b
		};
	}

	function ncolToRgb(ncol, white, black) {
		var letter, percent, h, w, b;
		h = ncol;
		if(isNaN(ncol.substr(0, 1))) {
			letter = ncol.substr(0, 1).toUpperCase();
			percent = ncol.substr(1);
			if(percent == "") {
				percent = 0;
			}
			percent = Number(percent);
			if(isNaN(percent)) {
				return false;
			}
			if(letter == "R") {
				h = 0 + (percent * 0.6);
			}
			if(letter == "Y") {
				h = 60 + (percent * 0.6);
			}
			if(letter == "G") {
				h = 120 + (percent * 0.6);
			}
			if(letter == "C") {
				h = 180 + (percent * 0.6);
			}
			if(letter == "B") {
				h = 240 + (percent * 0.6);
			}
			if(letter == "M") {
				h = 300 + (percent * 0.6);
			}
			if(letter == "W") {
				h = 0;
				white = 1 - (percent / 100);
				black = (percent / 100);
			}
		}
		return hwbToRgb(h, white, black);
	}

	function hueToNcol(hue) {
		while(hue >= 360) {
			hue = hue - 360;
		}
		if(hue < 60) {
			return "R" + (hue / 0.6);
		}
		if(hue < 120) {
			return "Y" + ((hue - 60) / 0.6);
		}
		if(hue < 180) {
			return "G" + ((hue - 120) / 0.6);
		}
		if(hue < 240) {
			return "C" + ((hue - 180) / 0.6);
		}
		if(hue < 300) {
			return "B" + ((hue - 240) / 0.6);
		}
		if(hue < 360) {
			return "M" + ((hue - 300) / 0.6);
		}
	}

	function ncsToRgb(ncs) {
		var black, chroma, bc, percent, black1, chroma1, red1, factor1, blue1, red1, red2, green2, blue2, max, factor2, grey, r, g, b;
		ncs = lgtrim(ncs).toUpperCase();
		ncs = ncs.replace("(", "");
		ncs = ncs.replace(")", "");
		ncs = ncs.replace("NCS", "NCS ");
		ncs = ncs.replace(/  /g, " ");
		if(ncs.indexOf("NCS") == -1) {
			ncs = "NCS " + ncs;
		}
		ncs = ncs.match(/^(?:NCS|NCS\sS)\s(\d{2})(\d{2})-(N|[A-Z])(\d{2})?([A-Z])?$/);
		if(ncs === null) return false;
		black = parseInt(ncs[1], 10);
		chroma = parseInt(ncs[2], 10);
		bc = ncs[3];
		if(bc != "N" && bc != "Y" && bc != "R" && bc != "B" && bc != "G") {
			return false;
		}
		percent = parseInt(ncs[4], 10) || 0;
		if(bc !== 'N') {
			black1 = (1.05 * black - 5.25);
			chroma1 = chroma;
			if(bc === 'Y' && percent <= 60) {
				red1 = 1;
			} else if((bc === 'Y' && percent > 60) || (bc === 'R' && percent <= 80)) {
				if(bc === 'Y') {
					factor1 = percent - 60;
				} else {
					factor1 = percent + 40;
				}
				red1 = ((Math.sqrt(14884 - Math.pow(factor1, 2))) - 22) / 100;
			} else if((bc === 'R' && percent > 80) || (bc === 'B')) {
				red1 = 0;
			} else if(bc === 'G') {
				factor1 = (percent - 170);
				red1 = ((Math.sqrt(33800 - Math.pow(factor1, 2))) - 70) / 100;
			}
			if(bc === 'Y' && percent <= 80) {
				blue1 = 0;
			} else if((bc === 'Y' && percent > 80) || (bc === 'R' && percent <= 60)) {
				if(bc === 'Y') {
					factor1 = (percent - 80) + 20.5;
				} else {
					factor1 = (percent + 20) + 20.5;
				}
				blue1 = (104 - (Math.sqrt(11236 - Math.pow(factor1, 2)))) / 100;
			} else if((bc === 'R' && percent > 60) || (bc === 'B' && percent <= 80)) {
				if(bc === 'R') {
					factor1 = (percent - 60) - 60;
				} else {
					factor1 = (percent + 40) - 60;
				}
				blue1 = ((Math.sqrt(10000 - Math.pow(factor1, 2))) - 10) / 100;
			} else if((bc === 'B' && percent > 80) || (bc === 'G' && percent <= 40)) {
				if(bc === 'B') {
					factor1 = (percent - 80) - 131;
				} else {
					factor1 = (percent + 20) - 131;
				}
				blue1 = (122 - (Math.sqrt(19881 - Math.pow(factor1, 2)))) / 100;
			} else if(bc === 'G' && percent > 40) {
				blue1 = 0;
			}
			if(bc === 'Y') {
				green1 = (85 - 17 / 20 * percent) / 100;
			} else if(bc === 'R' && percent <= 60) {
				green1 = 0;
			} else if(bc === 'R' && percent > 60) {
				factor1 = (percent - 60) + 35;
				green1 = (67.5 - (Math.sqrt(5776 - Math.pow(factor1, 2)))) / 100;
			} else if(bc === 'B' && percent <= 60) {
				factor1 = (1 * percent - 68.5);
				green1 = (6.5 + (Math.sqrt(7044.5 - Math.pow(factor1, 2)))) / 100;
			} else if((bc === 'B' && percent > 60) || (bc === 'G' && percent <= 60)) {
				green1 = 0.9;
			} else if(bc === 'G' && percent > 60) {
				factor1 = (percent - 60);
				green1 = (90 - (1 / 8 * factor1)) / 100;
			}
			factor1 = (red1 + green1 + blue1) / 3;
			red2 = ((factor1 - red1) * (100 - chroma1) / 100) + red1;
			green2 = ((factor1 - green1) * (100 - chroma1) / 100) + green1;
			blue2 = ((factor1 - blue1) * (100 - chroma1) / 100) + blue1;
			if(red2 > green2 && red2 > blue2) {
				max = red2;
			} else if(green2 > red2 && green2 > blue2) {
				max = green2;
			} else if(blue2 > red2 && blue2 > green2) {
				max = blue2;
			} else {
				max = (red2 + green2 + blue2) / 3;
			}
			factor2 = 1 / max;
			r = parseInt((red2 * factor2 * (100 - black1) / 100) * 255, 10);
			g = parseInt((green2 * factor2 * (100 - black1) / 100) * 255, 10);
			b = parseInt((blue2 * factor2 * (100 - black1) / 100) * 255, 10);
			if(r > 255) {
				r = 255;
			}
			if(g > 255) {
				g = 255;
			}
			if(b > 255) {
				b = 255;
			}
			if(r < 0) {
				r = 0;
			}
			if(g < 0) {
				g = 0;
			}
			if(b < 0) {
				b = 0;
			}
		} else {
			grey = parseInt((1 - black / 100) * 255, 10);
			if(grey > 255) {
				grey = 255;
			}
			if(grey < 0) {
				grey = 0;
			}
			r = grey;
			g = grey;
			b = grey;
		}
		return {
			r: r,
			g: g,
			b: b
		};
	}

	function rgbToHsl(r, g, b) {
		var min, max, i, l, s, maxcolor, h, rgb = [];
		rgb[0] = r / 255;
		rgb[1] = g / 255;
		rgb[2] = b / 255;
		min = rgb[0];
		max = rgb[0];
		maxcolor = 0;
		for(i = 0; i < rgb.length - 1; i++) {
			if(rgb[i + 1] <= min) {
				min = rgb[i + 1];
			}
			if(rgb[i + 1] >= max) {
				max = rgb[i + 1];
				maxcolor = i + 1;
			}
		}
		if(maxcolor == 0) {
			h = (rgb[1] - rgb[2]) / (max - min);
		}
		if(maxcolor == 1) {
			h = 2 + (rgb[2] - rgb[0]) / (max - min);
		}
		if(maxcolor == 2) {
			h = 4 + (rgb[0] - rgb[1]) / (max - min);
		}
		if(isNaN(h)) {
			h = 0;
		}
		h = h * 60;
		if(h < 0) {
			h = h + 360;
		}
		l = (min + max) / 2;
		if(min == max) {
			s = 0;
		} else {
			if(l < 0.5) {
				s = (max - min) / (max + min);
			} else {
				s = (max - min) / (2 - max - min);
			}
		}
		s = s;
		return {
			h: h,
			s: s,
			l: l
		};
	}

	function rgbToHwb(r, g, b) {
		var h, w, bl;
		r = r / 255;
		g = g / 255;
		b = b / 255;
		max = Math.max(r, g, b);
		min = Math.min(r, g, b);
		chroma = max - min;
		if(chroma == 0) {
			h = 0;
		} else if(r == max) {
			h = (((g - b) / chroma) % 6) * 360;
		} else if(g == max) {
			h = ((((b - r) / chroma) + 2) % 6) * 360;
		} else {
			h = ((((r - g) / chroma) + 4) % 6) * 360;
		}
		w = min;
		bl = 1 - max;
		return {
			h: h,
			w: w,
			b: bl
		};
	}

	function rgbToCmyk(r, g, b) {
		var c, m, y, k;
		r = r / 255;
		g = g / 255;
		b = b / 255;
		max = Math.max(r, g, b);
		k = 1 - max;
		if(k == 1) {
			c = 0;
			m = 0;
			y = 0;
		} else {
			c = (1 - r - k) / (1 - k);
			m = (1 - g - k) / (1 - k);
			y = (1 - b - k) / (1 - k);
		}
		return {
			c: c,
			m: m,
			y: y,
			k: k
		};
	}

	function toHex(n) {
		var hex = n.toString(16);
		while(hex.length < 2) {
			hex = "0" + hex;
		}
		return hex;
	}

	function cl(x) {
		console.log(x);
	}

	function lgtrim(x) {
		return x.replace(/^\s+|\s+$/g, '');
	}

	function isHex(x) {
		return('0123456789ABCDEFabcdef'.indexOf(x) > -1);
	}
	window.lgcolor = lgcolor;
})();

function lgSetColorsByAttribute() {
	var z, i, att;
	z = document.getElementsByTagName("*");
	for(i = 0; i < z.length; i++) {
		att = z[i].getAttribute("data-lg-color");
		if(att) {
			z[i].style.backgroundColor = lgcolor(att).toRgbString();
		}
	}
}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	document.getElementById("touchbutton1").style.display = "block";
	document.getElementById("touchbutton2").style.display = "block";
}
var touchinterval;

function touchslider(x, n, e) {
	e.preventDefault();
	var pow = Number(document.getElementById("pow" + x).value);
	document.getElementById("pow" + x).value = pow + n;
	setGradient();
	touchinterval = window.setInterval(function() {
		var pow = Number(document.getElementById("pow" + x).value);
		document.getElementById("pow" + x).value = pow + n;
		setGradient();
	}, 100);
}

function stoptouchslider() {
	window.clearInterval(touchinterval);
}

function drawRedTable() {
	var x = "",
		i, j, n, g, b, cARR = [],
		color, col1, col2, tr, tg, tb, br, bg, bb, pow1, pow2, pow3;
	g = 0;
	b = 0;
	x += "<table class='tableslider'>"
	x += "<tr>";
	for(i = 0; i <= 100; i++) {
		x += "<td";
		x += " style='position:relative;padding:0;'><div class='pointer' onmousedown='dragstart(1, event)' ontouchstart='dragstart(1, event)' id='redpointer" + i + "'><div>" + i + "</div><i class='fa fa-caret-down'></i></div></td>";
	}
	x += "</tr>";
	pow1 = Number(document.getElementById("pow1").value);
	pow2 = Number(document.getElementById("pow2").value);
	pow3 = pow2 - pow1;
	col1 = lgcolor(document.getElementById("color1").value);
	col2 = lgcolor(document.getElementById("color2").value);
	tr = col1.red;
	tg = col1.green;
	tb = col1.blue;
	br = col2.red;
	bg = col2.green;
	bb = col2.blue;
	n = 0;
	x += "<tr>";
	for(j = pow1; j <= pow2; j++) {
		n++;
		opacity = n / (pow3 + 1);
		rr = opacity * br + (1 - opacity) * tr
		rg = opacity * bg + (1 - opacity) * tg
		rb = opacity * bb + (1 - opacity) * tb
		rr = Math.round(rr);
		rg = Math.round(rg)
		rb = Math.round(rb)
		cARR[j] = "rgb(" + rr + "," + rg + "," + rb + ")";
	}
	for(i = 0; i <= 100; i++) {
		bordercolor = "#555555";
		if(pow2 < pow1) {
			bordercolor = "#f44336";
		}
		if((i < pow1 && i < pow2) || (i > pow2 && i > pow1)) {
			bordercolor = "transparent";
		}
		if(i < pow1) {
			color = col1.toRgbString();
		} else if(i >= pow2) {
			color = col2.toRgbString();
		} else {
			color = cARR[i];
		}
		if(i < 0) {
			color = "transparent";
		}
		if(i > 100) {
			color = "transparent";
		}
		x += "<td style='background:" + color + ";border-top:1px solid " + bordercolor + ";border-bottom:1px solid " + bordercolor + ";";
		if(pow1 < pow2) {
			if(i == pow1) {
				x += "border-left:1px solid " + bordercolor + ";"
			}
			if(i == pow2) {
				x += "border-right:1px solid " + bordercolor + ";";
			}
		} else {
			if(i == pow2) {
				x += "border-left:1px solid " + bordercolor + ";"
			}
			if(i == pow1) {
				x += "border-right:1px solid " + bordercolor + ";";
			}
		}
		x += "height:21px;width:1px;padding:0;'></td>";
	}
	x += "</tr>";
	x += "<tr>";
	for(i = 0; i <= 100; i++) {
		x += "<td";
		x += " style='position:relative;padding:0;'><div onmousedown='dragstart(2, event)' ontouchstart='dragstart(2, event)' class='pointerup' id='redpointerup" + i + "'><div>" + i + "</div><i class='fa fa-caret-up'></i></div></td>";
	}
	x += "</tr>";
	x += "</table>";
	document.getElementById("redtable").innerHTML = x;
	if(document.getElementById("redpointer" + pow1)) {
		document.getElementById("redpointer" + pow1).style.display = "block";
	}
	if(document.getElementById("redpointerup" + pow2)) {
		document.getElementById("redpointerup" + pow2).style.display = "block";
	}
}

function submitOnEnter(e) {
	keyboardKey = e.which || e.keyCode;
	if(keyboardKey == 13) {
		setGradient();
	}
}
var currentdir = "to bottom, ",
	direle = "dir1";

function setGradient(x) {
	var ele, col1, col2, pow1, pow2, i, r, g, b, rgb;
	col1 = lgcolor(document.getElementById("color1").value);
	col2 = lgcolor(document.getElementById("color2").value);
	pow1 = document.getElementById("pow1").value;
	pow2 = document.getElementById("pow2").value;
	ele = document.getElementById("result01");
	for(i = 1; i <= 8; i++) {
		document.getElementById("dir" + i).className = document.getElementById("dir" + i).className.replace("active", "");
	}
	if(x == "bottom") {
		currentdir = "to bottom, ";
		direle = "dir1";
	}
	if(x == "right") {
		currentdir = "to right, ";
		direle = "dir2";
	}
	if(x == "top left") {
		currentdir = "to top left, ";
		direle = "dir3";
	}
	if(x == "top right") {
		currentdir = "to top right, ";
		direle = "dir4";
	}
	if(x == "top") {
		currentdir = "to top, ";
		direle = "dir5";
	}
	if(x == "left") {
		currentdir = "to left, ";
		direle = "dir6";
	}
	if(x == "bottom left") {
		currentdir = "to bottom left, ";
		direle = "dir7";
	}
	if(x == "bottom right") {
		currentdir = "to bottom right, ";
		direle = "dir8";
	}
	document.getElementById(direle).className += "active";
	ele.style.background = "linear-gradient(" + currentdir + col1.toRgbString() + " " + pow1 + "%, " + col2.toRgbString() + " " + pow2 + "%)";
	<!--document.getElementById("stylepropval").innerHTML = "background: <span style='color:mediumblue'>linear-gradient(" + currentdir + col1.toHexString() + " " + pow1 + "%, " + col2.toHexString() + " " + pow2 + "%)</span><span style='color:black'>;</span>";-->
	document.getElementById("gradientinput").value = "linear-gradient(" + currentdir + col1.toHexString() + " " + pow1 + "%, " + col2.toHexString() + " " + pow2 + "%)";
	document.getElementById("dir1").style.background = "linear-gradient(to bottom, " + col1.toRgbString() + "," + col2.toRgbString() + ")";
	document.getElementById("dir2").style.background = "linear-gradient(to right, " + col1.toRgbString() + "," + col2.toRgbString() + ")";
	document.getElementById("dir3").style.background = "linear-gradient(to top left, " + col1.toRgbString() + "," + col2.toRgbString() + ")";
	document.getElementById("dir4").style.background = "linear-gradient(to top right, " + col1.toRgbString() + "," + col2.toRgbString() + ")";
	document.getElementById("dir5").style.background = "linear-gradient(to top, " + col1.toRgbString() + "," + col2.toRgbString() + ")";
	document.getElementById("dir6").style.background = "linear-gradient(to left, " + col1.toRgbString() + "," + col2.toRgbString() + ")";
	document.getElementById("dir7").style.background = "linear-gradient(to bottom left, " + col1.toRgbString() + "," + col2.toRgbString() + ")";
	document.getElementById("dir8").style.background = "linear-gradient(to bottom right, " + col1.toRgbString() + "," + col2.toRgbString() + ")";
	document.getElementById("dir1").style.background = "linear-gradient(to bottom, " + col1.toRgbString() + "," + col2.toRgbString() + ")";
	drawRedTable();
}
fgColor = function(c) {
		var c = c.substring(1); // strip #
		var rgb = parseInt(c, 16); // convert rrggbb to decimal
		var r = (rgb >> 16) & 0xff; // extract red
		var g = (rgb >> 8) & 0xff; // extract green
		var b = (rgb >> 0) & 0xff; // extract blue
		var luma = 0.213 * r + 0.715 * g + 0.072 * b; // per ITU-R BT.709
		if(luma > 255 / 2) {
			return "#000"
		} else {
			return "#fff"
		}
	};

function clickColor(n, hex, seltop, selleft, html5) {
	var c, cObj, colormap, areas, i, areacolor, cc;
	c = hex;
	cObj = lgcolor(c);
	colorhex = cObj.toHexString();
	if(cObj.valid) {} else {
		return;
	}
	r = cObj.red;
	g = cObj.green;
	b = cObj.blue;
	document.getElementById("color" + n).value = cObj.toHexString();
	setGradient();
}
setGradient();
dragging = false;
dragpointer = 1;

function dragstart(n, e) {
	e.preventDefault();
	dragging = true;
	dragpointer = n;
}
var prevPos = false;

function dragmove(e) {
	if(dragging) {
		document.getElementById("shield").style.display = "block";
		var pow = Number(document.getElementById("pow" + dragpointer).value);
		var pos = e.pageX;
		var cc;
		cc = window.innerWidth / 400;
		if(!prevPos) {
			prevPos = pos;
		}
		if(prevPos && (pos + cc) < prevPos) {
			document.getElementById("pow" + dragpointer).value = (pow - 1);
			setGradient();
			prevPos = pos;
		}
		if(prevPos && (pos - cc) > prevPos) {
			document.getElementById("pow" + dragpointer).value = (pow + 1);
			setGradient();
			prevPos = pos;
		}
	}
}

function dragend() {
	document.getElementById("shield").style.display = "none";
	dragging = false;
}
if(window.addEventListener) {
	window.addEventListener("mousemove", function(e) {
		dragmove(e);
	});
	window.addEventListener("touchmove", function(e) {
		dragmove(e);
	});
	window.addEventListener("mouseup", dragend);
	window.addEventListener("touchend", dragend);
}
var color_popup = document.getElementsByClassName('lg-white')[0]
var inputFields = document.getElementsByClassName('lgcolor');
var selected = '';
var lgArray;
var lgPosition;
document.getElementsByClassName('lg-close')[0].addEventListener("click", function(e) {
	color_popup.style.display = "none";
	document.getElementsByClassName('lgcolor-active')[0].classList.remove('lgcolor-active');
}, false);
for(var i = 0; i < inputFields.length; i++) {
	inputFields[i].onclick = function() {
		this.classList.add('lgcolor-active');
		selected = document.getElementsByClassName('lgcolor-active')[0]
		lgArray = selected.value.replace(/[()%,]/g,'');
		lgArray = lgArray.match("gradient\((.*)\)");
		lgArray = lgArray[1].split(' ');
		if (lgArray.length == 6){
			color1.setAttribute('style', 'background: ' + lgArray[2] + ' !important; ' + 'color: ' + fgColor(lgArray[2]) + ' !important;');
			color1.value = lgArray[2];
			color2.setAttribute('style', 'background:' + lgArray[4] + ' !important; ' + 'color: ' + fgColor(lgArray[4]) + ' !important;');
			color2.value = lgArray[4];
			document.getElementById('pow1').value = lgArray[3];	
			document.getElementById('pow2').value = lgArray[5];	
			lgPosition = lgArray[1];
		} else {
			color1.setAttribute('style', 'background: ' + lgArray[3] + ' !important; ' + 'color: ' + fgColor(lgArray[3]) + ' !important;');
			color1.value = lgArray[3];
			color2.setAttribute('style', 'background:' + lgArray[5] + ' !important; ' + 'color: ' + fgColor(lgArray[5]) + ' !important;');
			color2.value = lgArray[5];
			document.getElementById('pow1').value = lgArray[4];	
			document.getElementById('pow2').value = lgArray[6];	
			lgPosition = lgArray[1] + ' ' + lgArray[2];
		}
		setGradient(lgPosition);
		color_popup.style.display = "block";
	}
}
document.getElementsByClassName('lg-apply')[0].addEventListener("click", function(e) {
	var gradient_color = document.getElementById("gradientinput").value;
	selected.setAttribute('value', gradient_color);
	selected.style.background = gradient_color;
	color_popup.style.display = "none";
	var color1 = document.getElementById('color1');
	var color2 = document.getElementById('color2');
	fgColor = function(c) {
		var c = c.substring(1); // strip #
		var rgb = parseInt(c, 16); // convert rrggbb to decimal
		var r = (rgb >> 16) & 0xff; // extract red
		var g = (rgb >> 8) & 0xff; // extract green
		var b = (rgb >> 0) & 0xff; // extract blue
		var luma = 0.213 * r + 0.715 * g + 0.072 * b; // per ITU-R BT.709
		if(luma > 255 / 2) {
			return "#000"
		} else {
			return "#fff"
		}
	};
	color1.setAttribute('style', 'background: #00f260 !important; ' + 'color: ' + fgColor("#00f260") + ' !important;');
	color1.value = '#00f260';
	color2.setAttribute('style', 'background: #0575e6 !important; ' + 'color: ' + fgColor("#0575e6") + ' !important;');
	color2.value = '#0575e6';
	setGradient();
	document.getElementsByClassName('lgcolor-active')[0].classList.remove('lgcolor-active');
}, false);
/**
 * jscolor - JavaScript Color Picker
 *
 * @link    http://jscolor.com
 * @license For open source use: GPLv3
 *          For commercial use: JSColor Commercial License
 * @author  Jan Odvarko
 * @version 2.0.5
 *
 * See usage examples at http://jscolor.com/examples/
 */
"use strict";
if(!window.jscolor) {
	window.jscolor = (function() {
		var jsc = {
			register: function() {
				jsc.attachDOMReadyEvent(jsc.init);
				jsc.attachEvent(document, 'mousedown', jsc.onDocumentMouseDown);
				jsc.attachEvent(document, 'touchstart', jsc.onDocumentTouchStart);
				jsc.attachEvent(window, 'resize', jsc.onWindowResize);
			},
			init: function() {
				if(jsc.jscolor.lookupClass) {
					jsc.jscolor.installByClassName(jsc.jscolor.lookupClass);
				}
			},
			tryInstallOnElements: function(elms, className) {
				var matchClass = new RegExp('(^|\\s)(' + className + ')(\\s*(\\{[^}]*\\})|\\s|$)', 'i');
				for(var i = 0; i < elms.length; i += 1) {
					if(elms[i].type !== undefined && elms[i].type.toLowerCase() == 'color') {
						if(jsc.isColorAttrSupported) {
							// skip inputs of type 'color' if supported by the browser
							continue;
						}
					}
					var m;
					if(!elms[i].jscolor && elms[i].className && (m = elms[i].className.match(matchClass))) {
						var targetElm = elms[i];
						var optsStr = null;
						var dataOptions = jsc.getDataAttr(targetElm, 'jscolor');
						if(dataOptions !== null) {
							optsStr = dataOptions;
						} else if(m[4]) {
							optsStr = m[4];
						}
						var opts = {};
						if(optsStr) {
							try {
								opts = (new Function('return (' + optsStr + ')'))();
							} catch(eParseError) {
								jsc.warn('Error parsing jscolor options: ' + eParseError + ':\n' + optsStr);
							}
						}
						targetElm.jscolor = new jsc.jscolor(targetElm, opts);
					}
				}
			},
			isColorAttrSupported: (function() {
				var elm = document.createElement('input');
				if(elm.setAttribute) {
					elm.setAttribute('type', 'color');
					if(elm.type.toLowerCase() == 'color') {
						return true;
					}
				}
				return false;
			})(),
			isCanvasSupported: (function() {
				var elm = document.createElement('canvas');
				return !!(elm.getContext && elm.getContext('2d'));
			})(),
			fetchElement: function(mixed) {
				return typeof mixed === 'string' ? document.getElementById(mixed) : mixed;
			},
			isElementType: function(elm, type) {
				return elm.nodeName.toLowerCase() === type.toLowerCase();
			},
			getDataAttr: function(el, name) {
				var attrName = 'data-' + name;
				var attrValue = el.getAttribute(attrName);
				if(attrValue !== null) {
					return attrValue;
				}
				return null;
			},
			attachEvent: function(el, evnt, func) {
				if(el.addEventListener) {
					el.addEventListener(evnt, func, false);
				} else if(el.attachEvent) {
					el.attachEvent('on' + evnt, func);
				}
			},
			detachEvent: function(el, evnt, func) {
				if(el.removeEventListener) {
					el.removeEventListener(evnt, func, false);
				} else if(el.detachEvent) {
					el.detachEvent('on' + evnt, func);
				}
			},
			_attachedGroupEvents: {},
			attachGroupEvent: function(groupName, el, evnt, func) {
				if(!jsc._attachedGroupEvents.hasOwnProperty(groupName)) {
					jsc._attachedGroupEvents[groupName] = [];
				}
				jsc._attachedGroupEvents[groupName].push([el, evnt, func]);
				jsc.attachEvent(el, evnt, func);
			},
			detachGroupEvents: function(groupName) {
				if(jsc._attachedGroupEvents.hasOwnProperty(groupName)) {
					for(var i = 0; i < jsc._attachedGroupEvents[groupName].length; i += 1) {
						var evt = jsc._attachedGroupEvents[groupName][i];
						jsc.detachEvent(evt[0], evt[1], evt[2]);
					}
					delete jsc._attachedGroupEvents[groupName];
				}
			},
			attachDOMReadyEvent: function(func) {
				var fired = false;
				var fireOnce = function() {
					if(!fired) {
						fired = true;
						func();
					}
				};
				if(document.readyState === 'complete') {
					setTimeout(fireOnce, 1); // async
					return;
				}
				if(document.addEventListener) {
					document.addEventListener('DOMContentLoaded', fireOnce, false);
					// Fallback
					window.addEventListener('load', fireOnce, false);
				} else if(document.attachEvent) {
					// IE
					document.attachEvent('onreadystatechange', function() {
							if(document.readyState === 'complete') {
								document.detachEvent('onreadystatechange', arguments.callee);
								fireOnce();
							}
						})
						// Fallback
					window.attachEvent('onload', fireOnce);
					// IE7/8
					if(document.documentElement.doScroll && window == window.top) {
						var tryScroll = function() {
							if(!document.body) {
								return;
							}
							try {
								document.documentElement.doScroll('left');
								fireOnce();
							} catch(e) {
								setTimeout(tryScroll, 1);
							}
						};
						tryScroll();
					}
				}
			},
			warn: function(msg) {
				if(window.console && window.console.warn) {
					window.console.warn(msg);
				}
			},
			preventDefault: function(e) {
				if(e.preventDefault) {
					e.preventDefault();
				}
				e.returnValue = false;
			},
			captureTarget: function(target) {
				// IE
				if(target.setCapture) {
					jsc._capturedTarget = target;
					jsc._capturedTarget.setCapture();
				}
			},
			releaseTarget: function() {
				// IE
				if(jsc._capturedTarget) {
					jsc._capturedTarget.releaseCapture();
					jsc._capturedTarget = null;
				}
			},
			fireEvent: function(el, evnt) {
				if(!el) {
					return;
				}
				if(document.createEvent) {
					var ev = document.createEvent('HTMLEvents');
					ev.initEvent(evnt, true, true);
					el.dispatchEvent(ev);
				} else if(document.createEventObject) {
					var ev = document.createEventObject();
					el.fireEvent('on' + evnt, ev);
				} else if(el['on' + evnt]) { // alternatively use the traditional event model
					el['on' + evnt]();
				}
			},
			classNameToList: function(className) {
				return className.replace(/^\s+|\s+$/g, '').split(/\s+/);
			},
			// The className parameter (str) can only contain a single class name
			hasClass: function(elm, className) {
				if(!className) {
					return false;
				}
				return -1 != (' ' + elm.className.replace(/\s+/g, ' ') + ' ').indexOf(' ' + className + ' ');
			},
			// The className parameter (str) can contain multiple class names separated by whitespace
			setClass: function(elm, className) {
				var classList = jsc.classNameToList(className);
				for(var i = 0; i < classList.length; i += 1) {
					if(!jsc.hasClass(elm, classList[i])) {
						elm.className += (elm.className ? ' ' : '') + classList[i];
					}
				}
			},
			// The className parameter (str) can contain multiple class names separated by whitespace
			unsetClass: function(elm, className) {
				var classList = jsc.classNameToList(className);
				for(var i = 0; i < classList.length; i += 1) {
					var repl = new RegExp('^\\s*' + classList[i] + '\\s*|' + '\\s*' + classList[i] + '\\s*$|' + '\\s+' + classList[i] + '(\\s+)', 'g');
					elm.className = elm.className.replace(repl, '$1');
				}
			},
			getStyle: function(elm) {
				return window.getComputedStyle ? window.getComputedStyle(elm) : elm.currentStyle;
			},
			setStyle: (function() {
				var helper = document.createElement('div');
				var getSupportedProp = function(names) {
					for(var i = 0; i < names.length; i += 1) {
						if(names[i] in helper.style) {
							return names[i];
						}
					}
				};
				var props = {
					borderRadius: getSupportedProp(['borderRadius', 'MozBorderRadius', 'webkitBorderRadius']),
					boxShadow: getSupportedProp(['boxShadow', 'MozBoxShadow', 'webkitBoxShadow'])
				};
				return function(elm, prop, value) {
					switch(prop.toLowerCase()) {
						case 'opacity':
							var alphaOpacity = Math.round(parseFloat(value) * 100);
							elm.style.opacity = value;
							elm.style.filter = 'alpha(opacity=' + alphaOpacity + ')';
							break;
						default:
							elm.style[props[prop]] = value;
							break;
					}
				};
			})(),
			setBorderRadius: function(elm, value) {
				jsc.setStyle(elm, 'borderRadius', value || '0');
			},
			setBoxShadow: function(elm, value) {
				jsc.setStyle(elm, 'boxShadow', value || 'none');
			},
			getElementPos: function(e, relativeToViewport) {
				var x = 0,
					y = 0;
				var rect = e.getBoundingClientRect();
				x = rect.left;
				y = rect.top;
				if(!relativeToViewport) {
					var viewPos = jsc.getViewPos();
					x += viewPos[0];
					y += viewPos[1];
				}
				return [x, y];
			},
			getElementSize: function(e) {
				return [e.offsetWidth, e.offsetHeight];
			},
			// get pointer's X/Y coordinates relative to viewport
			getAbsPointerPos: function(e) {
				if(!e) {
					e = window.event;
				}
				var x = 0,
					y = 0;
				if(typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {
					// touch devices
					x = e.changedTouches[0].clientX;
					y = e.changedTouches[0].clientY;
				} else if(typeof e.clientX === 'number') {
					x = e.clientX;
					y = e.clientY;
				}
				return {
					x: x,
					y: y
				};
			},
			// get pointer's X/Y coordinates relative to target element
			getRelPointerPos: function(e) {
				if(!e) {
					e = window.event;
				}
				var target = e.target || e.srcElement;
				var targetRect = target.getBoundingClientRect();
				var x = 0,
					y = 0;
				var clientX = 0,
					clientY = 0;
				if(typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {
					// touch devices
					clientX = e.changedTouches[0].clientX;
					clientY = e.changedTouches[0].clientY;
				} else if(typeof e.clientX === 'number') {
					clientX = e.clientX;
					clientY = e.clientY;
				}
				x = clientX - targetRect.left;
				y = clientY - targetRect.top;
				return {
					x: x,
					y: y
				};
			},
			getViewPos: function() {
				var doc = document.documentElement;
				return [
					(window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0), (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
				];
			},
			getViewSize: function() {
				var doc = document.documentElement;
				return [
					(window.innerWidth || doc.clientWidth), (window.innerHeight || doc.clientHeight),
				];
			},
			redrawPosition: function() {
				if(jsc.picker && jsc.picker.owner) {
					var thisObj = jsc.picker.owner;
					var tp, vp;
					if(thisObj.fixed) {
						// Fixed elements are positioned relative to viewport,
						// therefore we can ignore the scroll offset
						tp = jsc.getElementPos(thisObj.targetElement, true); // target pos
						vp = [0, 0]; // view pos
					} else {
						tp = jsc.getElementPos(thisObj.targetElement); // target pos
						vp = jsc.getViewPos(); // view pos
					}
					var ts = jsc.getElementSize(thisObj.targetElement); // target size
					var vs = jsc.getViewSize(); // view size
					var ps = jsc.getPickerOuterDims(thisObj); // picker size
					var a, b, c;
					switch(thisObj.position.toLowerCase()) {
						case 'left':
							a = 1;
							b = 0;
							c = -1;
							break;
						case 'right':
							a = 1;
							b = 0;
							c = 1;
							break;
						case 'top':
							a = 0;
							b = 1;
							c = -1;
							break;
						default:
							a = 0;
							b = 1;
							c = 1;
							break;
					}
					var l = (ts[b] + ps[b]) / 2;
					// compute picker position
					if(!thisObj.smartPosition) {
						var pp = [
							tp[a],
							tp[b] + ts[b] - l + l * c
						];
					} else {
						var pp = [-vp[a] + tp[a] + ps[a] > vs[a] ? (-vp[a] + tp[a] + ts[a] / 2 > vs[a] / 2 && tp[a] + ts[a] - ps[a] >= 0 ? tp[a] + ts[a] - ps[a] : tp[a]) : tp[a], -vp[b] + tp[b] + ts[b] + ps[b] - l + l * c > vs[b] ? (-vp[b] + tp[b] + ts[b] / 2 > vs[b] / 2 && tp[b] + ts[b] - l - l * c >= 0 ? tp[b] + ts[b] - l - l * c : tp[b] + ts[b] - l + l * c) : (tp[b] + ts[b] - l + l * c >= 0 ? tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l - l * c)];
					}
					var x = pp[a];
					var y = pp[b];
					var positionValue = thisObj.fixed ? 'fixed' : 'absolute';
					var contractShadow = (pp[0] + ps[0] > tp[0] || pp[0] < tp[0] + ts[0]) && (pp[1] + ps[1] < tp[1] + ts[1]);
					jsc._drawPosition(thisObj, x, y, positionValue, contractShadow);
				}
			},
			_drawPosition: function(thisObj, x, y, positionValue, contractShadow) {
				var vShadow = contractShadow ? 0 : thisObj.shadowBlur; // px
				jsc.picker.wrap.style.position = positionValue;
				jsc.picker.wrap.style.left = x + 'px';
				jsc.picker.wrap.style.top = y + 'px';
				jsc.setBoxShadow(jsc.picker.boxS, thisObj.shadow ? new jsc.BoxShadow(0, vShadow, thisObj.shadowBlur, 0, thisObj.shadowColor) : null);
			},
			getPickerDims: function(thisObj) {
				var displaySlider = !!jsc.getSliderComponent(thisObj);
				var dims = [
					2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.width + (displaySlider ? 2 * thisObj.insetWidth + jsc.getPadToSliderPadding(thisObj) + thisObj.sliderSize : 0),
					2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.height + (thisObj.closable ? 2 * thisObj.insetWidth + thisObj.padding + thisObj.buttonHeight : 0)
				];
				return dims;
			},
			getPickerOuterDims: function(thisObj) {
				var dims = jsc.getPickerDims(thisObj);
				return [
					dims[0] + 2 * thisObj.borderWidth,
					dims[1] + 2 * thisObj.borderWidth
				];
			},
			getPadToSliderPadding: function(thisObj) {
				return Math.max(thisObj.padding, 1.5 * (2 * thisObj.pointerBorderWidth + thisObj.pointerThickness));
			},
			getPadYComponent: function(thisObj) {
				switch(thisObj.mode.charAt(1).toLowerCase()) {
					case 'v':
						return 'v';
						break;
				}
				return 's';
			},
			getSliderComponent: function(thisObj) {
				if(thisObj.mode.length > 2) {
					switch(thisObj.mode.charAt(2).toLowerCase()) {
						case 's':
							return 's';
							break;
						case 'v':
							return 'v';
							break;
					}
				}
				return null;
			},
			onDocumentMouseDown: function(e) {
				if(!e) {
					e = window.event;
				}
				var target = e.target || e.srcElement;
				if(target._jscLinkedInstance) {
					if(target._jscLinkedInstance.showOnClick) {
						target._jscLinkedInstance.show();
					}
				} else if(target._jscControlName) {
					jsc.onControlPointerStart(e, target, target._jscControlName, 'mouse');
				} else {
					// Mouse is outside the picker controls -> hide the color picker!
					if(jsc.picker && jsc.picker.owner) {
						jsc.picker.owner.hide();
					}
				}
			},
			onDocumentTouchStart: function(e) {
				if(!e) {
					e = window.event;
				}
				var target = e.target || e.srcElement;
				if(target._jscLinkedInstance) {
					if(target._jscLinkedInstance.showOnClick) {
						target._jscLinkedInstance.show();
					}
				} else if(target._jscControlName) {
					jsc.onControlPointerStart(e, target, target._jscControlName, 'touch');
				} else {
					if(jsc.picker && jsc.picker.owner) {
						jsc.picker.owner.hide();
					}
				}
			},
			onWindowResize: function(e) {
				jsc.redrawPosition();
			},
			onParentScroll: function(e) {
				// hide the picker when one of the parent elements is scrolled
				if(jsc.picker && jsc.picker.owner) {
					jsc.picker.owner.hide();
				}
			},
			_pointerMoveEvent: {
				mouse: 'mousemove',
				touch: 'touchmove'
			},
			_pointerEndEvent: {
				mouse: 'mouseup',
				touch: 'touchend'
			},
			_pointerOrigin: null,
			_capturedTarget: null,
			onControlPointerStart: function(e, target, controlName, pointerType) {
				var thisObj = target._jscInstance;
				jsc.preventDefault(e);
				jsc.captureTarget(target);
				var registerDragEvents = function(doc, offset) {
					jsc.attachGroupEvent('drag', doc, jsc._pointerMoveEvent[pointerType], jsc.onDocumentPointerMove(e, target, controlName, pointerType, offset));
					jsc.attachGroupEvent('drag', doc, jsc._pointerEndEvent[pointerType], jsc.onDocumentPointerEnd(e, target, controlName, pointerType));
				};
				registerDragEvents(document, [0, 0]);
				if(window.parent && window.frameElement) {
					var rect = window.frameElement.getBoundingClientRect();
					var ofs = [-rect.left, -rect.top];
					registerDragEvents(window.parent.window.document, ofs);
				}
				var abs = jsc.getAbsPointerPos(e);
				var rel = jsc.getRelPointerPos(e);
				jsc._pointerOrigin = {
					x: abs.x - rel.x,
					y: abs.y - rel.y
				};
				switch(controlName) {
					case 'pad':
						// if the slider is at the bottom, move it up
						switch(jsc.getSliderComponent(thisObj)) {
							case 's':
								if(thisObj.hsv[1] === 0) {
									thisObj.fromHSV(null, 100, null);
								};
								break;
							case 'v':
								if(thisObj.hsv[2] === 0) {
									thisObj.fromHSV(null, null, 100);
								};
								break;
						}
						jsc.setPad(thisObj, e, 0, 0);
						break;
					case 'sld':
						jsc.setSld(thisObj, e, 0);
						break;
				}
				jsc.dispatchFineChange(thisObj);
			},
			onDocumentPointerMove: function(e, target, controlName, pointerType, offset) {
				return function(e) {
					var thisObj = target._jscInstance;
					switch(controlName) {
						case 'pad':
							if(!e) {
								e = window.event;
							}
							jsc.setPad(thisObj, e, offset[0], offset[1]);
							jsc.dispatchFineChange(thisObj);
							break;
						case 'sld':
							if(!e) {
								e = window.event;
							}
							jsc.setSld(thisObj, e, offset[1]);
							jsc.dispatchFineChange(thisObj);
							break;
					}
				}
			},
			onDocumentPointerEnd: function(e, target, controlName, pointerType) {
				return function(e) {
					var thisObj = target._jscInstance;
					jsc.detachGroupEvents('drag');
					jsc.releaseTarget();
					// Always dispatch changes after detaching outstanding mouse handlers,
					// in case some user interaction will occur in user's onchange callback
					// that would intrude with current mouse events
					jsc.dispatchChange(thisObj);
				};
			},
			dispatchChange: function(thisObj) {
				if(thisObj.valueElement) {
					if(jsc.isElementType(thisObj.valueElement, 'input')) {
						jsc.fireEvent(thisObj.valueElement, 'change');
					}
				}
			},
			dispatchFineChange: function(thisObj) {
				if(thisObj.onFineChange) {
					var callback;
					if(typeof thisObj.onFineChange === 'string') {
						callback = new Function(thisObj.onFineChange);
					} else {
						callback = thisObj.onFineChange;
					}
					callback.call(thisObj);
				}
			},
			setPad: function(thisObj, e, ofsX, ofsY) {
				var pointerAbs = jsc.getAbsPointerPos(e);
				var x = ofsX + pointerAbs.x - jsc._pointerOrigin.x - thisObj.padding - thisObj.insetWidth;
				var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;
				var xVal = x * (360 / (thisObj.width - 1));
				var yVal = 100 - (y * (100 / (thisObj.height - 1)));
				switch(jsc.getPadYComponent(thisObj)) {
					case 's':
						thisObj.fromHSV(xVal, yVal, null, jsc.leaveSld);
						break;
					case 'v':
						thisObj.fromHSV(xVal, null, yVal, jsc.leaveSld);
						break;
				}
			},
			setSld: function(thisObj, e, ofsY) {
				var pointerAbs = jsc.getAbsPointerPos(e);
				var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;
				var yVal = 100 - (y * (100 / (thisObj.height - 1)));
				switch(jsc.getSliderComponent(thisObj)) {
					case 's':
						thisObj.fromHSV(null, yVal, null, jsc.leavePad);
						break;
					case 'v':
						thisObj.fromHSV(null, null, yVal, jsc.leavePad);
						break;
				}
			},
			_vmlNS: 'jsc_vml_',
			_vmlCSS: 'jsc_vml_css_',
			_vmlReady: false,
			initVML: function() {
				if(!jsc._vmlReady) {
					// init VML namespace
					var doc = document;
					if(!doc.namespaces[jsc._vmlNS]) {
						doc.namespaces.add(jsc._vmlNS, 'urn:schemas-microsoft-com:vml');
					}
					if(!doc.styleSheets[jsc._vmlCSS]) {
						var tags = ['shape', 'shapetype', 'group', 'background', 'path', 'formulas', 'handles', 'fill', 'stroke', 'shadow', 'textbox', 'textpath', 'imagedata', 'line', 'polyline', 'curve', 'rect', 'roundrect', 'oval', 'arc', 'image'];
						var ss = doc.createStyleSheet();
						ss.owningElement.id = jsc._vmlCSS;
						for(var i = 0; i < tags.length; i += 1) {
							ss.addRule(jsc._vmlNS + '\\:' + tags[i], 'behavior:url(#default#VML);');
						}
					}
					jsc._vmlReady = true;
				}
			},
			createPalette: function() {
				var paletteObj = {
					elm: null,
					draw: null
				};
				if(jsc.isCanvasSupported) {
					// Canvas implementation for modern browsers
					var canvas = document.createElement('canvas');
					var ctx = canvas.getContext('2d');
					var drawFunc = function(width, height, type) {
						canvas.width = width;
						canvas.height = height;
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						var hGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);
						hGrad.addColorStop(0 / 6, '#F00');
						hGrad.addColorStop(1 / 6, '#FF0');
						hGrad.addColorStop(2 / 6, '#0F0');
						hGrad.addColorStop(3 / 6, '#0FF');
						hGrad.addColorStop(4 / 6, '#00F');
						hGrad.addColorStop(5 / 6, '#F0F');
						hGrad.addColorStop(6 / 6, '#F00');
						ctx.fillStyle = hGrad;
						ctx.fillRect(0, 0, canvas.width, canvas.height);
						var vGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
						switch(type.toLowerCase()) {
							case 's':
								vGrad.addColorStop(0, 'rgba(255,255,255,0)');
								vGrad.addColorStop(1, 'rgba(255,255,255,1)');
								break;
							case 'v':
								vGrad.addColorStop(0, 'rgba(0,0,0,0)');
								vGrad.addColorStop(1, 'rgba(0,0,0,1)');
								break;
						}
						ctx.fillStyle = vGrad;
						ctx.fillRect(0, 0, canvas.width, canvas.height);
					};
					paletteObj.elm = canvas;
					paletteObj.draw = drawFunc;
				} else {
					// VML fallback for IE 7 and 8
					jsc.initVML();
					var vmlContainer = document.createElement('div');
					vmlContainer.style.position = 'relative';
					vmlContainer.style.overflow = 'hidden';
					var hGrad = document.createElement(jsc._vmlNS + ':fill');
					hGrad.type = 'gradient';
					hGrad.method = 'linear';
					hGrad.angle = '90';
					hGrad.colors = '16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0'
					var hRect = document.createElement(jsc._vmlNS + ':rect');
					hRect.style.position = 'absolute';
					hRect.style.left = -1 + 'px';
					hRect.style.top = -1 + 'px';
					hRect.stroked = false;
					hRect.appendChild(hGrad);
					vmlContainer.appendChild(hRect);
					var vGrad = document.createElement(jsc._vmlNS + ':fill');
					vGrad.type = 'gradient';
					vGrad.method = 'linear';
					vGrad.angle = '180';
					vGrad.opacity = '0';
					var vRect = document.createElement(jsc._vmlNS + ':rect');
					vRect.style.position = 'absolute';
					vRect.style.left = -1 + 'px';
					vRect.style.top = -1 + 'px';
					vRect.stroked = false;
					vRect.appendChild(vGrad);
					vmlContainer.appendChild(vRect);
					var drawFunc = function(width, height, type) {
						vmlContainer.style.width = width + 'px';
						vmlContainer.style.height = height + 'px';
						hRect.style.width = vRect.style.width = (width + 1) + 'px';
						hRect.style.height = vRect.style.height = (height + 1) + 'px';
						// Colors must be specified during every redraw, otherwise IE won't display
						// a full gradient during a subsequential redraw
						hGrad.color = '#F00';
						hGrad.color2 = '#F00';
						switch(type.toLowerCase()) {
							case 's':
								vGrad.color = vGrad.color2 = '#FFF';
								break;
							case 'v':
								vGrad.color = vGrad.color2 = '#000';
								break;
						}
					};
					paletteObj.elm = vmlContainer;
					paletteObj.draw = drawFunc;
				}
				return paletteObj;
			},
			createSliderGradient: function() {
				var sliderObj = {
					elm: null,
					draw: null
				};
				if(jsc.isCanvasSupported) {
					// Canvas implementation for modern browsers
					var canvas = document.createElement('canvas');
					var ctx = canvas.getContext('2d');
					var drawFunc = function(width, height, color1, color2) {
						canvas.width = width;
						canvas.height = height;
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						var grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
						grad.addColorStop(0, color1);
						grad.addColorStop(1, color2);
						ctx.fillStyle = grad;
						ctx.fillRect(0, 0, canvas.width, canvas.height);
					};
					sliderObj.elm = canvas;
					sliderObj.draw = drawFunc;
				} else {
					// VML fallback for IE 7 and 8
					jsc.initVML();
					var vmlContainer = document.createElement('div');
					vmlContainer.style.position = 'relative';
					vmlContainer.style.overflow = 'hidden';
					var grad = document.createElement(jsc._vmlNS + ':fill');
					grad.type = 'gradient';
					grad.method = 'linear';
					grad.angle = '180';
					var rect = document.createElement(jsc._vmlNS + ':rect');
					rect.style.position = 'absolute';
					rect.style.left = -1 + 'px';
					rect.style.top = -1 + 'px';
					rect.stroked = false;
					rect.appendChild(grad);
					vmlContainer.appendChild(rect);
					var drawFunc = function(width, height, color1, color2) {
						vmlContainer.style.width = width + 'px';
						vmlContainer.style.height = height + 'px';
						rect.style.width = (width + 1) + 'px';
						rect.style.height = (height + 1) + 'px';
						grad.color = color1;
						grad.color2 = color2;
					};
					sliderObj.elm = vmlContainer;
					sliderObj.draw = drawFunc;
				}
				return sliderObj;
			},
			leaveValue: 1 << 0,
			leaveStyle: 1 << 1,
			leavePad: 1 << 2,
			leaveSld: 1 << 3,
			BoxShadow: (function() {
				var BoxShadow = function(hShadow, vShadow, blur, spread, color, inset) {
					this.hShadow = hShadow;
					this.vShadow = vShadow;
					this.blur = blur;
					this.spread = spread;
					this.color = color;
					this.inset = !!inset;
				};
				BoxShadow.prototype.toString = function() {
					var vals = [
						Math.round(this.hShadow) + 'px',
						Math.round(this.vShadow) + 'px',
						Math.round(this.blur) + 'px',
						Math.round(this.spread) + 'px',
						this.color
					];
					if(this.inset) {
						vals.push('inset');
					}
					return vals.join(' ');
				};
				return BoxShadow;
			})(),
			//
			// Usage:
			// var myColor = new jscolor(<targetElement> [, <options>])
			//
			jscolor: function(targetElement, options) {
				// General options
				//
				this.value = null; // initial HEX color. To change it later, use methods fromString(), fromHSV() and fromRGB()
				this.valueElement = targetElement; // element that will be used to display and input the color code
				this.styleElement = targetElement; // element that will preview the picked color using CSS backgroundColor
				this.required = true; // whether the associated text <input> can be left empty
				this.refine = true; // whether to refine the entered color code (e.g. uppercase it and remove whitespace)
				this.hash = false; // whether to prefix the HEX color code with # symbol
				this.uppercase = true; // whether to show the color code in upper case
				this.onFineChange = null; // called instantly every time the color changes (value can be either a function or a string with javascript code)
				this.activeClass = 'jscolor-active'; // class to be set to the target element when a picker window is open on it
				this.overwriteImportant = false; // whether to overwrite colors of styleElement using !important
				this.minS = 0; // min allowed saturation (0 - 100)
				this.maxS = 100; // max allowed saturation (0 - 100)
				this.minV = 0; // min allowed value (brightness) (0 - 100)
				this.maxV = 100; // max allowed value (brightness) (0 - 100)
				// Accessing the picked color
				//
				this.hsv = [0, 0, 100]; // read-only  [0-360, 0-100, 0-100]
				this.rgb = [255, 255, 255]; // read-only  [0-255, 0-255, 0-255]
				// Color Picker options
				//
				this.width = 181; // width of color palette (in px)
				this.height = 101; // height of color palette (in px)
				this.showOnClick = true; // whether to display the color picker when user clicks on its target element
				this.mode = 'HSV'; // HSV | HVS | HS | HV - layout of the color picker controls
				this.position = 'bottom'; // left | right | top | bottom - position relative to the target element
				this.smartPosition = true; // automatically change picker position when there is not enough space for it
				this.sliderSize = 16; // px
				this.crossSize = 8; // px
				this.closable = false; // whether to display the Close button
				this.closeText = 'Close';
				this.buttonColor = '#000000'; // CSS color
				this.buttonHeight = 18; // px
				this.padding = 12; // px
				this.backgroundColor = '#FFFFFF'; // CSS color
				this.borderWidth = 1; // px
				this.borderColor = '#BBBBBB'; // CSS color
				this.borderRadius = 8; // px
				this.insetWidth = 1; // px
				this.insetColor = '#BBBBBB'; // CSS color
				this.shadow = true; // whether to display shadow
				this.shadowBlur = 15; // px
				this.shadowColor = 'rgba(0,0,0,0.2)'; // CSS color
				this.pointerColor = '#4C4C4C'; // px
				this.pointerBorderColor = '#FFFFFF'; // px
				this.pointerBorderWidth = 1; // px
				this.pointerThickness = 2; // px
				this.zIndex = 1000;
				this.container = null; // where to append the color picker (BODY element by default)
				for(var opt in options) {
					if(options.hasOwnProperty(opt)) {
						this[opt] = options[opt];
					}
				}
				this.hide = function() {
					if(isPickerOwner()) {
						detachPicker();
					}
				};
				this.show = function() {
					drawPicker();
				};
				this.redraw = function() {
					if(isPickerOwner()) {
						drawPicker();
					}
				};
				this.importColor = function() {
					if(!this.valueElement) {
						this.exportColor();
					} else {
						if(jsc.isElementType(this.valueElement, 'input')) {
							if(!this.refine) {
								if(!this.fromString(this.valueElement.value, jsc.leaveValue)) {
									if(this.styleElement) {
										this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;
										this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;
										this.styleElement.style.color = this.styleElement._jscOrigStyle.color;
									}
									this.exportColor(jsc.leaveValue | jsc.leaveStyle);
								}
							} else if(!this.required && /^\s*$/.test(this.valueElement.value)) {
								this.valueElement.value = '';
								if(this.styleElement) {
									this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;
									this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;
									this.styleElement.style.color = this.styleElement._jscOrigStyle.color;
								}
								this.exportColor(jsc.leaveValue | jsc.leaveStyle);
							} else if(this.fromString(this.valueElement.value)) {
								// managed to import color successfully from the value -> OK, don't do anything
							} else {
								this.exportColor();
							}
						} else {
							// not an input element -> doesn't have any value
							this.exportColor();
						}
					}
				};
				this.exportColor = function(flags) {
					if(!(flags & jsc.leaveValue) && this.valueElement) {
						var value = this.toString();
						if(this.uppercase) {
							value = value.toUpperCase();
						}
						if(this.hash) {
							value = '#' + value;
						}
						if(jsc.isElementType(this.valueElement, 'input')) {
							this.valueElement.value = value;
						} else {
							this.valueElement.innerHTML = value;
						}
					}
					if(!(flags & jsc.leaveStyle)) {
						if(this.styleElement) {
							var bgColor = '#' + this.toString();
							var fgColor = this.isLight() ? '#000' : '#FFF';
							this.styleElement.style.backgroundImage = 'none';
							this.styleElement.style.backgroundColor = bgColor;
							this.styleElement.style.color = fgColor;
							if(this.overwriteImportant) {
								this.styleElement.setAttribute('style', 'background: ' + bgColor + ' !important; ' + 'color: ' + fgColor + ' !important;');
							}
						}
					}
					if(!(flags & jsc.leavePad) && isPickerOwner()) {
						redrawPad();
					}
					if(!(flags & jsc.leaveSld) && isPickerOwner()) {
						redrawSld();
					}
				};
				// h: 0-360
				// s: 0-100
				// v: 0-100
				//
				this.fromHSV = function(h, s, v, flags) { // null = don't change
					if(h !== null) {
						if(isNaN(h)) {
							return false;
						}
						h = Math.max(0, Math.min(360, h));
					}
					if(s !== null) {
						if(isNaN(s)) {
							return false;
						}
						s = Math.max(0, Math.min(100, this.maxS, s), this.minS);
					}
					if(v !== null) {
						if(isNaN(v)) {
							return false;
						}
						v = Math.max(0, Math.min(100, this.maxV, v), this.minV);
					}
					this.rgb = HSV_RGB(h === null ? this.hsv[0] : (this.hsv[0] = h), s === null ? this.hsv[1] : (this.hsv[1] = s), v === null ? this.hsv[2] : (this.hsv[2] = v));
					this.exportColor(flags);
				};
				// r: 0-255
				// g: 0-255
				// b: 0-255
				//
				this.fromRGB = function(r, g, b, flags) { // null = don't change
					if(r !== null) {
						if(isNaN(r)) {
							return false;
						}
						r = Math.max(0, Math.min(255, r));
					}
					if(g !== null) {
						if(isNaN(g)) {
							return false;
						}
						g = Math.max(0, Math.min(255, g));
					}
					if(b !== null) {
						if(isNaN(b)) {
							return false;
						}
						b = Math.max(0, Math.min(255, b));
					}
					var hsv = RGB_HSV(r === null ? this.rgb[0] : r, g === null ? this.rgb[1] : g, b === null ? this.rgb[2] : b);
					if(hsv[0] !== null) {
						this.hsv[0] = Math.max(0, Math.min(360, hsv[0]));
					}
					if(hsv[2] !== 0) {
						this.hsv[1] = hsv[1] === null ? null : Math.max(0, this.minS, Math.min(100, this.maxS, hsv[1]));
					}
					this.hsv[2] = hsv[2] === null ? null : Math.max(0, this.minV, Math.min(100, this.maxV, hsv[2]));
					// update RGB according to final HSV, as some values might be trimmed
					var rgb = HSV_RGB(this.hsv[0], this.hsv[1], this.hsv[2]);
					this.rgb[0] = rgb[0];
					this.rgb[1] = rgb[1];
					this.rgb[2] = rgb[2];
					this.exportColor(flags);
				};
				this.fromString = function(str, flags) {
					var m;
					if(m = str.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i)) {
						// HEX notation
						//
						if(m[1].length === 6) {
							// 6-char notation
							this.fromRGB(parseInt(m[1].substr(0, 2), 16), parseInt(m[1].substr(2, 2), 16), parseInt(m[1].substr(4, 2), 16), flags);
						} else {
							// 3-char notation
							this.fromRGB(parseInt(m[1].charAt(0) + m[1].charAt(0), 16), parseInt(m[1].charAt(1) + m[1].charAt(1), 16), parseInt(m[1].charAt(2) + m[1].charAt(2), 16), flags);
						}
						return true;
					} else if(m = str.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
						var params = m[1].split(',');
						var re = /^\s*(\d*)(\.\d+)?\s*$/;
						var mR, mG, mB;
						if(params.length >= 3 && (mR = params[0].match(re)) && (mG = params[1].match(re)) && (mB = params[2].match(re))) {
							var r = parseFloat((mR[1] || '0') + (mR[2] || ''));
							var g = parseFloat((mG[1] || '0') + (mG[2] || ''));
							var b = parseFloat((mB[1] || '0') + (mB[2] || ''));
							this.fromRGB(r, g, b, flags);
							return true;
						}
					}
					return false;
				};
				this.toString = function() {
					return(
						(0x100 | Math.round(this.rgb[0])).toString(16).substr(1) + (0x100 | Math.round(this.rgb[1])).toString(16).substr(1) + (0x100 | Math.round(this.rgb[2])).toString(16).substr(1));
				};
				this.toHEXString = function() {
					return '#' + this.toString().toUpperCase();
				};
				this.toRGBString = function() {
					return('rgb(' + Math.round(this.rgb[0]) + ',' + Math.round(this.rgb[1]) + ',' + Math.round(this.rgb[2]) + ')');
				};
				this.isLight = function() {
					return(0.213 * this.rgb[0] + 0.715 * this.rgb[1] + 0.072 * this.rgb[2] > 255 / 2);
				};
				this._processParentElementsInDOM = function() {
					if(this._linkedElementsProcessed) {
						return;
					}
					this._linkedElementsProcessed = true;
					var elm = this.targetElement;
					do {
						// If the target element or one of its parent nodes has fixed position,
						// then use fixed positioning instead
						//
						// Note: In Firefox, getComputedStyle returns null in a hidden iframe,
						// that's why we need to check if the returned style object is non-empty
						var currStyle = jsc.getStyle(elm);
						if(currStyle && currStyle.position.toLowerCase() === 'fixed') {
							this.fixed = true;
						}
						if(elm !== this.targetElement) {
							// Ensure to attach onParentScroll only once to each parent element
							// (multiple targetElements can share the same parent nodes)
							//
							// Note: It's not just offsetParents that can be scrollable,
							// that's why we loop through all parent nodes
							if(!elm._jscEventsAttached) {
								jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);
								elm._jscEventsAttached = true;
							}
						}
					} while ((elm = elm.parentNode) && !jsc.isElementType(elm, 'body'));
				};
				// r: 0-255
				// g: 0-255
				// b: 0-255
				//
				// returns: [ 0-360, 0-100, 0-100 ]
				//
				function RGB_HSV(r, g, b) {
					r /= 255;
					g /= 255;
					b /= 255;
					var n = Math.min(Math.min(r, g), b);
					var v = Math.max(Math.max(r, g), b);
					var m = v - n;
					if(m === 0) {
						return [null, 0, 100 * v];
					}
					var h = r === n ? 3 + (b - g) / m : (g === n ? 5 + (r - b) / m : 1 + (g - r) / m);
					return [
						60 * (h === 6 ? 0 : h),
						100 * (m / v),
						100 * v
					];
				}
				// h: 0-360
				// s: 0-100
				// v: 0-100
				//
				// returns: [ 0-255, 0-255, 0-255 ]
				//
				function HSV_RGB(h, s, v) {
					var u = 255 * (v / 100);
					if(h === null) {
						return [u, u, u];
					}
					h /= 60;
					s /= 100;
					var i = Math.floor(h);
					var f = i % 2 ? h - i : 1 - (h - i);
					var m = u * (1 - s);
					var n = u * (1 - s * f);
					switch(i) {
						case 6:
						case 0:
							return [u, n, m];
						case 1:
							return [n, u, m];
						case 2:
							return [m, u, n];
						case 3:
							return [m, n, u];
						case 4:
							return [n, m, u];
						case 5:
							return [u, m, n];
					}
				}

				function detachPicker() {
					jsc.unsetClass(THIS.targetElement, THIS.activeClass);
					jsc.picker.wrap.parentNode.removeChild(jsc.picker.wrap);
					delete jsc.picker.owner;
				}

				function drawPicker() {
					// At this point, when drawing the picker, we know what the parent elements are
					// and we can do all related DOM operations, such as registering events on them
					// or checking their positioning
					THIS._processParentElementsInDOM();
					if(!jsc.picker) {
						jsc.picker = {
							owner: null,
							wrap: document.createElement('div'),
							box: document.createElement('div'),
							boxS: document.createElement('div'), // shadow area
							boxB: document.createElement('div'), // border
							pad: document.createElement('div'),
							padB: document.createElement('div'), // border
							padM: document.createElement('div'), // mouse/touch area
							padPal: jsc.createPalette(),
							cross: document.createElement('div'),
							crossBY: document.createElement('div'), // border Y
							crossBX: document.createElement('div'), // border X
							crossLY: document.createElement('div'), // line Y
							crossLX: document.createElement('div'), // line X
							sld: document.createElement('div'),
							sldB: document.createElement('div'), // border
							sldM: document.createElement('div'), // mouse/touch area
							sldGrad: jsc.createSliderGradient(),
							sldPtrS: document.createElement('div'), // slider pointer spacer
							sldPtrIB: document.createElement('div'), // slider pointer inner border
							sldPtrMB: document.createElement('div'), // slider pointer middle border
							sldPtrOB: document.createElement('div'), // slider pointer outer border
							btn: document.createElement('div'),
							btnT: document.createElement('span') // text
						};
						jsc.picker.pad.appendChild(jsc.picker.padPal.elm);
						jsc.picker.padB.appendChild(jsc.picker.pad);
						jsc.picker.cross.appendChild(jsc.picker.crossBY);
						jsc.picker.cross.appendChild(jsc.picker.crossBX);
						jsc.picker.cross.appendChild(jsc.picker.crossLY);
						jsc.picker.cross.appendChild(jsc.picker.crossLX);
						jsc.picker.padB.appendChild(jsc.picker.cross);
						jsc.picker.box.appendChild(jsc.picker.padB);
						jsc.picker.box.appendChild(jsc.picker.padM);
						jsc.picker.sld.appendChild(jsc.picker.sldGrad.elm);
						jsc.picker.sldB.appendChild(jsc.picker.sld);
						jsc.picker.sldB.appendChild(jsc.picker.sldPtrOB);
						jsc.picker.sldPtrOB.appendChild(jsc.picker.sldPtrMB);
						jsc.picker.sldPtrMB.appendChild(jsc.picker.sldPtrIB);
						jsc.picker.sldPtrIB.appendChild(jsc.picker.sldPtrS);
						jsc.picker.box.appendChild(jsc.picker.sldB);
						jsc.picker.box.appendChild(jsc.picker.sldM);
						jsc.picker.btn.appendChild(jsc.picker.btnT);
						jsc.picker.box.appendChild(jsc.picker.btn);
						jsc.picker.boxB.appendChild(jsc.picker.box);
						jsc.picker.wrap.appendChild(jsc.picker.boxS);
						jsc.picker.wrap.appendChild(jsc.picker.boxB);
					}
					var p = jsc.picker;
					var displaySlider = !!jsc.getSliderComponent(THIS);
					var dims = jsc.getPickerDims(THIS);
					var crossOuterSize = (2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize);
					var padToSliderPadding = jsc.getPadToSliderPadding(THIS);
					var borderRadius = Math.min(THIS.borderRadius, Math.round(THIS.padding * Math.PI)); // px
					var padCursor = 'crosshair';
					// wrap
					p.wrap.style.clear = 'both';
					p.wrap.style.width = (dims[0] + 2 * THIS.borderWidth) + 'px';
					p.wrap.style.height = (dims[1] + 2 * THIS.borderWidth) + 'px';
					p.wrap.style.zIndex = THIS.zIndex;
					// picker
					p.box.style.width = dims[0] + 'px';
					p.box.style.height = dims[1] + 'px';
					p.boxS.style.position = 'absolute';
					p.boxS.style.left = '0';
					p.boxS.style.top = '0';
					p.boxS.style.width = '100%';
					p.boxS.style.height = '100%';
					jsc.setBorderRadius(p.boxS, borderRadius + 'px');
					// picker border
					p.boxB.style.position = 'relative';
					p.boxB.style.border = THIS.borderWidth + 'px solid';
					p.boxB.style.borderColor = THIS.borderColor;
					p.boxB.style.background = THIS.backgroundColor;
					jsc.setBorderRadius(p.boxB, borderRadius + 'px');
					// IE hack:
					// If the element is transparent, IE will trigger the event on the elements under it,
					// e.g. on Canvas or on elements with border
					p.padM.style.background = p.sldM.style.background = '#FFF';
					jsc.setStyle(p.padM, 'opacity', '0');
					jsc.setStyle(p.sldM, 'opacity', '0');
					// pad
					p.pad.style.position = 'relative';
					p.pad.style.width = THIS.width + 'px';
					p.pad.style.height = THIS.height + 'px';
					// pad palettes (HSV and HVS)
					p.padPal.draw(THIS.width, THIS.height, jsc.getPadYComponent(THIS));
					// pad border
					p.padB.style.position = 'absolute';
					p.padB.style.left = THIS.padding + 'px';
					p.padB.style.top = THIS.padding + 'px';
					p.padB.style.border = THIS.insetWidth + 'px solid';
					p.padB.style.borderColor = THIS.insetColor;
					// pad mouse area
					p.padM._jscInstance = THIS;
					p.padM._jscControlName = 'pad';
					p.padM.style.position = 'absolute';
					p.padM.style.left = '0';
					p.padM.style.top = '0';
					p.padM.style.width = (THIS.padding + 2 * THIS.insetWidth + THIS.width + padToSliderPadding / 2) + 'px';
					p.padM.style.height = dims[1] + 'px';
					p.padM.style.cursor = padCursor;
					// pad cross
					p.cross.style.position = 'absolute';
					p.cross.style.left = p.cross.style.top = '0';
					p.cross.style.width = p.cross.style.height = crossOuterSize + 'px';
					// pad cross border Y and X
					p.crossBY.style.position = p.crossBX.style.position = 'absolute';
					p.crossBY.style.background = p.crossBX.style.background = THIS.pointerBorderColor;
					p.crossBY.style.width = p.crossBX.style.height = (2 * THIS.pointerBorderWidth + THIS.pointerThickness) + 'px';
					p.crossBY.style.height = p.crossBX.style.width = crossOuterSize + 'px';
					p.crossBY.style.left = p.crossBX.style.top = (Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2) - THIS.pointerBorderWidth) + 'px';
					p.crossBY.style.top = p.crossBX.style.left = '0';
					// pad cross line Y and X
					p.crossLY.style.position = p.crossLX.style.position = 'absolute';
					p.crossLY.style.background = p.crossLX.style.background = THIS.pointerColor;
					p.crossLY.style.height = p.crossLX.style.width = (crossOuterSize - 2 * THIS.pointerBorderWidth) + 'px';
					p.crossLY.style.width = p.crossLX.style.height = THIS.pointerThickness + 'px';
					p.crossLY.style.left = p.crossLX.style.top = (Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2)) + 'px';
					p.crossLY.style.top = p.crossLX.style.left = THIS.pointerBorderWidth + 'px';
					// slider
					p.sld.style.overflow = 'hidden';
					p.sld.style.width = THIS.sliderSize + 'px';
					p.sld.style.height = THIS.height + 'px';
					// slider gradient
					p.sldGrad.draw(THIS.sliderSize, THIS.height, '#000', '#000');
					// slider border
					p.sldB.style.display = displaySlider ? 'block' : 'none';
					p.sldB.style.position = 'absolute';
					p.sldB.style.right = THIS.padding + 'px';
					p.sldB.style.top = THIS.padding + 'px';
					p.sldB.style.border = THIS.insetWidth + 'px solid';
					p.sldB.style.borderColor = THIS.insetColor;
					// slider mouse area
					p.sldM._jscInstance = THIS;
					p.sldM._jscControlName = 'sld';
					p.sldM.style.display = displaySlider ? 'block' : 'none';
					p.sldM.style.position = 'absolute';
					p.sldM.style.right = '0';
					p.sldM.style.top = '0';
					p.sldM.style.width = (THIS.sliderSize + padToSliderPadding / 2 + THIS.padding + 2 * THIS.insetWidth) + 'px';
					p.sldM.style.height = dims[1] + 'px';
					p.sldM.style.cursor = 'default';
					// slider pointer inner and outer border
					p.sldPtrIB.style.border = p.sldPtrOB.style.border = THIS.pointerBorderWidth + 'px solid ' + THIS.pointerBorderColor;
					// slider pointer outer border
					p.sldPtrOB.style.position = 'absolute';
					p.sldPtrOB.style.left = -(2 * THIS.pointerBorderWidth + THIS.pointerThickness) + 'px';
					p.sldPtrOB.style.top = '0';
					// slider pointer middle border
					p.sldPtrMB.style.border = THIS.pointerThickness + 'px solid ' + THIS.pointerColor;
					// slider pointer spacer
					p.sldPtrS.style.width = THIS.sliderSize + 'px';
					p.sldPtrS.style.height = sliderPtrSpace + 'px';
					// the Close button
					function setBtnBorder() {
						var insetColors = THIS.insetColor.split(/\s+/);
						var outsetColor = insetColors.length < 2 ? insetColors[0] : insetColors[1] + ' ' + insetColors[0] + ' ' + insetColors[0] + ' ' + insetColors[1];
						p.btn.style.borderColor = outsetColor;
					}
					p.btn.style.display = THIS.closable ? 'block' : 'none';
					p.btn.style.position = 'absolute';
					p.btn.style.left = THIS.padding + 'px';
					p.btn.style.bottom = THIS.padding + 'px';
					p.btn.style.padding = '0 15px';
					p.btn.style.height = THIS.buttonHeight + 'px';
					p.btn.style.border = THIS.insetWidth + 'px solid';
					setBtnBorder();
					p.btn.style.color = THIS.buttonColor;
					p.btn.style.font = '12px sans-serif';
					p.btn.style.textAlign = 'center';
					try {
						p.btn.style.cursor = 'pointer';
					} catch(eOldIE) {
						p.btn.style.cursor = 'hand';
					}
					p.btn.onmousedown = function() {
						THIS.hide();
					};
					p.btnT.style.lineHeight = THIS.buttonHeight + 'px';
					p.btnT.innerHTML = '';
					p.btnT.appendChild(document.createTextNode(THIS.closeText));
					// place pointers
					redrawPad();
					redrawSld();
					// If we are changing the owner without first closing the picker,
					// make sure to first deal with the old owner
					if(jsc.picker.owner && jsc.picker.owner !== THIS) {
						jsc.unsetClass(jsc.picker.owner.targetElement, THIS.activeClass);
					}
					// Set the new picker owner
					jsc.picker.owner = THIS;
					// The redrawPosition() method needs picker.owner to be set, that's why we call it here,
					// after setting the owner
					if(jsc.isElementType(container, 'body')) {
						jsc.redrawPosition();
					} else {
						jsc._drawPosition(THIS, 0, 0, 'relative', false);
					}
					if(p.wrap.parentNode != container) {
						container.appendChild(p.wrap);
					}
					jsc.setClass(THIS.targetElement, THIS.activeClass);
				}

				function redrawPad() {
					// redraw the pad pointer
					switch(jsc.getPadYComponent(THIS)) {
						case 's':
							var yComponent = 1;
							break;
						case 'v':
							var yComponent = 2;
							break;
					}
					var x = Math.round((THIS.hsv[0] / 360) * (THIS.width - 1));
					var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));
					var crossOuterSize = (2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize);
					var ofs = -Math.floor(crossOuterSize / 2);
					jsc.picker.cross.style.left = (x + ofs) + 'px';
					jsc.picker.cross.style.top = (y + ofs) + 'px';
					// redraw the slider
					switch(jsc.getSliderComponent(THIS)) {
						case 's':
							var rgb1 = HSV_RGB(THIS.hsv[0], 100, THIS.hsv[2]);
							var rgb2 = HSV_RGB(THIS.hsv[0], 0, THIS.hsv[2]);
							var color1 = 'rgb(' + Math.round(rgb1[0]) + ',' + Math.round(rgb1[1]) + ',' + Math.round(rgb1[2]) + ')';
							var color2 = 'rgb(' + Math.round(rgb2[0]) + ',' + Math.round(rgb2[1]) + ',' + Math.round(rgb2[2]) + ')';
							jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);
							break;
						case 'v':
							var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 100);
							var color1 = 'rgb(' + Math.round(rgb[0]) + ',' + Math.round(rgb[1]) + ',' + Math.round(rgb[2]) + ')';
							var color2 = '#000';
							jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);
							break;
					}
				}

				function redrawSld() {
					var sldComponent = jsc.getSliderComponent(THIS);
					if(sldComponent) {
						// redraw the slider pointer
						switch(sldComponent) {
							case 's':
								var yComponent = 1;
								break;
							case 'v':
								var yComponent = 2;
								break;
						}
						var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));
						jsc.picker.sldPtrOB.style.top = (y - (2 * THIS.pointerBorderWidth + THIS.pointerThickness) - Math.floor(sliderPtrSpace / 2)) + 'px';
					}
				}

				function isPickerOwner() {
					return jsc.picker && jsc.picker.owner === THIS;
				}

				function blurValue() {
					THIS.importColor();
				}
				// Find the target element
				if(typeof targetElement === 'string') {
					var id = targetElement;
					var elm = document.getElementById(id);
					if(elm) {
						this.targetElement = elm;
					} else {
						jsc.warn('Could not find target element with ID \'' + id + '\'');
					}
				} else if(targetElement) {
					this.targetElement = targetElement;
				} else {
					jsc.warn('Invalid target element: \'' + targetElement + '\'');
				}
				if(this.targetElement._jscLinkedInstance) {
					jsc.warn('Cannot link jscolor twice to the same element. Skipping.');
					return;
				}
				this.targetElement._jscLinkedInstance = this;
				// Find the value element
				this.valueElement = jsc.fetchElement(this.valueElement);
				// Find the style element
				this.styleElement = jsc.fetchElement(this.styleElement);
				var THIS = this;
				var container = this.container ? jsc.fetchElement(this.container) : document.getElementsByTagName('body')[0];
				var sliderPtrSpace = 3; // px
				// For BUTTON elements it's important to stop them from sending the form when clicked
				// (e.g. in Safari)
				if(jsc.isElementType(this.targetElement, 'button')) {
					if(this.targetElement.onclick) {
						var origCallback = this.targetElement.onclick;
						this.targetElement.onclick = function(evt) {
							origCallback.call(this, evt);
							return false;
						};
					} else {
						this.targetElement.onclick = function() {
							return false;
						};
					}
				}
				/*
				var elm = this.targetElement;
				do {
					// If the target element or one of its offsetParents has fixed position,
					// then use fixed positioning instead
					//
					// Note: In Firefox, getComputedStyle returns null in a hidden iframe,
					// that's why we need to check if the returned style object is non-empty
					var currStyle = jsc.getStyle(elm);
					if (currStyle && currStyle.position.toLowerCase() === 'fixed') {
						this.fixed = true;
					}

					if (elm !== this.targetElement) {
						// attach onParentScroll so that we can recompute the picker position
						// when one of the offsetParents is scrolled
						if (!elm._jscEventsAttached) {
							jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);
							elm._jscEventsAttached = true;
						}
					}
				} while ((elm = elm.offsetParent) && !jsc.isElementType(elm, 'body'));
				*/
				// valueElement
				if(this.valueElement) {
					if(jsc.isElementType(this.valueElement, 'input')) {
						var updateField = function() {
							THIS.fromString(THIS.valueElement.value, jsc.leaveValue);
							jsc.dispatchFineChange(THIS);
						};
						jsc.attachEvent(this.valueElement, 'keyup', updateField);
						jsc.attachEvent(this.valueElement, 'input', updateField);
						jsc.attachEvent(this.valueElement, 'blur', blurValue);
						this.valueElement.setAttribute('autocomplete', 'off');
					}
				}
				// styleElement
				if(this.styleElement) {
					this.styleElement._jscOrigStyle = {
						backgroundImage: this.styleElement.style.backgroundImage,
						backgroundColor: this.styleElement.style.backgroundColor,
						color: this.styleElement.style.color
					};
				}
				if(this.value) {
					// Try to set the color from the .value option and if unsuccessful,
					// export the current color
					this.fromString(this.value) || this.exportColor();
				} else {
					this.importColor();
				}
			}
		};
		//================================
		// Public properties and methods
		//================================
		// By default, search for all elements with class="jscolor" and install a color picker on them.
		//
		// You can change what class name will be looked for by setting the property jscolor.lookupClass
		// anywhere in your HTML document. To completely disable the automatic lookup, set it to null.
		//
		jsc.jscolor.lookupClass = 'jscolor';
		jsc.jscolor.installByClassName = function(className) {
			var inputElms = document.getElementsByTagName('input');
			var buttonElms = document.getElementsByTagName('button');
			jsc.tryInstallOnElements(inputElms, className);
			jsc.tryInstallOnElements(buttonElms, className);
		};
		jsc.register();
		return jsc.jscolor;
	})();
}
