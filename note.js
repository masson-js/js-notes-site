

const para = document.createElement("p");
const node = document.createTextNode("This is a new paragraph.");

para.appendChild(node);
const element = document.getElementById("main-div");
element.appendChild(para);

