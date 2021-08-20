# JS 
"2" + 2             ---> "22"    <br>
"2" + 2             --->  "22"    <br>
"2" + "2"           --->  "22"    <br>
"2" + "2" + 2       --->  "222"    <br>
2 + "2"             --->  "22"    <br>
"2" - 1             --->  1    <br>
"2" + "2" - 2       --->  20    <br>
"2"+ "2" - 1 + "1"  --->  "211"    <br>

# TS
Typescript is used when we want to define type of every variable. The ocde will be similar to Js except that it will have type for every var, const, and let variables. Here, the above operations will throw error other then op3.  <br><br>
Official Website: https://www.typescriptlang.org<br>
TS data type documentation: https://www.typescriptlang.org/docs/handbook/basic-types.html <br>
> To install ts in perticular folder: 

```
npm install typescript --save-dev
```
> To check if ts is installed successfully
```
npx tsc --version
```
> To compile ts file and create a respective js file
```
npx tsc .\main.ts
```
> To start auto compilation of ts file and make changes in respective js file 
```
npx tsc .\main.ts --watch
```
> To install ts globally: 
```
npm install -g typescript
```

#### Js

```js
let a = 10;
console.log(a); // 10
a = "Hello";
console.log(a); // "Hello"
```

#### Ts

```ts
let a = 10;
console.log(a); // 10
a = "Hello"; //  Error : Type 'string' is not assignable to type 'number'.
```

#### Js
```js
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.printHello = function () {
        console.log("Inside first class!!!");
    };
    return App;
}());
```

#### Ts
```ts
class App{
    printHello(){
        console.log("Inside first class!!!");
    }
}
```