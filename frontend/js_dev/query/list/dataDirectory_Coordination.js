$(document).ready(() => {
    $.get(`${ENV.API_URL}/get/diretoria`).done(e => {
        $(".nameUm").html(e.diretoria), $(".CargoUm").html("Diretor da Escola")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/diretoria`).done(e => {
        $(".nameDois").html(e.diretor_administrativo), $(".CargoDois").html("Diretor de Serviço Administrativo")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/diretoria`).done(e => {
        $(".nameDois").html(e.diretor_academico), $(".CargoDois").html("Diretor de Serviço Acadêmico")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/diretoria`).done(e => {
        $(".nameTres").html(e.assistente_administrativo), $(".CargoTres").html("Assistente Técnico Administrativo")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/diretoria`).done(e => {
        $(".nameTres").html(e.coordenacao_pedagogica), $(".CargoTres").html("Coordenadora Pedagógica")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/diretoria`).done(e => {
        $(".nameTres").html(e.coordenacao_estagio), $(".CargoTres").html("Coordenador de Estágio")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/diretoria`).done(e => {
        $(".nameQuatro").html(e.diretor_administrativo), $(".CargoQuatro").html("Diretor de Serviço Administrativo")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/diretoria`).done(e => {
        $(".nameCinco").html(e.assistente_administrativo), $(".CargoCinco").html("Assistente Técnico Administrativo")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/diretoria`).done(e => {
        $(".nameSeis").html(e.coordenacao_pedagogica), $(".CargoSeis").html("Coordenador Pedagógica")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/coordenacao`).done(e => {
        $(".nameSete").html(e.administracao), $(".CargoSete").html("ADMINISTRAÇÃO")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/coordenacao`).done(e => {
        $(".nameOito").html(e.automacao_industrial_eletronica), $(".CargoOito").html("AUTOMAÇÃO INDUSTRIAL E ELETRÔNICA")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/coordenacao`).done(e => {
        $(".nameNove").html(e.automacao_industrial_eletronica), $(".CargoNove").html("AUTOMAÇÃO INDUSTRIAL E ELETRÔNICA")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/coordenacao`).done(e => {
        $(".nameDez").html(e.ds_noite), $(".CargoDez").html("DESENVOLVIMENTO DE SISTEMAS E INFORMÁTICA")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/coordenacao`).done(e => {
        $(".nameOnze").html(e.enfermagem), $(".CargoOnze").html("ENFERMAGEM")
    }).fail(() => {
        console.log("Error in request diretoria")
    }), $.get(`${ENV.API_URL}/get/coordenacao`).done(e => {
        $(".nameDoze").html(e.enfermagem), $(".CargoDoze").html("ENFERMAGEM")
    }).fail(() => {
        console.log("Error in request coordenacao")
    }), $.get(`${ENV.API_URL}/get/coordenacao`).done(e => {
        $(".nameTreze").html(e.ensino_medio), $(".CargoTreze").html("ENSINO MÉDIO")
    }).fail(() => {
        console.log("Error in request coordenacao")
    }), $.get(`${ENV.API_URL}/get/coordenacao`).done(e => {
        $(".nameTreze").html(e.etim_ds), $(".CargoTreze").html("ETIM DE DESENVOLVIMENTO DE SISTEMAS E INFORMÁTICA")
    }).fail(() => {
        console.log("Error in request coordenacao")
    }), $.get(`${ENV.API_URL}/get/coordenacao`).done(e => {
        $(".nameQuatorze").html(e.etim_meca), $(".CargoQuatorze").html("ETIM DE MECATRÔNICA")
    }).fail(() => {
        console.log("Error in request coordenacao")
    }), $.get(`${ENV.API_URL}/get/coordenacao`).done(e => {
        $(".nameQuinze").html(e.mecatronica_mecanica), $(".CargoQuinze").html("MECÂNICA E MECATRÔNICA")
    }).fail(() => {
        console.log("Error in request coordenacao")
    })
});