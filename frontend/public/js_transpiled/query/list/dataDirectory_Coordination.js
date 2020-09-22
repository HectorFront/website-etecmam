"use strict";

$(document).ready(function () {
    $.get(ENV.API_URL + "/get/diretoria").done(function (e) {
        $(".nameUm").html(e.diretoria), $(".CargoUm").html("Diretor da Escola");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/diretoria").done(function (e) {
        $(".nameDois").html(e.diretor_administrativo), $(".CargoDois").html("Diretor de Serviço Administrativo");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/diretoria").done(function (e) {
        $(".nameDois").html(e.diretor_academico), $(".CargoDois").html("Diretor de Serviço Acadêmico");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/diretoria").done(function (e) {
        $(".nameTres").html(e.assistente_administrativo), $(".CargoTres").html("Assistente Técnico Administrativo");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/diretoria").done(function (e) {
        $(".nameTres").html(e.coordenacao_pedagogica), $(".CargoTres").html("Coordenadora Pedagógica");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/diretoria").done(function (e) {
        $(".nameTres").html(e.coordenacao_estagio), $(".CargoTres").html("Coordenador de Estágio");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/diretoria").done(function (e) {
        $(".nameQuatro").html(e.diretor_administrativo), $(".CargoQuatro").html("Diretor de Serviço Administrativo");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/diretoria").done(function (e) {
        $(".nameCinco").html(e.assistente_administrativo), $(".CargoCinco").html("Assistente Técnico Administrativo");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/diretoria").done(function (e) {
        $(".nameSeis").html(e.coordenacao_pedagogica), $(".CargoSeis").html("Coordenador Pedagógica");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/coordenacao").done(function (e) {
        $(".nameSete").html(e.administracao), $(".CargoSete").html("ADMINISTRAÇÃO");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/coordenacao").done(function (e) {
        $(".nameOito").html(e.automacao_industrial_eletronica), $(".CargoOito").html("AUTOMAÇÃO INDUSTRIAL E ELETRÔNICA");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/coordenacao").done(function (e) {
        $(".nameNove").html(e.automacao_industrial_eletronica), $(".CargoNove").html("AUTOMAÇÃO INDUSTRIAL E ELETRÔNICA");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/coordenacao").done(function (e) {
        $(".nameDez").html(e.ds_noite), $(".CargoDez").html("DESENVOLVIMENTO DE SISTEMAS E INFORMÁTICA");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/coordenacao").done(function (e) {
        $(".nameOnze").html(e.enfermagem), $(".CargoOnze").html("ENFERMAGEM");
    }).fail(function () {
        console.log("Error in request diretoria");
    }), $.get(ENV.API_URL + "/get/coordenacao").done(function (e) {
        $(".nameDoze").html(e.enfermagem), $(".CargoDoze").html("ENFERMAGEM");
    }).fail(function () {
        console.log("Error in request coordenacao");
    }), $.get(ENV.API_URL + "/get/coordenacao").done(function (e) {
        $(".nameTreze").html(e.ensino_medio), $(".CargoTreze").html("ENSINO MÉDIO");
    }).fail(function () {
        console.log("Error in request coordenacao");
    }), $.get(ENV.API_URL + "/get/coordenacao").done(function (e) {
        $(".nameTreze").html(e.etim_ds), $(".CargoTreze").html("ETIM DE DESENVOLVIMENTO DE SISTEMAS E INFORMÁTICA");
    }).fail(function () {
        console.log("Error in request coordenacao");
    }), $.get(ENV.API_URL + "/get/coordenacao").done(function (e) {
        $(".nameQuatorze").html(e.etim_meca), $(".CargoQuatorze").html("ETIM DE MECATRÔNICA");
    }).fail(function () {
        console.log("Error in request coordenacao");
    }), $.get(ENV.API_URL + "/get/coordenacao").done(function (e) {
        $(".nameQuinze").html(e.mecatronica_mecanica), $(".CargoQuinze").html("MECÂNICA E MECATRÔNICA");
    }).fail(function () {
        console.log("Error in request coordenacao");
    });
});