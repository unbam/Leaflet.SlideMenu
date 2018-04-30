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


## Methods

`setContents(<String>innerHTML):` Set the innerHTML in the menu. Please use here if you do not set the innerHTML to the argument of the slide menu.


## Demo

[DemoPage](http://unbam.github.io/Leaflet.SlideMenu/)


## License

MIT
