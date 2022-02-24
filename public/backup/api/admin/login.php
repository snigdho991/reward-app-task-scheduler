<?php
  header('Content-type: application/json');

  session_start();
  include_once '../../config/Constants.php';

  $data = json_decode(file_get_contents("php://input"));

  if(!isset($data->username) || !isset($data->password)) {
    http_response_code(400);
    echo json_encode(['message' => 'Something Went Wrong. Try again, please.']);
    exit();
  }

  $username = strtolower(trim($data->username));
  $password = strtolower(trim($data->password));

  if($username != ADMIN_USERNAME || $password != ADMIN_PASSWORD) {
    http_response_code(404);
    echo json_encode(['message' => 'Invalid username or password']);
    exit();
  }

  $_SESSION['adminUsername'] = ADMIN_USERNAME; 
  $_SESSION['adminPassword'] = ADMIN_PASSWORD;
   
  http_response_code(200);
  echo json_encode(['redirectUrl' => ROOT . '/admin']);
?>