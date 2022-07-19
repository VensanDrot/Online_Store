import express, { Request , Response} from "express";
import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();
const app = express();

app.post('/add-user', async (req: Request,res: Response) => {
    const {login, password, email} = req.body;
    const user = await prisma.user.create({
        data: {
            login: login,
            password: password,
            email: email
        },
    });
    console.log('here');
    res.json(user);
});

app.get("/", async (req: Request,res: Response) => {
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