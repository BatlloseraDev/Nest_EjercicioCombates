const bcrypt = require('bcrypt');

async function seedUsers(prisma) {
    console.log('🌱 Seeding users...');
    const adminRole = await prisma.role.findUnique({ where: { name: 'ADMIN' } });
    const userRole = await prisma.role.findUnique({ where: { name: 'USER' } });

    if (!adminRole || !userRole) {
        throw new Error('Alguno de los roles no se han encontrado, ejecuta primero el seed de los roles');
    }

    const usersToCreate = [
        {
            email: 'admin@example.com',
            nickname: 'admin1',
            password: 'admin123',
            roleId: adminRole.id,
        },
        {
            email: 'user@example.com',
            nickname: 'user1',
            password: 'user123',
            roleId: userRole.id,
        },
        {
            email: 'user2@example.com',
            nickname: 'user2',
            password: 'user123',
            roleId: userRole.id,
        },
    ]// no puedo hacer un insert masivo si quiero hashear las contraseñas

    for (const user of usersToCreate){
        const hashedPassword = await bcrypt.hash(user.password, 10);
        await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: {
                email: user.email,
                nickname: user.nickname,
                password: hashedPassword,
                roles:{
                    create:{
                        roleId: user.roleId
                    }
                },
                level:1,
                experience: 0
            },
        });

    }
    console.log('✅ Users seeded');
}

module.exports = { seedUsers };