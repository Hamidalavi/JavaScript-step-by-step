# Document Object Model

```js
document.querySelector(); // returns the first element (just one element) that is a descendant of node that matches selectors
document.querySelectorAll(); // returns all element descendants of node that match selectors -- NodeList
document.getElementById(); // gets element by its `id`
document.getElementsByName(); // gets elements by `name`
document.getElementsByClassName(); // gets elements by `class`
document.getElementsByTagName(); // gets elements by tag -- HTML tag (HTMLCollection)
document.createElement("<tag>"); // creates an element (Node)
document.createAttribute(); // creates a new attribute node, and returns it
document.importNode(element.content, true); // returns a copy of node. If deep is `true`, the copy also includes the node's descendants

element.addEventListener("event", () => {}); // add event listener to that element (like click, hover, scroll and son on)

element.classList; // allows for manipulation of element's class content attribute
element.classList.toggle(); // toggle class (class name) of element

element.textContent; // shows text content of that element
element.textContent = "Some thing"; // insert a value or string for that text content
element.innerHTML; // shows the HTML of that element
element.innerHTML = "<tag>something</tag>"; // insert a new HTML content
```

```html
Adjacent graph
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

```js
element.insertAdjacentHTML(); // inserts a new HTML content into specific position
element.insertAdjacentHTML("beforebegin", HTML); // inserts a new HTML content before the element itself
element.insertAdjacentHTML("afterbegin", HTML); // inserts new a HTML content just inside the element, before its first child
element.insertAdjacentHTML("beforeend", HTML); // inserts a new HTML content just inside the element, after its last child
element.insertAdjacentHTML("afterend", HTML); // inserts a new HTML content after the element itself

element.insertAdjacentElement("beforebegin", element); // inserts a new element before the target element itself
element.insertAdjacentElement("afterbegin", element); // inserts a new element just inside the target element, before its first child
element.insertAdjacentElement("beforeend", element); // inserts a new element just inside the target element, after its last child
element.insertAdjacentElement("afterend", element); // inserts a new element after the target element itself

element.appendChild(); // inserts one node after the last child of node
element.append(); // inserts nodes after the last child of node
element.prepend(); // inserts nodes before the first child of node
element.before(); // inserts nodes just before node -- ul.lastElementChild.before(newLi)
element.after(); // inserts nodes just after node
element.insertBefore(); // inserts a node before a reference node as a child of a specified parent node
element.remove(); // removes the object from the tree it belongs to
element.remove(); // removes the object from the tree it belongs to
element.removeChild(); // removes a child node from the DOM and returns the removed node
element.replaceChild(); // replaces a child node within the given (parent) node -- parentNode.replaceChild(newChild, oldChild);
element.replaceWith(); // replaces this `ChildNode` in the children list of its parent with a set of `Node` or `DOMString` objects

element.parentNode; // returns the parent
element.parentElement; // returns the parent element
element.closest; // returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise

element.nextSibling; // returns the next sibling
element.previousSibling; // returns the previous sibling
element.nextElementSibling; // returns the first following sibling that is an element, and null otherwise
element.previousElementSibling; // returns the first preceding sibling that is an element, and null otherwise

element.childNode; // returns the children (text node included)
element.children; // returns the children of that node
element.children[]; // returns the specific child of that node
element.firstChild; // returns the children of that node
element.firstElementChild; // returns the first child of that node (include text node)
element.lastChild; // returns the last child of that node
element.lastElementChid; // returns the last child of that node (include text node)

element.cloneNode(); // returns a copy of node. If deep is true, the copy also includes the node's descendants
element.cloneNode(false); // returns a copy of node
element.cloneNode(true); // returns a copy of node with node's descendants
```
