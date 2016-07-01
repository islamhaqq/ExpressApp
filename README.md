# ExpressApp

Web application using bleeding edge technologies

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

What global dependencies and things you will need to install the software and how to install them

* [Git](https://git-scm.com/)
* [NodeJS](https://nodejs.org/en/)
* [NPM](https://nodejs.org/en/)
* TypeScript

######Install global dependencies
```
npm install -g npm
npm install -g typescript
```

######Install optional node modules
Install nodemon for ease of life
```
npm install -g nodemon
```
Nodemon is a useful tool that tracks file changes and automatically restarts a web server after a change
in order to save us from the tedious tasks of constantly restarting the web server after updating the source
```
nodemon views/app.js
```
This watches app.js for changes and restarts web server automatically

*NOTE: express-generator was used globally to generate scaffolding files to build the express app quickly but it isn't required to get this app running*

### Installing

How to get a development environment running

######Clone repository & branch
Get your own copy and make changes
```
git clone https://github.com/SyedAman/ExpressApp.git
git branch <name-of-your-branch>
```

######Install dependent node modules
install all project specific packages to get everything running
```
cd expressApp
npm install
```

## Deployment

######Start web server
Run the express web server
```
DEBUG=expressApp:* npm start
```

######Use web server
Access the web server on your browser
```
localhost:3000
```

## Built With

*See package.json for packages used*

* NodeJS & NPM
* Express.js
* HJS
* CSS
* HTML
* Git & GitHub
* Visual Studio Code

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning semantics. For the versions available, see the [tags on this repository](https://github.com/SyedAman/ExpressApp/tags). 


Given a version number MAJOR.MINOR.PATCH, increment the:

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.
* Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

## Authors

* **Syed Aman** - *Initial work* - [Profile](https://github.com/SyedAman)

See also the list of [contributors](https://github.com/SyedAman/ExpressApp/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
Hat tip to:
* Will Stern for his web development guides in using NodeJS and Express. Check out his YouTube [channel](https://www.youtube.com/user/learncodeacademy)
