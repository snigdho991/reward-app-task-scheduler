@extends('layouts/contentLayoutMaster')

@section('title', 'User Data')

@section('vendor-style')
{{-- vendor css files --}}
<link rel="stylesheet" href="{{ asset(mix('vendors/css/tables/datatable/dataTables.bootstrap5.min.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/tables/datatable/responsive.bootstrap5.min.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/tables/datatable/buttons.bootstrap5.min.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/tables/datatable/rowGroup.bootstrap5.min.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/pickers/flatpickr/flatpickr.min.css')) }}">
@endsection

@section('content')

<!-- Basic table -->
<section id="basic-datatable">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <table class="datatables-basic table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Country of Birth</th>
                            <th>Country of Residence</th>
                            <th>Region/State</th>
                            <th>City of Residence</th>
                            <th>Email</th>
                            <th>Can we count CPP in your country?</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($userData as $data)
                        <tr>
                            <td>{{ $data->first_name }}</td>
                            <td>{{ $data->last_name }}</td>
                            <td>{{ $data->country_of_birth }}</td>
                            <td>{{ $data->country_of_residence }}</td>
                            <td>{{ $data->region_state }}</td>
                            <td>{{ $data->city_of_residence }}</td>
                            <td>{{ $data->email }}</td>
                            <td>{{ $data->can_we_count_cpp_in_your_country }}</td>

                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
<!--/ Basic table -->

@endsection


@section('vendor-script')
{{-- vendor files --}}
<script src="{{ asset(mix('vendors/js/tables/datatable/jquery.dataTables.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/dataTables.bootstrap5.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/dataTables.responsive.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/responsive.bootstrap5.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/datatables.checkboxes.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/datatables.buttons.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/jszip.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/pdfmake.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/vfs_fonts.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/buttons.html5.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/buttons.print.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/dataTables.rowGroup.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/pickers/flatpickr/flatpickr.min.js')) }}"></script>
@endsection
@section('page-script')
{{-- Page js files --}}
<script>
    $('.datatables-basic').DataTable();
</script>
@endsection