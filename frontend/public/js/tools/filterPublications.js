"use strict";$(document).ready(function(){$(".search-publication").keyup(function(){var e=$(this).val().toLowerCase().trim();$(".event-index").hide(),$(".event-index .blog-slider__title").each(function(){-1!=$(this).text().toLowerCase().indexOf(""+e)&&$(this).closest(".event-index").show()})})});