life cycle methods type - 
In class-based components, there are several lifecycle methods that you can use to run code at specific points in the component's lifecycle. These methods can be grouped into three categories:

Mounting methods: These methods are called when the component is being added to the DOM.
constructor(): This method is called before the component is mounted. You can use it to initialize state and bind event handlers.

componentDidMount(): This method is called after the component is mounted. You can use it to make HTTP requests or set up any subscriptions.

Updating methods: These methods are called when the component is being updated, either because the component's props or state have changed, or because a parent component has re-rendered.

shouldComponentUpdate(nextProps, nextState): This method is called before the component is updated. You can use it to decide whether or not to re-render the component. It returns a boolean value (true if the component should update, false if it shouldn't).

componentDidUpdate(prevProps, prevState): This method is called after the component is updated. You can use it to perform any post-update tasks, such as making an HTTP request based on the new props or state.

Unmounting methods: These methods are called when the component is being removed from the DOM.
componentWillUnmount(): This method is called before the component is unmounted. You can use it to perform any cleanup tasks, such as removing event listeners or cancelling in-flight HTTP requests.
In contrast, function components don't have lifecycle methods. Instead, they use "hooks" to perform side effects. The most commonly used hook for performing side effects is useEffect. The useEffect hook is called after the component is rendered, and you can use it to perform tasks such as making an HTTP request or setting up an event listener. You can also use the useEffect hook to perform cleanup tasks.

