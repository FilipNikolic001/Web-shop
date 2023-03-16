const ordersData = async () => {
    const orderUrl = "https://extendsclass.com/api/json-storage/bin/addcdbf"

    const response = await fetch(orderUrl)
    const data = await response.json()
    const arrayOfOrders = data.Results
    const c = sessionStorage.getItem("keyPassword")
    
    const customer = c.substring(0, c.length - 1) //BONAP
    //console.log(arrayOfOrders);
    for (let i = 0; i < arrayOfOrders.length; i++){
        
        if (customer == arrayOfOrders[i].order.customerId) {
            showOrders(arrayOfOrders[i])
        }
    }
}

window.onload = function(){
    ordersData()
}

const showOrders = x => {
    let resultOrder = x.order
    let resultOrderDetails = x.orderDetails 
    //console.log("hej");
    let suma = 0
    let ukupnaSuma = 0

    const ordersDiv = document.getElementById("orders")
    const parseJsonDate = jsonString => {
        return new Date(parseInt(jsonString.replace('/Date(','')))
    }

    const datum = parseJsonDate(resultOrder.orderDate)
    console.log(datum);

    let konacanDatum = datum.toJSON(resultOrder.orderDate)
    console.log(konacanDatum.slice(0,10));

    ordersDiv.innerHTML = `
        <div class="col-sm-12 center-block" id="${resultOrder.id}">
            <div class="thumbnail col-md-12 box">
                <p style="font-size: 20px">
                    Order ID ${resultOrder.id}<br/><hr/>
                </p>
                ${resultOrderDetails.map(x => {
                    suma += x.quantity * x.unitPrice * (1 - x.discount)
                    ukupnaSuma += suma
                    return `
                        <p style="font-size: 15px">
                            ProductID: ${x.productId}
                        </p>
                        <p style="font-size: 15px">
                            Quantity: ${x.quantity}
                        </p>
                        <p style="font-size: 15px">
                            UnitPrice: ${x.unitPrice}
                        </p>
                        <p style="font-size: 15px">
                            Date: ${konacanDatum.slice(0,10)}<hr/>
                        </p>
                        <p style="font-size: 15px; color: #5cfe1e">
                            Amount: $ ${suma.toFixed(2)}<hr/>
                        </p>
                    `
                }).join(' ')}
                <p style="font-size: 30px; color: #5cfe1e">
                    Total amount: $ ${ukupnaSuma.toFixed(2)}<hr/>
                </p>
            </div>
        </div>
    `
}

const username = sessionStorage.getItem("keyUsername")

$("#logout").text(username)

$("#logout").on({
    mouseover: function(){
        $(this).text('Logout')
        $(this).css({
            "background": "gray",
            "color": "white",
            "border-radius": "10px"
        })
    }, 
    mouseout: function(){
        $(this).text(username)
    },
    click: function(){
        sessionStorage.removeItem("keyUsername")
        sessionStorage.removeItem("keyPassword")
        location.href = "login.html"
    }
})