async function seedRoles(prisma) {
    console.log('🌱 Seeding roles...');

    const roles = ['ADMIN', 'USER'];

    for (const role of roles) {
        await prisma.role.upsert({
            where: { name: role },
            update: {},
            create: { name: role },
        });
    }

    console.log('✅ Roles seeded');
}

module.exports = { seedRoles}