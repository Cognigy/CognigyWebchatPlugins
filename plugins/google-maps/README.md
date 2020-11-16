# Cognigy Webchat Google Maps Plugin
This repository contains a google maps plugin for the [Cognigy Webchat](https://github.com/Cognigy/WebchatWidget).

![Webchat Google Maps Plugin](./assets/google-maps-Webchat.PNG)

## Installation

1. Clone this repo
2. Install all necessary dependencies via `nmp i`
3. Run `npm run build` - this will create a `dist/google-maps.webchat-plugin.js` plugin file for you
4. Use that file in your Cognigy Webchat as described in the [Cognigy Docs](https://docs.cognigy.com/docs/using-additional-webchat-plugins).

## Calling the Plugin from Cognigy
You can call the plugin from within Cognigy by sending a data message using a Say Node.
You can specify following optional parameters:


```js
{
  "_plugin": {
    type: "google-maps",
    center: {
        lat: 51.259823489,
        lng: 6.23432432
    },
    zoom: 12,
    apikey: "" //Google Maps JavaScript API Key
  }
}
```

Please make sure that the values in `data` match the following interface:
```ts
interface {
  _plugin: {
    type: "google-maps";
    center: {
      lat: number;
      lng: number;
    },
    zoom: number;
    apikey: string; // Google Maps JavaScript API Key
  }
}
```


