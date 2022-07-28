import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getUser(email: string, password: string) {
   const user = await prisma.user.findFirst({
      where: {
         AND: [{ email: email }, { password: password }]
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
export async function createProduct(product: any, photos: any) {
   console.log(photos)
   const products = await prisma.product.create({
      data: {
         name: product.name,
         brand: product.brand,
         model: product.model,
         stock: parseInt(product.stock),
         state: product.state,
         category: {
            connectOrCreate: {
               where: {
                  name: product.category,
               },
               create: {
                  name: product.category,
               },
            },
         },
         photos: 'photos',
         price: parseFloat(product.price),
         description: product.description,
         seller: {
            connectOrCreate: {
               where: {
                  email: product.seller.email
               },
               create: {
                  name: product.seller.name,
                  email: product.seller.email,
                  password: '1234'
               },
            },
         },
      },
      include: {
         seller: true,
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
   //console.log(await prisma.product.deleteMany({}))
   console.log(await prisma.product.findMany({}))
   /* const query = await prisma.user.create({ 
   data: {
      name: 'Genos',
      email: 'sabriimaidanaa1@gmail.com',
      password: '1234'
   } }) */
   /* const query = await prisma.product.create({
      data: {
         name: 'Cafetera',
         price: 49.99,
         description: 'Hace Cafe',
         sellerId: '24cc86e8-e985-497d-a630-3f89e774d66d',
         categoryName: 'Electrodomésticos'
      }
   }) */
   /* const query = await prisma.category.create({
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