# Open Journal Systems

## DAI Version
This Version is based on ojs 3.1.2.4 (stable) and includes the following Plugins:
* [PKP] quickSubmit
* [DAI] zenon
* [DAI] idaitheme
* [DAI] cilantro

> Open Journal Systems (OJS) has been developed by the Public Knowledge Project. For general information about OJS and other open research systems, visit the [PKP web site][pkp].

[![Build Status](https://travis-ci.org/pkp/ojs.svg?branch=master)](https://travis-ci.org/pkp/ojs)

### Updates
1. Update submodule in its own repository, e.g. dainst/ojs3_theme, commit and push your changes.
2. Checkout this repository, navigate to the updated submodule and `git pull`. Maybe you need to checkout the correct branch/commit manually.
3. Leave the submodule and exceute `git add path/to/submodule`, `git commit -m "Update submodule xy"` and `git push`.
4. The only thing to do on the server should be `sudo -u www-data git pull`. 

Never update this repository on the server and remember to pull as www-data to avoid files owned by the root user.


## Documentation

You will find detailed guides in [docs](docs) folder.

## Using Git development source

Checkout submodules and copy default configuration :

    git submodule update --init --recursive
    cp config.TEMPLATE.inc.php config.inc.php

Install or update dependencies via Composer (https://getcomposer.org/):

    composer --working-dir=lib/pkp update
    composer --working-dir=plugins/paymethod/paypal update
    composer --working-dir=plugins/generic/citationStyleLanguage update

Install or update dependencies via [NPM](https://www.npmjs.com/):

    # install [nodejs](https://nodejs.org/en/) if you don't already have it
    npm install
    npm run build

If your PHP version supports built-in development server :

    php -S localhost:8000

See [Wiki][wiki-dev] for more complete development guide.

## Running Tests

We recommend using [Travis](https://travis-ci.org/) for continuous-integration
based testing. Review the Travis configuration file (`.travis.yml`) as a
reference for running the test locally, should you choose to do so.

The tests include an integration test suite that builds a data environment from
scratch, including the installation process. (This is the `-b` flag to the test
script `lib/pkp/tools/runAllTests.sh`; this is also executed in the Travis
environment.)

## Bugs / Issues

See https://github.com/pkp/pkp-lib/#issues for information on reporting issues.

## License

This software is released under the the [GNU General Public License][gpl-licence].

See the file [COPYING][gpl-licence] included with this distribution for the terms
of this license.

Third parties are welcome to modify and redistribute OJS in entirety or parts
according to the terms of this license. PKP also welcomes patches for
improvements or bug fixes to the software.

[pkp]: http://pkp.sfu.ca/
[readme]: docs/README.md
[wiki-dev]: http://pkp.sfu.ca/wiki/index.php/HOW-TO_check_out_PKP_applications_from_git
[php-unit]: http://phpunit.de/
[gpl-licence]: docs/COPYING
