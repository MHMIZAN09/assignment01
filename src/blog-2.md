# How Generics Help Build Reusable and Strictly Typed Code in TypeScript

TypeScript Generics are one of the most powerful features of the language. They allow developers to create reusable components, functions, and classes while maintaining strong type safety.

Without Generics, developers often need to either:

- write duplicate code for different types
- or use any, which removes type safety

Generics solve this problem by making code flexible and type-safe at the same time.


# What Are Generics?

Generics allow you to write code that works with multiple types while preserving the exact type information.

Instead of hardcoding a specific type, you use a placeholder type variable.

Common generic type names include:

- T → Type
- K → Key
- V → Value


# Problem Without Generics

Suppose we want a function that returns the same value passed into it.

Without Generics:

```typescript
function identity(value: any): any {
  return value;
}
```

This works, but there is a problem:

- TypeScript loses the original type
- no autocomplete
- no type safety

Example:

```typescript
let result = identity("Hello");

result.toUpperCase();
```

TypeScript cannot safely infer the type because result becomes any.

---

# Solution Using Generics

With Generics:

```typescript
function identity<T>(value: T): T {
  return value;
}
```

Now TypeScript remembers the exact type.

Example:

```typescript
let result = identity("Hello");

console.log(result.toUpperCase());
```

Here:

- T becomes string
- return type is also string
- full type safety is preserved



# Why Generics Are Powerful

Generics allow code to be:

- reusable
- flexible
- type-safe
- scalable

The same function can work with:

- strings
- numbers
- objects
- arrays
- custom interfaces

without losing type information.

# Example with Different Types

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("TypeScript"));

console.log(identity<number>(100));

console.log(identity<boolean>(true));
```

One function works for multiple types safely.

---

# Generic Arrays

Generics are commonly used with arrays.

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

Usage:

```typescript
const numbers = getFirstElement([1, 2, 3]);

const names = getFirstElement(["John", "Jane"]);
```

TypeScript automatically infers:

- numbers → number
- names → string



# Generics with Interfaces

Generics also work with interfaces.

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Usage:

```typescript
interface User {
  name: string;
  age: number;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    name: "John",
    age: 25
  }
};
```

