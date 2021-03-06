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
VALUES('Administra????o e Marketing','O T??cnico em Administra????o ?? o profissional que adota postura ??tica na execu????o da rotina administrativa, na elabora????o do planejamento da produ????o e materiais, recursos humanos, financeiros e mercadol??gicos. Realiza atividades de controles e auxilia nos processos de dire????o utilizando ferramentas da inform??tica b??sica. Fomenta ideias e pr??ticas empreendedoras. Desempenha suas atividades observando as normas de seguran??a, sa??de e higiene do trabalho, bem como as de preserva????o ambiental.','1 ANO E 6 MESES', 40, 'Noite'),
('Mec??nica', 'O T??cnico em Mec??nica ?? o profissional que elabora projetos mec??nicos e sistemas automatizados. Planeja, aplica e controla procedimentos de instala????o e de manuten????o mec??nica de m??quinas e equipamentos. Desenvolve e controla processos de fabrica????o e montagem de conjuntos mec??nicos. Aplica t??cnicas de medi????o e ensaios. Especifica materiais para constru????o mec??nica. Elabora documenta????o, realiza compras e vendas t??cnicas e cumpre normas e procedimentos de seguran??a no trabalho e de preserva????o ambiental.','2 ANOS', 40, 'Noite'),
('Eletr??nica', 'O T??cnico em Eletr??nica ?? o profissional que participa do desenvolvimento de projetos. Executa a instala????o e a manuten????o de equipamentos e sistemas eletr??nicos. Realiza medi????es e testes com equipamentos eletr??nicos. Executa procedimentos de controle de qualidade e gest??o da produ????o de equipamentos eletr??nicos.', '1 ANO E 6 MESES', 40, 'Noite'),
('Seguran??a do Trabalho', 'O T??cnico em Seguran??a do Trabalho ?? aquele que ajuda no planejamento de marketing, pesquisa a????es, planos de marketing e tamb??m cria a????es de comunica????o e vendas. Ele ajuda na elabora????o de estudos de mercado para a implementa????o das melhores estrat??gias de mercado.', '1 ANO E 6 MESES', 40, 'Noite'),
('Desenvolvimento de Sistemas', 'O Ensino M??dio destina-se aos candidatos que tenham conclu??do o ensino fundamental e comp??e-se por duas partes: Base Nacional Comum e Parte Diversificada. As disciplinas da Base Nacional Comum, direcionadas para a forma????o geral do estudante, s??o as j?? tradicionalmente estudadas, como L??ngua Portuguesa e Literatura, Matem??tica, Hist??ria, Geografia, Qu??mica, F??sica, Biologia, Educa????o F??sica e Artes. As disciplinas da Parte Diversificada objetivam ao desenvolvimento de capacidades e de condutas importantes na atualidade, visando ?? forma????o para o exerc??cio da cidadania e prepara????o para o trabalho. O oferecimento dessas disciplinas ?? diferenciado nas Etecs, as quais disp??em de autonomia para optar por projetos, pelo ensino de filosofia, de sociologia e/ou espanhol. O ingl??s, que tamb??m integra a Parte Diversificada, ?? obrigat??rio no ensino m??dio.', '1 ANO E 6 MESES', 40, 'Noite'),
('Enfermagem', 'O T??cnico em Enfermagem ?? o profissional que atua na promo????o, preven????o, recupera????o e reabilita????o dos processos sa??de-doen??a. Colabora com o atendimento das necessidades de sa??de do paciente/ cliente, fam??lia e comunidade, em todas as faixas et??rias. Desenvolve a????es de educa????o para o auto cuidado, bem como de seguran??a no trabalho e de biosseguran??a nas a????es de enfermagem. Promove a????es de orienta????o e preparo do paciente para exames. Realiza cuidados de enfermagem, tais como: curativos, administra????o de medicamentos e vacinas, nebuliza????es, procedimentos invasivos, mensura????o antropom??trica e verifica????o de sinais vitais, dentre outros. Presta assist??ncia de enfermagem a pacientes cl??nicos e cir??rgicos em qualquer fase do ciclo vital. Participa de uma equipe multiprofissional com vis??o cr??tica e reflexiva, atuando de acordo com princ??pios ??ticos. Exerce a????es de cidadania e de preserva????o ambiental.', '2 ANOS', 40, 'Noite');

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
VALUES('Ana Maria Mancera da Silva Barbosa Lima', 'Jos?? Agostinho Sgarbi', ' Diego Ferreira e Silva', 'Alexandre Santos de Almeida', 'Cleuza Maria Ribeiro Wargaftig', 'Leimi Nakamura Dias Moraes');

INSERT INTO coordenacao_cursos (administracao, automacao_industrial_eletronica, ds_noite, enfermagem, ensino_medio, etim_ds, etim_meca, mecatronica_mecanica)
VALUES ('Silvia Martins dos Santos', 'Bruno Miguel Camilo', 'Denise Terumi Nakamura', 'Priscila Pereira Martins', 'Leimi Nakamura Dias Moraes e Rosi Mara Ferrari Leite', 'Maria Angela Piovezan', 'Ezequias Barbosa Cuba', 'Adelino Aparecido Piva Junior');

