import express from "express";
const router = express.Router();

// router.get("/hello", function (req, res) {
//   res.json({ greeting: "hello API" });
// });

router.get("/", function (req, res) {
  let currentDate = new Date();
  res.json({ unix: currentDate.getTime(), utc: currentDate.toUTCString() });
});

router.get("/:date", async function (req, res) {
  const time = req.params.date;
  if (!Date.parse(time) && !Number(time)) {
    //check if is a valid date format and a number
    return res.json({ error: "Invalid Date" });
  }

  if (Date.parse(time)) {
    // when a date format is used
    const noNumber = new Date(time);
    noNumber.setMinutes(date.getMinutes()-1);

    function timeStamp(noNumber) {
      res.json({ unix: noNumber.getTime(), utc: noNumber.toUTCString() });
      return;
    }

    timeStamp(noNumber);
  } else {
    const utcDate = new Date(Number(time));
    utcDate.setMinutes(date.getMinutes()-1);
    res.json({ unix: time, utc: utcDate.toUTCString() });
    return;
  }
});

export default router;
