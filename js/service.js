
document.addEventListener("DOMContentLoaded", () => {
    let totalCoin = 100;
    let totalHeart = 0;
    let CopyElement = [];
    let totalCopy = CopyElement.length;
    let callHistory = [];
    document.getElementById("totalcoin").textContent = totalCoin;
    document.getElementById("totalHeart").textContent = totalHeart;
    document.getElementById("totalCopy").textContent = totalCopy;



    document.querySelectorAll("i[name='huart']").forEach(icon => {
        icon.addEventListener("click", function () {
            totalHeart += 1;
            document.getElementById("totalHeart").textContent = totalHeart;
        });
    });

    document.querySelectorAll("i[name='call']").forEach(icon => {
        icon.addEventListener("click", function () {
            alert("Calling" + " National Emergency Service" + 999)
        });
    });


    document.querySelectorAll("button[name='call']").forEach(btn => {
        btn.addEventListener("click", function () {
            const card = this.parentNode.parentNode;
            const serviceName = card.querySelector("[name='serviceName']").textContent;
            const number = card.querySelector("[name='number']").textContent;

            if (totalCoin >= 20) {
                callHistory.push({
                    serviceName: serviceName,
                    number: number,
                    justtime: new Date().toLocaleTimeString()
                });

                alert(`📞 Calling ${serviceName} ${number}`);

                const callHistoryList = document.getElementById("callHistoryList");

                let HtmlContent = "";

                for (let call of callHistory) {

                    HtmlContent += "<div class='bg-surface shadow-md px-2 rounded-lg flex justify-between items-center py-3'><div><span class='block font-semibold text-gray-800'>" + call.serviceName + "</span><span class='text-green-600 font-bold'>" + call.number + "</span></div><p class='text-xs text-gray-500'>" + call.justtime + "</p></div>";

                }
                callHistoryList.innerHTML = HtmlContent;

                totalCoin -= 20;
                document.getElementById("totalcoin").textContent = totalCoin;
            } else {
                alert(`❌ You don't have enough coin, minimum 20 coin to make the call.`);
            }





        });

    });


    document.getElementById("clear").addEventListener("click", function () {
        callHistory = [];
        const callHistoryList = document.getElementById("callHistoryList");
        callHistoryList.innerHTML = "";
    });




});

