<?php
  class Statistics {
    private $conn;
    private $tableName = 'statistics';

    public $id;
    public $firstName;
    public $lastName;
    public $birthCountry;
    public $birthState;
    public $birthCity;
    public $residenceCountry;
    public $residenceState;
    public $residenceCity;
    public $email;
    public $vote;

    public function __construct($db) {
      $this->conn = $db;
    }

    public function readAll() {
      $query = "SELECT * FROM `$this->tableName`;";

      $stmt = $this->conn->prepare($query);

      $stmt->execute();

      return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function create() {
      $query = "INSERT INTO `$this->tableName`(`firstName`, `lastName`, `birthCountry`, `birthState`, `birthCity`, `residenceCountry`, `residenceState`, `residenceCity`, `email`, `vote`) VALUES(:firstName, :lastName, :birthCountry, :birthState, :birthCity, :residenceCountry, :residenceState, :residenceCity, :email, :vote);";

      $stmt = $this->conn->prepare($query);

      $stmt->bindParam(':firstName', $this->firstName);
      $stmt->bindParam(':lastName', $this->lastName);
      $stmt->bindParam(':birthCountry', $this->birthCountry);
      $stmt->bindParam(':birthState', $this->birthState);
      $stmt->bindParam(':birthCity', $this->birthCity);
      $stmt->bindParam(':residenceCountry', $this->residenceCountry);
      $stmt->bindParam(':residenceState', $this->residenceState);
      $stmt->bindParam(':residenceCity', $this->residenceCity);
      $stmt->bindParam(':email', $this->email);
      $stmt->bindParam(':vote', $this->vote);

      if($stmt->execute()) {
        return true;
      }

      return false;
    }
  }
?>