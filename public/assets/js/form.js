const getUniversalTutorialAuthToken = () => {
  const EMAIL = 'sourav.cse5.bu@gmail.com';
  const API_URL = 'https://www.universal-tutorial.com/api/getaccesstoken';
  const API_TOKEN = 'gKXtf9noxVuuJ0F5J3sbj0v48KEXRrL99t643QLI4M0h37M1NbuvAmyjeEHJRy3vvnM';

  return new Promise((resolve, reject) => {
    $.ajax({
      url: API_URL,
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "api-token": API_TOKEN,
        "user-email": EMAIL
      },
      success: res => resolve(res),
      error: err => reject(err)
    });
  });
}

const getDataFromUniversalTutorial = (API_URL, AUTH_TOKEN) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: API_URL,
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${AUTH_TOKEN}`,
        "Accept": "application/json"
      },
      success: res => resolve(res),
      error: err => reject(err)
    });
  });
}

const africanCountriesCode = ["DZ","AO","BJ","BW","BF","BI","CM","CV","CF","TD","KM","CG","CD","CI","DJ","EG","GQ","ER","ET","GA","GM","GH","GN","GW","KE","LS","LR","LY","MG","ML","MW","MR","MU","YT","MA","MZ","NA","NE","NG","RE","RW","ST","SN","SC","SL","SO","ZA","SS","SD","SZ","TZ","TG","TN","UG","EH","ZM","ZW"];

const renderCountries = async (selector, isAfrican) => {
  try {
    const authTokenRes = await getUniversalTutorialAuthToken();
    const authToken = authTokenRes['auth_token'];

    const API_URL = 'https://www.universal-tutorial.com/api/countries';
    const countries = await getDataFromUniversalTutorial(API_URL, authToken);

    countries.forEach(country => {
      if(africanCountriesCode.indexOf(country['country_short_name']) == -1 && isAfrican) return;
      $(selector).append(`<option value="${country['country_name']}">${country['country_name']}</option>`);
    });
  } catch (err) {
    console.log(err);
  }
}

const renderStatesAndCities = async e => {
  $(e.target).attr('data-reset-dd-selector').split('|').forEach(selector => $(selector).html('<option value="">Select an option</option>'));
  const apiRoute = $(e.target).attr('data-api-route');
  const targetDdSelector = $(e.target).attr('data-target-dd-selector');
  const value = $(e.target).val();

  try {
    const authTokenRes = await getUniversalTutorialAuthToken();
    const authToken = authTokenRes['auth_token'];

    const API_URL = `https://www.universal-tutorial.com/api/${apiRoute}/${value}`;
    const data = await getDataFromUniversalTutorial(API_URL, authToken);

    data.forEach(dataEach => {
      apiRoute == 'states' ? $(targetDdSelector).append(`<option value="${dataEach.state_name}">${dataEach.state_name}</option>`) : $(targetDdSelector).append(`<option value="${dataEach.city_name}">${dataEach.city_name}</option>`);
    });

    data.length ? $(targetDdSelector).attr('required', '') : $(targetDdSelector).removeAttr('required');
  } catch (err) {
    console.log(err);
  }
}

const formHandler = e => {
  e.preventDefault();

  const submitBtn = $(e.target).find('.submit-btn');
  const resMsgContainer = $(e.target).find('.res-msg-container');

  $.ajax({
    url: $(e.target).attr('action'),
    method: $(e.target).attr('method'),
    data: JSON.stringify({
      firstName: $(e.target).find('#first-name').val(),
      lastName: $(e.target).find('#last-name').val(),
      birthCountry: $(e.target).find('#country-birth').val(),
      birthState: $(e.target).find('#state-birth').val(),
      birthCity: $(e.target).find('#city-birth').val(),
      residenceCountry: $(e.target).find('#country-residence').val(),
      residenceState: $(e.target).find('#state-residence').val(),
      residenceCity: $(e.target).find('#city-residence').val(),
      email: $(e.target).find('#email').val(),
      vote: $(e.target).find('[name="vote"]').val()
    }),
    beforeSend: function() {
      resMsgContainer.addClass('d-none');
      submitBtn.attr('disabled', 'disabled');
    },
    success: function(res) {
      console.log(res);
      resMsgContainer.html(`<span class="text-success">${res.message}</span>`);
    },
    error: function(err) {
      console.log(err);
      resMsgContainer.html(`<span class="text-danger">${err.responseJSON.message}</span>`);
    },
    complete: function() {
      submitBtn.removeAttr('disabled');
      resMsgContainer.removeClass('d-none');
    }
  });
}

renderCountries('#country-birth', true);
renderCountries('#country-residence', false);
$('#country-birth, #state-birth, #country-residence, #state-residence').on('change', renderStatesAndCities);
$('.form').on('submit', formHandler);