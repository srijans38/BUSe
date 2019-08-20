'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var scrollTo = function scrollTo(element, to) {
	var _this = this;

	var animatedScroll =
		arguments.length > 2 && arguments[2] !== undefined
			? arguments[2]
			: this.options.animateScroll;

	var friction = 1 - this.options.scrollFriction;
	var acceleration = this.options.scrollAcceleration;

	var positionY = 0;
	var velocityY = 0;
	var targetPositionY = 0;
	var targetPositionYWithOffset = 0;
	var direction = 0;

	var raf = null;

	function getScrollTop() {
		return document.body.scrollTop || document.documentElement.scrollTop;
	}

	var animate = function animate() {
		var distance = update();
		render();

		if (
			(direction === 1 && targetPositionY > positionY) ||
			(direction === -1 && targetPositionY < positionY)
		) {
			raf = requestAnimationFrame(animate);
		} else {
			window.scrollTo(0, targetPositionY);
			_this.triggerEvent('scrollDone');
		}
	};

	function update() {
		var distance = targetPositionYWithOffset - positionY;
		var attraction = distance * acceleration;

		applyForce(attraction);

		velocityY *= friction;
		positionY += velocityY;

		return distance;
	}

	var applyForce = function applyForce(force) {
		velocityY += force;
	};

	var render = function render() {
		window.scrollTo(0, positionY);
	};

	window.addEventListener(
		'mousewheel',
		function(event) {
			if (raf) {
				cancelAnimationFrame(raf);
				raf = null;
			}
		},
		{
			passive: true
		}
	);

	var scrollTo = function scrollTo(offset, callback) {
		positionY = getScrollTop();
		direction = positionY > offset ? -1 : 1;
		targetPositionYWithOffset = offset + direction;
		targetPositionY = offset;
		velocityY = 0;
		if (positionY != targetPositionY) {
			animate();
		} else {
			_this.triggerEvent('scrollDone');
		}
	};

	this.triggerEvent('scrollStart');
	if (animatedScroll == 0) {
		window.scrollTo(0, to);
		this.triggerEvent('scrollDone');
	} else {
		scrollTo(to);
	}
};

exports.default = scrollTo;
