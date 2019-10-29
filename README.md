# Question 2
## What gets logged to the console when the user clicks on “Button 4” and why?

```javascript
for(var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```

#### Answer:
The scope of variable `i` declared with `var` keyword inside `for loop` creates its current execution context and declare `i` as global variable which can be overwritten by any expression within its function scope. So, when user clicks on `Button 4`, the same number 5 will be logged to console since variable `i` has already completed `for loop` with value 5 which is enclosed within its execution context and scope of variable `i` with same latest value `5` of `for loop` which can be accessed from all buttons created. This is due to the use of `var` keyword inside `for loop`.

#### Alternate implementation:
In order to fix this scope and execution context of `var` keyword, we can change `var` to `let` which is ES6 feature. `let` has block scope for variables unlike `var` which creates global scopes. `let` variables are not initialized until their definition or expression is evaluated.

[Alternate implementation can be found inside src > index.js. ](src/index.js)

## How to run
1. Download git to your machine from https://git-scm.com/downloads.
2. Clone this repo to your local machine by running `git clone https://github.com/NickPyae/question2.git`.
3. Go to public > index.html and open index.html with latest Chrome Browser.
4. Click Command + Option + J if you are on Mac to open developer console. Click Control + Shift + J if you are on Windows or Linux to open developer console.
5. Click on each button and you will see correct value in developer console.

## Implementation
index.js is written in modern JavaScript ES6 syntaxes such as let keyword and index.html is written in modern HTML5.
