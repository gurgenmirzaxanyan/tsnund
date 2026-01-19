        function sendToWhatsApp(e) {
            e.preventDefault();

            // 1. ՍՏԱՆՈՒՄ ԵՆՔ ՏՎՅԱԼՆԵՐԸ
            var name = document.getElementById('name').value;
            var count = document.getElementById('count').value;
            
            // 2. ՁԵՎԱՎՈՐՈՒՄ ԵՆՔ ՆԱՄԱԿԸ
            var message = "";
            if(count === "Imus") {
                 message = "Բարև, ես " + name + "-ն եմ: Ցավոք, չեմ կարողանա մասնակցել ծնունդիդ: 😔";
            } else {
                 message = "Բարև, ես " + name + "-ն եմ: Գալու եմ ծնունդիդ " + count + " հոգով: 🎉";
            }

            // 3. ՁԵՐ ՀԵՌԱԽՈՍԱՀԱՄԱՐԸ (Փոխեք սա)
            var phoneNumber = "+37498249545"; // Օրինակ՝ 37491......

            // 4. ՈՒՂԱՐԿՈՒՄ ԵՆՔ WHATSAPP
            var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
            
            window.open(url, '_blank');
        }