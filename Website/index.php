<!DOCTYPE html>
<html>
<head>
    <title>eshop</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="CSS/design.css">
    <script src="Parts/loading_content.js"></script>
</head>
<body onload="load_home()">

<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <ul class="nav navbar-nav">
            <li class="active" id="home"><a href="#">Domov</a></li>
            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" >Kategorie<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a id="category1" >Kategoria 1</a></li>
                    <li><a id="category2">Kategoria 2</a></li>
                </ul>
            </li>
            <li id="orders" style="display: none"><a><span class="glyphicon glyphicon glyphicon-list-alt"></span> Objednávky</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#"  id="shopingCart"><span class="glyphicon glyphicon-shopping-cart"></span> Košík</a></li>
            <li id="settings" style="display: none"><a><span class="glyphicon glyphicon glyphicon-wrench"></span> Nastavenia</a></li>

            <li id="login" style="display: inline" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="glyphicon glyphicon-log-in"></span> Prihlasenie
                </a>
                <div class="dropdown-menu p-4">
                    <form class="form-horizontal" method="post" accept-charset="UTF-8">
                        <input class="form-control login" type="text" name="username2" placeholder="e-mail alebo login">
                        <input class="form-control login" type="text" name="password2" placeholder="Heslo">
                        <input class="btn btn-primary text-center" type="button" name="submit" value="Prihlásiť sa">
                    </form>
                </div>
            </li>
            <li id="registration" style="display: inline"><a><span class="glyphicon glyphicon-user"></span> Registracia</a></li>

            <li id="logout" style="display: none"><a href="#"><span class="glyphicon glyphicon-log-out"></span> Odhlásiť sa</a></li>
        </ul>
    </div>
</nav>

<div class="container" id="content"></div>

</body>
</html>
