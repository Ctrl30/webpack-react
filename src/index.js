function createElement() {
  const ele = document.createElement("div");
  ele.innerHTML = "hello ljb";
  const root = document.getElementById("root");
  root.appendChild(ele);
}
createElement();
