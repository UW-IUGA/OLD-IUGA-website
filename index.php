<?php
    include_once('shared.php');
    shared_header('./', 'Home');
?>
    <main>

        <div class="container">

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img class="img-responsive" alt="IUGA officers" src="./assets/img/officers/2016/home-image.jpg">
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2>IUGA calendar of Events</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe src="https://calendar.google.com/calendar/embed?src=uw.edu_qrq301mbep5mn6mhulk2sfbpnk%40group.calendar.google.com&ctz=America/Los_Angeles"
                                class="embed-responsive-item"
                                style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
            </div>

        </div>

    </main>
<?php
    shared_footer('./');
?>
