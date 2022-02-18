CREATE DATABASE etecmam;
USE etecmam;

/* by Gustavo Fidencio */
CREATE TABLE cursos(
 id INT NOT NULL AUTO_INCREMENT,
 nome VARCHAR(150),
 descricao VARCHAR(2000),
 duracao VARCHAR(50),
 qtd_vagas INT,
 periodo VARCHAR(50),
 PRIMARY KEY(id)
);

CREATE TABLE images_cursos(
 id INT NOT NULL AUTO_INCREMENT,
 image VARCHAR(300),
 PRIMARY KEY (id),
 CONSTRAINT fk_curso_estagio
 FOREIGN KEY(id) REFERENCES cursos(id)
);

CREATE TABLE materias_modulo(
 id INT NOT NULL AUTO_INCREMENT,
 modulo INT NOT NULL,
 nome VARCHAR(150),
 PRIMARY KEY(id),
 CONSTRAINT fk_grade_materias
 FOREIGN KEY(id) REFERENCES cursos(id)
);

/* by Hector Silva */
CREATE TABLE info_escola(
 id INT NOT NULL AUTO_INCREMENT,
 alunos INT NOT NULL,
 anos_tradicao INT NOT NULL,
 cursos INT NOT NULL,
 PRIMARY KEY(id)
);

CREATE TABLE noticias(
 id INT NOT NULL AUTO_INCREMENT,
 titulo VARCHAR(150) NOT NULL,
 assunto VARCHAR(100),
 autor VARCHAR(150) NOT NULL,
 data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 imagem VARCHAR(999),
 video VARCHAR(999),
 video_yt VARCHAR(999),
 descricao VARCHAR(999) NOT NULL,
 PRIMARY KEY(id)
);

CREATE TABLE diretoria(
 id INT NOT NULL AUTO_INCREMENT,
 diretoria VARCHAR(200) NOT NULL,
 diretor_administrativo VARCHAR(200) NOT NULL,
 diretor_academico VARCHAR(200) NOT NULL,
 assistente_administrativo VARCHAR(200) NOT NULL,
 coordenacao_pedagogica VARCHAR(200) NOT NULL,
 coordenacao_estagio VARCHAR(200) NOT NULL,
 PRIMARY KEY(id)
);

CREATE TABLE coordenacao_cursos(
 id INT NOT NULL AUTO_INCREMENT,
 administracao VARCHAR(200) NOT NULL,
 automacao_industrial_eletronica VARCHAR(200) NOT NULL,
 ds_noite VARCHAR(200) NOT NULL,
 enfermagem VARCHAR(200) NOT NULL,
 ensino_medio VARCHAR(200) NOT NULL,
 etim_ds VARCHAR(200) NOT NULL,
 etim_meca VARCHAR(200) NOT NULL,
 mecatronica_mecanica VARCHAR(200) NOT NULL,
 PRIMARY KEY(id)
);

CREATE TABLE funcionarios(
 id INT NOT NULL AUTO_INCREMENT,
 nome VARCHAR(150) NOT NULL,
 cargo VARCHAR(150) NOT NULL,
 PRIMARY KEY(id)
);

CREATE TABLE professores(
 id INT NOT NULL AUTO_INCREMENT,
 nome VARCHAR(150) NOT NULL,
 email VARCHAR(200) NOT NULL,
 formacao VARCHAR(200),
 image VARCHAR(200),
 INDEX fk_id_idx(id ASC),
 PRIMARY KEY(id)
);

CREATE TABLE login(
 id INT NOT NULL AUTO_INCREMENT,
 email VARCHAR(150) NOT NULL,
 senha VARCHAR(150) NOT NULL,
 codigo_recuperacao VARCHAR(999),
 PRIMARY KEY(id)
);

CREATE TABLE usuario(
 id INT,
 userName VARCHAR(150) NOT NULL,
 sexo INT,
 cargo VARCHAR(150),
 permissao INT,
 status_logged INT,
 PRIMARY KEY(id),
 CONSTRAINT fk_usuario_login
 FOREIGN KEY(id) REFERENCES login(id)
 ON DELETE CASCADE
);

CREATE TABLE log_atividade(
 id INT NOT NULL AUTO_INCREMENT,
 data_atividade TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 icon VARCHAR(100) NOT NULL,
 usuario VARCHAR(150) NOT NULL,
 cargo VARCHAR(150) NOT NULL,
 atividade VARCHAR(500) NOT NULL,
 PRIMARY KEY(id)
);

