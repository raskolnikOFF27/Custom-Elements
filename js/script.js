// select-script

const element = document.querySelector('.js-choice');

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ""
});

// map-script

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("myMap1", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [48.872185073737896,2.354223999999991],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 17
      });
    var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {zoom: 17}, {
    iconLayout: 'default#image',
    iconImageHref: 'Subtract.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
});

    myMap.geoObjects.add(myPlacemark);
  }


// form-script
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [{
        rule: 'required',
        value: 0,
        errorMessage: "Вы не ввели имя"
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Недостаточное количество символов",
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: "Вы ввели больше, чем положено"
      }
    ])

    .addField('.mail', [{
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Вы некорректно ввели email',
      }
    ])

    .addField('.tel', [
      {
        rule: "required",
        errorMessage: "Вы не ввели телефон",
      },
      {
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Недостаточное количество символов в строке',
    }
  ]);
})

// tooltip-script

tippy('[data-tippy-content]');
