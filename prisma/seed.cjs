require('dotenv/config');
const { PrismaClient } = require('../generated/prisma2');
const { PrismaPg } = require('@prisma/adapter-pg');

const { seedUsers } = require('./seeds/users.seed.cjs');
const { seedRoles } = require('./seeds/roles.seed.cjs');
const { seedCharacters } = require('./seeds/characters.seed.cjs');


const prisma = new PrismaClient({
    adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL,
    }),
});


async function main() {
    console.log('🌱 Starting database seed...');
    await seedCharacters(prisma);
    await seedRoles(prisma);
    await seedUsers(prisma);
    console.log('🌱 Database seed completed');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

module.exports = { prisma };