INSERT INTO etecmam.cursos(nome, descricao, duracao, qtd_vagas, periodo)
VALUES('Administração e Marketing','O Técnico em Administração é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Realiza atividades de controles e auxilia nos processos de direção utilizando ferramentas da informática básica. Fomenta ideias e práticas empreendedoras. Desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental.','1 ANO E 6 MESES', 40, 'Noite'),
('Mecânica', 'O Técnico em Mecânica é o profissional que elabora projetos mecânicos e sistemas automatizados. Planeja, aplica e controla procedimentos de instalação e de manutenção mecânica de máquinas e equipamentos. Desenvolve e controla processos de fabricação e montagem de conjuntos mecânicos. Aplica técnicas de medição e ensaios. Especifica materiais para construção mecânica. Elabora documentação, realiza compras e vendas técnicas e cumpre normas e procedimentos de segurança no trabalho e de preservação ambiental.','2 ANOS', 40, 'Noite'),
('Eletrônica', 'O Técnico em Eletrônica é o profissional que participa do desenvolvimento de projetos. Executa a instalação e a manutenção de equipamentos e sistemas eletrônicos. Realiza medições e testes com equipamentos eletrônicos. Executa procedimentos de controle de qualidade e gestão da produção de equipamentos eletrônicos.', '1 ANO E 6 MESES', 40, 'Noite'),
('Segurança do Trabalho', 'O Técnico em Segurança do Trabalho é aquele que ajuda no planejamento de marketing, pesquisa ações, planos de marketing e também cria ações de comunicação e vendas. Ele ajuda na elaboração de estudos de mercado para a implementação das melhores estratégias de mercado.', '1 ANO E 6 MESES', 40, 'Noite'),
('Desenvolvimento de Sistemas', 'O Ensino Médio destina-se aos candidatos que tenham concluído o ensino fundamental e compõe-se por duas partes: Base Nacional Comum e Parte Diversificada. As disciplinas da Base Nacional Comum, direcionadas para a formação geral do estudante, são as já tradicionalmente estudadas, como Língua Portuguesa e Literatura, Matemática, História, Geografia, Química, Física, Biologia, Educação Física e Artes. As disciplinas da Parte Diversificada objetivam ao desenvolvimento de capacidades e de condutas importantes na atualidade, visando à formação para o exercício da cidadania e preparação para o trabalho. O oferecimento dessas disciplinas é diferenciado nas Etecs, as quais dispõem de autonomia para optar por projetos, pelo ensino de filosofia, de sociologia e/ou espanhol. O inglês, que também integra a Parte Diversificada, é obrigatório no ensino médio.', '1 ANO E 6 MESES', 40, 'Noite'),
('Enfermagem', 'O Técnico em Enfermagem é o profissional que atua na promoção, prevenção, recuperação e reabilitação dos processos saúde-doença. Colabora com o atendimento das necessidades de saúde do paciente/ cliente, família e comunidade, em todas as faixas etárias. Desenvolve ações de educação para o auto cuidado, bem como de segurança no trabalho e de biossegurança nas ações de enfermagem. Promove ações de orientação e preparo do paciente para exames. Realiza cuidados de enfermagem, tais como: curativos, administração de medicamentos e vacinas, nebulizações, procedimentos invasivos, mensuração antropométrica e verificação de sinais vitais, dentre outros. Presta assistência de enfermagem a pacientes clínicos e cirúrgicos em qualquer fase do ciclo vital. Participa de uma equipe multiprofissional com visão crítica e reflexiva, atuando de acordo com princípios éticos. Exerce ações de cidadania e de preservação ambiental.', '2 ANOS', 40, 'Noite');

INSERT INTO etecmam.images_cursos(image)
VALUES
('/assets/images/adm_2.png'),
('/assets/images/mecanica_2.png'),
('/assets/images/eletronica_2.png'),
('/assets/images/seguranca_2.png'),
('/assets/images/ds_2.png'),
('/assets/images/efermagem_2.png');


INSERT INTO etecmam.login (email, senha) 
VALUES ('b931705114cc31e7cda86fcedfc574fc7e03156223', '95105c7641916ca5ccab');
INSERT INTO etecmam.usuario (id, userName, sexo, cargo, permissao, status_logged)
VALUES(1, 'Hector Rodrigues Da Silva', 0, 'Desenvolvedor', 1, 0);

INSERT INTO diretoria (diretoria, diretor_administrativo, diretor_academico, assistente_administrativo, coordenacao_pedagogica, coordenacao_estagio)
VALUES('Ana Maria Mancera da Silva Barbosa Lima', 'José Agostinho Sgarbi', ' Diego Ferreira e Silva', 'Alexandre Santos de Almeida', 'Cleuza Maria Ribeiro Wargaftig', 'Leimi Nakamura Dias Moraes');

