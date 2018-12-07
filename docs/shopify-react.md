# Templating engines and React.js

I want to make a shopify theme using react.

# How shopify theming works

You have a bunch of template files that have access to global server-side variables with liquid e.g. `{{ product.title }}`. Think wordpress or any other theme-based system.

```
 /theme
   /template
     /index.liquid
     /products.liquid
```

## SEO

* Because this site is hosted on Shopify I don't have access to the server to [render out react on the server dynamically](https://github.com/mhart/react-server-example#example).
* Because this is an e-commerce store I can't have pages not be rendered server side, for SEO reasons.
* I need to programmatically generate all of the pages in the template with react `render` locally, each template would have a component.

## Injecting server-side variables into react

It's simple enough to pass the string versions of liquid variables to a component. What I'm not sure of is how to differentiate the props / components that are render out saved within a template and the instance of react in javascript that is running on the site. When the client runs react if the liquid variables are the default properties all the valued server-side variables will be converted to their string / variable counterpart this isn't what we want. React doesn't have the data, this is bad.

To fix this I thought about having two sets of properties, one `getLiquidProps` that will be utilized when I call something like `renderLiquid()`. Similar to the way [react-async](https://github.com/andreypopp/react-async#rendering-async-components-on-server-with-fetched-async-state) works. However what I really need is a way to read the existing values that the server wrote to the DOM and have those values be the component props. But this is us using the react server DOM as our datastore is this possible?

## Example

If I have a simple component for cart counter:

```javascript
var CartCount = React.createClass({
    getDefaultProps: function(){
     	return {
     		"count": '{{ cart.item_count }}'
     	}
    },
    render: function() {
        return (
            <div className="cartCount">
                { this.props.count }
            </div>
        )
    }
});
```

The server will render 

```html
<div className="cartCount">
  3
</div>
```

The client-side react will overwrite it again

```html
<div className="cartCount">
  { this.props.count }
</div>
```