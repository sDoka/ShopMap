ymaps.ready(init);

myPoints = [
            { coords: [59.939188, 30.315620], text: 'первый', adress: 'Невский 33', tel: '135235412', email: 'sdsg@sap.com' },
            { coords: [59.989188, 30.325620], text: 'второй', adress: 'Невский 33', tel: '135235412', email: 'sdsg@sap.com' },
            { coords: [59.919188, 30.515620], text: 'третий', adress: 'Невский 33', tel: '135235412', email: 'sdsg@sap.com' },
];
function init() {
    myMap = new ymaps.Map('map', {
        center: [59.939188, 30.315620],
        zoom: 10
    });
    myMap.controls
       // Кнопка изменения масштаба.
       .add('zoomControl', { left: 5, top: 5 })
       // Список типов карты
       .add('typeSelector')
       // Стандартный набор кнопок
       .add('mapTools', { left: 35, top: 5 });
    // Создаем коллекцию.
    myCollection = new ymaps.GeoObjectCollection();
}
function search_map() {
    myCollection.removeAll(); //очистка старых меток

    var myPoint = document.getElementById('searchfield').value;
    for (var i = 0; i < myPoints.length; i++) {
        var point = myPoints[i];

        if (point.text.indexOf(myPoint) + 1) //если содержит подстроку
        {
            myCollection.add(new ymaps.Placemark(
	            point.coords, {
	                balloonContentBody: point.text
	            }
	        ));

            myMap.geoObjects.add(myCollection);
        }
    }
}
function search_map_admin() {
    myPoints = [
        { coords: [59.939188, 30.315620], text: 'первый', adress: 'Невский 33', tel: '135235412', email: 'sdsg@sap.com', telm: '54645646' },
        { coords: [59.989188, 30.315620], text: 'второй', adress: 'Невский 33', tel: '135235412', email: 'sdsg@sap.com', telm: '568345356' },
        { coords: [59.989188, 30.315620], text: 'Третий', adress: 'Невский 33', tel: '135235412', email: 'sdsg@sap.com', telm: '568345356' }
    ];
    var myPoint = document.getElementById('val').value;
    for (var i = 0; i < 2; i++) {

        var point1 = myPoints[i];

        if (point1.text == myPoint) {
            document.getElementById('adress').value = point1.adress;
            document.getElementById('Tel').value = point1.tel;
            document.getElementById('Tel_m').value = point1.telm;
            document.getElementById('Sayt').value = point1.email;
            document.getElementById('time').value = "19:30-19:40";
        }
    }
}
function zoom_p() {
    myMap.setZoom(myMap.getZoom() + 1, { duration: 1000 });
}
function zoom_m() {
    myMap.setZoom(myMap.getZoom() - 1, { duration: 1000 });
}

//----------------------------------------------------live search----------------------------------------------------
var suggest_count = 0;
var input_initial_value = '';

$(window).load(function () {
    // читаем ввод с клавиатуры
    $("#searchfield").keyup(function (I) {
        // определяем какие действия нужно делать при нажатии на клавиатуру
        switch (I.keyCode) {
            // игнорируем нажатия на эти клавишы
            case 13:  // enter
            case 27:  // escape
            case 38:  // стрелка вверх
            case 40:  // стрелка вниз
                break;

            default:
                if ($(this).val().length > 0) {
                    input_initial_value = $(this).val();
                    // перед показом слоя подсказки, его обнуляем
                    $("#search_advice_wrapper").html("").show();
                    suggest_count = 0;
                    for (var i = 0; i < myPoints.length; i++) {
                        var point = myPoints[i];

                        if (point.text.indexOf(input_initial_value) + 1) //если содержит подстроку
                        {
                            $('#search_advice_wrapper').append('<div class="advice_variant">' + point.text + '</div>');
                            suggest_count++;
                        }
                    }
                }
                break;
        }
    });

    //считываем нажатие клавишь, уже после вывода подсказки
    $("#searchfield").keydown(function (I) {
        switch (I.keyCode) {
            // по нажатию клавишь прячем подсказку
            case 13: // enter
            case 27: // escape
                $('#search_advice_wrapper').hide();
                return false;
                break;
        }
    });
    // делаем обработку клика по подсказке
    $('#search_advice_wrapper').on('click', '.advice_variant', function () {
        // ставим текст в input поиска
        $('#searchfield').val($(this).text());
        // прячем слой подсказки
        $('#search_advice_wrapper').fadeOut(350).html('');
        search_map();
    });

    // если кликаем в любом месте сайта, нужно спрятать подсказку
    $('html').click(function () {
        $('#search_advice_wrapper').hide();
    });
    // если кликаем на поле input и есть пункты подсказки, то показываем скрытый слой
    $('#searchfield').click(function (event) {
        if (suggest_count)
            $('#search_advice_wrapper').show();
        event.stopPropagation();
    });
});