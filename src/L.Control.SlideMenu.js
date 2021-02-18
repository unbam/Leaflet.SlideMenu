L.Control.SlideMenu = L.Control.extend({
    options: {
        position: 'topleft',
        menuposition: 'topleft', // topleft,topright,bottomleft,bottomright
        width: '300px',
        height: '100%',
        direction: 'horizontal', // vertical or horizontal
        changeperc: '10',
        delay: '10',
        icon: 'fas fa-bars',
        hidden: false
    },

    initialize: function(innerHTML, options){
        L.Util.setOptions(this, options);
        this._innerHTML = innerHTML;
        this._isLeftPosition = this.options.menuposition == 'topleft' ||
            this.options.menuposition == 'bottomleft' ? true : false;
        this._isTopPosition = this.options.menuposition == 'topleft' ||
            this.options.menuposition == 'topright' ? true : false;
        this._isHorizontal = this.options.direction == 'horizontal' ? true : false;
    },

    onAdd: function(map){
        this._container = L.DomUtil.create('div', 'leaflet-control-slidemenu leaflet-bar leaflet-control');
        var link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-bar-part-single', this._container);
        link.title = 'Menu';
        L.DomUtil.create('span', this.options.icon, link);

        this._menu = L.DomUtil.create('div', 'leaflet-menu', map._container);

        this._menu.style.width = this.options.width;
        this._menu.style.height = this.options.height;

        if(this._isHorizontal){
            var frominit = -(parseInt(this.options.width, 10));
            if(this._isLeftPosition){
                this._menu.style.left = '-' + this.options.width;
            }
            else{
                this._menu.style.right = '-' + this.options.width;
            }

            if(this._isTopPosition){
                this._menu.style.top = '0px';
            }
            else{
                this._menu.style.bottom = '0px';
            }
        }
        else{
            var frominit = -(parseInt(this.options.height, 10));
            if(this._isLeftPosition){
                this._menu.style.left = '0px';
            }
            else{
                this._menu.style.right = '0px';
            }

            if(this._isTopPosition){
                this._menu.style.top = '-' + this.options.height;
            }
            else{
                this._menu.style.bottom = '-' + this.options.height;
            }
        }

        var closeButton = L.DomUtil.create('button', 'leaflet-menu-close-button', this._menu);

        if(this._isHorizontal){
            if(this._isLeftPosition){
                closeButton.style.float = 'right';
                L.DomUtil.addClass(closeButton, 'fas fa-chevron-left');
            }
            else{
                closeButton.style.float = 'left';
                L.DomUtil.addClass(closeButton, 'fas fa-chevron-right');
            }
        }
        else{
            if(this._isTopPosition){
                closeButton.style.float = 'right';
                L.DomUtil.addClass(closeButton, 'fas fa-chevron-up');
            }
            else{
                closeButton.style.float = 'right';
                L.DomUtil.addClass(closeButton, 'fas fa-chevron-down');
            }
        }

        this._contents = L.DomUtil.create('div', 'leaflet-menu-contents', this._menu);
        this._contents.innerHTML = this._innerHTML;
        this._contents.style.clear = 'both';

        if(this._isHorizontal){
            var ispx = this.options.width.slice(-1) == 'x' ? true : false;
            var unit = parseInt(this.options.width, 10) * parseInt(this.options.changeperc, 10) / 100;
        }
        else{
            var ispx = this.options.height.slice(-1) == 'x' ? true : false;
            var unit = parseInt(this.options.height, 10) * parseInt(this.options.changeperc, 10) / 100;
        }

        L.DomEvent.disableClickPropagation(this._menu);
        L.DomEvent
            .on(link, 'click', L.DomEvent.stopPropagation)
            .on(link, 'click', function(){
                // Open
                this._animate(this._menu, frominit, 0, true, ispx, unit);
            }, this)
            .on(closeButton, 'click', L.DomEvent.stopPropagation)
            .on(closeButton, 'click', function(){
                // Close
                this._animate(this._menu, 0, frominit, false, ispx, unit);
            }, this);
        L.DomEvent.on(this._menu, 'mouseover', function(){
            map.scrollWheelZoom.disable();
        });
        L.DomEvent.on(this._menu, 'mouseout', function(){
            map.scrollWheelZoom.enable();
        });

        if(this.options.hidden){
            this.hide();
        }

        return this._container;
    },

    onRemove: function(map){
        //Remove sliding menu from DOM
        map._container.removeChild(this._menu);
        delete this._menu;
    },

    setContents: function(innerHTML){
        this._innerHTML = innerHTML;
        this._contents.innerHTML = this._innerHTML;
    },

    _animate: function(menu, from, to, isOpen, ispx, unit){
        if(this._isHorizontal){
            if(this._isLeftPosition){
                menu.style.left = from + (ispx ? 'px' : '%');
            }
            else{
                menu.style.right = from + (ispx ? 'px' : '%');
            }
        }
        else{
            if(this._isTopPosition){
                menu.style.top = from + (ispx ? 'px' : '%');
            }
            else{
                menu.style.bottom = from + (ispx ? 'px' : '%');
            }
        }

        if(from != to){
            setTimeout(function(slideMenu){
                var value = isOpen ? from + unit : from - unit;
                slideMenu._animate(slideMenu._menu, value, to, isOpen, ispx, unit);
            }, parseInt(this.options.delay), this);
        }
        else{
            return;
        }
    },

    hide: function () {
        this._container.style.display = 'none';
    },

    show: function () {
        this._container.style.display = 'inherit';
    }
});

L.control.slideMenu = function(innerHTML, options) {
    return new L.Control.SlideMenu(innerHTML, options);
};
