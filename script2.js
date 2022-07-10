var timer = 10000;
var friends = 0;
var fails = 0;
var cycle = 0;
var logs = 1;

// проверка на страницу
if (document.location.href != "https://vk.com/friends?section=all_requests") {
  alert("Вы находитесь не на той странице!");
  window.location = "https://vk.com/friends?section=all_requests";
} else {
    
    var speed = confirm('Включить быстрый режим?\nТребуется расширение для распознавания капчи.\nПодробнее:');
    if (speed === true) {timer = 1000;} else {timer = 10000;}
  
    var result = confirm('Зациклить?\nДа - OK\nНет - Отмена')
   if (result === true) {cycle = 1;counter_need = 2;} else {cycle = 0;
   var counter_need = prompt('Сколько людей добавить?');
   if (counter_need.replace (/\d/g, '').length) alert ('вы ввели не только цифры');                                        
  }
var result = confirm('Включить логирование?\nДа - OK\nНет - Отмена')
   if (result === true) {logs = 1} else {logs = 0}

  (async () => {
    for (var i = 0; i < counter_need; i++) {
      // основной код
      if (cycle = 1) {counter_need = counter_need + 1}
      
    if (logs = 1) {console.log("Попытка добавить в друзья");}
      try {document.getElementsByClassName("FlatButton__content")[3].click(),25000;friends = friends + 1;}
      catch (err) {
        
        if (logs = 1) {console.log("Обновляем страницу");}
        document.getElementsByClassName("ui_rmenu_item_label")[10].click();
        if (logs = 1) {console.log("Пробуем ещё раз");}
        document.getElementsByClassName("ui_rmenu_item_label")[9].click();
        await delay();if (speed = true) {await delay(2500);} else {await delay(2500000);}
      }
      
           
// Проверка на лимиты и капчу      
if (logs = 1) {console.log('Проверка на капчу')}delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("Вы успешно добавили в друзья");window.scrollBy(0, 100);};friends = friends + 1;} else {alert('Вы достигли лимита!')}
      }
      else {

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("Вы успешно добавили в друзья");window.scrollBy(0, 100);};friends = friends + 1;} else {alert('Вы достигли лимита!')}
  
  // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 1')}delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("Вы успешно добавили в друзья");window.scrollBy(0, 100);};friends = friends + 1;} else {alert('Вы достигли лимита!')}
  }
  else {console.log('Капча найдена');
                                                            
// Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')}delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
          
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("Вы успешно добавили в друзья");window.scrollBy(0, 100);};friends = friends + 1} else {alert('Вы достигли лимита!')}
  }
        else {console.log('Капча найдена');
                                                                   
    // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')}delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                    
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("Вы успешно добавили в друзья");window.scrollBy(0, 100);};friends = friends + 1;} else {alert('Вы достигли лимита!')}
  }
    else {console.log('Капча найдена')}
                                                                    
     }                                                                                                                               
   }
}
      

 
                            
           

      await delay();
    }
  })();

  function delay() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, timer);
    });
  }
}