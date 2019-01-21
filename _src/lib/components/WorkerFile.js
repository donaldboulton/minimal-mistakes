import WebWorker from "react-webworker";

const MyComponent = () => (
  <WebWorker url="./workers/Workers">
    {({ data, error, postMessage }) => {
      if (error) return `Something went wrong: ${error.message}`
      if (data)
        return (
          <div>
            <strong>Received some data:</strong>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )
      return <button onClick={() => postMessage("hello")}>Hello</button>
    }}
  </WebWorker>
)