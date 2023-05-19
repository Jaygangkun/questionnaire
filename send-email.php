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

        if($answer['subText'] != '') {
            $answerTexts[] = $answer['subText'].":".$answer['text'];    
        }
        else {
            $answerTexts[] = $answer['text'];    
        }
    }

    $qaHtml .= '<h3>'.$question.'</h3><p>'.implode(', ', $answerTexts).'</p>';
}

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->Host = 'mail.lovestory.ai';
$mail->Username = 'noreply@lovestory.ai';
$mail->Password = 'NoReply@43908349055980980345';
$mail->Port = 587;

$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->SMTPDebug  = 0;  

$mail->isHTML();

$mail->From = 'noreply@lovestory.ai';
$mail->FromName = 'Love Story Inc.';

$mail->Subject = 'Lovestory QA';
$mail->Body    = $qaHtml;

$to = 'info@lovestory.ai';
$mail->AddAddress($to);

if(!$mail->Send()) {
    echo json_encode([
        'success' => false,
        'message' => $mail->ErrorInfo
    ]);
    die;
}

if (isset($_POST['user_email']) && $_POST['user_email'] != '') {
    $to = $_POST['user_email'];

    $mail->AddAddress($to);

    if(!$mail->Send()) {
        echo json_encode([
            'success' => false,
            'message' => $mail->ErrorInfo
        ]);
        die;
    }
}



echo json_encode([
    'success' => true
]);

?>