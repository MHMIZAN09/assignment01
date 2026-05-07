## Why any is a “Type Safety Hole” and Why unknown is Safer in TypeScript
TypeScript was created to make JavaScript safer by adding static type checking. It helps developers catch errors during development instead of discovering them later at runtime.
Among TypeScript’s special types, two commonly discussed ones are:
- any
- unknown

## Understanding any
The any type completely disables TypeScript’s type checking.
When a variable is declared as any, TypeScript allows any operation on that variable without verifying whether the operation is valid.
# example: 
``` typescript
let value: any = "Hello";

console.log(value.toUpperCase());

value = 100;

console.log(value.toUpperCase());
```
- The first call works because "Hello" is a string.
- The second call fails at runtime because numbers do not have toUpperCase().this mistake, TypeScript produces no error because the variable is typed as any.

## Why is any Called a “Type Safety Hole”?

TypeScript’s main goal is to provide type safety.
However, using any removes that protection completely. It creates a situation where invalid code can pass compilation without warnings.
That’s why developers call any a:Type Safety Hole.
because it creates a hole in TypeScript’s safety system.

# Using any can lead to:
- hidden bugs
- runtime crashes
- difficult debugging
- unsafe refactoring

## Problems with any
1. No Type Checking
``` typescript
let user: any = {};

console.log(user.profile.name.first);
```
TypeScript allows this even if the properties do not exist.

2. Runtime Errors Become Common
Mistakes are detected only after running the application.

## Understanding unknown
The unknown type is the safer alternative to any.
Like any, it can store any value.
But unlike any, TypeScript does not allow direct usage until the type is verified.

## Example
``` typescript
let value: unknown = "Hello";

console.log(value.toUpperCase());
```
TypeScript shows an error because it does not yet know whether value is actually a string.

## Why unknown is Safer
unknown forces developers to verify the type before using the value.
This reduces:
- runtime errors
- unsafe assumptions
- invalid operations

## What is Type Narrowing?

Type narrowing is the process of checking a variable’s type so TypeScript can determine its exact type inside a specific block of code.
# Example of Type Narrowing
``` typescript
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```
Inside the if block:
- TypeScript now knows value is a string
- string methods become safe to use
This process is called type narrowing.

## Common Type Narrowing Techniques

1. typeof Narrowing

Used for primitive types.
## example:
``` typescript
let data: unknown = 50;

if (typeof data === "number") {
  console.log(data.toFixed(2));
}
```
2. instanceof Narrowing

Used with classes or objects.
``` typescript
let dateValue: unknown = new Date();

if (dateValue instanceof Date) {
  console.log(dateValue.getFullYear());
}
```
3. in Operator Narrowing

Checks whether a property exists.

``` typescript
type User = {
  name: string;
};

type Admin = {
  role: string;
};

function print(data: User | Admin) {
  if ("name" in data) {
    console.log(data.name);
  }
}
```
