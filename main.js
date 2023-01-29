var http = require("http");
var fs = require("fs");
var url = require("url");
const PORT = process.env.PORT || 5000;
var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = new URL("http://localhost:3000" + _url).searchParams;

  if (request._url == "/") {
    _url = "/index.html";
  }
  if (request._url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  var template = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <meta name="color-scheme" content="light only" />
      <meta name="supported-color-schemes" content="light" />
  
      <title>띠부씰 선물</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link
        href="https://ddibu.kr/custom_ddibu.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
      </style>
      <link rel="shortcut icon" href="https://ddibu.kr/ddibu/assets/favicon.ico" />
      <script async src="https://imgbb.com/upload.js"></script>
      <script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
        integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
        crossorigin="anonymous"
      ></script>
      <script>
        Kakao.init("fbf8c034d0f8d7d60a76d37fb6653da0"); // 사용하려는 앱의 JavaScript 키 입력
      </script>
    </head>
    <body>
      <div class="logo_container">
        <h1 class="mt-3">띠부띠부씰 만들기</h1>
        <!--<img src="https://ddibu.kr/ddibu/assets/gear.svg" onclick="doSettings();" />-->
      </div>
  
      <main id="main">
        <div id="canvas"></div>
      </main>
      <!--광고-->
      <footer>
        <ins
          class="kakao_ad_area"
          style="display: none"
          data-ad-unit="DAN-qCiNF5bSLxHDVOBt"
          data-ad-width="320"
          data-ad-height="50"
        ></ins>
        <script
          type="text/javascript"
          src="//t1.daumcdn.net/kas/static/ba.min.js"
          async
        ></script>
      </footer>
      <audio id="tear">
        <source src="sound/tear.wav" type="audio/mp3" />
      </audio>
      <audio id="bell">
        <source src="sound/bell.wav" type="audio/mp3" />
      </audio>
      <audio id="plastic">
        <source src="sound/plastic.wav" type="audio/mp3" />
      </audio>
  

      <div id='sender' style='display:none;'>${queryData.get("sender")}</div>
      <div id='no' style='display:none;'>${queryData.get("no")}</div>
      <div id='name' style='display:none;'>${queryData.get("name")}</div>
      <div id='imgLink' style='display:none;'>${queryData.get("imgLink")}</div>
      <div id='color' style='display:none;'>${queryData.get("color")}</div>
      <div id='company' style='display:none;'>${queryData.get("company")}</div>
      <script src="https://ddibu.kr/gift.js"></script>
    </body>
  </html>
  `;

  response.end(template);
});

app.listen(PORT);
