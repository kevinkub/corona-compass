![CoronaCompass](assets/logo.svg "CoronaCompass")

CoronaCompass is a web plattform that enables citizens to find help offerings and chances to support those who are in need of help by curating every available app, plattform, service and everything else that can guide us through the crisis.

## Technologies

We use a Vue.js frontend. Our data is held in a Airtable.com document for ease of use and accessability.

## Installation

Download this repository using `git pull`.

Afterwards copy the file __.env.default__ to .env and insert your Airtable API-Key and the bases identifier. These information can be obtined from https://airtable.com/api after you recieve access to our workspace.

To install node dependencies and download a local copy of the Aitable database by running `npm install`
follwed by `npm run setup` to copy some assets to their right folders.

Finally you can run `npm run serve` to start a local test-server. You can modify any __.vue__ file and changes should be reflected immediately. Every change that makes it to the master will be live within about 20 seconds on our website.

## Participate

If you want to help us in pushing our plattform forward (e.g. provide a localized version, add more metadata, improve ui or ux, ...), please contact us at https://corona-compass.org/.

## Acknowledgements

We would like to thank everyone who put his efforts into this project during #WirVsVirusHack and thank the organisers of the event for the great opportunities we got.

![#WirVsVirusHack](assets/logo_wirvsvirushack.png "#WirVsVirusHack")