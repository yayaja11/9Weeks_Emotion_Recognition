// express 모듈 호출
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/db");

app.use(express.json());
app.use(cors());

// video table 전체 조회
app.get("/video", (req, res) => {
  db.query("select * from video", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

// video table - id 값으로 추출
app.get("/video/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  db.query(`select * from video where id=${id}`, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
