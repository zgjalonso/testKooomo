var express = require('express');
var app = express();

app.use(express.static("./dist/test-kooomo"));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: "./dist/test-kooomo/"}
  );
});
app.listen(process.env.PORT || 8080);
