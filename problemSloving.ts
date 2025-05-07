const formatString = (input: string, toUpper?: boolean): string => {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
};

const resust1 = formatString("hello");
const resust2 = formatString("hello", true);
const resust3 = formatString("hello", false);
// console.log(resust1);
// console.log(resust2);
// console.log(resust3);

type ItemType = {
  title: string;
  rating: number;
};

const filterByRating = (Item: ItemType[]): object[] => {
  const items = Item.filter((item) => item.rating >= 4);

  return items;
};

const books: ItemType[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]) {
  console.log(arrays);
  if (arrays.length === 1) {
    return "give two value ";
  }
  const res = [...arrays[0], ...arrays[1]];

  return res;
}

const concat1 = concatenateArrays(["a", "b"], ["c"]);
const concat2 = concatenateArrays([1, 2], [3, 4], [5]);

// console.log(concat1);
// console.log(concat2);

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    const info = `Make :${this.make} , Year : ${this.year}`;

    return info;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `MOdel ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

const processValue = (value: string | number): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
};

const processValue1 = processValue("mehedi");
const processValue2 = processValue(2);

// console.log("length", processValue1);
// console.log("multipy", processValue2);

interface Product {
  name: string;
  price: number;
}

const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (products === null) {
    return null;
  } else {
    const highPrice = products.reduce((pre, curr): Product => {
      // current.price > prev.price ? current : prev;

      if (curr.price > pre.price) {
        return curr;
      } else {
        return pre;
      }
    });

    return highPrice;
  }
};

const products: Product[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

const mostExpensive = getMostExpensiveProduct(products);

console.log("mostExpensive", mostExpensive);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

/*note : Friday and Saturday are Weekend in banglaseh but in requirements mention sunday . I give Friday Saturday  and sunday as Weekend  */

const getDayType = (day: Day): string => {
  if (day === Day.Friday || day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
};

const day1 = getDayType(Day.Friday);
//   console.log(day1)
const day2 = getDayType(Day.Wednesday);
//   console.log(day2)

const squareAsync = (value: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(value * value);
      }
    }, 1000);
  });
};


// squareAsync(4).then(console.log);
// squareAsync(-4).then(console.log);