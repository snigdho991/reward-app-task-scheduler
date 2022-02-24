<?php
  header('Content-type: application/json');

  session_start();
  include_once '../../config/Constants.php';
  include_once '../../config/Database.php';
  include_once '../../models/Statistics.php';

  $data = json_decode(file_get_contents("php://input"));

  if(!isset($_SESSION['adminUsername']) || !isset($_SESSION['adminPassword'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Something Went Wrong. Try again, please.']);
    exit();
  }

  $database = new Database();
  $db = $database->connect();

  $statistics = new Statistics($db);

  http_response_code(200);
  echo json_encode(['data' => $statistics->readAll()]);
?>