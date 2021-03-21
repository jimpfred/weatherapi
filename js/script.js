
const $name = $('#name');
const $temperature = $('#temperature');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const $input = $('input[type="text"]')
// EVENT LISTENER
$('form').on('submit', handleGetData);
function handleGetData(event) {
	// prevents the default behaviour
	event.preventDefault();
    const userInput = $input.val()
    
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&units=imperial&APPID=0c2c97898dec7a4969d069e87059d5de',
	}).then(
		// SUCCESS...
		(data) => {
		    render(data)
		},
		// FAILURE...
		(error) => {
			console.log('error', error);
		}
	);
}
function render(data) {
	$name.text(data.name);
	$temperature.text(data.main.temp);
	$feelsLike.text(data.main.feels_like);
    $weather.text(data.weather[0].description)
}
//




