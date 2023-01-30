$(function(){
		$('.btn-add').click(function(){
			var el = '<div class="anotacao-single"><textarea placeholder="Sua nova anotação..."></textarea></div>'
			$('.container-anotacoes').append(el);

			var textArea = $('.anotacao-single').last().find('textarea');

			var date = new Date();

			var hh = date.getHours();
			var mn = date.getMinutes();

			var finalTime = hh+":"+mn;
			textArea.html("Nova anotação em: "+finalTime);

		})
	})
