"use strict";$(document).ready(function(){$.get(ENV.API_URL+"/get/info/escola").done(function(n){console.log(n);var e=document.getElementById("res-aluno"),t=document.getElementById("res-tradicao"),o=document.getElementById("res-cursos");e.innerHTML=n.alunos,t.innerHTML=n.anos_tradicao,o.innerHTML=n.cursos,$(".counter-count").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:2500,easing:"swing",step:function(n){$(this).text(Math.ceil(n))}})})}).fail(function(){console.log("Error in request alunos")})});