INSERT INTO coordenacao_cursos (administracao, automacao_industrial_eletronica, ds_noite, enfermagem, ensino_medio, etim_ds, etim_meca, mecatronica_mecanica)
VALUES ('Silvia Martins dos Santos', 'Bruno Miguel Camilo', 'Denise Terumi Nakamura', 'Priscila Pereira Martins', 'Leimi Nakamura Dias Moraes e Rosi Mara Ferrari Leite', 'Maria Angela Piovezan', 'Ezequias Barbosa Cuba', 'Adelino Aparecido Piva Junior');

INSERT INTO info_escola (alunos, anos_tradicao, cursos)
VALUES (1200, 60, 8);

INSERT INTO funcionarios (nome, cargo)
VALUES
('Ana Maria Mancera da Silva Barbosa Lima', 'Diretor de Escola Técnica'),
('Diego Ferreira e Silva', 'Diretor de Serviços Acadêmicos'),
('José Agostinho Sgarbi', 'Diretor de Serviço Administrativo'),
('Alexandre Santos de Almeida', 'Assistente Técnico Administrativo I'),
('Cleuza Maria Ribeiro Wargaftig', 'Coordenadora Pedagógica'),
('André Luiz Pacheco Albero', 'Orientador Educacional'),
('Airton Francisco Domingues', 'Agente Técnico e Administrativo'),
('Carolina Leite Cardinale', 'Assistente Administrativo'),
('Claudio Sossolote', 'Agente Técnico e Administrativo'),
('Debora Cristina Rodrigues', 'Agente Técnico Administrativo'),
('Fábio Henrique Pereira', 'Auxiliar de Apoio'),
('Fábio Henrique Ponzilaqua', 'Auxiliar Docente'),
('Fátima Alves Dias dos Santos', ' Auxiliar de Apoio'),
('Francisco Paschoal Sartori', 'Auxiliar de Apoio'),
('Guilherme Brandão Martins', 'Auxiliar Docente'),
('Luzia Mendes Rodrigues', 'Auxiliar de Apoio'),
('Marcelo Bizachi Sampaio', 'Agente Técnico e Administrativo'),
('Maria Cristina Moretti Tivo', 'Auxiliar de Apoio'),
('Maria Paula Agostini Soares de Oliveira', 'Auxiliar Docente'),
('Sebastião Lopes Garcia', 'Auxiliar de Apoio'),
('Vanessa Trevizan Teato', 'Agente Técnico e Administrativo'),
('Verônica Dala Rovere Beloti', 'Agente Técnico e Administrativo');

