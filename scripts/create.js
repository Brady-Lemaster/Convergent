function createMeta() {
  const metaDOM = document.createElement("meta");
  metaDOM.charset = "utf-8";
  metaDOM.name = "viewport";
  metaDOM.content = "width=device-width, initial-scale=1";
  document.body.appendChild(metaDOM);  
}

function importTailwind() {
  const tailwindDOM = document.createElement("script");
  tailwindDOM.src = "https://cdn.tailwindcss.com";
  document.body.appendChild(tailwindDOM);
}
  
function createHead() {
  createMeta();
}

function importExternal() {
  importTailwind();
}
  
createHead();
importExternal();
