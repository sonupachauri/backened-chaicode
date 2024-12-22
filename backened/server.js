import express, { json }  from "express";
const app = express();

app.use(express.static(('dist')))
app.get('/',(req,res)=>{
     res.send("server is ready!!");
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
            {
             id:1,
             title:'First joke',
             content: 'This is a first joke'   
            },
            {
                id:2,
                title:'Second joke',
                content: 'This is a second joke'   
               },
               {
                id:3,
                title:'Third joke',
                content: 'This is a third joke'   
               },
               {
                id:4,
                title:'Fourth joke',
                content: 'This is a fourth joke'   
               },
               {
                id:5,
                title:'Fifth joke',
                content: 'This is a fifth joke'   
               }

    ];

    res.send(jokes);
});