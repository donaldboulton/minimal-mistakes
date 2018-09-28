const loadable = (loaderFunction) => 
    class AsyncComponent extends React.Component {
        state = { ResultComponent: null };

        componentWillMount() {
            loaderFunction
              .then(result => this.setState({ ResultComponent: result[exportKey] }))
              .catch(() => this.setState({ error: true }); 
        }

        render() {
            // Display loaded component
            if (this.state.ResultComponent) {
                return <this.state.ResultComponent />
            }
            // or not :P
            if (this.state.error) {
               return ErrorComponent;
            }
            return LoadingComponent;
        }
    }