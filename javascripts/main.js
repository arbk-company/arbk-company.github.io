function mkNavbar(active) {
  var navigation = [
    { type: 0, title: "Главная", link: "/" },
    { type: 1, title: "О компании", link: "#", label: "l0", subnav: [
        { title: "Руководсво и подразделения", link: "#" },
        { title: "Лицензии и сертификаты", link: "#" },
        { title: "Сотрудничество", link: "#" }
      ]},
    { type: 1, title: "Услуги", link: "#", label: "l1", subnav: [
        { title: "Оценка", link: "#"},
        { title: "Экспертиза", link: "#"},
        { title: "Патентование", link: "#"}
      ]},
    { type: 1, title: "Структура организации", link: "#", label: "l2", subnav: [
        { title: "Отдел оценки недвижимости", link: "#"},
        { title: "Отдел строительно-технической экспертизы", link: "#"},
        { title: "Отдел судебной экспертизы", link: "#"},
        { title: "Отдел патентования и лицензирования", link: "#"},
        { title: "Юридический отдел", link: "#"}
      ]},
    { type: 0, title: "Тарифы", link: "#"},
    { type: 0, title: "Контакты", link: "contact.html"}
  ];

  var result = '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation"> \
      <div class="container"> \
        <div class="navbar-header"> \
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> \
            <span class="sr-only">Toggle navigation</span> \
            <span class="icon-bar"></span> \
            <span class="icon-bar"></span> \
            <span class="icon-bar"></span> \
          </button> \
          <a class="navbar-brand" href="/arbk">ГК АРБК</a> \
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
