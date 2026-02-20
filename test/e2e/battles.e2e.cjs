const request = require('supertest');
const { prisma } = require('./helpers/prisma-test-client.cjs');
const { describe, it } = require('./helpers/test-runner.cjs');
const kleur = require('kleur');

async function runBattlesTests(BASE_URL) {
  await describe(kleur.blue('---- Tests: Battles API (E2E) ----'), async () => {
    let battleId;
    let userToken;
    let userCharacterId;

    await describe(kleur.magenta('Preparación'), async () => {
      await prisma.battleParticipant.deleteMany();
      await prisma.battle.deleteMany();
      

      const user = await prisma.user.create({
        data: { email: 'fighter@test.com', password: 'password', nickname: 'Fighter1' }
      });
      const character = await prisma.character.create({
        data: { name: 'Luchador', baseHp: 100, baseAttack: 10 }
      });
      const userChar = await prisma.userCharacter.create({
        data: { userId: user.id, characterId: character.id }
      });
      userCharacterId = userChar.id;

      const loginRes = await request(BASE_URL).post('/auth/login').send({ email: 'fighter@test.com', password: 'password' });
      userToken = loginRes.body.token;
    });

    await describe(kleur.magenta('Modificaciones de Batalla'), async () => {
  
      await it('POST /battles (Crear batalla)', async () => {
        const res = await request(BASE_URL)
          .post('/battles')
          .set('Authorization', `Bearer ${userToken}`)
          .send({characterIds: [userCharacterId]}) 
          .expect(201);
        
        battleId = res.body.id;
        console.log(kleur.green('✔ POST /battles'));
      });

  
      await it('GET /battles/pending', async () => {
        await request(BASE_URL)
          .get('/battles/pending')
          .set('Authorization', `Bearer ${userToken}`)
          .expect(200);
        console.log(kleur.green('✔ GET /battles/pending'));
      });

  
      await it('POST /battles/:id/join', async () => {
        await request(BASE_URL)
          .post(`/battles/${battleId}/join`)
          .set('Authorization', `Bearer ${userToken}`)
          .send({ characterId: userCharacterId })
          .expect(201);
        console.log(kleur.green('✔ POST /battles/:id/join'));
      });
    });
  });

  console.log(kleur.blue('✅ ---- Tests: Battles E2E OK ----\n'));
}

module.exports = { runBattlesTests };