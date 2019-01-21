import "babel-polyfill";

self.onmessage = ({ data: { text } }) => {
    self.postMessage({ text: text + text });
};