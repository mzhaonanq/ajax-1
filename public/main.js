let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}.json`);
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const object = JSON.parse(request.response);
      console.log(object);
      myName.textContent = object.name;
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };

  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    console.log(request.response);
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };

  request.send();
};
getCSS.onclick = () => {
  const request = new XMLHttpRequest(); //创建一个XMLHttpRequest对象
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      console.log("目前下载完成，但不知道是否成功下载");
      console.log("HTTP的状态码为" + request.status);
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style"); //创建style标签
        style.innerHTML = request.response; //填写style内容
        document.head.appendChild(style); //插入到head标签里
      } else {
        alert("加载CSS失败");
      }
    }
  };

  request.send();
};
