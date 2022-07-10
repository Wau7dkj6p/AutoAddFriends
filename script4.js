var timer = 10000;
var key = 0;
var cycle = 0;
var logs = 1;

// проверка на страницу
if (document.location.href != "https://vk.com/feed") {
  alert("Вы находитесь не на той странице!");
  window.location = "https://vk.com/feed";
} else {
  
  var result = confirm('Зациклить?\nДа - OK\nНет - Отмена')
   if (result === true) {cycle = 1;counter_need = 2;} else {cycle = 0;
  
var counter_need = prompt('Сколько постов пройти?');
if (counter_need.replace (/\d/g, '').length) alert ('вы ввели не только цифры');}
  
  (async () => {
    for (var i = 0; i < counter_need; i++) {
      if (cycle = 1) {counter_need = counter_need + 1}
      
// Пробуем поставить лайк
document.getElementsByClassName("PostBottomAction PostBottomAction--withBg PostButtonReactions PostButtonReactions--post")[key].click();window.scrollBy(0, 1100);

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
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("лайк номер " + key + " поставлен.")};await delay(15000);key = key + 1;} else {alert('Вы достигли лимита!')}
}

else {console.log('Каптча найдена');
     
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')}delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("лайк номер " + key + " поставлен.")};await delay(15000);key = key + 1;} else {alert('Вы достигли лимита!')}

}
else {console.log('Каптча найдена');

if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')}delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("лайк номер " + key + " поставлен.")};await delay(15000);key = key + 1;} else {alert('Вы достигли лимита!')}

}
else {console.log('Каптча найдена');alert('Не удалось решить капчу, завершение работы!');await delay();window.location.reload();}
      } 
    }     
  }
      
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет');if (logs = 1) {console.log("лайк номер " + key + " поставлен.")};await delay(15000);key = key + 1;} else {alert('Вы достигли лимита!')}      
      
}
    console.log("Активность в ленте увеличена!\n" + "Лайков было поставлено: " + key);
    alert("Активность в ленте увеличена!\n" + "Лайков было поставлено: " + key);
  })();

  function delay() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, timer);
    });
  }
}