function mkNavbar(active) {
  var navigation = [
    { type: 0, title: "О компании", link: "/about.html", label: "l0" },
    { type: 1, title: "Услуги", link: "#", label: "l1", subnav: [
        { title: "Оценка", link: "/evaluation/"},
        { title: "Экспертиза", link: "/service/expertise/cte.html"},
        { title: "Патентование", link: "/service/patent.html"},
        { title: "Финансовый консалтинг", link: "/service/fc.html"}
      ]},
    { type: 0, title: "Рекомендательные письма", link: "#", label="l2"},
    { type: 0, title: "Новости", link: "#", label="l3"},
    { type: 0, title: "Контакты", link: "/contact.html", label="l4"}
  ];

  var result = '<div class="navbar navbar-inverse navbar-default" role="navigation"> \
      <div class="container-fluid"> \
        <div class="navbar-header"> \
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> \
            <span class="sr-only">Toggle navigation</span> \
            <span class="icon-bar"></span> \
            <span class="icon-bar"></span> \
            <span class="icon-bar"></span> \
          </button> \
          <a class="navbar-brand" href="/">Главная</a> \
        </div> \
        <div class="collapse navbar-collapse"> \
          <ul class="nav navbar-nav">'

  $.each(navigation, function (i, item) {
    result += '<li'
    if(item.title == active) { result += ' class="active"'; }
    result += '>'
    if(item.type == 0) { result += '<a href="' + item.link + '">' + item.title + '</a>'; }
    else {
      result += '<a href="' + item.link + '" role="button" \
                 class="dropdown-toggle" data-toggle="dropdown" data-target="#" \
                 id="' + item.label + '">' + item.title + ' <span class="caret"></span></a>';
      result += '<ul class="dropdown-menu" role="menu" aria-labelledby="' + item.label + '">';
      $.each(item.subnav, function(j, subitem) {
        result += '<li><a href="' + subitem.link + '">' + subitem.title + '</a></li>';
      })
      result += '</ul>';
    }
    result += '</li>';
  })
  result += '</ul> \
        </div><!--/.nav-collapse --> \
      </div> \
    </div>';

  $(document).ready(function() {
    $('#_navbar').append(result);
  });
}

function mkExpertiseNav(exp) {
  var navigation = [
    { title: "Строительно-техническая экспертиза", link: "cte.html" },
    { title: "Судебная экспертиза", link: "ld.html"}
  ];

  var result = '<ul class="nav nav-pills nav-stacked">'
  $.each(navigation, function(i, item) {
    result += '<li';
    if(item.title == exp) {
      result += ' class="active"';
    }
    result += '><a href="' + item.link + '">' + item.title + '</a></li>';
  });
  result += '</ul>';

  $(document).ready(function () {
    $('#_expnav').append(result);
  });
}

function mkMainNav(exp) {
  var navigation = [
    { title: "Краткие сведения", link: "#" },
    { title: "Компания партнерства", link: "#" },
    { title: "Преимущества", link: "#" },
    { title: "Партнеры и аккредитации, link: "#" },
    { title: "Сертификаты", link: "#" },
    { title: "Рейтинги", link: "#" },
    { title: "Реквизиты", link: "#" },
    { title: "Карьера", link: "#" }
  ];

  var result = '<ul class="nav nav-pills nav-stacked">'
  $.each(navigation, function(i, item) {
    result += '<li';
    if(item.title == exp) {
      result += ' class="active"';
    }
    result += '><a href="' + item.link + '">' + item.title + '</a></li>';
  });
  result += '</ul>';

  $(document).ready(function () {
    $('#_mainnav').append(result);
  });
}
