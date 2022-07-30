//? 1. What are the main differences between external, internal, and inline CSS?
// external: A separate file that holds all of the css styling
// internal: Built into the HTML file inside a <style> </style> element.
// inline: These styles take precedence. Built into the HTML file as an attribute on a specific element.

//? 2. What is the syntax for class and ID selectors?
// class: uses the dot => .
// ID: uses the pound symbol => #

//? 3. How would you apply a single rule to two different selectors?
// using a comma would apply the rules to two different selectors.

//? 4. Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?
// #title {color: blue} .primary {color: blue;}

//? 5. What does the descendant combinator do?
// without commas we can declare that all li tags that are inside li tags need the following styles:
/*
li li {
 color: blue;
}
*/

//? 6. Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?
// class has higher specificity

//? 7. From inside to outside, what is the order of box-model properties?
// content, padding, border, margin

//? 8. What does the box-sizing CSS property do?
// it determines how the height and width of a property is calculated.

//? 9. What is the difference between the standard and alternative box model?


//? 10. Would you use margin or padding to create more space between 2 elements?


//? 11. Would you use margin or padding to create more space between the contents of an element and its border?


//? 12. Would you use margin or padding if you wanted two elements to overlap each other?


//? 13. What is the difference between a block element and an inline element?


//? 14. What is the difference between an inline element and an inline-block element?


//? 15. Is an h1 block or inline?
// block

//? 16. Is button block or inline?
// inline

//? 17. Is div block or inline?
// block

//? 18. Is span block or inline?
// inline

//? 19. What’s the difference between a flex container and a flex item?
// flex container => display: flex (whereever the following property is defined)
// flex item => the HTML elements that exist as direct children under a flex container element

//? 20. How do you create a flex item?
// Create an HTML element inside the HTML element that is the flex container

//? 21. What are the 3 values defined in the shorthand flex property?
// flex-grow
// flex-shrink
// flex-basis
/* Three values: flex-grow | flex-shrink | flex-basis */
// flex: 2 2 10%;

//? 22. How do you make flex items arrange themselves vertically instead of horizontally?
// flex-direction: column;

//? 23. What is the difference between justify-content and align-items?
// justify-content is x-axis
// align-items is y-axis

//? 24. How do you use flexbox to completely center a div inside a flex container?
// justify-content: center;
// align-items: center;

//? 25. What’s the difference between justify-content: space-between and justify-content: space - around ?
// I think of space-between is pushing outward from the middle all the way to the edges of the visual width. 
// space-around takes into account all of the visual width and spaces the flex items evenly of all space.

//* Assignment

// 1. Read more about CSS and try to answer as many questions as you can from the CSS -
// Terminology & Definitions file, which you can find attached in the email.

/*
// 2. Assignment (Colors):
// a) Create 4 headings from h1 to h4
// b) Have all headings have different colors, according to your taste
// c) When giving values to colors of these headings, make sure all use a different type of
// values (keyword, hex, rgb, hsl)
// d) Put all headings in a div and color the div to your liking


// 3. Assignment (Links & Images):
// a) Open your project from the previous HTML assignments (links-and-images)
// b) Add any inline style for h1 of your homepage
// c) Create a directory named css within the links-and-images directory and create a
// cascade stylesheet named ‘style.css’ which all of your HTML files will be linked to
// d) Within that style.css add properties to customize the page to your liking, make sure that
// you include the following:
// a. Background color
// b. Text color
// c. Font family
// d. Font size
// e. Borders
// f. Rounded corners on images
// e) Remember that you can customize the pages to your liking, you will not be graded in
// any way on how it looks as it’s a personal preference, but make sure to use at least all of
// the properties mentioned above in the list

*/

// 4. Assignment (Main CSS Project):
// a) Download the ‘Roboto’ font from here
// b) Check out here on how to use that font you just downloaded
// c) Have a look at the two images below (3rd/4th) page of this document). One is the design
// that you will try to copy, it should look as similar as possible. The second one shows
// some information like colors and font-weights you should use in texts.
// d) Do not worry about this being responsive on mobile devices or not, that is not the goal
// here
// e) For the section you’re working on, begin by getting all the content onto the page before
// beginning to style it. In other words, do the HTML and then do the CSS. You’ll probably
// have to go back to the HTML once you start styling, but bouncing back and forth from
// the beginning will take more time and may cause more frustration.
// f) There are many ways to tackle a project like this, and it can be overwhelming to look at
// a blank HTML document and not know where to start. Our suggestion: take it one
// section at a time. The website you’re creating has 4 main sections (and a footer), so pick
// one and get it into pretty good shape before moving on. Starting at the top is always a
// solid plan.

/*

const isDinnerEaten = false;
const dinner = {
 vegetables: undefined,
 meat: "chicken",
 fruit: "apples",
 grains: "rice"
}
const dessert = "ice cream"

if (isDinnerEaten) {
 return dessert
} else {
 return dinner
}

*/