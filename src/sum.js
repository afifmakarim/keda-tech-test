export const sum = (first, second) => {
  return first + second;
};

export const fizzBuzz = (max) => {
  let array = [];
  for (let index = 1; index <= max; index++) {
    const element = index;
    if (element % 15 === 0) {
      console.log("fish bash", element);
      array.push({ statusData: "fish bash", element: element });
    } else if (element % 3 === 0) {
      console.log("fish", element);
      array.push({ statusData: "fish", element: element });
    } else if (element % 5 === 0) {
      console.log("bash", element);
      array.push({ statusData: "bash", element: element });
    } else {
      console.log("", element);
      array.push({ statusData: "", element: element });
    }
  }
  return array;
};

export const sortAsc = (Arr) => {
  for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
      if (Arr[i] < Arr[j]) {
        var x = Arr[i];
        Arr[i] = Arr[j];
        Arr[j] = x;
      }
  return Arr;
};

export const palindromCheck = (string) => {
  return string == string.split("").reverse().join("");
};
