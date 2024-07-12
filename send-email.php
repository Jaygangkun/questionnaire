<?php
require_once "PHPMailer/Exception.php";
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;

$siteURL = 'http://localhost:9005';
$siteURL = 'https://questionnaire.lovestory.ai/';

function sendEmail($to, $body) {
    $mail = new PHPMailer();

    $mail->IsSMTP();
    $mail->Host = 'smtp.protonmail.ch';
    $mail->Username = 'noreply@lovestory.ai';
    $mail->Password = 'W1ZEHPT1BBTPPW3X';
    $mail->Port = 587;
    
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPDebug  = 0;  
    
    $mail->isHTML();
    
    $mail->From = 'noreply@lovestory.ai';
    $mail->FromName = 'Love Story Inc.';
    
    $mail->Subject = 'Lovestory QA';
    $mail->Body    = $body;
    
    $mail->AddAddress($to);
    
    if(!$mail->Send()) {
        return [
            'success' => false,
            'message' => $mail->ErrorInfo
        ];
    }
    
    return [
        'success' => true
    ];

}
$qaList = json_decode($_POST['qa'], true);

$qaCompanyHtml = '';
$qaCompanyHtmlQuestion = '';
$qaCompanyHtmlAnser = '';

$qaUserHtml = '';

$qIndex = 1;
foreach($qaList as $qa) {
    $question = $qIndex.". ".$qa['question'];
    $questionEmail = $qIndex.". ".$qa['questionEmail'];
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

    if ($qa['visible']) {
        $qaUserHtml .= '<tr><td>'.$questionEmail.'</td><td>'.implode('; ', $answerTexts).'</td></tr>';
        $qIndex ++;
    }
    else {
        $answerTexts = [];
    }

    $qaCompanyHtmlQuestion .= '<td>'.$qa['webQuestion'].'</td>';
    $qaCompanyHtmlAnser .= '<td>'.implode('; ', $answerTexts).'</td>';
}

if (isset($_POST['user_email']) && $_POST['user_email'] != '') {
    $qaCompanyHtmlQuestion .= '<td>Would you like to receive a copy of these answers? If so, please provide your email address here</td>';
    $qaCompanyHtmlAnser .= '<td>'.$_POST['user_email'].'</td>';
}

$qaUserHtml = '<table border style="border-collapse:collapse">'.$qaUserHtml.'</table>';
$qaCompanyHtml = '<table border style="border-collapse:collapse"><tr>'.$qaCompanyHtmlQuestion.'</tr><tr>'.$qaCompanyHtmlAnser.'</tr></table>';

// echo $qaUserHtml; die();

$ret = sendEmail('noreply@lovestory.ai', $qaCompanyHtml);

if ($ret['success']) {

    if (isset($_POST['user_email']) && $_POST['user_email'] != '') {    
        $ret = sendEmail($_POST['user_email'], $qaUserHtml);
    }    
}

echo json_encode($ret);

?>