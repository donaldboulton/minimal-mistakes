//Making sure Snipcart is ready
document.addEventListener('snipcart.ready', function() {

    //Subscribing to different events
    Snipcart.subscribe('item.added', function(item) {
        itemAdded(item);
    });

    Snipcart.subscribe('item.removed', function(item) {
        itemRemoved(item);
    });

    Snipcart.subscribe('order.completed', function(order) {
        orderCompleted(order);
    });

    Snipcart.subscribe('cart.opened', function() {
        cartOpened();
    });

    Snipcart.subscribe('cart.closed', function() {
        cartClosed();
    });

    Snipcart.subscribe('page.change', function(page) {
        pageChanged(page);
    });
});

function createProductsFromItems (items) {
    return items.map(function (item) {
        return {
            name: item.name,
            description: item.description,
            id: item.id,
            price: item.price,
            quantity: item.quantity
        };
    });
}

function itemAdded(item){
    dataLayer.push({
        event: 'snipcartEvent',
        eventCategory: 'Cart Update',
        eventAction: 'New Item Added To Cart',
        eventLabel: item.name,
        eventValue: item.price,
        ecommerce: {
            currencyCode: 'USD',
            add: {
                products: createProductsFromItems([item])
            }
        }
    });
}

function itemRemoved(item){
    dataLayer.push({
        event: 'snipcartEvent',
        eventCategory: 'Cart Update',
        eventAction: 'Item Removed From Cart',
        eventLabel: item.name,
        eventValue: item.price,
        ecommerce: {
            currencyCode: 'USD',
            remove: {
                products: createProductsFromItems([item])
            }
        }
    });
}

function orderCompleted(order){
    dataLayer.push({
        event: 'snipcartEvent',
        eventCategory: 'Order Update',
        eventAction: 'New Order Completed',
        ecommerce: {
            currencyCode: order.currency,
            purchase: {
                actionField: {
                    id: order.token,
                    affiliation: 'Website',
                    revenue: order.total,
                    tax: order.taxesTotal,
                    shipping: order.shippingInformation.fees,
                    invoiceNumber: order.invoiceNumber
                },
                products: createProductsFromItems(order.items),
                userId: order.user.id
            }
        }
    });
}

function cartOpened(){
    dataLayer.push({
        event: 'snipcartEvent',
        eventCategory: 'Cart Action',
        eventAction: 'Cart Opened',
        ecommerce: {
            cartclose: {
                products: createProductsFromItems(Snipcart.api.items.all())
            }
        }
    });
}

function cartClosed(){
    dataLayer.push({
        event: 'snipcartEvent',
        eventCategory: 'Cart Action',
        eventAction: 'Cart Closed',
        ecommerce: {
            cartopen: {
                products: createProductsFromItems(Snipcart.api.items.all())
            }
        }
    });
}

function pageChanged(page){
    dataLayer.push({
        event: 'snipcartEvent',
        eventCategory: 'Page Change',
        eventAction: page,
        ecommerce: {
            checkout: {
                products: createProductsFromItems(Snipcart.api.items.all())
            }
        }
    });
}
