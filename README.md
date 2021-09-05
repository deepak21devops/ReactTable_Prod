## Clone the Project to VSCode Using below Command

#### `git clone https://github.com/deepak21devops/ReactTable_Prod.git`

## Open the project Directory in VSCode

#### `cd ReactTable_Prod/`

## Install the Dependencies *package.json* file using following command
#### `npm install`

## After installing the dependencies run the react-app using following command

### `npm run start`

#### Now the app should be displayed in the browser at (http://localhost:3000/)

#### End Result

![Error Message](https://github.com/deepak21devops/ReactTable_Prod/blob/main/Error_1.png)





# ------------------------------------------------------------------------------------


#### Error Note: Incase app display empty webpage and throws error like `Uncaught SyntaxError: Unexpected token '<'` in the console tab (i,e visible on pressing `Ctrl+Shift+i`)  

![Error Message](https://github.com/deepak21devops/ReactTable_Prod/blob/main/Error_1.png)


#### go to `package.json` in `ReactTable_Prod` and go to bottom of the page and look for `homepage`

#### Now replace  `"homepage": "https://github.com/deepak21devops/ReactTable_Prod#readme"`

![Before Error](https://github.com/deepak21devops/ReactTable_Prod/blob/main/before.png)

#### To `"homepage": "http://localhost:3000"`
![After Error](https://github.com/deepak21devops/ReactTable_Prod/blob/main/After.png)





