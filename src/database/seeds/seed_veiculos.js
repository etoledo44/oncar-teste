
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('automoveis').del()
    .then(function () {
      // Inserts seed entries
      return knex('automoveis').insert([
        {
          veiculo: 'teste', 
          marca: 'tester', 
          ano: 2020, 
          descricao: 'teste',
          vendido: true 
        },
        {
          veiculo: 'DODGE CHARGER', 
          marca: 'Dodge', 
          ano: 1969, 
          descricao:'Por aqui, ganhou o carinhoso apelido de ‘Dojão’. Ganhou fama ao passar em inúmeros seriados dos anos 80, um bólido que variava de 375 a 425 cavalos de potência. Foi produzido no Brasil até 1979',
          vendido: false 
        },
        {
          veiculo: 'CAMARO Z28', 
          marca: 'Chevrolet', 
          ano: 1973, 
          descricao: 'Pode não ter sido o mais rápido de todos, mas o Camaro é o modelo mais lembrado e desejado entre os Muscle Cars. Tinha pneus largos, listras brancas atravessando a lataria, discos de freios frontais, direção hidráulica e um motor V8 de 290 cavalos. Foi tamanha a fama que conta com uma quinta geração, protagonizando o blockbusters Transformes.',
          vendido: true 
        },
        {
          veiculo: 'MUSTANG BOSS 429', 
          marca: 'Ford', 
          ano: 1969, 
          descricao: 'Para competir com o Chevrolet Camaro, este bólido foi criado para atender às normas da Nascar. Com apenas 1400 carros construídos entre 69 e 70, este modelo é uma raridade. Para competir nas provas norte-americanas, o motor V-8 de 375 cavalos de potência cumpre o que promete',
          vendido: true 
        },  
        {
          veiculo: 'Megatron',
          marca: 'Decepticons',
          ano: 1888,
          descricao: 'um mal robo/carro',
          vendido: false,
        },      
        {
          veiculo: 'Starscream',
          marca: 'Decepticons',
          ano: 1888,
          descricao: 'um mal robo/carro',
          vendido: false,
        },      
        {
          veiculo: 'Shockwave',
          marca: 'Decepticons',
          ano: 1888,
          descricao: 'um mal robo/carro',
          vendido: false,
        },      
      ]);
    });
};
