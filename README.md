# Plant Ma Service

A backend service to provide data to the Plant Ma app.

## Getting Started

### Google setup

The app currently uses Google Sheets as its data source and leverages the Google Sheets API.

To start:
 1. Create a google account
 1. Activate google developer account
 1. In the Google Developer Console, create a new Service Account
    1. select "role" `Viewer`
    1. select JSON access credentials
 1. Back in the Developer Console, select "Enable APIs & Services"
    1. select "Google Sheets"
 1. Open the Google Sheet that will be used to store the data
    1. Share the sheet with the email address of your new Service Account

### Local development

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