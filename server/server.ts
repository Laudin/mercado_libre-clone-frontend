import express, { Request, Response } from 'express'
import { pathToFileURL } from 'url';
import {
   getUser,
   createUser,
   getProductListByName,
   getProductListByCategory,
   createProduct,
} from './script'
const { v4: uuidv4 } = require('uuid');
const path = require('path')
const multer = require('multer')
interface File {
   filedname: string,
   originalname: string,
   encoding: string,
   mimetype: string
}
const fs = require('fs');
const storage = multer.diskStorage({
   destination: async (req: Request, files: any, cb: CallableFunction) => {
      cb(null, `static/`)
   },
   filename: (req: Request, files: any, cb: CallableFunction) => {
      //creates a unique id for the img. checks if it exist first
      while (true) {
         const name = uuidv4()
         const extention = files.originalname.match(/[.]\w+$/)
         if (!fs.existsSync(`static/${name}${extention}`)) {
            cb(null, `${name}${extention}`)
            break
         }
      }
   }
})
const upload = multer({ storage: storage })
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


function authenticateUser(req: Request, res: Response, next: CallableFunction) {
   const authHeader = req.headers.authorization
   const token = authHeader && authHeader.split(' ')[1]

   if (!token) {
      return res.status(200).send({ error: { message: 'Unauthorize' } })   //401 = Unauthorize
   }

   jwt.verify(token, "secretkeyappearshere", (err: any, user: any) => {
      if (err) return res.status(200).send({ error: { message: 'Forbidden' } }) //403 = Forbidden

      req.headers.user = user   //creates new prop user but cant directly in req because of type restrictions

      next()
   })
}

app.get('/', (req: Request, res: Response) => {
   res.status(200).json({
      "Time": new Date().toISOString()
   })
})
app.get('/user', async (req: Request, res: Response, next: CallableFunction) => {
   const { email, password } = req.query
   try {
      if (!(email && password)) {
         //400 = Bad req
         res.status(200).send({ error: { message: 'Please provide full credentials' } })
      } else {
         const user = await getUser(email as string, password as string)
         if (!user) {
            res.status(200).json({ error: { message: 'Unauthorize' } })
            return
         }
         let token;
         try {
            //Creating jwt token
            token = jwt.sign(
               { userId: user.id, email: user.email },
               "secretkeyappearshere",
               //{ expiresIn: "1h" } never
            );
         } catch (err) {
            console.error(err);
            const error = new Error("Error! Something went wrong.");
            return next(error);
         }
         res.status(200).json({
            success: true,
            data: {
               id: user.id,
               name: user.name,
               email: user.email,
               token: token
            }
         })
      }
   } catch (err) {
      console.error(err)
      const error = new Error("Error! Something went wrong.");
      return next(error);
   }
})
app.post('/user', async (req: Request, res: Response) => {
   const { name, email, password } = req.body
   if (!(name && email && password)) {
      //400 = Bad req
      res.status(200).send({ error: { message: 'Please provide full credentials' } })
   } else {
      res.status(200).json(
         await createUser(name as string, email as string, password as string)
      )
   }
})
app.get('/product', authenticateUser, async (req: Request, res: Response, next: CallableFunction) => {
   console.log(req.headers.user)
   const { name } = req.query
   const products = await getProductListByName(name as string)
   res.status(200).json({
      succes: true,
      data: {
         products: products
      }
   })
})
app.post('/product', authenticateUser, upload.array('photos'), async (req: any, res: Response, next: CallableFunction) => {
   //console.log(req.files)
   //console.log(req.body)
   res.status(200).json(
      await createProduct(req.body, req.files.map((file: any) => file.path))
   )
   //res.sendFile(filePath)
})

app.get('/category', authenticateUser, async (req: Request, res: Response, next: CallableFunction) => {
   const { name } = req.query
   const products = await getProductListByCategory(name as string)
   res.status(200).json({
      succes: true,
      data: {
         products: products
      }
   })
})
app.get('/static/:id', async (req: Request, res: Response, next: CallableFunction) => {
   let options = {
      root: path.join(__dirname)
   }
   res.sendFile(`static/${req.params.id}`, options)
})
app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})