import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

async function main() {
  // Create Fake Data For Todos
  await prisma.todo.createMany({
    data: Array.from({ length: 25 }, () => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      completed: faker.datatype.boolean(),
      updatedAt: faker.date.recent(),
    })),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
