<div class="col-lg-7 col-md-12 col-xs-12">
    <div class="container-form wow fadeInLeft" data-wow-delay="0.2s">
        <div class="form-wrapper">
            @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif
            @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
            @endif
            <!-- error -->
            @if (session('error'))
            <div class="alert alert-danger">
                {{ session('error') }}
            </div>
            @endif
            <form method="POST" action="{{ route('data.save') }}">
                @csrf
                <div class="row">
                    <div class="col-md-6 form-line">
                        <div class="form-group">
                            <input id="first_name" type="text" class="form-control @error('first_name') is-invalid @enderror" required name="first_name" value="{{ old('first_name') }}" autocomplete="first_name" placeholder="First Name">
                            @error('first_name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="col-md-6 form-line">
                        <div class="form-group">
                            <input id="last_name" type="text" class="form-control @error('last_name') is-invalid @enderror" required name="last_name" value="{{ old('last_name') }}" autocomplete="last_name" placeholder="Last Name">
                            @error('last_name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="col-md-6 form-line">
                        <div class="form-group">
                            <select id="country_of_birth" name="country_of_birth" class="form-control select2">
                                <option selected value="">Country of Birth</option>
                                @foreach ($af_countries as $country)
                                <option value="{{$country->id}}">
                                    {{$country->name}}
                                </option>
                                @endforeach
                            </select>
                            @error('country_of_birth')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="col-md-6 form-line">
                        <div class="form-group">
                            <select name="country_of_residence" class="select2 form-control" id="register-country">
                                <option selected value="">Country of Residence</option>
                                @foreach ($countries as $country)
                                <option value="{{$country->id}}">
                                    {{$country->name}}
                                </option>
                                @endforeach
                            </select>

                            @error('country_of_residence')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="col-md-6 form-line">
                        <div class="form-group">
                            <select id="state-dropdown" name="region_state" class="form-control form-control select2">

                            </select>

                            @error('region_state')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                   
                    <div class="col-md-6 form-line">
                        <div class="form-group">
                            <input id="city_of_residenc" type="text" required class="form-control @error('city_of_residence') is-invalid @enderror" required name="city_of_residence" value="{{ old('city_of_residence') }}" autocomplete="city_of_residence" placeholder="City of Residence">
                            @error('city_of_residence')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="col-md-12 form-line">
                        <div class="form-group">
                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="Email" autocomplete="email">

                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <div class="col-md-12 form-line">
                        <label for="last_name" class="form-label">Can we count on you for our CPP in your country?</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="can_we_count_cpp_in_your_country" id="inlineRadio1" value="yes" checked="">
                            <label class="form-check-label" for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="can_we_count_cpp_in_your_country" id="inlineRadio2" value="no">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>

                    </div>
                    <div class="col-md-12">
                        <!-- <div class="form-group">
                            <textarea class="form-control" rows="4" id="message" name="message" required data-error="Write your message"></textarea>
                        </div> -->
                        <div class="form-submit">
                            <button type="submit" class="btn btn-common" id="form-submit">
                                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                Send Us Now
                            </button>
                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>