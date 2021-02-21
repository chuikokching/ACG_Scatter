<!--<html>
<body>
<h2>Hello World From JSP !</h2>
</body>
</html>-->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>ACG_Portal</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="CSS/template.css">
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
</head>
<body>
<div id="wrapper">
    <div class="top-navigator navbar navbar-default">
        <div class="uni">
            <a href="https://www.uni-due.de/" title="uni-due"></a>
        </div>
        <div class="container-fluid">
        </div>
    </div>
    <div class="split_line"></div>
    <!-- Definition von Body -->
    <div class="full-body-container">
        <nav>
            <div class="nav">
                <a><button id="infos" class="nav_btn">Informations</button></a>
                <a><button id="submit"class="nav_btn">Submit</button></a>
                <a><button id="upload"class="nav_btn">Upload</button></a>
                <a><button class="nav_btn">Scatterplot</button></a>
                <a><button class="nav_btn">Scatterplot</button></a>
                <a><button class="nav_btn">Scatterplot</button></a>
                <a><button class="nav_btn">Scatterplot</button></a>
                <a><button class="nav_btn">Scatterplot</button></a>
                <a><button class="nav_btn">Scatterplot</button></a>
                <a><button class="nav_btn">Scatterplot</button></a>
            </div>
        </nav>
        <div class="main_body">
            <div id="scatter_chart" class="chart">
                <script src="Javascript/scatterplot.js"></script>
                <div id="component">test</div>
            </div>

            <div class="result">result</div>
        </div>
    </div>
    <!-- Definition von Footer -->
    <footer>
        <div id="footer">
            <p>Bachelor-Arbeit | Guozheng Xu | Matrikelnummer: 3025929 | Angewandte Informatik - System Engineering (B.Sc.)</p>
        </div>
    </footer>
</div>
</body>
</html>
