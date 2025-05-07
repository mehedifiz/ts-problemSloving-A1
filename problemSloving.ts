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




function concatenateArrays<T>(...arrays: T[][]){

    
    console.log(arrays);
    if(arrays.length === 1){
        return "give two value "
    }
    const res = [...arrays[0], ...arrays[1]];

 return res
    
}

const concat1 = concatenateArrays(["a", "b"], ["c"]);
const concat2 =concatenateArrays([1, 2], [3, 4], [5]);  



console.log(concat1 );
console.log(concat2);


