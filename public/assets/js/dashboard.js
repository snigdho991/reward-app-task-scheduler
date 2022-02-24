$.ajax({
  url: '../api/admin/read-stats.php',
  method: 'GET',
  success: function(res) {
    res.data.forEach(row => {
      $('.stat-table > tbody').append(`<tr>
        <td>${row.id}</td>
        <td>${row.firstName}</td>
        <td>${row.lastName}</td>
        <td>${row.birthCountry}</td>
        <td>${row.birthState}</td>
        <td>${row.birthCity}</td>
        <td>${row.residenceCountry}</td>
        <td>${row.residenceState}</td>
        <td>${row.residenceCity}</td>
        <td>${row.email}</td>
        <td>${row.vote}</td>
      </tr>`);
    });

    $('.stat-table').DataTable();
  },
  error: function(err) {
    console.log(err);
  }
});