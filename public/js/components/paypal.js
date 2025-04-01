paypal.Buttons({
    style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'paypal'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units: [
                {
                    reference_id: "PUHF",
                    description: "Some description",

                    custom_id: "Something7364",
                    soft_descriptor: "Great description 1",
                    amount: {
                        currency_code: "MXN",
                        value: "200.00",
                        breakdown: {
                            item_total: {
                                currency_code: "MXN",
                                value: "200.00"
                            }
                        }
                    },
                    items: [
                        {
                            name: "Item 1",
                            description: "The best item ever",
                            sku: "xyz-2654",
                            unit_amount: {
                                currency_code: "MXN",
                                value: "100.00"
                            },
                            quantity: "1"
                        },
                        {
                            name: "Item 2",
                            description: "Not bad too",
                            sku: "zdc-3942",
                            unit_amount: {
                                currency_code: "MXN",
                                value: "50.00"
                            },
                            quantity: "2"
                        }
                    ],

                }
            ]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            console.log(details);
            console.log(data);
            // Call your server to save the transaction
            /*return fetch('/api/paypal-transaction-complete', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    orderID: data.orderID
                })
            });*/
        });
    }
}).render('#paypal');