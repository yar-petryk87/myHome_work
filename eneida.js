var http = require('http');

http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
  res.write(`Еней був парубок моторний<br/>
            І хлопець хоть куди козак,<br/><br>
            Удавсь на всеє зле проворний,<br>
            Завзятіший од всіх бурлак.<br><br>
            Но греки, як спаливши Трою,<br/>
            Зробили з неї скирту гною,<br/><br>
            Він, взявши торбу, тягу дав;<br/>
            Забравши деяких троянців,<br/><br>
            Осмалених,як гиря, ланців,<br>
            Пятами з Трої накивав`);
  res.end();
}).listen(8080);
