import express, { Request, Response } from "express";
import session from 'express-session';
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bcrypt from "bcrypt"
import fs, { fstat } from "fs";
import path from "path"

var jsonParser = bodyParser.json();
const prisma = new PrismaClient();
const app = express();



// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['POST', 'GET'],
  credentials: true
}))



// sql requests to mysql db
app.post("/createuser", async (req: Request, res: Response) => {
  console.log(req.body);
  const { name, pass, email } = req.body;
  const hashedpassword = await bcrypt.hash(pass, 4);
  const user = await prisma.user.create({
    data: {
      name: name,
      password: hashedpassword,
      email: email,
    },
  });
  res.json(user);
});

app.get("/get", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});


app.post("/getuser", async (req: Request, res: Response) => {
  const { email, pass } = req.body;
  const user = await prisma.user.findMany({
    where: {
      email: email,
      password: pass,
    },
  });
  res.json(user);
});




// Item's get and image part 

// image folder check 
fs.access("../image", function (error) {
  if (error) {
    fs.mkdir(path.join(__dirname, "../image"), (err) => {
      if (err) {
        console.log('already there');
      }
    });
  }
});


app.get("/image/:name", async (req, res) => {
  //console.log(req.params.name);
  res.download("./image/" + req.params.name);
});

//get all items

app.get('/items', async(req: Request,res:Response) => {
  const users = await prisma.item.findMany();
  res.json(users);
})



app.post('/item', async(req: Request,res:Response) => {
  const { id } = req.body;
  const user = await prisma.item.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(user);
})

// working with slider info 
//  SELECT slider.image, slider.name,slider.small, item.id FROM `slider` INNER JOIN item ON slider.url=item.id join sql query 

app.get('/slides', async(req: Request,res:Response) => {
  const users = await prisma.slider.findMany();
  res.json(users);
})




app.listen(3001, () => console.log("listening on port 3001"));
