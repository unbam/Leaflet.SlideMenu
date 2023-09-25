Leaflet.SlideMenu
====

A simple slide menu for Leaflet.  
When you click the menu button and the menu is displayed to slide.  
Please set the innerHTML to slide menu.  


## Usage

This control uses [Font Awesome](https://fortawesome.github.io/Font-Awesome/) for the icon by default. To use, include:

```html
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```

Include the CSS:

```html
<link rel="stylesheet" href="L.Control.SlideMenu.css">
```


Include the JavaScript:

```html
<script src="L.Control.SlideMenu.js"></script>
```


Example usage:

```javascript
L.control.slideMenu('<p>test</p>').addTo(map);
```

## Arguments
```javascript
L.control.slideMenu(<String>innerHTML, <SlideMenu options>options?)
```
`innerHTML:` Set the innerHTML in the menu.  
`options:` [SlideMenu Options](https://github.com/unbam/Leaflet.SlideMenu/blob/master/README.md#options)


## Options

`position:` The standard Leaflet.Control position parameter. Defaults to 'topleft'  
`menuposition:` Set the position of the slide menu. Defaults to 'topleft'  
`width:` Set the width of the slide menu. Defaults to '300px'  
`height:` Set the height of the slide menu. Defaults to '100%'  
`direction:` Set the direction of the slide menu animation. Defaults to 'horizontal'  
`changeperc:` The percentage of total size by one movement. The unit is percent. Defaults to '10'  
`delay:` The display of the slide menu set the speed for moving one by "X"px ("X" is calculated from `changeperc`). The unit is milliseconds. Defaults to '10'  
`icon:` Set the menu icon for 'Font Awesome' of the slide menu. Defaults to 'fa-bars'  
`hidden:` Set the hide of the slide menu. Defaults to 'false'  
`title`: set tooltip text of the menu button. Defaults to 'Menu'
`id_button`: set id of the menu button (in the leaflet controls bar). Defaults to none.
`id_close`: set id of the close button. Defaults to none.

## Methods

`setContents(<String>innerHTML):` Set the innerHTML in the menu. Please use here if you do not set the innerHTML to the argument of the slide menu.

`isMenuOpened():` check if the menu is opened, exposed by the element with *id=id_button*:

    ~~~js
    // create
    const menu: Control.SlideMenu = L.control.slideMenu(_htmlMenu, {
    height: '50%', 
    icon: 'fa-solid fa-gear',
    id_button: 'options-button',
    id_close: 'options-closebutton',        
    icon_close: { 
        class_left: 'fa fa-xmark', 
        color: '#000000'
    }
    })
    map.addControl(menu)

    // use
    const optionsButton = document.getElementById('options-button')
    if (optionsButton.isMenuOpened()) {
        optionsCloseButton.click()
    }
    ~~~

## Demo

[DemoPage](http://unbam.github.io/Leaflet.SlideMenu/)


## License

MIT
