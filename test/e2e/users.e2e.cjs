const request = require('supertest');
const { prisma } = require('./helpers/prisma-test-client.cjs');
const { describe, it } = require('./helpers/test-runner.cjs');
const kleur = require('kleur');

async function runUsersTests(BASE_URL) {
    await describe(kleur.blue('---- Tests: Users API (E2E) ----'), async () => {
        let userId;
        let characterId;
        let userToken;
        let adminToken;

        await describe(kleur.magenta('Preparación y Creación'), async () => {
            // Limpiar DB
            await prisma.battleParticipant.deleteMany(); 
            await prisma.battle.deleteMany();            
            await prisma.userCharacter.deleteMany();
            await prisma.character.deleteMany();
            await prisma.userRole.deleteMany();
            await prisma.user.deleteMany();
            await prisma.role.deleteMany();

            // Crear rol
            const userRole = await prisma.role.create({ data: { name: 'USER' } });
            // --- POST /users ---
            await it('POST /users (Registro)', async () => {
                console.log(kleur.bgGreen('La base url es: ' + BASE_URL))
                const res = await request(BASE_URL)
                    .post('/api/users')
                    .send({ email: 'user@test.com', password: 'password123', nickname: 'TestUser' })
                    .expect(201);

                // if (res.status !== 201) {
                //     console.error('🔴 ERROR DEL SERVIDOR:', res.body);
                //     throw new Error(`Se esperaba 201 pero devolvió ${res.status}`);
                // }

                userId = res.body.id;
                if (!userId) throw new Error(kleur.red('POST /users no devolvió un id'));
                console.log(kleur.green('✔ POST /users'));
            });

            // --- LOGIN Simulacro  ---
            await it('POST /auth/login (Obtener Token)', async () => {
                const res = await request(BASE_URL)
                    .post('/api/auth/login')
                    .send({ email: 'user@test.com', password: 'password123' })
                    .expect(201); // o 200 

                // console.log(kleur.bgWhite('Datos devueltos por el back '+JSON.stringify(res.body)));

                userToken = res.body.access_token;
                console.log(kleur.green('✔ Autenticación completada'));
            });
        });

        await describe(kleur.magenta('Lecturas y Asignaciones'), async () => {
            // --- GET /users/me/profile ---
            // console.log(kleur.bgBlue('EL token es : ' + userToken))
            await it('GET /users/me/profile', async () => {
                const res = await request(BASE_URL)
                    .get('/api/users/me/profile')
                    .set('Authorization', `Bearer ${userToken}`)
                    .expect(200);

                if (res.body.email !== 'user@test.com') throw new Error(kleur.red('Perfil incorrecto'));
                console.log(kleur.green('✔ GET /users/me/profile'));
            });

            // --- POST /users/me/characters/:characterId ---
            await it('POST /users/me/characters/:characterId (Asignar personaje)', async () => {

                const character = await prisma.character.create({
                    data: { name: 'Guerrero E2E', baseHp: 100, baseAttack: 20 }
                });
                characterId = character.id;

                await request(BASE_URL)
                    .post(`/api/users/me/characters/${characterId}`)
                    .set('Authorization', `Bearer ${userToken}`)
                    .expect(201);
                console.log(kleur.green('✔ POST /api/users/me/characters/:characterId'));
            });

            // --- GET /users/me/characters ---
            await it('GET /users/me/characters', async () => {
                const res = await request(BASE_URL)
                    .get('/api/users/me/characters')
                    .set('Authorization', `Bearer ${userToken}`)
                    .expect(200);

                if (!Array.isArray(res.body)) throw new Error(kleur.red('No devolvió un array de personajes'));
                console.log(kleur.green('✔ GET /users/me/characters'));
            });
        });
    });

    console.log(kleur.blue('✅ ---- Tests: Users E2E OK ----\n'));
}

module.exports = { runUsersTests };