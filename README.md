![CoronaCompass](assets/logo.svg "CoronaCompass")

CoronaCompass is a web plattform that enables citizens to find help offerings and chances to support those who are in need of help by curating every available app, plattform, service and everything else that can guide us through the crisis.

## Technologies

We use a Vue.js frontend and a custom Node.js backend to deliver our application and data to our users. Our data is held in a Airtable.com document for ease of use and accessability.

Our backend application is fully cors-enabled and can be used for other applications.

Hosting is provided free of charge by Azure (Thanks to Microsoft). We are using an app-service for frontend hosting and a "function" aka serverless computing for our backend service to ensure scalability in case of massive increases in visitor numbers.

The code is originally hosted on Azure DevOps. [Backend](https://dev.azure.com/corona-compass/corona-compass-backend) and [Frontend](https://dev.azure.com/corona-compass/corona-compass-frontend) are split into seperate repositories in order to make it easy to setup continous delivery to our Azure Services. However we do not make use of any proprietary Azure technologies, so that hosting on a custom server or another cloud platform should be trivial. 

This repo is just a mirror of our Azure DevOps Repo in order to comply with the rules of #WirVsVirusHack and to make our code more accessible.

## Participate

If you want to help us in pushing our plattform forward (e.g. provide a localized version, add more metadata, improve ui or ux, ...), please contact us at https://corona-compass.org/.
