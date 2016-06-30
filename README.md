# ExpressApp

Web application using bleeding edge technologies

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

What things and global dependencies you will need to install the software and how to install them

* [Git](https://git-scm.com/)
* [NodeJS](https://nodejs.org/en/)
* [NPM](https://nodejs.org/en/)
* TypeScript
* Express-Generator

######Install global dependencies
```
npm install -g npm
npm install -g express-generator
npm install -g typescript
```

### Installing

How to get a development environment running

######Clone repository & branch
```
git clone https://github.com/SyedAman/ExpressApp.git
git branch <name-of-your-branch>
```

######Install dependent node modules
```
cd expressApp
npm install
```
this will install all project specific packages to get everything running

######Install optional node modules

```
npm install -g nodemon
```
Nodemon is a useful tool that tracks file changes and automatically restarts a web server after a change
in order to save us from the tedious tasks of constantly restarting the web server after updating the source
```
nodemon views/app.js
```
This watches app.js for changes and restarts web server automatically

## Running the tests

######Start web server
```
DEBUG=expressApp:* npm start
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

*See package.json for packages used*

* NodeJS & NPM
* Express.js
* Git & GitHub
* Visual Studio Code

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning semantics. For the versions available, see the [tags on this repository](https://github.com/SyedAman/ExpressApp/tags). 


Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards-compatible manner, and
PATCH version when you make backwards-compatible bug fixes.
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

## Authors

* **Syed Aman** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/SyedAman/ExpressApp/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
