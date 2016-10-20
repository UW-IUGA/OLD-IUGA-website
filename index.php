<!doctype html>
<html lang="en">

<head>
    <title>Home</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css" />
    <link rel="icon" href="img/logo.ico">

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.1/angular.min.js"></script>
</head>

<body ng-app="EventsApp" ng-controller="EventsController">
    <nav>
        <a href="/"><img id="logo" src="./img/IUGA-Logotype.jpg"></a>
        <ul id="big-nav">
            <li><a href="/">home</a></li>
            <li><a href="aboutus.php">about</a></li>
            <li><a href="events.php">events</a></li>
            <li><a href="photos.php">photos</a></li>
        </ul>
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><span class="glyphicon glyphicon-th-list"></span></button>
    </nav>

    <div class="popup-nav">

        <ul id="small-nav">
            <li><a href="/">home</a></li>
            <li><a href="aboutus.php">about</a></li>
            <li><a href="events.php">events</a></li>
            <li><a href="photos.php">photos</a></li>
        </ul>

    </div>

    <section id="home">
        <img id="home-photo" src="img/officers/2016/home-image.jpg">
    </section>


    <div class="container">
        <div class="responsive-iframe-container">
            <iframe src="https://calendar.google.com/calendar/embed?src=uw.edu_qrq301mbep5mn6mhulk2sfbpnk%40group.calendar.google.com&ctz=America/Los_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>


    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="js/page.js"></script>
    <script src="js/moment.js"></script>
    <script src="js/app.js"></script>

</body>

</html>
