<?php
  header('Content-type: application/json');

  session_start();
  include_once '../../config/Constants.php';
  include_once '../../config/Database.php';
  include_once '../../models/Statistics.php';

  $data = json_decode(file_get_contents("php://input"));

  if(!isset($data->firstName) || !isset($data->lastName) || !isset($data->birthCountry) || !isset($data->birthState) || !isset($data->birthCity) || !isset($data->residenceCountry) || !isset($data->residenceState) || !isset($data->residenceCity) || !isset($data->email) || !isset($data->vote)) {
    http_response_code(400);
    echo json_encode(['message' => 'Something Went Wrong. Try again, please.']);
    exit();
  }

  $database = new Database();
  $db = $database->connect();

  $statistics = new Statistics($db);

  $statistics->firstName = trim($data->firstName);
  $statistics->lastName = trim($data->lastName);
  $statistics->birthCountry = trim($data->birthCountry);
  $statistics->birthState = trim($data->birthState);
  $statistics->birthCity = trim($data->birthCity);
  $statistics->residenceCountry = trim($data->residenceCountry);
  $statistics->residenceState = trim($data->residenceState);
  $statistics->residenceCity = trim($data->residenceCity);
  $statistics->email = trim($data->email);
  $statistics->vote = trim($data->vote);

  if(!$statistics->create()) {
    http_response_code(500);
    echo json_encode(['message' => 'Server error']);
    exit();
  }

  http_response_code(201);
  echo json_encode(['message' => 'Thanks for giving your information']);
?>