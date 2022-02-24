<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
  <title>Login</title>
</head>
<body class="admin-login-body bg-light">
  <div class="login-container container py-5">
    <form action="../api/admin/login.php" method="POST" class="login-form mx-auto bg-white p-4">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="username form-control bg-white" id="username" required>
      </div>
      <div class="form-group">
        <label for="last-name">Password</label>
        <input type="password" class="password form-control bg-white" id="password" required>
      </div>
      <div class="form-group">
        <button class="login-btn btn btn-block btn-primary">Login</button>
      </div>
      <div class="res-msg-container d-none text-center">
        <!-- ...  -->
      </div>
    </form>
  </div>

  <script src="../assets/js/jquery-min.js"></script>
  <script src="../assets/js/login.js"></script>
</body>
</html>