# Express Prototyper

Lightweight prototyping tool in [Express](http://expressjs.com) and [Bootstrap 3](http://getbootstrap.com) using [Handlebars](http://handlebarsjs.com) templates, with additional support for [RequireJS](http://requirejs.org), [Knockout](http://knockoutjs.com), [Moment.js](http://momentjs.com), [D3](http://d3js.org) and CSV parsing.

## Quick Start

1. Download and install [Node](http://nodejs.org)
1. At the command line install [Bower](http://bower.io), [Grunt](http://gruntjs.com) and [Nodemon](https://github.com/remy/nodemon) globally by typing `sudo npm install -g bower grunt-cli nodemon`
1. Download and unzip the Express Prototyper
1. Open the unzipped folder at the command line
1. Type `npm install && bower install` to install all dependencies
1. Type `grunt` to start the server
1. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the dynamic site

## Additional Information

* The Express Prototyper uses [Handlebars](http://handlebarsjs.com) as its templating engine, and includes support for blocks, partials and helpers
* When the server is running it monitors for file updates, and automatically restarts when it detects changes
* The server also monitors for changes to [LESS](http://lesscss.org) files, and automatically compiles them into static CSS files when updated
* With the server running, open a command line at the Express Prototyper folder and type `grunt dist` to generate a static export of the site, which includes all dependencies and renders static HTML files for all routes

## License

The MIT License (MIT)

Copyright (c) 2013 Dane Petersen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
