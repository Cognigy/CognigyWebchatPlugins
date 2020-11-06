# Rating Webchat Plugin

Enable user ratings in your webchat conversation.

## How to use this plugin:

1. You need to copy the plugin's code and run the following commands:
    - `npm i`
    - `npm run build`
2. Now, you should find a folder called `dist` which contains a `rating.webchat-plugin.js` file. This file whether needs to be included into your `index.html` file which opens the webchat or uploaded to a cloud storage to add it to the Cognigy Webchat Configuration in the Webchat Endpoint.
3. In your Cognigy.AI agent, you need to define a Flow that starts the webchat plugin. Therefore, use the following JSON data as Data informatoin in the SAY Node:

```js
{
  "_plugin": {
    "type": "rating",
    "title": "Please rate us",
    "initialRating": 2,
    "size": "medium", // 'small', 'medium', 'large'
    "variant": "star", // 'star', 'heart', 'emoji'
    "maxRatingValue": 5,
    "precision": 1, // '1' or '0.5' for rating values like 3.5
    "rateButtonText": "Send Rating"
  }
}
```

After the above SAY node was executed by Cognigy.AI, it should show one of the following contents in your webchat:

<img src="./docs/star.png"></img>

<img src="./docs/heart.png"></img>

<img src="./docs/emoji.png"></img>