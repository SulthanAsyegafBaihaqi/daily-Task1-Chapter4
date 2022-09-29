/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */

// core module (di dalam nodejs)
const http = require("http");

// import atau panggil dotenv module (third party module) --> wajib instal module terlebih dahulu
require("dotenv").config();
console.log(process.env.PORT);
// const { PORT = 8000 } = process.env; // Ambil port dari environment variable
const { PORT } = process.env; // Ambil port dari environment variable (lebih simple)

// Request handler
// Fungsi yang berjalan ketika ada request yang masuk.
function onRequest(req, res) {
  // Memberi status 200
  res.writeHead(200);
  res.end("Halo dari server!");
}

// penggunaan fs module untuk read file html
const fs = require("fs");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "public");

function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, "utf-8");
}

function toJSON(value) {
  return JSON.stringify(value);
}

function onRequest(req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end(getHTML("index.html"));
      return;
    case "/data":
      const responseJSON = res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(responseJSON);
    default:
      res.writeHead(404);
      res.end(getHTML("404.html"));
      return;
  }
}

// function onRequest(req, res) {
// const responseJSON = toJSON([
//   {
//     _id: "632539fbaffd0cbf2ec1b0c5",
//     index: 0,
//     age: 29,
//     isActive: false,
//     eyeColor: "green",
//     name: "Theresa Bradford",
//     gender: "female",
//     company: "FSW4",
//     email: "theresabradford@anixang.com",
//     phone: "+1 (906) 420-3987",
//     address: "996 Murdock Court, Wright, Missouri, 496",
//     registered: "2014-10-27T07:03:56 -07:00",
//     favoriteFruit: "banana",
//   },
//   {
//     _id: "632539fb87782f5fc939922a",
//     index: 1,
//     age: 25,
//     isActive: false,
//     eyeColor: "brown",
//     name: "Kasey Andrews",
//     gender: "female",
//     company: "Intel",
//     email: "kaseyandrews@anixang.com",
//     phone: "+1 (880) 578-3263",
//     address: "188 Ross Street, Turpin, Wisconsin, 8941",
//     registered: "2018-10-31T10:12:00 -07:00",
//     favoriteFruit: "strawberry",
//   },
//   {
//     _id: "632539fbf248726cbbb5949d",
//     index: 2,
//     age: 20,
//     isActive: false,
//     eyeColor: "blue",
//     name: "James Whitley",
//     gender: "female",
//     company: "Pelangi",
//     email: "jameswhitley@anixang.com",
//     phone: "+1 (940) 440-2331",
//     address: "152 Brown Street, Edinburg, Arizona, 2569",
//     registered: "2017-01-04T05:28:46 -07:00",
//     favoriteFruit: "apple",
//   },
//   {
//     _id: "632539fb9bb3f9712db58ca2",
//     index: 3,
//     age: 28,
//     isActive: false,
//     eyeColor: "green",
//     name: "Elma Graham",
//     gender: "female",
//     company: "FSW4",
//     email: "elmagraham@anixang.com",
//     phone: "+1 (954) 467-2915",
//     address: "101 Goodwin Place, Trucksville, Iowa, 4647",
//     registered: "2014-04-16T08:55:43 -07:00",
//     favoriteFruit: "strawberry",
//   },
//   {
//     _id: "632539fb1188b683a59f00ee",
//     index: 4,
//     age: 28,
//     isActive: true,
//     eyeColor: "brown",
//     name: "Daniels Gonzales",
//     gender: "male",
//     company: "Intel",
//     email: "danielsgonzales@anixang.com",
//     phone: "+1 (949) 458-2962",
//     address: "788 Howard Alley, Otranto, Puerto Rico, 9520",
//     registered: "2018-12-17T11:42:07 -07:00",
//     favoriteFruit: "strawberry",
//   },
//   {
//     _id: "632539fb5b828fc1837b3b94",
//     index: 5,
//     age: 25,
//     isActive: true,
//     eyeColor: "brown",
//     name: "Silvia Oneill",
//     gender: "female",
//     company: "Pelangi",
//     email: "silviaoneill@anixang.com",
//     phone: "+1 (904) 412-2821",
//     address: "302 Hastings Street, Matheny, Delaware, 5391",
//     registered: "2014-10-26T04:38:11 -07:00",
//     favoriteFruit: "banana",
//   },
//   {
//     _id: "632539fb4fa9a651c8bfd25b",
//     index: 6,
//     age: 31,
//     isActive: true,
//     eyeColor: "blue",
//     name: "Jackie Fuentes",
//     gender: "female",
//     company: "Pelangi",
//     email: "jackiefuentes@anixang.com",
//     phone: "+1 (852) 503-3833",
//     address: "971 Devon Avenue, Marbury, Mississippi, 3872",
//     registered: "2020-11-15T06:44:58 -07:00",
//     favoriteFruit: "banana",
//   },
//   {
//     _id: "632539fbf7d66122bd36e6b2",
//     index: 7,
//     age: 38,
//     isActive: false,
//     eyeColor: "green",
//     name: "Hillary Mullins",
//     gender: "female",
//     company: "Pelangi",
//     email: "hillarymullins@anixang.com",
//     phone: "+1 (973) 426-2696",
//     address: "252 Meeker Avenue, Belleview, Virgin Islands, 2083",
//     registered: "2021-05-07T08:13:07 -07:00",
//     favoriteFruit: "apple",
//   },
//   {
//     _id: "632539fbb02fcb895f61c9bb",
//     index: 8,
//     age: 27,
//     isActive: true,
//     eyeColor: "brown",
//     name: "Pollard Mccall",
//     gender: "male",
//     company: "FSW4",
//     email: "pollardmccall@anixang.com",
//     phone: "+1 (800) 585-3977",
//     address: "703 Beard Street, Juntura, Rhode Island, 1794",
//     registered: "2021-11-03T06:07:29 -07:00",
//     favoriteFruit: "banana",
//   },
//   {
//     _id: "632539fb88ddc01ffc7636d0",
//     index: 9,
//     age: 24,
//     isActive: true,
//     eyeColor: "green",
//     name: "Pacheco Fleming",
//     gender: "male",
//     company: "Intel",
//     email: "pachecofleming@anixang.com",
//     phone: "+1 (968) 497-3155",
//     address: "389 Herzl Street, Hebron, Kansas, 7542",
//     registered: "2021-11-16T06:15:52 -07:00",
//     favoriteFruit: "apple",
//   },
// ]);

//   res.setHeader("Content-Type", "application/json");
//   res.writeHead(200);
//   res.end(responseJSON);
// }
const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, "0.0.0.0", () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT);
});
