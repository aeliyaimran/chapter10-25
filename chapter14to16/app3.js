// chapter 14 to 16
// // 1
        var arr0 = [];

        // // 2
         var arr1 = new Array(100);

        // // 3
         var strArray = ["a","b","c","d"];

        // // 4
         var numArray = [10,20,30,40,50];

        // // 5
         var boolArray = [true,false];

        // // 6
         var mixArray = ["apple","ball",10,20,false,"cat",50,true];

        // // 7
         var edu = ['SSC','HSC','BCS','BS','BCOM','MS','PHIL','PhD'];
        for(i in edu){
             document.write(`<b> ${parseInt(i)+1} ) ${edu[i]} <b> <br/>`)
         }

        // // 8
         var students = ['Michael', 'John', 'Tony'];
         var score = [320, 230, 480];
         for(i in students){
             document.write(`Score of ${students[i]} is ${score[i]}. Percentage: ${score[i]/500*100}% <br/>`)
         }

        // // 9
         var colors = ['blue','black','purple'];
         document.write("Array after first initialization : <b>",colors,"</b> <br/>");
        
        // // a
         var addcolor = prompt('Add color in start : ');
         colors.unshift(addcolor);
         document.write("Array after First Addition : <b>",colors,"</b> <br/>");
        // // b
         addcolor = prompt('Add color in end : ');
         colors.push(addcolor);
         document.write("Array after Second Addition : <b>",colors,"</b> <br/>");
        // // c
        colors.push('teal','cyan');
         document.write("Array after adding two more colors : <b>",colors,"</b> <br/>");
        // // d
        colors.shift()
         document.write("Array after removing first color : <b>",colors,"</b> <br/>");
        // // e
         colors.pop()
         document.write("Array after removing last color : <b>",colors,"</b> <br/>");
        // // f
        var userIndex = prompt("Enter which on which Index/Position you want to add : ");
         colors[userIndex] = prompt('Add desired color name : ')
         document.write("Array after adding on desired Index : <b>",colors,"</b> <br/>");
        // // g
         var delIndex = parseInt(prompt("From which index you want to delete : "));
         var delCount = parseInt(prompt("How many you want to delete : "));
         colors.splice(delIndex,delCount);
         document.write("Array after deleting from desired Index : <b>",colors,"</b> <br/>");

        // // 10
        var studentScore =[320,230,480,120];
         document.write(`Scores of Students : ${studentScore} <br/>`);
         var scoreSorted = studentScore.sort();
         document.write(`Ordered Scores of Students : ${scoreSorted}`);

        // // 11
         var cityNames = ['karachi','lahore','islamabad','quetta','peshawar'];
         document.write(`Cities list : <br/>${cityNames}<br/> <br/>`);
         var selectedCities = cityNames.slice(2,4);
         document.write(`Selected cities list : <br/>${selectedCities}`);

        // // 12
         var arr = ['this','is','my','cat'];
         document.write('Array : <br/>',arr);
         var arrToStr = arr.join();
         document.write('<br/> String : <br/>',arrToStr);

        // // 13
         var arr = ['keyboard','mouse','printer','monitor'];
         document.write("Devices : <br/> ",arr,"<br/> <br/> FIFO <br/> <br/>")
         document.write(`Out : <br/> ${arr[0]} <br/> Out : <br/> ${arr[1]} <br/> Out : <br/> ${arr[2]} <br/> Out : <br/> ${arr[3]} <br/>`)

        // // 14
         var arr = ['keyboard','mouse','printer','monitor'];
         document.write("Devices : <br/> ",arr,"<br/> <br/> LIFO <br/> <br/>")
         arr.reverse();
         document.write(`Out : <br/> ${arr[0]} <br/> Out : <br/> ${arr[1]} <br/> Out : <br/> ${arr[2]} <br/> Out : <br/> ${arr[3]} <br/>`)

        // // 15
        // !!!!!! First uncomment SELECT ELEMENT in BODY !!!!!!!
        
         var options = ['apple','samsung','motorola','nokia','sony','haier'];
         var select = document.getElementById("cellCompanies");
         for(i in options){
             var opt = options[i];
             var el = document.createElement("option");
             el.innerHTML = opt;
             select.appendChild(el);
            console.log(el)
         }