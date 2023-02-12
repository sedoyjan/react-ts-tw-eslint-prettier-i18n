# Description

To migrate back to react 17:

add these deps to package.json

```
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
```

remove alias from the webpack.config

```
alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
```
