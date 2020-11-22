<!DOCTYPE html>
<html>
<head>
    <title>eshop</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="CSS/design.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="Parts/loading_content.js"></script>
</head>
<body>

<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <ul class="nav navbar-nav">
            <li class="active" id="home"><a href="#">Home</a></li>
            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Kategorie<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#" id="category" >Kategoria 1</a></li>
                    <li><a href="#" id="category">Kategoria 2</a></li>
                    <li><a href="#" id="category">Kategoria 3</a></li>
                </ul>
            </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Košík</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Registracia</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Prihlasenie</a></li>
        </ul>
    </div>
</nav>

<div class="container" id="content">
    <script>
        load_home();
    </script>
</div>

</body>
</html>
