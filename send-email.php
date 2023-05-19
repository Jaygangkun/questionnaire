<?php
require_once "PHPMailer/Exception.php";
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;

$siteURL = 'http://localhost:9005';
$siteURL = 'https://lovestory.ai/';

$qaList = json_decode($_POST['qa'], true);

$qaCompanyHtml = '';
$qaCompanyHtmlQuestion = '';
$qaCompanyHtmlAnser = '';

$qaUserHtml = '';

$qIndex = 1;
foreach($qaList as $qa) {
    $question = $qIndex.". ".$qa['question'];
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

    $qaUserHtml .= '<tr><td>'.$question.'</td><td>'.implode('; ', $answerTexts).'</td></tr>';
    $qaCompanyHtmlQuestion .= '<td>'.$question.'</td>';
    $qaCompanyHtmlAnser .= '<td>'.implode('; ', $answerTexts).'</td>';

    $qIndex ++;
}

if (isset($_POST['user_email']) && $_POST['user_email'] != '') {
    $qaCompanyHtmlQuestion .= '<td>Would you like to receive a copy of these answers? If so, please provide your email address here</td>';
    $qaCompanyHtmlAnser .= '<td>'.$_POST['user_email'].'</td>';
}

$qaUserHtml = '<table border style="border-collapse:collapse">'.$qaUserHtml.'</table>';
$qaCompanyHtml = '<table border style="border-collapse:collapse"><tr>'.$qaCompanyHtmlQuestion.'</tr><tr>'.$qaCompanyHtmlAnser.'</tr></table>';

// echo $qaCompanyHtml; die();

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
$mail->Body    = $qaCompanyHtml;

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

    $mail->Body  = $qaUserHtml;
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