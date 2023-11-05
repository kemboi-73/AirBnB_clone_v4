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
});
