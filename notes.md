To add webpack

1) copy from wether api
.gitignore
package.json
webpack.config.js
test/ folder

Put all js, html, css into an /src/ folder

!!! note that webpack adds main.js to html automatically on compile !!!
!!! note that you import your css in your js file so no link rel needed in html.

!!! At top of main.js (your main js file)

```js
// Import CSS so it is loaded on the page
require("./main.css");
```
if using modules, require them eg:

```js
var apirequestfetch = require("./apirequestfetch");
```

if importing js modules, export them (at end of file) using:

```js
module.exports = {
  getAndShowWeather: getAndShowWeather,
  getLocation: getLocation,
};
```

2)In project directory
```sh
npm install npm
```
3) Install other deps (see package.json) as above except mocha and chai
```sh
npm install --save css-loader
```

4) Install for dev only:
```sh
npm install --save-dev mocha chai webpack-dev-server
```
5) Compile the project into one JS file, one CSS file, and one HTML file

6) put images in /public/ folder (make sure that in css they have an absolute url, ie /public/image.jpg/ not image.jpg

```sh
npm run build

#   This will run webpack so that the final application is bundled into files
#   that can be put on a web server and served to an end user.
# The project compiles into the `dist` folder
```

7) Run the development server

```sh
npm start

#   This will allow you to go to localhost:8080 and view your project there
#   Each time you hit refresh it will recompile your project so you can see
#   the latest changes.
```
