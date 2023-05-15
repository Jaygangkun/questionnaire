<?php
require_once "PHPMailer/Exception.php";
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;

$siteURL = 'http://localhost:9005';
$siteURL = 'https://lovestory.ai/';

$qaList = json_decode($_POST['qa'], true);

$qaHtml = '';

foreach($qaList as $qa) {
    $question = $qa['question'];
    $type = $qa['type'];
    $answers = $qa['answers'];

    $answerTexts = [];
    foreach($answers as $answer) {
        $answerTexts[] = $answer['text'];
    }

    if ($type == 'image-select') {
        $qaHtml .= '<h3>'.$question.'</h3><img src="'.$siteURL.$answerTexts[0].'">';
    }
    else {
        $qaHtml .= '<h3>'.$question.'</h3><p>'.implode(', ', $answerTexts).'</p>';
    }
}

$to = 'jaygangkun@hotmail.com';

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->Host = 'smtp.fused.com';
$mail->Username = 'contact@lovestory.ai';
$mail->Password = 'JvpvVS6cKiW,';
$mail->Port = 587;

$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->SMTPDebug  = 0;  

$mail->isHTML();

$mail->From = 'contact@lovestory.ai';
$mail->FromName = 'Lovestory';

$mail->Subject = 'Lovestory QA';
$mail->Body    = $qaHtml;
$mail->AddAddress($to);

if(!$mail->Send()) {
    echo json_encode([
        'success' => false,
        'message' => $mail->ErrorInfo
    ]);
    die;
}

echo json_encode([
    'success' => true
]);

?>