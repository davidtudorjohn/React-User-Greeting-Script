const rootDiv = document.getElementById("root");
let user = {
  "fname": "David",
};
ReactDOM.render(`Hello ${user.fname}!`, rootDiv);