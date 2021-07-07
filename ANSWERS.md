- [ ] Why would you use class component over function components (removing hooks from the question)?

You may want to use a class component over a function component in order to gain access to many default life-cycle methods that come with the Base React.Component class that come directly from the React API. These lifecycle methods were the only way to change state, make api calls, and control side-effects.

- [ ] Name three lifecycle methods and their purposes.

One method is the: componentDidMount method which is part of the mounting phase. This method gets called as soon as the render method is called the first time. When the component mounts we have the basics needed to put something on the screen. Inside of the method we can call setState which forces a re-render of the component. Any asynchronous actions should be called inside this method such as fetching data. Fetching data is the main purpose for this method because of its position within the component lifecycle.

Another method is the: componentDidUpdate method which is invoked immediately after updating occurs. This method is not called for the initial render. This is an opportunity to operate on the DOM when the component had been updated. This is also a good place to do network requests as long as you compare the current props to previous props. You can call setState immediately but it must be wrapped in a condition or it may cause an infinite loop. It takes in three arguments: prevProps, prevState, snapshot. You only want this to run when the previous props or state has been changed, which is reason for the condition otherwise it will cause a re-render and will keep looping.

A third method is the: componentWillUnmount method which is invoked immediately before a component is unmounted and destroyed. This is where you perform any necessary cleanup such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created. You do not call setState in here because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again

- [ ] What is the purpose of a custom hook?

The purpose is so that you can apply non-visual behavior and stateful logic throughout your components that is customized to your needs. It also allows you to reuse the same hook over and over again.

- [ ] Why is it important to test our apps?

It is important to test our apps because it will help surface bugs faster, reduce the risk of regressions, improves the trustability of our code, makes us think about edge cases, acts as a safety net when making changes or refactoring, acts as code documentation, and encourages us to write more testable or better code.
