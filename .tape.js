// tooling
const createNode = require('.');
const DOMParser = require('xmldom').DOMParser;

// generate empty dom
const document = new DOMParser().parseFromString('<!doctype html>', 'text/html');

const Element = document.createElement().constructor;

// polyfill classList, className, and id
Object.defineProperties(Element.prototype, {
	classList: {
		get: function () {
			return {
				add: (className) => {
					var classList = this.getAttribute('class') ? this.getAttribute('class').trim().split(/\s+/) : [];

					classList.push(className);

					this.className = classList.join(' ');
				}
			};
		}
	},
	className: {
		get: function () {
			return this.getAttribute('class');
		},
		set: function (value) {
			return this.setAttribute('class', value);
		}
	},
	id: {
		get: function () {
			return this.getAttribute('id');
		},
		set: function (value) {
			return this.setAttribute('id', value);
		}
	}
});

var actual = createNode.call(document, '#foo.bar[baz][bux="qux"] "zuz"').toString();
var expect = '<div id="foo" class="bar" baz="" bux="qux">zuz</div>';

process.exit(actual === expect ? 0 : 1);
