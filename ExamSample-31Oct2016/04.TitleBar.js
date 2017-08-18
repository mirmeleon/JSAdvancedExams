class TitleBar{
    constructor(title){
          this.title = title;
          this.links = [];
    }

    addLink(href, name){

      let link =  $('<a>').addClass('menu-link').prop('href', href)
          .text(name);//attr go napravi


      this.links.push(link);
    }

    appendTo(selector){


          let header = $('<header>').addClass('header');
          let div = $('<div>').addClass('header-row');
          let button = $('<a>')
              .addClass('button')
              .html('&#9776;')
              .click(() => $('div.drawer').toggle());//toggle scriva i pokazva elementi

          let span = $('<span>').addClass('title').text(this.title);

          // //vtori div
        let drawer = $('<div>').addClass('drawer');

        let nav = $('<nav>').addClass('menu');

        for(let link of this.links){
           nav.append(link);
        }
        div.append(button);
        div.append(span);
        header.append(div);
        drawer.append(nav);
        header.append(drawer);

        $(selector).append(header);
    }
}

