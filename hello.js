// Interface
var users = {
    name: "Sonali",
    age: 25,
    getName: function () {
        return "Sonali";
    },
    sum: function (x, y) {
        return x + y;
    }
};
console.log("user", users.getName());
console.log("sum", users.sum(3, 4));
// users.getName()
