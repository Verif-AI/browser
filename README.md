# Verif.ai Browse Extension

## Getting Started

> **Prerequisite**
> Before starting, make sure you have the following installed
> - `node >= 20.11.0`
> - `npm >= 10.2.4`
>
> For documentation on installing node and npm, see the link https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Backend

Before running the extension, make sure you are running the backend. Documentation can be found here https://github.com/Verif-AI/backend/tree/main

### Build extension
To build the extension...

1. `npm i`
2. `npm run build`

### Load extension

To load the extension...

1. Go to the Extensions page by entering chrome://extensions in a new tab. (By design chrome:// URLs are not linkable.)
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the Load unpacked button and select the extension directory `build`.

![](https://developer.chrome.com/static/docs/extensions/get-started/tutorial/hello-world/image/extensions-page-e0d64d89a6acf_960.png)

See links for more information on how to create extensions
- https://developer.chrome.com/docs/extensions/get-started
- https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world