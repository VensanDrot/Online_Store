import express, { Request , Response} from "express";
import {PrismaClient} from '@prisma/client';
import bodyParser from "body-parser";
var jsonParser = bodyParser.json();
const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/createuser', async (req: Request,res: Response) => {
    
    console.log(req.body);
    const {login, pass, email} = req.body;
    const user = await prisma.user.create({
        data: {
            login: login,
            password: pass,
            email: email
        },
    });
    res.json(user);
});

app.get("/get", async (req: Request,res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
})

app.delete("/:id", async (req: Request,res: Response) => {
    const id = req.params.id;
    const deleted_user = await prisma.user.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(deleted_user);
})





app.listen(3001, () => console.log('listening on port 3001'));