var timer = 10000; // скорость
var friends = 0;
var errors = 0;
var posts = 0;
var photos = 0;
var fails = 0;
var errors = 0;
var logs = 1;
var cycle = 0;
var counter_need = 2;

// проверка на стартовую страницу
if (document.location.href != "https://vk.com/friends?act=find") {
  alert("Вы находитесь не на той странице!");
  window.location = "https://vk.com/friends?act=find";
} else {
  
  var speed = confirm('Включить быстрый режим?\nТребуется расширение для распознавания капчи.\nГде скачать можно узнать в нажав на кнопку подробнее в расширении');
    if (speed === true) {timer = 1200;} else {timer = 10000;}
  
  var result = confirm('Зациклить?\nДа - OK\nНет - Отмена')
   if (result === true) {cycle = 1;counter_need = 1000;} else {cycle = 0;
   var counter_need = prompt('Сколько людей добавить?');
   if (counter_need.replace (/\d/g, '').length) alert ('вы ввели не только цифры');}                                    
                                                           
                                        
  
  var result = confirm('Включить логирование?\nДа - OK\nНет - Отмена')
   if (result === true) {logs = 1} else {logs = 0}
  
  (async () => {
    for (var i = 0; i < counter_need; i++) {
      
	if (speed = true) {await delay(50000)}
        // Добавить первую страницу в друзья
        if ((logs = 1)) {console.log("Попытка добавить в друзья");}
        document.getElementsByClassName("friends_find_user_add")[0].click();if (speed = true) {await delay(50000)};friends = friends + 1;
          
// Проверка на лимиты и капчу      
if (logs = 1) {console.log('Проверка на капчу')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {
  
  alert('Вы достигли лимита!' + stats)}
      }
      else {

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  
  // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 1')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
  else {console.log('Капча найдена');
                                                            
// Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
          
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
        else {console.log('Капча найдена');
                                                                   
    // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                    
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
    else {console.log('Капча найдена')}
                                                                    
     }                                                                                                                               
   }
}
      if (speed = true) {await delay(50000)}
      // Перейти на профиль первой страницы
      try { if ((logs = 1)) { console.log("Попытка перейти в профиль");}
        document.getElementsByClassName("friends_find_user_img")[0].click();await delay(15000);}
      catch (err) {alert("Ошибка: Не удалось перейти в профиль" + stats);return;}

      
      // Проверка на закрытую страницу
      if (speed = true) {await delay(100000)}
      var close = document.getElementsByClassName("page_block profile_closed_wall_dummy")[0];
      if (close === undefined) {console.log("Страница открыта");
                                
                                
        if ((logs = 1)) {console.log("Пробуем открыть фотографию");}
        try {document.getElementsByClassName("page_avatar_img")[0].click();if (speed = true) {await delay(250000)} else {await delay(10000);}} catch (err) {console.log('Не удалось открыть фотографию');errors = errors + 1;}
        if ((logs = 1)) {console.log("Пробуем поставить лайк на фотографию");}
        try {document.getElementsByClassName("like_btn like _like")[0].click();if (speed = true) {await delay(200000)} else {await delay(10000)};photos = photos + 1;} catch (err) {console.log('Не удалось поставить лайк на фотографию');errors = errors + 1;}
                                
        // Проверка на лимиты и капчу      
if (logs = 1) {console.log('Проверка на капчу')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
      }
      else {

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  
  // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 1')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
  else {console.log('Капча найдена');
                                                            
// Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
          
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
        else {console.log('Капча найдена');
                                                                   
    // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                    
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
    else {console.log('Капча найдена')}
                                                                    
     }                                                                                                                               
   }
}

 

        if ((logs = 1)) {console.log("Пробуем закрыть фотографию");}
        try {document.getElementsByClassName("pv_close_btn")[0].click();await delay(10000);} catch (err) {console.log('Не удалось закрыть фотографию');errors = errors + 1;}

        if (speed = true) {await delay(20000)}                        
        // Проверка на фотографии
        var photo = document.getElementsByClassName("page_square_photo crisp_image")[1];
        if (photo === undefined) {console.log("На странице нет второй фотографии");fails = fails + 3;}
        else { console.log("На странице есть вторая фотография");

          if ((logs = 1)) {console.log("Пробуем открыть вторую фотографию");} try {document.getElementsByClassName("page_square_photo crisp_image")[1].click();if (speed = true) {await delay(50000)} else {await delay(20000)};photos = photos + 1;} catch (err) {
            console.log("Не удалось открыть вторую фотографию");fails = fails + 1;}
          if ((logs = 1)) {console.log("Пробуем поставить лайк на фотографию");}
          try {if (speed = true) {await delay(20000)};document.getElementsByClassName("like_btn like _like")[0].click();await delay(10000);photos = photos + 1;
               
               // Проверка на лимиты и капчу      
if (logs = 1) {console.log('Проверка на капчу')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
      }
      else {

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  
  // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 1')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
  else {console.log('Капча найдена');
                                                            
// Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
          
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
        else {console.log('Капча найдена');
                                                                   
    // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                    
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
    else {console.log('Капча найдена')}
                                                                    
     }                                                                                                                               
   }
}
               
               
      
               
          } catch (err) {console.log("Не удалось поставить лайк");fails = fails + 1;}
          if ((logs = 1)) {console.log("Пробуем закрыть фотографию");}
          try {document.getElementsByClassName("pv_close_btn")[0].click();await delay(10000);photos = photos + 1;
          } catch (err) {console.log("Не удалось закрыть фотографию");fails = fails + 1;}
	if (speed = true) {await delay(20000)}
          if ((logs = 1)) {console.log("Пробуем открыть третью фотографию");}
          try {document.getElementsByClassName("page_square_photo crisp_image")[2].click();await delay(10000);photos = photos + 1;
          } catch (err) {console.log("Не удалось открыть третью фотографию");fails = fails + 1;}
          if ((logs = 1)) {console.log("Пробуем поставить лайк на фотографию");}
              
          try {if (speed = true) {await delay(20000)};document.getElementsByClassName("like_btn like _like")[0].click();await delay(10000);photos = photos + 1;
               
               // Проверка на лимиты и капчу      
if (logs = 1) {console.log('Проверка на капчу')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
      }
      else {

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  
  // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 1')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
  else {console.log('Капча найдена');
                                                            
// Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
          
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
        else {console.log('Капча найдена');
                                                                   
    // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                    
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
    else {console.log('Капча найдена')}
                                                                    
     }                                                                                                                               
   }
}
              
               
      
               
          } catch (err) {console.log("Не удалось поставить лайк");fails = fails + 1;}
          if ((logs = 1)) {console.log("Пробуем закрыть фотографию");}
          try {document.getElementsByClassName("pv_close_btn")[0].click();await delay(10000);photos = photos + 1;
          } catch (err) {console.log("Не удалось закрыть фотографию");fails = fails + 1;}
	if (speed = true) {await delay(20000)}
          if ((logs = 1)) {console.log("Пробуем открыть четвёртую фотографию");}
          try {document.getElementsByClassName("page_square_photo crisp_image")[3].click();await delay(10000);photos = photos + 1;
          } catch (err) {console.log("Не удалось открыть фотографию");fails = fails + 1;}
          if ((logs = 1)) {console.log("Пробуем поставить лайк на фотографию");}
          try {if (speed = true) {await delay(20000)};document.getElementsByClassName("like_btn like _like")[0].click();await delay(10000);photos = photos + 1;
               
               // Проверка на лимиты и капчу      
if (logs = 1) {console.log('Проверка на капчу')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
      }
      else {

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  
  // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 1')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
  else {console.log('Капча найдена');
                                                            
// Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
          
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
        else {console.log('Капча найдена');
                                                                   
    // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                    
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
    else {console.log('Капча найдена')}
                                                                    
     }                                                                                                                               
   }
}
               
               
      
               
          } catch (err) {console.log("Не удалось поставить лайк");fails = fails + 1;}
          if ((logs = 1)) {console.log("Пробуем закрыть фотографию");}
          try {document.getElementsByClassName("pv_close_btn")[0].click();await delay(10000);photos = photos + 1;
          } catch (err) {console.log("Не удалось закрыть фотографию");fails = fails + 1;}
        }

        // Проверка на посты
        var close = document.getElementsByClassName("wall_text")[0];
        if (close === undefined) {console.log("На странице нет первого поста");fails = fails + 4;
          console.log("Уходим со страницы");if (speed = true) {await delay(20000)}
          window.history.go(-1);
          await delay();
                                  
        } else {console.log("На странице есть первый пост");}

        if ((logs = 1)) {console.log("Пробуем лайкнуть первый пост");}
        try {document.getElementsByClassName("PostButtonReactions__icon ")[0].click();await delay(10000);window.scrollBy(0, 500);posts = posts + 1;
             
             // Проверка на лимиты и капчу      
if (logs = 1) {console.log('Проверка на капчу')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
      }
      else {

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  
  // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 1')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
  else {console.log('Капча найдена');
                                                            
// Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
          
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
        else {console.log('Капча найдена');
                                                                   
    // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                    
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
    else {console.log('Капча найдена')}
                                                                    
     }                                                                                                                               
   }
}
             
             
      
             
        } catch (err) {console.log("Не удалось лайкнуть первый пост");fails = fails + 1;}
        if ((logs = 1)) {console.log("Пробуем лайкнуть второй пост");}
        try {document.getElementsByClassName("PostButtonReactions__icon ")[1].click();await delay(10000);window.scrollBy(0, 500);posts = posts + 1;
             
             // Проверка на лимиты и капчу      
if (logs = 1) {console.log('Проверка на капчу')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
      }
      else {

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  
  // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 1')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
  else {console.log('Капча найдена');
                                                            
// Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
          
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
        else {console.log('Капча найдена');
                                                                   
    // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                    
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
    else {console.log('Капча найдена')}
                                                                    
     }                                                                                                                               
   }
}
             
      
             
        } catch (err) {console.log("Не удалось лайкнуть второй пост");fails = fails + 1;}
        if ((logs = 1)) {console.log("Пробуем лайкнуть третий пост");}
        try {document.getElementsByClassName("PostButtonReactions__icon ")[2].click();await delay(10000);window.scrollBy(0, 500);posts = posts + 1;
             
             // Проверка на лимиты и капчу      
if (logs = 1) {console.log('Проверка на капчу')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
      }
      else {

// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  
  // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 1')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                           
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
  else {console.log('Капча найдена');
                                                            
// Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 2')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
          
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
        else {console.log('Капча найдена');
                                                                   
    // Проверка на каптчу
if (logs = 1) {console.log('Пробуем решить каптчу. Попытка 3')};delay(2000);
var captcha = document.getElementsByClassName('captcha')[0];
if (captcha === undefined) {console.log('Капча не найдена');
                    
// Проверка на лимит                    
var error = document.getElementsByClassName("box_layout")[0];
if (error === undefined) {console.log('Лимита нет')} else {alert('Вы достигли лимита!')}
  }
    else {console.log('Капча найдена')}
                                                                    
     }                                                                                                                               
   }
}
             
             
      
             
        } catch (err) {console.log("Не удалось лайкнуть третий пост");fails = fails + 1;}
        console.log("Уходим со страницы");if (speed = true) {await delay(20000)}
        window.history.go(-1);
        await delay();
                                
      } else {console.log("Страница закрыта");fails = fails + 7;
        console.log("Уходим со страницы");if (speed = true) {await delay(20000)}
        window.history.go(-1);
        await delay();
      }
      //конец цыкла
    }
    var likes = photos + posts;
    var stats = "\nВсего было добавлено друзей: " + friends + "\nКолличество лайкнутых фотографий: " + photos + "\nКолличество лайкнутых постов: " + posts + "\nВсего было поставлено лайков: " + likes + "\nКолличество неудачных попыток:  " + fails;
    alert("Заявки были успешно поданы! Статистика:\n" + stats);
    console.log(stats);
  })();

  function delay() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, timer);
    });
  }
}