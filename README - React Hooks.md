Hooks
- Let you use most React's features without classes
- Avoid "wrapper hell" trying to share state
- Related code gets split apart
- Hooks will not replace classes, but work alongside them
- Don't refactor all of your classes to hooks
- "React needs a better primitive for sharing stateful logic"
- Reuse stateful logic without changing component hierarchy
- Functions that let you "hook into" React state and lifecycle features from function components
- Hooks do not work inside classes; they let you use React without fclasses
- We don't have to rewrite function components as classes just to add state

State Hook
- Add local state to function component
- Multiple variables can be declared with multiple `useState()` calls
- Must be called in the same order
- With hooks, setting state always replaces (unlike `this.setState`, which merges)

`const [currentValue, setValue] = useState(initialValue)`

You can pass a function in place of the initialValue to do complex work.
The value will only be calculated during the initial render.

You can pass a function to `setValue` to use the current value, e.g.
`setValue(previous => previous + 1)`

Effect Hook
- Perform side effects from a function component
- Similar to `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, etc.
- By default, React runs effects after every render, including first render
- Tell React to perform the effect after render
- You can return a function to clean up the effect
- Actually! The cleanup runs after every re-render, not just unmount
- We keep the effect and its cleanup together
- We can apply multiple effects
- We can skip applying an effect if certain values haven't changed between renders
- Be sure to include props / state that are used by the effect

```
useEffect(() => {
  // code that runs after every render

  return () => {
    // code that runs only on unmount
  }
}, [skipIfUnChanged])
```

If you provid `[]` to second parameter, the effect only runs on mount and unmount

Rules of Hooks
- Do not call hooks within loop, conditions, or nested functions; they are top level
- Only calls hooks from React function (or custom hooks)
- Custom hooks should start with `use`
- There is a linter plugin to check rules

Custom Hooks
- We can reuse stateful logic between domonents
- Replaces higher-orer components and render props
- Hooks let you reuse stateful logic, not just state
- The name should start with `use` to be considered a hook


`useContext`, `useReducer` ???
