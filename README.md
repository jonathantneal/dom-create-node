# DOM Create Node <a href="https://github.com/jonathantneal/dom-create-node"><img src="https://resources.whatwg.org/logo-dom.svg" alt="Document Object Model logo" width="90" height="90" align="right"></a>

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-image]][lic-url]
[![Changelog][log-image]][log-url]
[![Gitter Chat][git-image]][git-url]

[DOM Create Node] lets you create [DOM Node]s from [CSS Selector]s.

```sh
npm install --save-dev jonathantneal/dom-create-node
```

```js
import createNode from 'dom-create-node';
```

Now you can do this.

```js
document::createNode('button.btn[aria-controls="carousel-1"] "Previous"');
```

Whereas you had to do this before.

```js
btn = document.createElement('button');

btn.className = 'btn';

btn.setAttribute('aria-controls', 'carousel-1');

btn.appendChild(document.createTextNode('Previous'));
```

### createNode method

Returns a newly created [DOM Node].

```
void createNode(
	String selector
);
```

## Notes

###### *What if I do not specify an element name, like `.btn`?*

The HTML `<div>` element will be the generic container because it does not inherently represent anything.

###### *Does this pollyfill a standardized API?*

No, this is not yet part of an standardized API that I know of. However, if you like it, you should write about it! That’s how we got [closest].

###### *Can I use this to create sibling elements, like `.btn, .btn`?*

No. Developers expect a consistent return. Conditionally returning a [Document Fragment] would be a bad pattern.

[npm-url]: https://www.npmjs.com/package/dom-create-node
[npm-img]: https://img.shields.io/npm/v/dom-create-node.svg
[cli-url]: https://travis-ci.org/jonathantneal/dom-create-node
[cli-img]: https://img.shields.io/travis/jonathantneal/dom-create-node.svg
[lic-url]: LICENSE.md
[lic-image]: https://img.shields.io/npm/l/dom-create-node.svg
[log-url]: CHANGELOG.md
[log-image]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-image]: https://img.shields.io/badge/chat-gitter-blue.svg

[DOM Create Node]: https://github.com/jonathantneal/dom-create-node
[CSS Selector]: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors
[DOM Node]: https://developer.mozilla.org/en-US/docs/Web/API/Node
[closest]: https://github.com/jonathantneal/closest
[Document Fragment]: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
