let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    console.log("this runs, because +a is 1, exactly equals b+1");
    break;
  default:
    console.log("this doesn't run");
}