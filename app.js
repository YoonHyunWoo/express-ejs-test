const express = require('express');
const app = express();
// view engine으로 ejs를 쓴다.
app.set('view engine', 'ejs');
// ejs 파일을 저장핧 때, views폴더에 저장하면 app.js에서 views 폴더 안에 ejs파일을 사용한다.
app.set('views', 'views');
app.get('/:name', (req,res)=>{
    let {name} = req.params;
    //ejs파일 index.ejs를 렌더링해서 보낸다.
    res.render('index', {
        name : name
    }); 
});
app.listen(3000, () => {
    console.log('connected at 3000');
});