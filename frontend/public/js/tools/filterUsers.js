"use strict";$(document).ready(function(){$("#search-users").keyup(function(){var e=$(this).val().toLowerCase().trim();$(".data-users").hide(),$(".data-users .name-user").each(function(){-1!=$(this).text().toLowerCase().indexOf(""+e)&&($(this).closest(".data-users").show(),$(".hr-div").hide())})})});