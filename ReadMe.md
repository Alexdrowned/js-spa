#Javascript-spa
JavaScript SPA for Ricj

## How to Use
1. Install npm dependencies:
    ```
    npm install
    # or
    npm i
    ```
2. Second Item
3. Third Item
4. Fourth Item
##Dependencies

```
"devDependencies": {
    "@babel/core": "^7.8.7",
    "babel-loader": "^8.0.6",
    "copy-webpack-plugin": "^5.1.1",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.42.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3"
  }
```

##Configuration Webpack

FOr ECMAScrito6+:

```
    module: {
        rules: [
            {
                test : /\.js?/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
```

FOr configure behaborial mode
```
    plugins:[
        new HtmlWebPackPlugin({
            inject: true,
            template: "./public/index.html",
            filename : "./index.html"
        }),
        new CopyWebPackPlugin({
            from : "./src/styles/style.css",
            to : ""
        })
    ]
```

## Directory
The next structure, we can explain the form
or way for read this proyect.

- src
- src/pages
- src/public
- src/styles

