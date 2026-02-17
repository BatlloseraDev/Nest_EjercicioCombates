async function seedCharacters(prisma) {
    console.log('🌱 Seeding characters...');

    const charactersToCreate = [
        {
            name: 'Gandalf',
            baseHp: 100,
            baseAttack: 20,
            minLevel: 3,
            special: 0.5,
            imageUrl: '#',

        }, {
            name: 'Aragorn',
            baseHp: 150,
            baseAttack: 25,
            minLevel: 1,
            special: 0.3,
            imageUrl: '#',
        },
        {
            name: 'Legolas',
            baseHp: 120,
            baseAttack: 30,
            minLevel: 2,
            special: 0.4,
            imageUrl: '#',
        },
        {
            name: 'Gimli',
            baseHp: 180,
            baseAttack: 22,
            minLevel: 1,
            special: 0.2,
            imageUrl: '#',
        },
        {
            name: 'Frodo',
            baseHp: 80,
            baseAttack: 10,
            minLevel: 1,
            special: 0.8,
            imageUrl: '#',
        },
        {
            name: 'Sauron',
            baseHp: 500,
            baseAttack: 50,
            minLevel: 10,
            special: 0.9,
            imageUrl: '#',
        },
        {
            name: 'Galadriel',
            baseHp: 130,
            baseAttack: 40,
            minLevel: 5,
            special: 0.7,
            imageUrl: '#',
        },
        {
            name: 'Boromir',
            baseHp: 160,
            baseAttack: 28,
            minLevel: 2,
            special: 0.35,
            imageUrl: '#',
        },
        {
            name: 'Saruman',
            baseHp: 110,
            baseAttack: 35,
            minLevel: 4,
            special: 0.6,
            imageUrl: '#',
        },
        {
            name: 'Gollum',
            baseHp: 90,
            baseAttack: 15,
            minLevel: 1,
            special: 0.1,
            imageUrl: '#',
        },
        {
            name: 'Elrond',
            baseHp: 140,
            baseAttack: 32,
            minLevel: 4,
            special: 0.65,
            imageUrl: '#',
        },
        {
            name: 'Eowyn',
            baseHp: 135,
            baseAttack: 26,
            minLevel: 2,
            special: 0.45,
            imageUrl: '#',
        },
        {
            name: 'Faramir',
            baseHp: 145,
            baseAttack: 24,
            minLevel: 2,
            special: 0.4,
            imageUrl: '#',
        },
        {
            name: 'Theoden',
            baseHp: 170,
            baseAttack: 27,
            minLevel: 3,
            special: 0.3,
            imageUrl: '#',
        },


    ];

    for (const character of charactersToCreate) {
        await prisma.character.upsert({
            where: { name: character.name },
            update: {},
            create: {
                name: character.name,
                baseHp: character.baseHp,
                baseAttack: character.baseAttack,
                minLevel: character.minLevel,
                special: character.special,
                imageUrl: character.imageUrl,
            },
        });
    }

    console.log('✅ Characters seeded');

}

module.exports = { seedCharacters };