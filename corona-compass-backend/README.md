# Corona Compass Backend

This is the backend solution for corona compass.

## Overview

The application is implemented as azure functions. That means that there is no server necessary, scaling is handled by the cloud as well as security patches, updates and other operations stuff.

## How to install

Set the environment variables `AIRTABLE_BASE` to your Airtable Workplace ID and `AIRTABLE_API_KEY` to your Airtable api key. You can obtain these information from https://airtable.com/api. Afterwards deploy the azure functions and your backend should be up and running. Afterwards, you need to set the path to this API in your frontend application (either corona compass or a third-party app).