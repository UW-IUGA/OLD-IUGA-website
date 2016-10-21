<?php
    function shared_header($path, $title = "IUGA") {
?>
<!doctype html>
<html lang="en">

<head>
    <title><?= $title ?></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?= $path ?>/assets/css/main.css" />
    <link rel="icon" href="<?= $path ?>/assets/img/logo.ico">
</head>

<body>
    <header>
        <nav>

            <div class="container">
                <a href="/"><img id="logo" src="<?= $path ?>/assets/img/IUGA-Logotype.jpg"></a>
                <ul id="big-nav">
                    <li><a href="/">home</a></li>
                    <li><a href="about">about</a></li>
                    <li><a href="events">events</a></li>
                    <li><a href="photos">photos</a></li>
                </ul>
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><span class="glyphicon glyphicon-th-list"></span></button>
            </div>

        </nav>

        <div class="popup-nav">

            <ul id="small-nav">
                <li><a href="/">home</a></li>
                <li><a href="about">about</a></li>
                <li><a href="events">events</a></li>
                <li><a href="photos">photos</a></li>
            </ul>

        </div>
    </header>

<?php
    }
    function shared_footer($path, $extra = "") {
?>

    <footer>
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="<?= $path ?>/assets/js/page.js"></script>

        <?= $extra ?>
    </footer>
</body>

</html>
<?php
    }
?>
