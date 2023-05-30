function importTailwind() {
  const tailwindDOM = document.createElement("script");
  tailwindDOM.src = "https://cdn.tailwindcss.com";
  document.body.appendChild(tailwindDOM);
}

importTailwind()