INSERT INTO professores (nome, email, formacao, image)
VALUES 
('Adelino Aparecido Piva Junior','adelino.piva@hotmail.com', null, null),
('Adelíria Corrêa','adetolepa@hotmail.com', null, null),
('Adriana Berbel Julio Belini','dribelini@hotmail.com', null, null),
('Adriano Bien de Abreu',' adrianobienabreu@gmail.com', null, null),
('Alexandre Santos de Almeida','e088ata@cps.sp.gov.br', null, null),
('Aloísio Pinto','aloisiop1@gmail.com', null, null),
('Aluisio Adurens','aluisio.adurens@etec.sp.gov.br', null, null),
('Ana Lúcia Parente do Nascimento','al_pn@hotmail.com', null, null),
('Ana Maria Prande Pereira','anaprandebonita@hotmail.com', null, null),
('André Luiz Pacheco Albero','andre.albero@etec.sp.gov.br', null, null),
('Andrea Carmezini Malange','andcarme@yahoo.com.br', null, null),
('Bruno Agostinho de Souza','bruno.agsouza@gmail.com', null, null),
('Bruno Eduardo Paiva Mancussi','mancussi@hotmail.com', null, null),
('Bruno Miguel Santos Camilo',' brunomiguelcamilo@hotmail.com', null, null),
('Celestina Maria Saenz A. Sampaio','celeartioli@hotmail.com', null, null),
('Cleuza Maria Ribeiro da Silva Wargaftig','nowar2@uol.com.br', null, null),
('Denise Terumi Nakamura','denise.nakamura@hotmail.com', null, null),
('Edson Mancuzo','e_mancuzo@uol.com.br', null, null),
('Eliana Sandra Evangelista da Silva','elianasandrasp@terra.com.br', null, null),
('Eliana Valencise Hidalgo Esteves','eliana.esteves01@etec.sp.gov.br', null, null),
('Ezequias Barbosa Cuba','ezequiascuba@gmail.com', null, null),
('Gilberto Foganholi','foganholi.gilberto@yahoo.com.br', null, null),
('Guilherme Brandão Martins','Guilherme-bm@outlook.com', null, null),
('Heloiza Perozim Pinheiro Gardinale','heloizap@dataplace.com.br', null, null),
('Iriane Gerzeli Brandão','irianegerzeli@hotmail.com', null, null),
('Jair Barbosa dos Santos','jairbsantos1@gmail.com', null, null),
('Jamile Priscila Sacá','jamilejps@hotmail.com', null, null),
('José Antonio Poletto Filho','jpoletto@uol.com.br', null, null),
('Josiane Ramos Garcia Rodrigues',' lejorodrigues@yahoo.com.br', null, null),
('Karina Spigolon Peron','karinasperon@hotmail.com', null, null),
('Laerte Edson Nunes','laerte_n@hotmail.com', null, null),
('Lauro Verevi Franco','laurovfranco@yahoo.com.br', null, null),
('Leimi Nakamura Dias Moraes','leimimoraes@yahoo.com.br', null, null),
('Leni Marta Garbulho Nunes',' leni.nunes@etec.sp.gov.br', null, null),
('Luciana Akemi Oshiiwa','luciana.oshiiwa@etec.sp.gov.br', null, null),
('Luciana Cristina Juliani Trigo Veiga','lcjtveiga@gmail.com', null, null),
('Luciana Denise Leite','lucianadeniseleite@uol.com.br', null, null),
('Luciane Aparecida Colhados Kemp','luciane3541@hotmail.com', null, null),
('Luis Antonio Amorim Silva','aletronicaluis@gmail.com', null, null),
('Luiz Fernando Meguerditchian','lfmeguer@hotmail.com', null, null),
('Marcelo Gallo Jorge Esteves','marcelo.esteves@etec.sp.gov.br', null, null),
('Marcelo Hugo Romeu Dias','murphydias@gmail.com', null, null),
('Marco Aurélio Drapé','marco.drape@hotmail.com', null, null),
('Marcos Luchiari Baraldi','marcosbrld@yahoo.com.br', null, null),
('Marcus Vinicius Goncalves Vismara','marcusvismara@hotmail.com', null, null),
('Maria Angela Piovezan','mariaangelapferreira@bol.com.br', null, null),
('Maria Aparecida Inez Galvani Kagueyama',' maigalky@yahoo.com.br', null, null),
('Mariana Magni Bueno Honjoya','mary-magni@hotmail.com', null, null),
('Mariza Sant’Anna Marinho','marizamarinho2009@hotmail.com', null, null),
('Miriã Cardozo Peralta','miriacp7@homail.com', null, null),
('Moacyr Francischeti Correa','moacyrfc@gmail.com', null, null),
('Morgana Maravalhas de Carvalho Barros','mmcb44@yahoo.com.br', null, null),
('Nivaldo Pereira de Macedo','eta@saaegarca.sp.gov.br', null, null),
('Orozimbo Simões Fontes Junior','m10j20@uol.com.br', null, null),
('Paulo Sérgio de Castro','Paulo.castropsc@gmail.com', null, null),
('Pedro Márcio Junqueira Cestari','pmj.cestari@terra.com.br', null, null),
('Priscila Bocchile de Lima','pribocchile@gmail.com', null, null),
('Priscila Pereira Martins',' priscilapemartins@hotmail.com', null, null),
('Reginaldo Colantônio','reginaldo.ct@hotmail.com', null, null),
('Renata Cristina Roberto','renataprando@hotmail.com', null, null),
('Rony Ciriello Mazzetto','rony.ciriello@itelefonica.com.br', null, null),
('Rosi Mara Ferrari Leite','rosi.ferrarileite@yahoo.com.br', null, null),
('Rubia Carla Ramires Morais','rubiaramires@uol.com.br', null, null),
('Silvia Regina Martins dos Santos','silviarmds@yahoo.com.br', null, null),
('Simone Dias Moraes Sambini','simonemoraes120@hotmail.com', null, null),
('Tania de Oliveira Tassi Cruz','tania.tassi93@gmail.com', null, null),
('Tatiane Dias de Campos','tatianedecampos@hotmail.com', null, null),
('Vagner Soares Tozetti','vagner-tozzetti@hotmail.com', null, null),
('Vanessa Ap. Sanches Campassi de Oliveira','vcampassi@hotmail.com', null, null),
('Victor Nunes Cavalcanti','victorcavalcanti@bol.com.br', null, null),
('Yuji Yamamoto','yuji.yamamoto@uol.com.br', null, null);