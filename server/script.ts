import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getUser(email: string, password: string) {
   const user = await prisma.user.findFirst({
      where: {
         AND: [{email: email}, {password: password}]
      }
   })
   return user
}

export async function createUser(name: string, email: string, password: string) {
   await prisma.user.deleteMany()
   const user = await prisma.user.create({
      data: {
         name: name,
         email: email,
         password: password
      }
   })
   return user
}
export async function getProductById(id: string) {
   const products = await prisma.product.findUnique({
      where: {
         id: id
      },
   })
   return products
}
export async function getProductListByName(name: string) {
   const products = await prisma.product.findMany({
      where: {
         name: { contains: name }
      },
      take: 2, //return only 2
   })
   return products
}
export async function createProdct(name: string, price: number, description: string, sellerId: string, category: string) {
   const products = await prisma.product.create({
      data: {
         name: name,
         price: price,
         description: description,
         sellerId: sellerId,
         categoryName: category
      }
   })
   return products
}
export async function getProductListByCategory(name: string) {
   const products = await prisma.product.findMany({
      where: {
         categoryName: 'Electrodomésticos'
      },
      take: 20, //return only 2
   })
   return products
}
async function main() {
   //console.log(await prisma.product.deleteMany({}) )
   /* const user = await prisma.user.create({ 
   data: {
      name: 'Genos',
      email: 'sabriimaidanaa1@gmail.com',
      password: '1234'
   } }) */
   /* const product = await prisma.product.create({
      data: {
         name: 'Cafetera',
         price: 49.99,
         description: 'Hace Cafe',
         sellerId: '24cc86e8-e985-497d-a630-3f89e774d66d',
         categoryName: 'Electrodomésticos'
      }
   }) */
   /* const category = await prisma.category.create({
      data: {
         name: 'Electrodomésticos'
      }
   }) */

   //console.log(product)
}

main()
   .catch(e => {
      console.error(e.message)
   })