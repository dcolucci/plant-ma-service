# Plant Ma Service

A backend service to provide data to the Plant Ma app.

## Getting Started

### Google setup

The app currently uses Google Sheets as its data source and leverages the Google Sheets API.

#### Sheet format

The google sheet storing the recommendations data should have the following format:

|name|light|difficulty|star signs|
|---|---|---|---|
|`plant name`|`light requirements`|`care difficulty`|`applicable star signs, comma-separated`|

for example:

|name|light|difficulty|star signs|
|---|---|---|---|
|example plant|low|hard|cancer,leo,virgo|

#### Developers Console setup
 1. Within Google account, activate google developer account
 1. In the Google Developer Console, create a new Service Account
    1. select "role" `Viewer`
    1. select JSON access credentials
 1. Back in the Developer Console, select "Enable APIs & Services"
    1. select "Google Sheets"
 1. Open the Google Sheet that will be used to store the data
    1. Share the sheet with the email address of your new Service Account

#### Access key

You'll need to download a JSON file representing your access credentials. If not done during the initial steps above, it can be downloaded from the Google Developers Console > Service Accounts area.

### Local development

_**Important**: you'll need the Google Service Accounts credentials JSON file downloaded in the "Google Setup" section above. As this file contains sensitive data, **do not commit to the source code of this project!**_

#### Connecting to Google

TK

#### Spinning up the app

Get on the target node version using your preferred NodeJS version manager (specificed in `.nvmrc`):

```sh
$ nvm use
```

Install dependencies:

```sh
$ npm install
```

Start server:

```sh
$ npm start
```

## To Do
 * [ ] document build / creds process
 * [ ] server logging
 * [ ] query param whitelist
 * [ ] error handling for data load failure
 * [ ] benchmarking
 * [ ] abstract out SHEET ID