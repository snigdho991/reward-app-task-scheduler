<?php
  session_start();
  include_once '../config/Constants.php';

  if(!isset($_SESSION['adminUsername']) || !isset($_SESSION['adminPassword'])) {
    header('location: ' . ROOT . '/admin/login.php');
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="../assets/css/datatables.min.css">
  <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
  <title>Dashboard</title>
</head>
<body class="admin-login-body">
  <div class="login-container container py-5">
    <table class="table stat-table">
      <thead>
        <tr>
          <td>ID</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Birth Country</td>
          <td>Birth State</td>
          <td>Birth City</td>
          <td>Residence Country</td>
          <td>Residence State</td>
          <td>Residence City</td>
          <td>Email</td>
          <td>Vote</td>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  </div>

  <script src="../assets/js/jquery-min.js"></script>
  <script src="../assets/js/datatables.min.js"></script>
  <script src="../assets/js/dashboard.js"></script>
</body>
</html>