#What are some differences between interfaces and types in TypeScript?

Here are some differences between interface and type in TypeScript: 


1. There syntax is different.
   In interface the syntax is: 

```js
interface Person {
    name: string;
    age: number ;
}
   ```
   In type the syntax is : 
   ```js
   type Person ={
    name :string;
    age : number
   }
   ```

   2. Interpace only use for object 
     we cannot use interface for string , number , boolean data types.  
     it only use for object.

   3. union types 
    we can use union types in type but we cannot use union types in interface. 
    ```
    type Person = string | number | boolean;
    ```
   4.same named interfaces will merge
    if we create two interfaces with the same name, they will merge into one interface. 
    
    ```js

    interface man {
        name: string
    }

    interface man{
        age number 
    }

    /* interface man {
    name :string
    age:number
    }
    */    

    
    

 ## What is the use of the keyof keyword in TypeScript? Provide an example.

  Keyof kyyword gives us all property of an object . By this we get all keys of an abject in union type .

 ```js
   
  type Person = {
    name: string;
    age: number;
  };
    type PersonKeys = keyof Person; // "name" | "age"
   ```

 Here we create a type Person and use keyof keyword to get all keys of Person object.
 
  we can also use keyof in a generic function. It's time efficient also we get less error and  dynamic type safety in an function.

  ```js 
  function value<T, K extends keyof T>(obj: T, key: K): T[K] {
            
  return obj[key];

}

const person = { name: "Mehedi", Role: "Backend Dev" , age: 21 };

 //Example 
const name = value(person, "name"); //  Mehedi
const age = value(person, "age");   //  21

  ```

  Conclusion : The keyof keyword give all the key of an object. 










