<?
$name = $_POST[Nama];
$email = $_POST[Email];
$subject = $_POST[Keterangan];
$message = $_POST[Pesan];

$mailheader = "from:".$name. "<" .$email. ">\r\n";

$recipient = "kelvincihuy13@gmail.com"

mail($recipient, $subject, $message, $mailheader )

?>