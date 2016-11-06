# evexio-website — the Evexio website

This project is the website for Evexio.


## Getting Started

To get you started you can simply clone the evexio-website repository and install the dependencies:

### Prerequisites

You need git to clone the evexio-website repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone evexio-website

Clone the evexio-website repository using [git][git]:

```
git clone https://github.com/Evexio/evexio-website.git
cd angular-seed
```

### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code.  

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
evexio-website changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.
