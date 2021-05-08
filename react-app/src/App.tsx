import React, { useEffect, useRef, useState } from 'react';
import tinycolor from 'tinycolor2';

const encodeHue = function (hue: number) {
	if (hue < 180) {
		return 180 - hue;
	} else {
		return 540 - hue;
	}
};
const getMinMax = function (lipstickData: any) {
	var minHue = Number.MAX_VALUE;
	var maxHue = Number.MIN_VALUE;
	var minLight = Number.MAX_VALUE;
	var maxLight = Number.MIN_VALUE;
	for (var i = 0; i < lipstickData.length; ++i) {
		var hsl = tinycolor(lipstickData[i].color).toHsl();
		hsl.l *= 100;
		lipstickData[i]._hsl = hsl;
		var hue = encodeHue(hsl.h);
		if (hue < 165 || hue > 220) {
			// ignore rare colors
			continue;
		}
		if (hue > maxHue) {
			maxHue = hue;
		}
		if (hue < minHue) {
			minHue = hue;
		}
		var light = hsl.l;
		if (light > maxLight) {
			maxLight = light;
		}
		if (light < minLight) {
			minLight = light;
		}
	}
	return {
		minHue: minHue - 2,
		maxHue: maxHue + 2,
		minLight: Math.max(minLight - 10, 0),
		maxLight: Math.min(maxLight + 5, 100)
	};
};

function App() {
	const canvas = useRef<HTMLCanvasElement>(null);

	const [brands, setBrands] = useState({});

	useEffect(() => {
		fetch('/mock/lipstick.json')
			.then(res => {
				return res.json();
			})
			.then(result => {
				setBrands(result);
			})
			.catch(e => {
				console.log(e.message);
			});
	}, []);

	useEffect(() => {
		const { maxHue, maxLight, minHue, minLight} = getMinMax(brands);
		const { innerWidth: width, innerHeight: height } = window;
		if (canvas.current) {
			var ctx = canvas.current.getContext('2d');
			if (!ctx) return;
			var imgData = ctx.createImageData(width, height);
			var data = imgData.data;
			for (var y = 0; y < height; ++y) {
				for (var x = 0; x < width; ++x) {
					var light = ((height - y) / height) * (maxLight - minLight) + minLight;
					var hue = (x / width) * (maxHue - minHue) + minHue;
					var color = tinycolor({
						h: encodeHue(hue),
						s: 80,
						l: light
					});
					var rgb = color.toRgb();
					var id = (y * width + x) * 4;
					data[id] = rgb.r;
					data[id + 1] = rgb.g;
					data[id + 2] = rgb.b;
					data[id + 3] = 255;
				}
			}
			console.log(imgData);
			ctx.putImageData(imgData, 0, 0);
		}
	}, [brands]);

	return <canvas ref={canvas} width={window.innerWidth} height={window.innerHeight}></canvas>;
}

export default App;
