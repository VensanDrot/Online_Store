var express = require("express");
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.listen(3001, () => {
    console.log("Server running on port 3001");
    
})

app.post("/", async(req: Request, res: Response) => {
        const {login, password, email} = req.body;
        const user = await prisma.users.create({
            data: {
                login
            }
        })
});