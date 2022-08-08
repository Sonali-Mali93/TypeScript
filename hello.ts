interface userType {
  name: string;
  age: number;
  sum: (x:number, y:number) => number;
  getName: () => string;
}

var users: userType = {
  name: "Sonali",
  age: 25,
  getName: function () {
    return "Sonali";
  },
    sum:function(x, y){
      return x + y;
  }
};
console.log("user", users.getName());
console.log("sum", users.sum(3, 4));

// users.getName()
