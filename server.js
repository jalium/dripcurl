let express = require("express");
let app = express();
let cookieParser = require("cookie-parser");
app.use(cookieParser());
let MongoClient = require("mongodb").MongoClient;
let ObjectID = require("mongodb").ObjectID;
let multer = require("multer");
let upload = multer({ dest: __dirname + "/uploads/" });
let reloadMagic = require("./reload-magic.js");
reloadMagic(app);

let sessions = {};
let dbo = undefined;
let url =
  "mongodb+srv://bob:bobsue@cluster0-ozsdo.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(
  url,
  { useNewUrlParser: false, useUnifiedTopology: true },
  (err, db) => {
    dbo = db.db("curl");
  }
);

app.use("/", express.static(__dirname + "/build")); // Needed for the HTML and JS files
app.use("/", express.static(__dirname + "/public")); // Needed for local assets
app.use("/curlImages", express.static(__dirname + "/curlImages"));

// Your endpoints go after this line
app.use("/uploads", express.static("uploads"));

app.post("/signup", upload.none(), (req, res) => {
  console.log("POST to /signup");
  let name = req.body.username;
  let email = req.body.email;
  let pwd = req.body.password;
  console.log("sign up info :", name, email, pwd);
  dbo.collection("users").findOne({ username: name }, (err, user) => {
    if (err) {
      console.log("/signup error", err);
      res.send(JSON.stringify({ success: false }));
      return;
    } else if (user === null) {
      dbo.collection("users").insertOne({
        username: name,
        email: email,
        password: pwd
      });

      let generatedId = () => {
        return "" + Math.floor(Math.random() * 100000000);
      };

      let sessionId = generatedId();
      sessions[sessionId] = name;
      res.cookie("cookieId", sessionId);

      dbo
        .collection("curlInfo")
        .insertOne({ username: name, cookie: sessionId }, (err, user) => {
          if (err) {
            console.log("/cookie error", err);
            res.send(JSON.stringify({ success: false }));
          } else {
            let obj = { success: true, username: name };
            res.send(JSON.stringify(obj));
          }
        });
    } else {
      console.log("username exists");
      res.send(JSON.stringify({ success: false }));
    }
  });
});

// let login = (username, password) => {
//   check if pass=username
//   check if cookie exists, if not, make a cookie
// }

app.post("/login", upload.none(), (req, res) => {
  console.log("POST to /login");
  console.log("login", req.body);
  let name = req.body.username;
  let pwd = req.body.password;
  dbo.collection("users").findOne({ username: name }, (err, user) => {
    if (err) {
      console.log("/login error", err);
      res.send(JSON.stringify({ success: false }));
      return;
    }
    if (user === null) {
      res.send(JSON.stringify({ success: false }));
      return;
    }
    if (user.password === pwd) {
      dbo
        .collection("curlInfo")
        .findOne({ cookie: req.cookies.cookieId }, (err, info) => {
          if (err) {
            console.log("/login error", err);
            res.send(JSON.stringify({ success: false }));
          } else if (user.username) {
            sessions[info.cookie] = info.username;
            let currentUser = {
              success: true,
              username: info.username,
              cookie: info.cookie,
              pattern: info.pattern,
              texture: info.texture,
              porosity: info.porosity,
              shampoo: info.shampoo,
              conditioner: info.conditioner,
              leaveIn: info.leaveIn,
              treatments: info.treatments,
              stylers: info.stylers,
              frontendPath: info.frontendPath
            };
            res.send(JSON.stringify(currentUser));
          }
        });
    } else {
      res.send(JSON.stringify({ success: false }));
    }
  });
});

app.post("/curlType", upload.none(), (req, res) => {
  console.log("POST to /curlType");
  console.log("curlType", req.body);
  console.log("sessions", sessions);
  let sessionId = req.cookies.cookieId;
  let username = sessions[sessionId];
  const { pattern, texture, porosity } = req.body;
  dbo.collection("curlInfo").findOne({ username: username }, (err, info) => {
    if (err) {
      console.log("/curlType error", err);
      res.send(JSON.stringify({ success: false }));
    } else {
      dbo.collection("curlInfo").updateMany(
        { username: username },
        {
          $set: {
            pattern: pattern,
            texture: texture,
            porosity: porosity
          }
        }
      );
      res.send(JSON.stringify({ success: true }));
    }
  });
});

app.post("/editProfile", upload.single("profilePic"), (req, res) => {
  console.log("POST to editProfile");
  let sessionId = req.cookies.cookieId;
  let username = sessions[sessionId];
  console.log("sessions", sessions);
  if (req.file) {
    console.log("file", req.file);
    let file = req.file;
    console.log("uploaded file", file);
    let frontendPath = "/uploads/" + file.filename;
    dbo.collection("curlInfo").findOne({ username: username }, (err, info) => {
      if (err) {
        console.log("/curlType error", err);
        res.send(JSON.stringify({ success: false }));
      } else {
        dbo.collection("curlInfo").updateOne(
          { username: username },
          {
            $set: {
              frontendPath: frontendPath
            }
          }
        );
        let currentUser = {
          success: true,
          frontendPath: frontendPath
        };
        res.send(JSON.stringify(currentUser));
      }
    });
  } else {
    const { shampoo, conditioner, leaveIn, treatments, stylers } = req.body;
    console.log("editProfile", req.body);
    dbo.collection("curlInfo").findOne({ username: username }, (err, info) => {
      if (err) {
        console.log("/curlType error", err);
        res.send(JSON.stringify({ success: false }));
      } else {
        dbo.collection("curlInfo").updateMany(
          { username: username },
          {
            $set: {
              shampoo: shampoo,
              conditioner: conditioner,
              leaveIn: leaveIn,
              treatments: treatments,
              stylers: stylers
            }
          }
        );
        let currentUser = {
          success: true,
          shampoo: shampoo,
          conditioner: conditioner,
          leaveIn: leaveIn,
          treatments: treatments,
          stylers: stylers
        };
        res.send(JSON.stringify(currentUser));
      }
    });
  }
});

app.get("/dashboard", upload.none(), (req, res) => {
  console.log("GET to /dashboard");

  let userData = [];
  let count = 0;

  dbo
    .collection("curlInfo")
    .find({})
    .toArray((err, files) => {
      if (!files || files.length === 0 || err) {
        console.log("no users");
        res.send(JSON.stringify({ success: false }));
      } else {
        files.forEach(file => {
          userData[count++] = {
            username: file.username,
            profilePic: file.frontendPath,
            type: [
              {
                pattern: file.pattern,
                texture: file.texture,
                porosity: file.porosity
              }
            ],
            products: [
              {
                shampoo: file.shampoo,
                conditioner: file.conditioner,
                leaveIn: file.leaveIn,
                treatments: file.treatments,
                stylers: file.stylers
              }
            ]
          };
        });
        res.send(JSON.stringify(userData));
      }
    });
});
//have this main endpoint check for the cookie , to see if logged in
// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
