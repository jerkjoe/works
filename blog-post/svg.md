Document.createElementNS()
let title = document.createElementNS("http://www.w3.org/2000/svg","text");
title.innerHTML = "华东";
title.setAttribute("x","20")
title.setAttribute("y","40");
chart.appendChild(title);
console.dir(title);

不可以直接使用 document.createElement()
因为这只会创建 DOM 元素 但是不是 SVG 元素
MDN： https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
