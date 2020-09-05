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

node.addEventListener("event", () => {}); // add event listener to that element (like click, hover, scroll and son on)

node.classList; // allows for manipulation of element's class content attribute
node.classList.toggle(); // toggle class (class name) of element

node.textContent; // shows text content of that element
node.textContent = "Some thing"; // insert a value or string for that text content
node.innerHTML; // shows the HTML of that element
node.innerHTML = "<tag>something</tag>"; // insert a new HTML content

<!-- Adjacent graph -->
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->

node.insertAdjacentHTML(); // inserts a new HTML content into specific position
node.insertAdjacentHTML("beforebegin", HTML); // inserts a new HTML content before the element itself
node.insertAdjacentHTML("afterbegin", HTML); // inserts new a HTML content just inside the element, before its first child
node.insertAdjacentHTML("beforeend", HTML); // inserts a new HTML content just inside the element, after its last child
node.insertAdjacentHTML("afterend", HTML); // inserts a new HTML content after the element itself

node.insertAdjacentElement("beforebegin", element); // inserts a new element before the target element itself
node.insertAdjacentElement("afterbegin", element); // inserts a new element just inside the target element, before its first child
node.insertAdjacentElement("beforeend", element); // inserts a new element just inside the target element, after its last child
node.insertAdjacentElement("afterend", element); // inserts a new element after the target element itself

node.appendChild(); // inserts one node after the last child of node
node.append(); // inserts nodes after the last child of node
node.prepend(); // inserts nodes before the first child of node
node.before(); // inserts nodes just before node -- ul.lastElementChild.before(newLi)
node.after(); // inserts nodes just after node
node.insertBefore(); // inserts a node before a reference node as a child of a specified parent node
node.replaceChild(); // replaces a child node within the given (parent) node -- parentNode.replaceChild(newChild, oldChild);
node.replaceWith(); // replaces this `ChildNode` in the children list of its parent with a set of `Node` or `DOMString` objects

node.parentNode; // returns the parent
node.parentElement; // returns the parent element
node.closest; // returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise

node.nextSibling; // returns the next sibling
node.previousSibling; // returns the previous sibling
node.nextElementSibling; // returns the first following sibling that is an element, and null otherwise
node.previousElementSibling; // returns the first preceding sibling that is an element, and null otherwise

node.childNode; // 
node.children; // returns the children of that node
node.children[]; // returns the specific child of that node
node.firstChild; // returns the children of that node
node.firstElementChild; // returns the first child of that node (include text node)
node.lastChild; // returns the last child of that node
node.lastElementChid; // returns the last child of that node (include text node)

node.cloneNode(); // returns a copy of node. If deep is true, the copy also includes the node's descendants
node.cloneNode(false); // returns a copy of node
node.cloneNode(true); // returns a copy of node with node's descendants
```
