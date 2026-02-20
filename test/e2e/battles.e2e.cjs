const request = require('supertest');
const { prisma } = require('./helpers/prisma-test-client.cjs');
const { describe, it } = require('./helpers/test-runner.cjs');
const kleur = require('kleur');
const bcrypt = require('bcrypt');

async function runBattlesTests(BASE_URL) {
    await describe(kleur.blue('---- Tests: Battles API (E2E) ----'), async () => {
        let battleId;
        let userToken;
        let userCharacterId;
        let userToken2;
        let userCharacterId2;


        await describe(kleur.magenta('Preparación'), async () => {
            await prisma.battleParticipant.deleteMany();
            await prisma.battle.deleteMany();
            await prisma.userCharacter.deleteMany();
            await prisma.character.deleteMany();
            await prisma.userRole.deleteMany();
            await prisma.user.deleteMany();
            await prisma.role.deleteMany();


            const userRole = await prisma.role.create({ data: { name: 'USER' } });
            const adminRole = await prisma.role.create({ data: { name: 'ADMIN' } });

            const hashedAdminPassword = await bcrypt.hash('password123', 10);
            const hashedUserPassword = await bcrypt.hash('password', 10);

            const user = await prisma.user.create({
                data: { email: 'fighter@test.com', password: hashedUserPassword, nickname: 'Fighter1' }
            });
            const character = await prisma.character.create({
                data: { name: 'Luchador', baseHp: 100, baseAttack: 10 }
            });
            const userChar = await prisma.userCharacter.create({
                data: { userId: user.id, characterId: character.id }
            });
            userCharacterId = userChar.id;

            const loginRes = await request(BASE_URL).post('/api/auth/login').send({ email: 'fighter@test.com', password: 'password' });
            userToken = loginRes.body.access_token;
            console.log(kleur.green('✔ Autenticación completada'))


            
            const user2 = await prisma.user.create({
                data: { email: 'fighter2@test.com', password: hashedUserPassword, nickname: 'Fighter2' }
            });
            const character2 = await prisma.character.create({
                data: { name: 'Luchador2', baseHp: 100, baseAttack: 10 }
            });
            const userChar2 = await prisma.userCharacter.create({
                data: { userId: user2.id, characterId: character2.id }
            });
            userCharacterId2 = userChar2.id;

            const loginRes2 = await request(BASE_URL).post('/api/auth/login').send({ email: 'fighter2@test.com', password: 'password' });
            userToken2 = loginRes2.body.access_token;
            console.log(kleur.green('✔ Autenticación completada 2'))
        });

        await describe(kleur.magenta('Modificaciones de Batalla'), async () => {

            await it('POST /battles (Crear batalla)', async () => {
                const res = await request(BASE_URL)
                    .post('/api/battles')
                    .set('Authorization', `Bearer ${userToken}`)
                    .send({ characterId: userCharacterId, opponentId: "opcional"  })
                    .expect(201);
                // console.log(kleur.bgWhite('Los datos de respuesta son ' + JSON.stringify(res.body) ));
                battleId = res.body.id;
                console.log(kleur.green('✔ POST /battles'));
            });


            await it('GET /battles/pending', async () => {
                const res = await request(BASE_URL)
                    .get('/api/battles/pending')
                    .set('Authorization', `Bearer ${userToken}`)
                    .expect(200);
                // console.log(kleur.bgRed('Los datos de respuesta son ' + JSON.stringify(res.body)));
                console.log(kleur.green('✔ GET /battles/pending'));
            });


            await it('POST /battles/:id/join', async () => { //_> comprobar que no te puedes unir a ti mismo 
                // console.log(kleur.bgMagenta('El battleID es: ' + battleId));
                await request(BASE_URL)
                    .post(`/api/battles/${battleId}/join`)
                    .set('Authorization', `Bearer ${userToken2}`)
                    .send({ characterId: userCharacterId2 })
                    .expect(201);
                console.log(kleur.green('✔ POST /battles/:id/join'));
            });
        });
    });

    console.log(kleur.blue('✅ ---- Tests: Battles E2E OK ----\n'));
}

module.exports = { runBattlesTests };