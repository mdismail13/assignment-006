### 1) What is the difference between var, let, and const?
- Difference between var, let, and const:
1. var is  function scoped / global scoped
    - if we declare into a function then it is function scoped
    - if we declare it outside a function then it is global scoped.
    - var can be de declared more then one time with the same variable name, that's why this is not safe. Because it's override the previous one without throwing any kind of errors.
2. let is block scoped
    - the variable which declared with let only works in the declaration block.
    - the value of the variable can be changed, we can assign different value to variable the so many times we want.
    - we can't declare a same name variable twice with let.
3. const is also block scoped
    - the variable which declared with const only works in the declaration block.
    - the value of the variable can not be changed, we can't assign different value to the variable more than one time.
    - we can't declare a same name variable twice with const.
### 2) What is the difference between map(), forEach(), and filter()?
- difference between map(), forEach(), and filter():
1. map()
    - map() traverses every single element of an array, do the operation, and returns a new array.
2. forEach()
    - forEach() traverses all the elements of an array, do the operation, but doesn't return anything.
3. filter()
    - filter() traverses every element, checks the condition, then returns a new array with true condition.
### 3)What are arrow functions in ES6?
- Arrow function is a short way to write a function in JavaScript. This is simpler than using the function keyword and easier to read. The **=>** this arrow sign is used to declare an arrow function.
### 4) How does destructuring assignment work in ES6?
- Destructuring is a shortcut way to get values from an array or an object and assign them to separate variables. If it's an object, we use curly braces {} and write the variable. If it's an array, we use square brackets [] and write the variables in order. We can also use : to rename a variable when destructuring an object.
### 5) Explain template literals in ES6. How are they different from string concatenation?
- Template literal is a new feature in ES6. It is easier to create and format strings with template literals. We use ` instead of ' or " in template literals. We can easily write strings and include different types of dynamic values directly inside them with template string literals.