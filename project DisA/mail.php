 <?php
// if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'a21ne@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Сайт дизайнера Анны Лариной-Обратный звонок'; //Загаловок сообщения
        $message = '
        <html>
        <head>
            <title>'.$subject.'</title>
        </head>
        <body>
            <p>Имя: '.$_POST['name'].'</p>
            <p>Телефон: '.$_POST['phone'].'</p>
            <p>E-mail: '.$_POST['email'].'</p>
            <p>Cообщение: '.$_POST['text'].'</p>
        </body>
        </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <Сайт дизайнера Анны>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    // }
?>