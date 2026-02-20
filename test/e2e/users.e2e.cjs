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
      await prisma.userCharacter.deleteMany();
      await prisma.character.deleteMany();
      await prisma.userRole.deleteMany();
      await prisma.user.deleteMany();

      // --- POST /users ---
      await it('POST /users (Registro)', async () => {
        const res = await request(BASE_URL)
          .post('/users')
          .send({ email: 'user@test.com', password: 'password123', nickname: 'TestUser' })
          .expect(201);

        userId = res.body.id;
        if (!userId) throw new Error(kleur.red('POST /users no devolvió un id'));
        console.log(kleur.green('✔ POST /users'));
      });

      // --- LOGIN Simulacro (Ajusta la ruta según tu auth.controller.ts) ---
      await it('POST /auth/login (Obtener Token)', async () => {
        const res = await request(BASE_URL)
          .post('/auth/login')
          .send({ email: 'user@test.com', password: 'password123' })
          .expect(200); // o 201 dependiendo de tu API
        
        userToken = res.body.token; // Ajusta según la estructura de tu respuesta
        console.log(kleur.green('✔ Autenticación completada'));
      });
    });

    await describe(kleur.magenta('Lecturas y Asignaciones'), async () => {
      // --- GET /users/me/profile ---
      await it('GET /users/me/profile', async () => {
        const res = await request(BASE_URL)
          .get('/users/me/profile')
          .set('Authorization', `Bearer ${userToken}`)
          .expect(200);
        
        if (res.body.email !== 'user@test.com') throw new Error(kleur.red('Perfil incorrecto'));
        console.log(kleur.green('✔ GET /users/me/profile'));
      });

      // --- POST /users/me/characters/:characterId ---
      await it('POST /users/me/characters/:characterId (Asignar personaje)', async () => {
        // Primero creamos un personaje en DB directamente con Prisma para la prueba
        const character = await prisma.character.create({
          data: { name: 'Guerrero E2E', baseHp: 100, baseAttack: 20 }
        });
        characterId = character.id;

        await request(BASE_URL)
          .post(`/users/me/characters/${characterId}`)
          .set('Authorization', `Bearer ${userToken}`)
          .expect(201);
        console.log(kleur.green('✔ POST /users/me/characters/:characterId'));
      });

      // --- GET /users/me/characters ---
      await it('GET /users/me/characters', async () => {
        const res = await request(BASE_URL)
          .get('/users/me/characters')
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