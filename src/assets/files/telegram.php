<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее
     YYYYYYYYY - id чата куда отправляется сообщение, обязательно отрицательный*/

$token = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$chat_id = "-YYYYYYYYY";

$arr = array(
	'Имя пользователя: ' => $username,
	'Телефон: ' => urlencode("+") . mb_substr($usertel, 1),
	'Email' => $useremail,
	'Тип заявки:' => $typeCourse
);

foreach ($arr as $key => $value) {
	$txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
	echo "Send to Telegram";
} else {
	echo "Error";
}
