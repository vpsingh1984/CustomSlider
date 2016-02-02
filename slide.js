function playSlider(element, imgArray, speed, nextBtn, prevBtn){
	var index = 0;
	var sliderCallback;
	isButtonDisabled();

	function isButtonDisabled(){
		if(!imgArray.length){
			return null;
		}
		else if(imgArray.length < 2){
			nextBtn.prop( "disabled", true );
			prevBtn.prop( "disabled", true );
			showImage();
		}
		else{
			nextSlide();
			startAutoSlider();
		}
	}

	function nextSlide(){
		clearInterval(sliderCallback);
		prevBtn.prop( "disabled", false );
		showImage();
		index++;
		if(index === imgArray.length){
			nextBtn.prop( "disabled", true );
			index-=2;
		}
		else{
			nextBtn.prop( "disabled", false );
		}
		startAutoSlider();
	}

	function prevSlide(){
		clearInterval(sliderCallback);
		nextBtn.prop( "disabled", false );
		showImage();
		index--;
		if(index < 0){
			prevBtn.prop( "disabled", true );
			index+=2;
		}
		startAutoSlider();
	}

	function showImage(){
		$(element).attr({'src': imgArray[index], 'data-img': index});
	}

	function startAutoSlider(){
		sliderCallback = setInterval(function(){
				nextSlide();
			}, speed);
	}

	return {
		nextSlide: nextSlide,
		prevSlide:prevSlide,
	};
}
