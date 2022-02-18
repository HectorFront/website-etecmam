$(document).ready(() => {

  $.get(`${ENV.API_URL}/get/coordenacao`)
    .done(res => {

      $('#coordenacaoMedio').val(res.ensino_medio);
      $('#coordenacaoAdm').val(res.administracao);
      $('#coordenacaoIndustrial').val(res.automacao_industrial_eletronica);
      $('#coordenacaoDs').val(res.ds_noite);
      $('#coordenacaoEnfer').val(res.enfermagem);
      $('#coordenacaoEtimDs').val(res.etim_ds);
      $('#coordenacaoEtimMeca').val(res.etim_meca);
      $('#coordenacaoMecanicaMecatronica').val(res.mecatronica_mecanica);
    }).fail(() => {
      console.log('Error in request coordenação');
    });

  $.get(`${ENV.API_URL}/get/diretoria`)
    .done(res => {

      $('#diretoria').val(res.diretoria);
      $('#diretorAdm').val(res.diretor_administrativo);
      $('#diretorAdm').val(res.diretor_administrativo);
      $('#diretorAcademico').val(res.diretor_academico);
      $('#assistenteTec').val(res.assistente_administrativo);
      $('#coordenacaoPedagogica').val(res.coordenacao_pedagogica);
      $('#coordenacaoEstagio').val(res.coordenacao_estagio);
    }).fail(() => {
      console.log('Error in request Diretoria');
    });

  $.get(`${ENV.API_URL}/get/info/escola`)
    .done(res => {

      $('#alunos').val(res.alunos);
      $('#tradicao').val(res.anos_tradicao);
      $('#quantidadecursos').val(res.cursos);

    }).fail(() => {
      console.log('Error in request info escola')
    });

  $('.load').remove();
  $('#content-main').removeClass('content-main');
});