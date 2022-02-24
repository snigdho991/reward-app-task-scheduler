<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <title>Form</title>
</head>
<body class="form-body bg-light">
  <div class="form-container container py-5">
    <form action="api/user/create-statistics.php" method="POST" class="form mx-auto bg-white p-4">
      <div class="row">
        <div class="col-6 form-group">
          <label for="first-name">First Name</label>
          <input type="text" class="first-name form-control bg-white" id="first-name" required>
        </div>
        <div class="col-6 form-group">
          <label for="last-name">Last Name</label>
          <input type="text" class="last-name form-control bg-white" id="last-name" required>
        </div>
      </div>
      <div class="form-group">
        <label for="country-birth">Country of Birth</label>
        <select type="text" class="country-birth form-control bg-white" id="country-birth" data-reset-dd-selector="#state-birth|#city-birth" data-api-route="states" data-target-dd-selector="#state-birth" required>
          <option value="">Select an option</option>
        </select>
      </div>
      <div class="form-group">
        <label for="state-birth">State of Birth</label>
        <select type="text" class="state-birth form-control bg-white" id="state-birth" data-reset-dd-selector="#city-birth" data-api-route="cities" data-target-dd-selector="#city-birth" required>
          <option value="">Select an option</option>
        </select>
      </div>
      <div class="form-group">
        <label for="city-birth">City of Birth</label>
        <select type="text" class="city-birth form-control bg-white" id="city-birth" required>
          <option value="">Select an option</option>
        </select>
      </div>
      <div class="form-group">
        <label for="country-residence">Country of Residence</label>
        <select type="text" class="country-residence form-control bg-white" id="country-residence" data-reset-dd-selector="#state-residence|#city-residence" data-api-route="states" data-target-dd-selector="#state-residence" required>
          <option value="">Select an option</option>
        </select>
      </div>
      <div class="form-group">
        <label for="state-residence">State of Residence</label>
        <select type="text" class="state-residence form-control bg-white" id="state-residence" data-reset-dd-selector="#city-residence" data-api-route="cities" data-target-dd-selector="#city-residence" required>
          <option value="">Select an option</option>
        </select>
      </div>
      <div class="form-group">
        <label for="city-residence">City of Residence</label>
        <select type="text" class="city-residence form-control bg-white" id="city-residence" required>
          <option value="">Select an option</option>
        </select>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="email form-control bg-white" id="email">
      </div>
      <div class="row">
        <div class="col-12">
          <label>Can we get your vote for our C.P.P?</label>
        </div>
        <div class="col-3 form-group">
          <input type="radio" name="vote" class="mr-2" id="vote-yes" value="Yes">
          <label for="vote-yes">Yes</label>
        </div>
        <div class="col-3 form-group">
          <input type="radio" name="vote" class="mr-2" id="vote-no" value="No">
          <label for="vote-no">No</label>
        </div>
      </div>
      <div class="form-group">
        <button class="submit-btn btn btn-block btn-primary">Submit</button>
      </div>
      <div class="res-msg-container d-none text-center">
        <!-- ...  -->
      </div>
    </form>
  </div>

  <script src="./assets/js/jquery-min.js"></script>
  <script src="./assets/js/form.js"></script>
</body>
</html>