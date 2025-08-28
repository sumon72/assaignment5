
1.  The main different between each and other are mention belaw.

	getElementById: getElementById select specific one element.
	getElementsByClassName: getElementsByClassName select many element same class name.
	querySelector / querySelectorAll: querySelector select the first and one element of many element, 
	also querySelectorAll select all element of match class, name or tag.


2.  At first Create an element then append under parent element.
	example: 
	<div id ="parent_element"></div>

	<script>
	const newele = document.createElement("div");   
	newele.textContent = "new data";     
	document.getElementById("parent_element").appendChild(newele);
	</script>

3.  Event Bubbling means tiger any child event then will be fire parent grand parent to document 
    where is set event that is event Bubbling.
    its works child to parent.

4.  Event Delegation means select parent event for introducing child.

5.  preventDefault() stop any page refressing and checkbox default work break and many other,
    On the other hand stopPropagation() stop Event Bubbling.