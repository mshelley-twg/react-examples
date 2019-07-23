- Some props are required by many components, so it is cumbersome to pass down
- Context lets you share props without explicitly passing props
- Context is useful for global data, such as the user
- Pass props deep in the component tree without threading them along

```
const Context = React.createContext(value)

<Context.Provider value="value">
</Context.Provider>

// To get the context in a class component
this.context

// To get the context in a function component
<Context.Consumer>
  { value => {
    // requires function as a child
  }}
}
</Context.Consumer>
```

Providers can be nested to override values

You can pass functions in your context to change the context values
`{ theme, toggleTheme }`
