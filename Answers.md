# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS updates only the parts of the DOM that need updating instead of updating the entire page and saves a lot of performance by being selective. It uses an un-updated version of the website as a template to produce the updated 

1. What does it mean to think in react?

Because React re-renders instead of mutating webpages it is important to always think in react of changing states and props. This makes for easier UI transitions.

1. Describe state.

State a type of condition something on a React page can be assigned to and when in state its value can be assigned and reassigned any number of times. It should be noted however that it is only one thing at a time. 

1. Describe props.

Props are assigned to some data component and then that data component is assigned to some child function that can manipulate the data component to achieve a desired result. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is when a function pulls in something from outside of its scope to complete its process. State and prop changes in react are synced using hooks which are imported from React and then the props and states are assigned values. 
