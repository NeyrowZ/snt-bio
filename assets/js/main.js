(function(){
	
	var	$body = document.querySelector('body');
	$body.classList.add('is-loading');

	window.addEventListener('load', function() {
		window.setTimeout(function() {
			$body.classList.remove('is-loading');
		}, 100);
	});

	(function() {
		var settings = {
			images: {
				'images/vscode.webp': 'center',
				'images/intellij.png': 'center',
				'images/phpstorm.png': 'center',
				'images/pycharm.jpg': 'center'
			},
			delay: 6000
		};
		
		var	pos = 0, lastPos = 0, $wrapper, $bgs = [], $bg, k;

		$wrapper = document.createElement('div');
		$wrapper.id = 'bg';
		$body.appendChild($wrapper);

		for (k in settings.images) {
			
			$bg = document.createElement('div');
			$bg.style.backgroundImage = 'url("' + k + '")';
			$bg.style.backgroundPosition = settings.images[k];
			$wrapper.appendChild($bg);

			$bgs.push($bg);
		}

		$bgs[pos].classList.add('visible');
		$bgs[pos].classList.add('top');
		
		window.setInterval(function() {

			lastPos = pos;
			pos++;

			// Wrap to beginning if necessary.
				if (pos >= $bgs.length)
					pos = 0;

			// Swap top images.
				$bgs[lastPos].classList.remove('top');
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

			// Hide last image after a short delay.
				window.setTimeout(function() {
					$bgs[lastPos].classList.remove('visible');
				}, settings.delay / 2);

		}, settings.delay);
	})();
})();