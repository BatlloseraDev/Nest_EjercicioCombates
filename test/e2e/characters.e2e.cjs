const request = require('supertest');
const { prisma } = require('./helpers/prisma-test-client.cjs');
const { describe, it } = require('./helpers/test-runner.cjs');
const kleur = require('kleur');
const bcrypt = require('bcrypt');

async function runCharactersTests(BASE_URL) {
    await describe(kleur.blue('---- Tests: Characters API (E2E) ----'), async () => {
        let characterId;
        let adminToken;

        await describe(kleur.magenta('Preparación del ADMIN'), async () => {
            await prisma.battleParticipant.deleteMany();
            await prisma.battle.deleteMany();
            await prisma.character.deleteMany();
            await prisma.userRole.deleteMany();
            await prisma.user.deleteMany();
            await prisma.role.deleteMany();

            const userRole = await prisma.role.create({ data: { name: 'USER' } });
            const adminRole = await prisma.role.create({ data: { name: 'ADMIN' } });

            const hashedAdminPassword = await bcrypt.hash('password123', 10);

            const adminUser = await prisma.user.create({
                data: { email: 'admin@test.com', password: hashedAdminPassword, nickname: 'AdminTest' }
            });
            await prisma.userRole.create({
                data: { userId: adminUser.id, roleId: adminRole.id }
            });

            // Simular el login 
            const res = await request(BASE_URL)
                .post('/api/auth/login')
                .send({ email: 'admin@test.com', password: 'password123' })
                .expect(201); // o 200

            //console.log(kleur.bgWhite('Datos devueltos por el back ' + JSON.stringify(res.body)));

            adminToken = res.body.access_token;
            console.log(kleur.green('✔ Autenticación completada'))
        });

        await describe(kleur.magenta('CRUD Modificaciones y Lectura'), async () => {
            // --- POST /characters ---
            await it('POST /characters', async () => {

                //console.log(kleur.bgWhite('El token es: ' + adminToken));
                const res = await request(BASE_URL)
                    .post('/api/characters')
                    .set('Authorization', `Bearer ${adminToken}`)
                    .send({ name: 'Mago E2E', baseHp: 80, baseAttack: 30, minLevel: 1 })
                    .expect(201);

                characterId = res.body.id;
                console.log(kleur.green('✔ POST /characters (ADMIN)'));
            });

            // --- GET /characters ---
            await it('GET /characters', async () => {
                await request(BASE_URL)
                    .get('/api/characters')
                    .expect(200);
                console.log(kleur.green('✔ GET /characters'));
            });

            // --- PATCH /characters/:id ---
            await it('PATCH /characters/:id', async () => {
                await request(BASE_URL)
                    .patch(`/api/characters/${characterId}`)
                    .set('Authorization', `Bearer ${adminToken}`)
                    .send({ name: 'Mago Supremo' })
                    .expect(200);
                console.log(kleur.green('✔ PATCH /characters/:id (ADMIN)'));
            });

            // --- DELETE /characters/:id ---
            await it('DELETE /characters/:id', async () => {
                await request(BASE_URL)
                    .delete(`/api/characters/${characterId}`)
                    .set('Authorization', `Bearer ${adminToken}`)
                    .expect(200);
                console.log(kleur.green('✔ DELETE /characters/:id (ADMIN)'));
            });
        });
    });

    console.log(kleur.blue('✅ ---- Tests: Characters E2E OK ----\n'));
}

module.exports = { runCharactersTests };