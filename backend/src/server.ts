import express, { Request, Response } from "express";
import session from 'express-session';
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bcrypt from "bcrypt"



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


app.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deleted_user = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deleted_user);
});


// Session part idk if it works or not yet

app.use(
  session({
    //key: "UserId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600 * 24,
    }
  })
);



app.listen(3001, () => console.log("listening on port 3001"));
