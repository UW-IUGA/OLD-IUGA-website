<?php
    include_once('../shared.php');
    shared_header('../', 'IUGA Photos');
?>

    <main>

        <div class="container">

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1>iUGA Photos</h1>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>Check out what we've been up to!</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div id='imageGallery'></div>
                </div>
            </div>

        </div>

    </main>

<?php
    shared_footer('../', '
        <script src="../assets/js/apptwo.js"></script>
        <script src="../assets/js/jquery.colorbox-min.js"></script>
        <link rel="stylesheet" href="../assets/css/colorbox.css" />
    ');
?>
