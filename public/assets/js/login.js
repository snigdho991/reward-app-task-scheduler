const loginFormHandler = e => {
  e.preventDefault();

  const loginBtn = $(e.target).find('.login-btn');
  const resMsgContainer = $(e.target).find('.res-msg-container');

  $.ajax({
    url: $(e.target).attr('action'),
    method: $(e.target).attr('method'),
    data: JSON.stringify({
      username: $(e.target).find('#username').val(),
      password: $(e.target).find('#password').val()
    }),
    beforeSend: function() {
      resMsgContainer.addClass('d-none');
      loginBtn.attr('disabled', 'disabled');
    },
    success: function(res) {
      console.log(res);
      location.href = res.redirectUrl;
    },
    error: function(err) {
      console.log(err);
      resMsgContainer.html(`<span class="text-danger">${err.responseJSON.message}</span>`);
    },
    complete: function() {
      loginBtn.removeAttr('disabled');
      resMsgContainer.removeClass('d-none');
    }
  });
}

$('.login-form').on('submit', loginFormHandler);