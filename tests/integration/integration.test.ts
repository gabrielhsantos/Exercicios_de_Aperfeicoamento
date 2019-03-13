import { app, request, expect } from './config/helpers';

describe('Testes de Integração', () => {
    describe('GET /', () => {
        it('Deve Retornar a msg Hello World!', done => {
            request(app)
            .get('/')
            .end((error, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.be.eql('Hello World!');
                done(error);
            });
        });
    });

    describe('GET /ola/:nome', () => {
        it('Deve Retornar a msg Hello Gabriel', done => {
            const nome = 'Gabriel';
            request(app)
            .get(`/ola/${nome}`)
            .end((error, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.be.eql('Hello Gabriel');
                done(error);
            });
        });
    });

    describe('GET /api/users/all', () => {
        it('Deve Retornar um Json com Todos os Usuários', done => {
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(200);
            });
        });
    });

    describe('GET /api/users/:id', () => {
        it('Deve Retornar um Json com Todos os Usuários', done => {
            request(app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
            });
        });
    });

    describe('POST /api/users/new', () => {
        it('Deve Retornar um Usuário pelo id', done => {
            const user = {
                nome: 'Teste'
            }            
            request(app)
                .post('/api/users/new')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
            });
        });
    });

    describe('PUT /api/users/:id/edit', () => {
        it('Deve Atualizar um Usuário', done => {
            const user = {
                nome: 'TesteUpdate'
            } 
            request(app)
                .put(`/api/users/${1}/edit`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
            });
        });
    });

    describe('DELETE /api/users/:id', () => {
        it('Deve Deletar um Usuário', done => {
            request(app)
                .delete(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
            });
        });
    });

});