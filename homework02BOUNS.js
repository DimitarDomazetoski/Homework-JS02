var a = parseInt(prompt("Number one"));
var b = parseInt(prompt("Number two"));
var c = parseInt(prompt("Number three"));
var d = parseInt(prompt("Number four"));
var e = parseInt(prompt("Number five"));

if (a>b && a>c && a>d && a>e) {
  console.log(a);
  alert("Maximum number is:"+ " " + a);
} else if(b>a && b>c && b>d && b>e) {
  console.log(b);
  alert("Maximum number is:"+ " " + b);
} else if (c>a && c>b && c>d && c>e) {
  console.log(c);
  alert("Maximum number is:"+ " " + c);
} else if (d>a && d>b && d>c && d>e) {
  console.log(d);
  alert("Maximum number is:"+ " " + d);
} else if (e>a && e>b && e>c && e>d) {
  console.log(e)
  alert("Maximum number is:"+ " " + e);
}