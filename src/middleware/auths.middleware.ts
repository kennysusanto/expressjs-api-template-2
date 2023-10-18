import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

export const authenticateToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    //if (token == null) return res.sendStatus(401);
    if (token == null) return res.status(401).send("haha you don't have the token");

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        console.log(err);

        if (err) return res.sendStatus(403);

        req.user = user;

        next();
    })
}

// use in client-side:
/*
// get token from fetch request
const token = await res.json();

// set token in cookie
document.cookie = `token=${token}`
*/