var timer = 10000;
var key = 0;
var cycle = 0;
var logs = 1;

// проверка на страницу
if (document.location.href != "https://vk.com/groups?act=recommendations") {
  alert("Вы находитесь не на той странице!");
  window.location = "https://vk.com/groups?act=recommendations";
} else {
  
  var result = confirm('Включить быстрый режим?\nТребуется расширение для распознавания капчи.\nПодробнее:');
  if (result === true) {timer = 1000;} else {timer = 10000;}
  
  var result = confirm('Зациклить?\nДа - OK\nНет - Отмена')
   if (result === true) {cycle = 1;counter_need = 2;} else {cycle = 0;
   var counter_need = prompt('Сколько групп добавить?');
   if (counter_need.replace (/\d/g, '').length) alert ('вы ввели не только цифры');                                       
  }

var result = confirm('Включить вывод логов в консоль?\nОК - Да\nОтмена - Нет');
  if (result === true) {timer = 1000;} else {timer = 10000;}
  
  (async () => {
    for (var i = 0; i < counter_need; i++) {
      if (cycle = 1) {counter_need = counter_need + 1}
      
      if (logs = 1) {console.log('Пробуем дбавить группу')}
      try {document.getElementsByClassName("FlatButton FlatButton--primary FlatButton--size-s FlatButton--wide search_sub_button")[key].click();await delay(10000);}
      catch (err) {alert('Группы закончились!');await delay();window.location.reload();}
      
// Проверка на лимиты и капчу      
if (logs = 1) {console.log('Проверка на капчу')}delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена')} else {

      
// Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 1')}delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("группа номер " + key + " добавлена.")};await delay(15000);key = key + 1;} else {alert('Вы достигли лимита!')}
}

else {console.log('Каптча найдена');
     
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')}delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("группа номер " + key + " добавлена.")};await delay(15000);key = key + 1;} else {alert('Вы достигли лимита!')}

}
else {console.log('Каптча найдена');

if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')}delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("группа номер " + key + " добавлена.")};await delay(15000);key = key + 1;} else {alert('Вы достигли лимита!')}

}
else {console.log('Каптча найдена');alert('Не удалось решить капчу, завершение работы!');await delay();window.location.reload();}
      } 
    }     
  }
      // Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("группа номер " + key + " добавлена.")};await delay(15000);key = key + 1;} else {alert('Вы достигли лимита!')} 
      
 
      window.scrollBy(0, 100);await delay();
    }
    console.log("Зявки были успешно поданы! Всего заявок было подано" + key);
    alert("Зявки были успешно поданы! Всего заявок было подано" + key);
  })();

  function delay() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, timer);
    });
  }
}