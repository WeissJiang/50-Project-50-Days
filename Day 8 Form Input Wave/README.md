## .split()
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

## .innerHTML
The Element property innerHTML gets or sets the HTML or XML markup contained within the element.

## .innerText
The innerText property of the HTMLElement interface represents the "rendered" text content of a node and its descendants. As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.
````  
Syntax
const renderedText = htmlElement.innerText
htmlElement.innerText = string
````
````
HTML
<label for="">Email</label>

JavaScript
console.log(label.innerText);
//  expected output: Email
````

# Project Example
````
const labels = document.querySelectorAll('.form-control label');
labels.forEach(function(label){

    console.log(label.innerText.split('').map(function(letter, index){
        return `<span style="transition-delay:${index*50}ms">${letter}</span>`}).join(''));

    label.innerHTML = label.innerText
    .split('')
    .map(function(letter, index){
        return `<span style="transition-delay:${index*50}ms">${letter}</span>`})
    .join('');
})  

console:
<span style="transition-delay:0ms">E</span><span style="transition-delay:50ms">m</span><span style="transition-delay:100ms">a</span><span style="transition-delay:150ms">i</span><span style="transition-delay:200ms">l</span>
script.js:4 <span style="transition-delay:0ms">P</span><span style="transition-delay:50ms">a</span><span style="transition-delay:100ms">s</span><span style="transition-delay:150ms">s</span><span style="transition-delay:200ms">w</span><span style="transition-delay:250ms">o</span><span style="transition-delay:300ms">r</span><span style="transition-delay:350ms">d</span>
````

# Difference between .innerHTML and .innerText
## innerHTML指的是从对象的起始位置到终止位置的全部内容,包括Html标签。
## innerText   指的是从起始位置到终止位置的内容,但它去除Html标签。
````  

<html>
	<head><title>innerHTML</title></head>
	<body>
		<div id="d1"><p id="p1">hello world </p></div>
		<script>
			var content = document.getElementById("d1");
			console.log(content.innerHTML);
			console.log(content.innerText)
		</script>
	</body>
</html>

console:
<p id="p1">hello world </p>
hello world
````  

## .map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.   

## .join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.   
````  
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
````