INSERT INTO info_escola (alunos, anos_tradicao, cursos)
VALUES (1200, 60, 8);

INSERT INTO funcionarios (nome, cargo)
VALUES
('Ana Maria Mancera da Silva Barbosa Lima', 'Diretor de Escola T??cnica'),
('Diego Ferreira e Silva', 'Diretor de Servi??os Acad??micos'),
('Jos?? Agostinho Sgarbi', 'Diretor de Servi??o Administrativo'),
('Alexandre Santos de Almeida', 'Assistente T??cnico Administrativo I'),
('Cleuza Maria Ribeiro Wargaftig', 'Coordenadora Pedag??gica'),
('Andr?? Luiz Pacheco Albero', 'Orientador Educacional'),
('Airton Francisco Domingues', 'Agente T??cnico e Administrativo'),
('Carolina Leite Cardinale', 'Assistente Administrativo'),
('Claudio Sossolote', 'Agente T??cnico e Administrativo'),
('Debora Cristina Rodrigues', 'Agente T??cnico Administrativo'),
('F??bio Henrique Pereira', 'Auxiliar de Apoio'),
('F??bio Henrique Ponzilaqua', 'Auxiliar Docente'),
('F??tima Alves Dias dos Santos', ' Auxiliar de Apoio'),
('Francisco Paschoal Sartori', 'Auxiliar de Apoio'),
('Guilherme Brand??o Martins', 'Auxiliar Docente'),
('Luzia Mendes Rodrigues', 'Auxiliar de Apoio'),
('Marcelo Bizachi Sampaio', 'Agente T??cnico e Administrativo'),
('Maria Cristina Moretti Tivo', 'Auxiliar de Apoio'),
('Maria Paula Agostini Soares de Oliveira', 'Auxiliar Docente'),
('Sebasti??o Lopes Garcia', 'Auxiliar de Apoio'),
('Vanessa Trevizan Teato', 'Agente T??cnico e Administrativo'),
('Ver??nica Dala Rovere Beloti', 'Agente T??cnico e Administrativo');

INSERT INTO professores (nome, email, formacao, image)
VALUES 
('Adelino Aparecido Piva Junior','adelino.piva@hotmail.com', null, null),
('Adel??ria Corr??a','adetolepa@hotmail.com', null, null),
('Adriana Berbel Julio Belini','dribelini@hotmail.com', null, null),
('Adriano Bien de Abreu',' adrianobienabreu@gmail.com', null, null),
('Alexandre Santos de Almeida','e088ata@cps.sp.gov.br', null, null),
('Alo??sio Pinto','aloisiop1@gmail.com', null, null),
('Aluisio Adurens','aluisio.adurens@etec.sp.gov.br', null, null),
('Ana L??cia Parente do Nascimento','al_pn@hotmail.com', null, null),
('Ana Maria Prande Pereira','anaprandebonita@hotmail.com', null, null),
('Andr?? Luiz Pacheco Albero','andre.albero@etec.sp.gov.br', null, null),
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
('Guilherme Brand??o Martins','Guilherme-bm@outlook.com', null, null),
('Heloiza Perozim Pinheiro Gardinale','heloizap@dataplace.com.br', null, null),
('Iriane Gerzeli Brand??o','irianegerzeli@hotmail.com', null, null),
('Jair Barbosa dos Santos','jairbsantos1@gmail.com', null, null),
('Jamile Priscila Sac??','jamilejps@hotmail.com', null, null),
('Jos?? Antonio Poletto Filho','jpoletto@uol.com.br', null, null),
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
('Marco Aur??lio Drap??','marco.drape@hotmail.com', null, null),
('Marcos Luchiari Baraldi','marcosbrld@yahoo.com.br', null, null),
('Marcus Vinicius Goncalves Vismara','marcusvismara@hotmail.com', null, null),
('Maria Angela Piovezan','mariaangelapferreira@bol.com.br', null, null),
('Maria Aparecida Inez Galvani Kagueyama',' maigalky@yahoo.com.br', null, null),
('Mariana Magni Bueno Honjoya','mary-magni@hotmail.com', null, null),
('Mariza Sant???Anna Marinho','marizamarinho2009@hotmail.com', null, null),
('Miri?? Cardozo Peralta','miriacp7@homail.com', null, null),
('Moacyr Francischeti Correa','moacyrfc@gmail.com', null, null),
('Morgana Maravalhas de Carvalho Barros','mmcb44@yahoo.com.br', null, null),
('Nivaldo Pereira de Macedo','eta@saaegarca.sp.gov.br', null, null),
('Orozimbo Sim??es Fontes Junior','m10j20@uol.com.br', null, null),
('Paulo S??rgio de Castro','Paulo.castropsc@gmail.com', null, null),
('Pedro M??rcio Junqueira Cestari','pmj.cestari@terra.com.br', null, null),
('Priscila Bocchile de Lima','pribocchile@gmail.com', null, null),
('Priscila Pereira Martins',' priscilapemartins@hotmail.com', null, null),
('Reginaldo Colant??nio','reginaldo.ct@hotmail.com', null, null),
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