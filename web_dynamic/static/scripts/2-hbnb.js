$(document).ready(function () {
	let selectedAm = [];

	$('input[type=checkbox]').change(function () {
		let amenityName = $(this).data('name');

		if ($(this).is(':checked')) {
			selectedAm.push(amenityName);
		} else {
			selectedAm = selectedAm.filter(amen => amen !== amenityName);
		}
		$('.amenities h4').text(selectedAm.join(', '));
	});
	function updateApi() {
		fetch('http://0.0.0.0:5001/api/v1/status/')
			.then(response => response.json())
			.then(data => {
				const apiStatus = data.status;
				const apiDiv = document.querySelector('#api_status');
				if (apiStatus === 'OK') {
					apiDiv.classList.add('available');
				} else {
					apiDiv.classList.remove('available');
				}
		})
		.catch(error => {
				console.error(error);
		});
	}
	updateApi();
});
