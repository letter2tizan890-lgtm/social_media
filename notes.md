# npm i react-router-dom

---> React Router DOM is the standard library for implementing dynamic, client-side routing in React web applications

# useParams() ---> const {id} = useParams()

---> It is used to get the id value from the url. For Eg mention in your url "/posts/:id" .":id" is important to get

# npm i date-fns -S

---> It is used to format data in MMMM dd, yyyy p

# npx json-server -p 3500 -w data/db.json

---> For creating local Json server --> Create a folder/file outside "data/db.json" --> put the JSON file inside and run the above npx command

# npm i axios

--->Axios is a popular, promise-based HTTP client library available via npm that allows developers to make asynchronous HTTP requests—such as GET, POST, PUT, and DELETE—from both node.js and browsers

--->Create folder/file inside src ---> src/api/apiRequest.js

<!-- ------------------------------------------------------------------------------------------ -->
<!-- Custom Hooks -->

---> To use a hook create folder/file inside src "hooks/[hook_name]" --> hook name should start with "use" and then will camelecase like "useWindowsSize.js"

# npm i react-icons

---> For using react icons in frontend

<!-- ------------------------------------------------------------------------------------------ -->

<!-- useAxiosFetch () custom hook -->

<!-- ------------------------------------------------------------------------------------------ -->

<!-- UseContext Hook --> it should be .jsx file with AlphaLowerCase "DataContext.jsx">

Step 1:- import {CreateContext} from "react"
Step 2:- Create a context like ---> Const DataContext = createContext({{children}})
Step 3:- Create a named export function like --->

<!-- Const DataProvider = () =>{
return <DataContext.Provider value= {{}}>
{children}
</DataContext.Provider>
} -->

Step 3:- <!-- import {DataProvider} in App.jsx ---> -->

<!-- ------------------------------------------------------------------------------------------ -->
