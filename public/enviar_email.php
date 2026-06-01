<?php
// Script para receber o POST do React e enviar email nativamente na HostGator
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Apenas aceita POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Método não permitido"]);
    exit;
}

// Pega os dados do JSON enviado pelo Next.js
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$nome = $data['nome'] ?? '';
$email = $data['email'] ?? '';
$mensagem = $data['mensagem'] ?? '';

if (empty($nome) || empty($email) || empty($mensagem)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Preencha todos os campos"]);
    exit;
}

// Configurações do E-mail
$to = "contato@marcello.dantascorreia.com.br"; // Substitua pelo seu email da HostGator (ou o que desejar)
$subject = "Novo Contato via Portfólio - " . $nome;

$body = "Você recebeu uma nova mensagem do site:\n\n";
$body .= "Nome: " . $nome . "\n";
$body .= "E-mail: " . $email . "\n";
$body .= "Mensagem:\n" . $mensagem . "\n";

// Cabeçalhos (Headers) para o PHP mail()
// Como estamos na HostGator, o From DEVE ser um email do seu domínio para não cair no spam
$headers = "From: site@dantascorreia.com.br\r\n"; 
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Tenta enviar o email
if(mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Falha ao enviar e-mail"]);
}
?>
