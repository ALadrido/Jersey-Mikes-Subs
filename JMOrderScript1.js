let totalSubPrice = 0;
let xToppingsPrice = 0;
var subOrders = [];

function checkContents() {
    let subList = document.getElementById("userSubChoice"); //Getting List Of ALL Subs
    let userSubNumber = subList.options[subList.selectedIndex].text; //Chosen Sub
    document.getElementById("userSubSelection").value = subList.options[subList.selectedIndex].text; //Setting Label Under Hero Image
    if (userSubNumber === "(#1) BLT") { //#1 BLT
        subHeroImage.src = "JMSubImages/1BLT.png"; //Changing Hero Image
        alert("(#1) BLT" +
        "\n\nThe BLT Contains A Crispy Bacon Base, Topped With Lettuce, Tomato, And Fresh Mayo");
    }
    if (userSubNumber === "(#2) Jersey Shore Favorite") { //#2 JS FAV
        subHeroImage.src = "JMSubImages/2JSFav.png"; //Changing Hero Image
        alert("(#2) Jersey Shore Favorite" +
        "\n\nA Classic Among The Shore! \nThis sub starts off with Freshly Sliced Provelone Cheese, Top-Grade Ham, and Cappacuolo");
    }
    if (userSubNumber === "(#3) Ham + Provelone") { //#3 Ham
        subHeroImage.src = "JMSubImages/3Ham.png"; //Changing Hero Image
        alert("(#3) Ham + Provelone" +
        "\n\nDubbed The American Classic \nFresh Ham And Provelone ");
    }
    if (userSubNumber === "(#4) Number 4") { //#4
        subHeroImage.src = "JMSubImages/4Spec.png"; //Changing Hero Image
        alert("(#4) Number 4" +
        "\n\nSHHH This Ones A Secret! \nNot On The Regular Menu, This Sub Has Fresh Provelone, Proscuttini, and the Sweet Spice of Cappacuolo");
    }
    if (userSubNumber === "(#5) Super Sub") { //#5 Super
        subHeroImage.src = "JMSubImages/5Super.png"; //Changing Hero Image
        alert("(#5) The Super Sub" +
        "\n\nA Monster! \nThis Sub Contains, Freshly Sliced Provelone, Ham, Proscuttini AND Cappacuolo");
    }
    if (userSubNumber === "(#6) Roast Beef + Provelone") { //#6 RB
        subHeroImage.src = "JMSubImages/6RB.png"; //Changing Hero Image
        alert("(#6) Roast Beef" +
        "\n\nThe BEEF! \nRoast Beef And Provelone");
    }
    if (userSubNumber === "(#7) Turkey + Provelone") { //#7 Turk
        subHeroImage.src = "JMSubImages/7Turk.png"; //Changing Hero Image
        alert("(#7) Turkey" +
        "\n\nThe Classic Turkey And Provelone");
    }
    if (userSubNumber === "(#8) Club Sub") { //#8 Club
        subHeroImage.src = "JMSubImages/8Club.png"; //Changing Hero Image
        alert("(#8) The Club Sub" +
        "\n\nA Go To! \nFreshley Sliced Provelone w/ Ham and Turkey");
    }
    if (userSubNumber === "(#9) Club Supreme") { //#9 Club Supreme
        subHeroImage.src = "JMSubImages/9ClubSup.png"; //Changing Hero Image
        alert("(#9) The Club Supreme" +
        "\n\nA Supreme Submarine! \nFreshly Sliced SWISS w/ Turkey and Roast Beef");
    }
    if (userSubNumber === "(#10) Tuna") { //#10 Tuna
        subHeroImage.src = "JMSubImages/10Tuna.png"; //Changing Hero Image
        alert("(#10) Tuna" +
        "\n\nFishy Fishy \nFreshly Made Tuna On Top Of A Fluffy Role, (DOES NOT HAVE CHEESE!)");
    }
    if (userSubNumber === "(#11) Stickball Special") { //#11 Stickball
        subHeroImage.src = "JMSubImages/11StickBall.png"; //Changing Hero Image
        alert("(#11) Stickball Special" +
        "\n\nSomething Special! \nFresh Provelone W/ Ham And Salami");
    }
    if (userSubNumber === "(#12) Cancro Special") { //#12 Cancro
        subHeroImage.src = "JMSubImages/12Cancro.png"; //Changing Hero Image
        alert("(#12) Cancro Special" +
        "\n\nNamed After Peter Cancro! \nThis Sub Has Fresh Provelone, Roast Beef, And Topped With Pepperoni!");
    }
    if (userSubNumber === "(#13) Italian") { //#13 Italian
        subHeroImage.src = "JMSubImages/13Italian.png"; //Changing Hero Image
        alert("(#13) Italian" +
        "\n\nA Big One! \nThis Sub Has Ham, Proscuttini, Cappacuolo, Salami And Pepperoni!");
    }
    if (userSubNumber === "(#14) Veggie") { //#14 Veggie
        subHeroImage.src = "JMSubImages/14Veggie.png"; //Changing Hero Image
        alert("(#14) Veggie" +
        "\n\nFor The Non-Meat Lovers \n5 Slices Each Of Fresh Provelone And Swiss");
    }
    //If Hot Sub Is Chosen
    if (userSubNumber === "(#16) CHX Philly") { //#16 CHX Philly
        subHeroImage.src = "JMSubImages/HOTSUBS/16chxPhilly.png"; //Changing Hero Image
        alert("(#16) CHX Philly" +
        "\n\nStraight From Philly \nFreshly Grilled Chicken, With White American Cheese, Grilled Onions And Peppers!");
    }
    if (userSubNumber === "(#17) BEEF Philly") { //#17 BEEF Philly
        subHeroImage.src = "JMSubImages/HOTSUBS/17beefPhilly.png"; //Changing Hero Image
        alert("(#17) BEEF Philly" +
        "\n\nStraight From Philly \nFreshly Grilled Beef, With White American Cheese, Grilled Onions And Peppers!");
    }
    if (userSubNumber === "(#26) CHX BACON RANCH") { //#26 CHX BACON RANCH
        subHeroImage.src = "JMSubImages/HOTSUBS/26chxBaconRanch.png"; //Changing Hero Image
        alert("(#26) CHX BACON RANCH" +
        "\n\nFresh Chicken \nTopped With Cheese, Lettuce, Tomato, Bacon And Ranch!");
    }
    if (userSubNumber === "(#31) CHX CALI") { //#31 CALI
        subHeroImage.src = "JMSubImages/HOTSUBS/31chxCali.png"; //Changing Hero Image
        alert("(#31) CHX CALI" +
        "\n\nFresh Chicken \nTopped With Cheese, Lettuce, Tomato And Mayo! \nIf You Would Like To Sub Beef, Specify In Special Instructions Section!");
    }
    if (userSubNumber === "(#42) CHX Chipotle") { //#42 CHX CHIP
        subHeroImage.src = "JMSubImages/HOTSUBS/42chxChip.png"; //Changing Hero Image
        alert("(#42) CHX Chipotle" +
        "\n\nSpicy! \nFresh Chicken and Cheese, Grilled Onions, Peppers, And Spicy Chipotle Mayo!");
    }
    if (userSubNumber === "(#43) BEEF Chipotle") { //#43 BEEF CHIP
        subHeroImage.src = "JMSubImages/HOTSUBS/43beefChip.png"; //Changing Hero Image
        alert("(#43) BEEF Chipotle" +
        "\n\nSpicy! \nFresh Beef and Cheese, Grilled Onions, Peppers, And Spicy Chipotle Mayo!");
    }
    if (userSubNumber === "(#44) CHX Buffalo") { //#44 BUFF CHX
        subHeroImage.src = "JMSubImages/HOTSUBS/44chxBuff.png"; //Changing Hero Image
        alert("(#44) CHX Buffalo" +
        "\n\nSpicy! \nFresh Chicken and Cheese, Grilled In Buffalo Sauce and Topped With Lettuce, Tomato, And Blue Cheese!");
    }
    if (userSubNumber === "(#55) CHX Kahuna") { //#55 CHX KAHUNA
        subHeroImage.src = "JMSubImages/HOTSUBS/55chxKahuna.png"; //Changing Hero Image
        alert("(#55) CHX Kahuna" +
        "\n\nThe Big Kahuna! \nFresh Chicken And Cheese, Grilled Onions, Peppers, Mushrooms And Jalapenos!");
    }
    if (userSubNumber === "(#56) BEEF Kahuna") { //#56 BEEF KAHUNA
        subHeroImage.src = "JMSubImages/HOTSUBS/56beefKahuna.png"; //Changing Hero Image
        alert("(#56) BEEF Kahuna" +
        "\n\nThe Big Kahuna! \nFresh Beef And Cheese, Grilled Onions, Peppers, Mushrooms And Jalapenos!");
    }
    if (userSubNumber === "(PORT) Portabella + Swiss") { //PORT SWISS
        subHeroImage.src = "JMSubImages/HOTSUBS/portabella.png"; //Changing Hero Image
        alert("(#PORT) Portabella Mushroom + Swiss" +
        "\n\nNEW! Our Vegetarian Hot Sub! \nFreshly Grilled Portabellas with Grilled Onions, Bell Peppers And Swiss Cheese!");
    }
}

function subChoiceConfirm() {
    let subList = document.getElementById("userSubChoice"); //Getting List Of ALL Subs
    //let totalSubPrice = 0; //Total Order Price
    let baseSubPrice = 0; //Initializing Base Sub Price
    let userSubNumber = subList.options[subList.selectedIndex].text; //Chosen Sub
    let subHeroImage = document.getElementById("subHeroImage"); //Hero Image Instantiation
    //document.getElementById("userSubSelection").value = subList.options[subList.selectedIndex].text; //Setting Label Under Hero Image
    //alert("You Chose The: " + userSubNumber + " Sub!") //Alerting To User Sub Choice
    //If Cold Sub Is Chosen
    //alert choice, change hero image, Add Price
    if (userSubNumber === "(#1) BLT") { //#1 BLT
        // alert("Hello #1")
        //subHeroImage.src = "JMSubImages/1BLT.png"; //Changing Hero Image
        baseSubPrice = 6; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#2) Jersey Shore Favorite") { //#2 JS FAV
        //alert("Hello #2")
        //subHeroImage.src = "JMSubImages/2JSFav.png"; //Changing Hero Image
        baseSubPrice = 8; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#3) Ham + Provelone") { //#3 Ham
        //alert("Hello #3")
        //subHeroImage.src = "JMSubImages/3Ham.png"; //Changing Hero Image
        baseSubPrice = 8; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#4) Number 4") { //#4 
        //alert("Hello #4")
        //subHeroImage.src = "JMSubImages/4Spec.png"; //Changing Hero Image
        baseSubPrice = 8; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#5) Super Sub") { //#5 Super
        //alert("Hello #5")
        //subHeroImage.src = "JMSubImages/5Super.png"; //Changing Hero Image
        baseSubPrice = 9; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#6) Roast Beef + Provelone") { //#6 RB
        //alert("Hello #6")
        //subHeroImage.src = "JMSubImages/6RB.png"; //Changing Hero Image
        baseSubPrice = 8; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#7) Turkey + Provelone") { //#7 Turk
        //alert("Hello #7")
        //subHeroImage.src = "JMSubImages/7Turk.png"; //Changing Hero Image
        baseSubPrice = 8; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#8) Club Sub") { //#8 Club
        //alert("Hello #8")
        //subHeroImage.src = "JMSubImages/8Club.png"; //Changing Hero Image
        baseSubPrice = 9; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#9) Club Supreme") { //#9 Club Supreme
        //alert("Hello #9")
        //subHeroImage.src = "JMSubImages/9ClubSup.png"; //Changing Hero Image
        baseSubPrice = 10; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#10) Tuna") { //#10 Tuna
        //alert("Hello #10")
        //subHeroImage.src = "JMSubImages/10Tuna.png"; //Changing Hero Image
        baseSubPrice = 8; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#11) Stickball Special") { //#11 Stickball
        //alert("Hello #11")
        //subHeroImage.src = "JMSubImages/11StickBall.png"; //Changing Hero Image
        baseSubPrice = 9; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#12) Cancro Special") { //#12 Cancro
        //alert("Hello #12")
        //subHeroImage.src = "JMSubImages/12Cancro.png"; //Changing Hero Image
        baseSubPrice = 9; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#13) Italian") { //#13 Italian
        //alert("Hello #13")
        //subHeroImage.src = "JMSubImages/13Italian.png"; //Changing Hero Image
        baseSubPrice = 10; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#14) Veggie") { //#14 Veggie
        //alert("Hello #14")
        //subHeroImage.src = "JMSubImages/14Veggie.png"; //Changing Hero Image
        baseSubPrice = 6; //Setting Base Sub Price To Menu Price
    }
    //If Hot Sub Is Chosen
    if (userSubNumber === "(#16) CHX Philly") { //#16 CHX Philly
        //alert("Hello #16")
        //subHeroImage.src = "JMSubImages/HOTSUBS/16chxPhilly.png"; //Changing Hero Image
        baseSubPrice = 10; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#17) BEEF Philly") { //#17 BEEF Philly
        //alert("Hello #17")
        //subHeroImage.src = "JMSubImages/HOTSUBS/17beefPhilly.png"; //Changing Hero Image
        baseSubPrice = 10; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#26) CHX BACON RANCH") { //#26 CHX BACON RANCH
        //alert("Hello #26")
        //subHeroImage.src = "JMSubImages/HOTSUBS/26chxBaconRanch.png"; //Changing Hero Image
        baseSubPrice = 10; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#31) CHX CALI") { //#31 CALI
        //alert("Hello #31")
        //subHeroImage.src = "JMSubImages/HOTSUBS/31chxCali.png"; //Changing Hero Image
        baseSubPrice = 10; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#42) CHX Chipotle") { //#42 CHX CHIP
        //alert("Hello #42")
        //subHeroImage.src = "JMSubImages/HOTSUBS/42chxChip.png"; //Changing Hero Image
        baseSubPrice = 10; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#43) BEEF Chipotle") { //#43 BEEF CHIP
        //alert("Hello #43")
        //subHeroImage.src = "JMSubImages/HOTSUBS/43beefChip.png"; //Changing Hero Image
        baseSubPrice = 10; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#44) CHX Buffalo") { //#44 BUFF CHX
        //alert("Hello #44")
        //subHeroImage.src = "JMSubImages/HOTSUBS/44chxBuff.png"; //Changing Hero Image
        baseSubPrice = 11; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#55) CHX Kahuna") { //#55 CHX KAHUNA
        //alert("Hello #55")
        subHeroImage.src = "JMSubImages/HOTSUBS/55chxKahuna.png"; //Changing Hero Image
        baseSubPrice = 12; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(#56) BEEF Kahuna") { //#56 BEEF KAHUNA
        //alert("Hello #56")
        //subHeroImage.src = "JMSubImages/HOTSUBS/56beefKahuna.png"; //Changing Hero Image
        baseSubPrice = 12; //Setting Base Sub Price To Menu Price
    }
    if (userSubNumber === "(PORT) Portabella + Swiss") { //PORT SWISS
        //alert("Hello PORT")
        //subHeroImage.src = "JMSubImages/HOTSUBS/portabella.png"; //Changing Hero Image
        baseSubPrice = 12; //Setting Base Sub Price To Menu Price
    }
    //end of sub selection
    //alert(baseSubPrice); REMOVE
    //Move into Bread Selection, Size Selection
    let userBreadChoice = document.querySelector('input[name = "breadChoice"]:checked').value; //Getting Selected Bread Choice
    //If Bread Choice - Alert Bread Choice
    /*
    if (userBreadChoice == 'White') {
        alert("You Chose White Bread!") //White Bread
    }
    if (userBreadChoice == 'Wheat') {
        alert("You Chose Wheat Bread!") //Wheat Bread
    }
    if (userBreadChoice == 'roseParm') {
        alert("You Chose Rosemary Parmesean Bread!") //RP Bread
    }
    if (userBreadChoice == 'gFree') {
        alert("You Chose Gluten Free Bread! That Costs $1 Extra!") //Notify Extra Charge For GF Bread
        baseSubPrice += 1; //Adding GF Bread Cost TO Sub Base Price
    }
    */
    //alert(baseSubPrice); REMOVE
    //GETTING SIZE SELECTION
    let userBreadSize = document.querySelector('input[name = "subSize"]:checked').value;
    //alert(userBreadSize) Checking For Bread Input

    //If User Choses Hot Sub (AND MINI SIZE), OUTPUT ERROR, Ask To Change To Reg Or Giant, Change User Bread Size
    //Does Not Change Button Input, Append To Paragrah Tag
    
    while (userSubNumber === "(#16) CHX Philly" && userBreadSize === "Mini") { //#16 CHX Philly
        alert("oops! Hot Subs Cannot Be Ordered As Minis")
        let x = prompt("Would You Like To Change It To A Regular Or Giant? Enter R For Regular, G For Giant");
        if (x.toUpperCase() === 'R') {
            alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#17) BEEF Philly" && userBreadSize === "Mini") { //#17 BEEF Philly
        alert("oops! Hot Subs Cannot Be Ordered As Minis")
        let x = prompt("Would You Like To Change It To A Regular Or Giant? Enter R For Regular, G For Giant");
        if (x.toUpperCase() === 'R') {
            alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#26) CHX BACON RANCH" && userBreadSize === "Mini") { //#26 CHX BACON RANCH
        alert("oops! Hot Subs Cannot Be Ordered As Minis")
        let x = prompt("Would You Like To Change It To A Regular Or Giant? Enter R For Regular, G For Giant");
        if (x.toUpperCase() === 'R') {
            alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#31) CHX CALI" && userBreadSize === "Mini") { //#31 CALI
        alert("oops! Hot Subs Cannot Be Ordered As Minis")
        let x = prompt("Would You Like To Change It To A Regular Or Giant? Enter R For Regular, G For Giant");
        if (x.toUpperCase() === 'R') {
            alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#42) CHX Chipotle" && userBreadSize === "Mini") { //#42 CHX CHIP
        alert("oops! Hot Subs Cannot Be Ordered As Minis")
        let x = prompt("Would You Like To Change It To A Regular Or Giant? Enter R For Regular, G For Giant");
        if (x.toUpperCase() === 'R') {
            alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#43) BEEF Chipotle" && userBreadSize === "Mini") { //#43 BEEF CHIP
        alert("oops! Hot Subs Cannot Be Ordered As Minis")
        let x = prompt("Would You Like To Change It To A Regular Or Giant? Enter R For Regular, G For Giant");
        if (x.toUpperCase() === 'R') {
            alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#44) CHX Buffalo" && userBreadSize === "Mini") { //#44 BUFF CHX
        alert("oops! Hot Subs Cannot Be Ordered As Minis")
        let x = prompt("Would You Like To Change It To A Regular Or Giant? Enter R For Regular, G For Giant");
        if (x.toUpperCase() === 'R') {
            alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#55) CHX Kahuna" && userBreadSize === "Mini") { //#55 CHX KAHUNA
        alert("oops! Hot Subs Cannot Be Ordered As Minis")
        let x = prompt("Would You Like To Change It To A Regular Or Giant? Enter R For Regular, G For Giant");
        if (x.toUpperCase() === 'R') {
            alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#56) BEEF Kahuna" && userBreadSize === "Mini") { //#56 BEEF KAHUNA
        alert("oops! Hot Subs Cannot Be Ordered As Minis")
        let x = prompt("Would You Like To Change It To A Regular Or Giant? Enter R For Regular, G For Giant");
        if (x.toUpperCase() === 'R') {
            alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(PORT) Portabella + Swiss" && userBreadSize === "Mini") { //PORT SWISS
        alert("oops! Hot Subs Cannot Be Ordered As Minis")
        let x = prompt("Would You Like To Change It To A Regular Or Giant? Enter R For Regular, G For Giant");
        if (x.toUpperCase() === 'R') {
            alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!");
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    
    //End Of Error Checking For Sub Size, Sub Style
    //If Size Is Giant, baseSubPrice = (baseSubPrice x 2), If Mini, baseSubPrice = (baseSubPrice / 2);
    
    let giantBaseSubPrice = (baseSubPrice * 2);
    let miniBaseSubPrice = (baseSubPrice / 2);
    
    //Now Outputting Sub Base To User If Attributes of Sub Base Check Out.
    if (userBreadSize === "Mini") {
        alert("Your Sub Base: " + "\n Chosen Sub: " + userSubNumber + "\n Chosen Bread: " + userBreadChoice + "\n Chosen Size: " + userBreadSize + "\n Base Sub Price: " + "$" + miniBaseSubPrice);
        totalSubPrice = miniBaseSubPrice;
    }
    else if (userBreadSize === "Regular") {
        alert("Your Sub Base: " + "\n Chosen Sub: " + userSubNumber + "\n Chosen Bread: " + userBreadChoice + "\n Chosen Size: " + userBreadSize + "\n Base Sub Price: " + "$" + baseSubPrice);
        totalSubPrice = baseSubPrice;
    }
    else if (userBreadSize === "Giant") {
        alert("Your Sub Base: " + "\n Chosen Sub: " + userSubNumber + "\n Chosen Bread: " + userBreadChoice + "\n Chosen Size: " + userBreadSize + "\n Base Sub Price: " + "$" + giantBaseSubPrice);
        totalSubPrice = giantBaseSubPrice;
    }
    //alert(totalSubPrice);
    //alert(totalSubPrice);
}

function toppingsConfirm() {
    //alert(totalSubPrice); //Checking For Global Variable
    var myExtraToppings = []; //array of extra toppings
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked'); //getting all selected checkboxes
    let specialInstructions = document.getElementById("specialInstructionsInput").value;
    for(i=0; i<checkboxes.length; i++) {
        //pushing checkbox values into topping array
        myExtraToppings.push(checkboxes[i].value)
    }
    let p1 = .5;
    let p2 = 1.5;
    let p3 = 5;
    let p4 = 0;
    let p5 = 2;
    let p6 = 1;
    let p7 = 0;
    let p8 = 0;
    let xToppingsPrice = 0;
    if (document.getElementById("checkbox0").checked) {
        //totalSubPrice += p1;
        xToppingsPrice += p1;
    }
    if (document.getElementById("checkbox1").checked) {
        //totalSubPrice += p2;
        xToppingsPrice += p2;
    }
    if (document.getElementById("checkbox2").checked) {
        //totalSubPrice += p3;
        xToppingsPrice += p3;
    }
    if (document.getElementById("checkbox3").checked) {
        //totalSubPrice += p4;
        xToppingsPrice += p4;
    }
    if (document.getElementById("checkbox4").checked) {
        //totalSubPrice += p5;
        xToppingsPrice += p5;
    }
    if (document.getElementById("checkbox5").checked) {
        //totalSubPrice += p6;
        xToppingsPrice += p6;
    }
    if (document.getElementById("checkbox6").checked) {
        //totalSubPrice += p7;
        xToppingsPrice += p7;
    }
    if (document.getElementById("checkbox7").checked) {
        //totalSubPrice += p8;
        xToppingsPrice += p8;
    }
    alert("You have chosen the following toppings: " + "\n" + myExtraToppings.join(', ') + "\nYour Special Instructions: " + "\n" + specialInstructions + "\n\nAdditional Toppings Price: " + xToppingsPrice); //outputting selected toppings
    //alert("Additional Toppings Price: " + xToppingsPrice + "\nTotal Sub Price: " + totalSubPrice);
}

let FinalTotalPrice = totalSubPrice + xToppingsPrice;

//Showing / Hiding Additional Add Ons Section
function addAdditionalItems() {
    let y = prompt("Would You Like To Add Any Additional \nChips Drinks Or Cookies For $4? \nEnter Y for Yes, N For No");
    if (y.toUpperCase() === "Y") {
        document.getElementById("extraAdditionsSection").style.display = 'block';
        document.getElementById("checkFinalButton").style.backgroundColor = '#a2422b';
    }
    else if (y.toUpperCase() === "N") {
        document.getElementById("extraAdditionsSection").style.display = 'none';
        document.getElementById("checkFinalButton").style.backgroundColor = '#9A7B4F';
    }
    while (y.toUpperCase() !== "Y" && y.toUpperCase() !== "N") {
      alert("OOPS! TRY AGAIN!")
      document.getElementById("checkFinalButton").style.backgroundColor = '#9A7B4F';
      break;
    }
}
function confirmAdditions() {
    let chipList = document.getElementById("addChips");
    let drinkList = document.getElementById("addDrinks");
    let dessertList = document.getElementById("addCookie");
    let userChips = chipList.options[chipList.selectedIndex].text;
    let userDrink = drinkList.options[drinkList.selectedIndex].text;
    let userDessert = dessertList.options[dessertList.selectedIndex].text;
    alert("You Chose: " + userChips + ", " + "A " + userDrink + ", And A " + userDessert);
}

function finalSubCheck() {
    let subList = document.getElementById("userSubChoice"); //Getting List Of ALL Subs
    let userSubNumber = subList.options[subList.selectedIndex].text; //Chosen Sub
    let userBreadSize = document.querySelector('input[name = "subSize"]:checked').value;
    while (userSubNumber === "(#16) CHX Philly" && userBreadSize === "Mini") { //#16 CHX Philly
        alert("OOPS! Hot Subs Cannot Be Ordered As Minis, If This Was Changed In The Previus Section, Please Confirm Change Here For Final Order!");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#17) BEEF Philly" && userBreadSize === "Mini") { //#17 BEEF Philly
        alert("OOPS! Hot Subs Cannot Be Ordered As Minis, If This Was Changed In The Previus Section, Please Confirm Change Here For Final Order!");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#26) CHX BACON RANCH" && userBreadSize === "Mini") { //#26 CHX BACON RANCH
        alert("OOPS! Hot Subs Cannot Be Ordered As Minis, If This Was Changed In The Previus Section, Please Confirm Change Here For Final Order!");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#31) CHX CALI" && userBreadSize === "Mini") { //#31 CALI
        alert("OOPS! Hot Subs Cannot Be Ordered As Minis, If This Was Changed In The Previus Section, Please Confirm Change Here For Final Order!");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#42) CHX Chipotle" && userBreadSize === "Mini") { //#42 CHX CHIP
        alert("OOPS! Hot Subs Cannot Be Ordered As Minis, If This Was Changed In The Previus Section, Please Confirm Change Here For Final Order!");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#43) BEEF Chipotle" && userBreadSize === "Mini") { //#43 BEEF CHIP
        alert("OOPS! Hot Subs Cannot Be Ordered As Minis, If This Was Changed In The Previus Section, Please Confirm Change Here For Final Order!");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#44) CHX Buffalo" && userBreadSize === "Mini") { //#44 BUFF CHX
        alert("OOPS! Hot Subs Cannot Be Ordered As Minis, If This Was Changed In The Previus Section, Please Confirm Change Here For Final Order!");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#55) CHX Kahuna" && userBreadSize === "Mini") { //#55 CHX KAHUNA
        alert("OOPS! Hot Subs Cannot Be Ordered As Minis, If This Was Changed In The Previus Section, Please Confirm Change Here For Final Order!");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#56) BEEF Kahuna" && userBreadSize === "Mini") { //#56 BEEF KAHUNA
        alert("OOPS! Hot Subs Cannot Be Ordered As Minis, If This Was Changed In The Previus Section, Please Confirm Change Here For Final Order!");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(PORT) Portabella + Swiss" && userBreadSize === "Mini") { //PORT SWISS
        alert("OOPS! Hot Subs Cannot Be Ordered As Minis, If This Was Changed In The Previus Section, Please Confirm Change Here For Final Order!");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!");
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    let userBreadChoice = document.querySelector('input[name = "breadChoice"]:checked').value; //Getting Selected Bread Choice
    var myExtraToppings = []; //array of extra toppings
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked'); //getting all selected checkboxes
    let specialInstructions = document.getElementById("specialInstructionsInput").value;
    for(i=0; i<checkboxes.length; i++) {
        //pushing checkbox values into topping array
        myExtraToppings.push(checkboxes[i].value)
    }
    let p1 = .5;
    let p2 = 1.5;
    let p3 = 5;
    let p4 = 0;
    let p5 = 2;
    let p6 = 1;
    let p7 = 0;
    let p8 = 0;
    let xToppingsPrice = 0;
    if (document.getElementById("checkbox0").checked) {
        //totalSubPrice += p1;
        xToppingsPrice += p1;
    }
    if (document.getElementById("checkbox1").checked) {
        //totalSubPrice += p2;
        xToppingsPrice += p2;
    }
    if (document.getElementById("checkbox2").checked) {
        //totalSubPrice += p3;
        xToppingsPrice += p3;
    }
    if (document.getElementById("checkbox3").checked) {
        //totalSubPrice += p4;
        xToppingsPrice += p4;
    }
    if (document.getElementById("checkbox4").checked) {
        //totalSubPrice += p5;
        xToppingsPrice += p5;
    }
    if (document.getElementById("checkbox5").checked) {
        //totalSubPrice += p6;
        xToppingsPrice += p6;
    }
    if (document.getElementById("checkbox6").checked) {
        //totalSubPrice += p7;
        xToppingsPrice += p7;
    }
    if (document.getElementById("checkbox7").checked) {
        //totalSubPrice += p8;
        xToppingsPrice += p8;
    }
    let FinalTotalPrice = totalSubPrice + xToppingsPrice; //Final Price
    //Getting Additional Item Inputs If Any.
    let chipList = document.getElementById("addChips");
    let drinkList = document.getElementById("addDrinks");
    let dessertList = document.getElementById("addCookie");
    let userChips = chipList.options[chipList.selectedIndex].text;
    let userDrink = drinkList.options[drinkList.selectedIndex].text;
    let userDessert = dessertList.options[dessertList.selectedIndex].text;

    if (document.getElementById("extraAdditionsSection").style.display == 'block') {
        FinalTotalPrice += 4;
        alert("Your Final Sub: " +
        "\nYour Sub Base: " + userSubNumber +
        "\nYour Bread Choice: " + userBreadChoice +
        "\nYour Chosen Size: " + userBreadSize + 
        "\nYou have chosen the following toppings: " + "\n" + myExtraToppings.join(', ') + 
        "\nYour Special Instructions: " + "\n" + specialInstructions +
        "\nChips: " + userChips +
        "\nDrink: " + userDrink +
        "\nDessert: " + userDessert +
        "\n\nAdditional Toppings Price: " + "$" + xToppingsPrice + 
        "\nTotal Sub Price: " + "$" + FinalTotalPrice); //outputting selected toppings);
    }
    else if (document.getElementById("extraAdditionsSection").style.display == 'none') {
        alert("Your Final Sub: " +
        "\nYour Sub Base: " + userSubNumber +
        "\nYour Bread Choice: " + userBreadChoice +
        "\nYour Chosen Size: " + userBreadSize + 
        "\nYou have chosen the following toppings: " + "\n" + myExtraToppings.join(', ') + 
        "\nYour Special Instructions: " + "\n" + specialInstructions +
        "\n\nAdditional Toppings Price: " + "$" + xToppingsPrice + 
        "\nTotal Sub Price: " + "$" + FinalTotalPrice); //outputting selected toppings);
    }
    else {
        alert("Your Final Sub: " +
        "\nYour Sub Base: " + userSubNumber +
        "\nYour Bread Choice: " + userBreadChoice +
        "\nYour Chosen Size: " + userBreadSize + 
        "\nYou have chosen the following toppings: " + "\n" + myExtraToppings.join(', ') + 
        "\nYour Special Instructions: " + "\n" + specialInstructions +
        "\n\nAdditional Toppings Price: " + "$" + xToppingsPrice + 
        "\nTotal Sub Price: " + "$" + FinalTotalPrice); //outputting selected toppings);
    }
}
function orderCheckOut() {
    let subList = document.getElementById("userSubChoice"); //Getting List Of ALL Subs
    let userSubNumber = subList.options[subList.selectedIndex].text; //Chosen Sub
    let userBreadChoice = document.querySelector('input[name = "breadChoice"]:checked').value; //Getting Selected Bread Choice
    let p1 = .5;
    let p2 = 1.5;
    let p3 = 5;
    let p4 = 0;
    let p5 = 2;
    let p6 = 1;
    let p7 = 0;
    let p8 = 0;
    if (document.getElementById("checkbox0").checked) {
        //totalSubPrice += p1;
        xToppingsPrice += p1;
    }
    if (document.getElementById("checkbox1").checked) {
        //totalSubPrice += p2;
        xToppingsPrice += p2;
    }
    if (document.getElementById("checkbox2").checked) {
        //totalSubPrice += p3;
        xToppingsPrice += p3;
    }
    if (document.getElementById("checkbox3").checked) {
        //totalSubPrice += p4;
        xToppingsPrice += p4;
    }
    if (document.getElementById("checkbox4").checked) {
        //totalSubPrice += p5;
        xToppingsPrice += p5;
    }
    if (document.getElementById("checkbox5").checked) {
        //totalSubPrice += p6;
        xToppingsPrice += p6;
    }
    if (document.getElementById("checkbox6").checked) {
        //totalSubPrice += p7;
        xToppingsPrice += p7;
    }
    if (document.getElementById("checkbox7").checked) {
        //totalSubPrice += p8;
        xToppingsPrice += p8;
    }
    let userBreadSize = document.querySelector('input[name = "subSize"]:checked').value;
    while (userSubNumber === "(#16) CHX Philly" && userBreadSize === "Mini") { //#16 CHX Philly
        alert("CONFIRM PREVIOUS SIZE SELECTION CHANGE FOR HOT SUB");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#17) BEEF Philly" && userBreadSize === "Mini") { //#17 BEEF Philly
        alert("CONFIRM PREVIOUS SIZE SELECTION CHANGE FOR HOT SUB");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#26) CHX BACON RANCH" && userBreadSize === "Mini") { //#26 CHX BACON RANCH
        alert("CONFIRM PREVIOUS SIZE SELECTION CHANGE FOR HOT SUB");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#31) CHX CALI" && userBreadSize === "Mini") { //#31 CALI
        alert("CONFIRM PREVIOUS SIZE SELECTION CHANGE FOR HOT SUB");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#42) CHX Chipotle" && userBreadSize === "Mini") { //#42 CHX CHIP
        alert("CONFIRM PREVIOUS SIZE SELECTION CHANGE FOR HOT SUB");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#43) BEEF Chipotle" && userBreadSize === "Mini") { //#43 BEEF CHIP
        alert("CONFIRM PREVIOUS SIZE SELECTION CHANGE FOR HOT SUB");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#44) CHX Buffalo" && userBreadSize === "Mini") { //#44 BUFF CHX
        alert("CONFIRM PREVIOUS SIZE SELECTION CHANGE FOR HOT SUB");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#55) CHX Kahuna" && userBreadSize === "Mini") { //#55 CHX KAHUNA
        alert("CONFIRM PREVIOUS SIZE SELECTION CHANGE FOR HOT SUB");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(#56) BEEF Kahuna" && userBreadSize === "Mini") { //#56 BEEF KAHUNA
        alert("CONFIRM PREVIOUS SIZE SELECTION CHANGE FOR HOT SUB");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!")
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    while (userSubNumber === "(PORT) Portabella + Swiss" && userBreadSize === "Mini") { //PORT SWISS
        alert("CONFIRM PREVIOUS SIZE SELECTION CHANGE FOR HOT SUB");
        let x = prompt("Please Confirm Size, Enter R For Regular, G For Giant" + "\nIf Selection Different From Above, Please Refresh The Page And Try Again!");
        if (x.toUpperCase() === 'R') {
            //alert("Size Changed To Regular! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Regular";
            //alert(userBreadSize);
        }
        else if (x.toUpperCase() === 'G') {
            //alert("Size Changed To Giant! \n(Button Will Not Change) \nSub Size Recorded")
            userBreadSize = "Giant";
            //alert(userBreadSize);
        }
        else {
            alert("OOPS, Your Size Was Not Recorded, Please Try Changing It In The Size Selection Section!");
            alert(userBreadSize + " N/A For Hot Subs! \n we will not complete your order.");
            break;
        }
    }
    FinalTotalPrice = xToppingsPrice + totalSubPrice;
    var myExtraToppings = []; //array of extra toppings
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked'); //getting all selected checkboxes
    let specialInstructions = document.getElementById("specialInstructionsInput").value;
    for(i=0; i<checkboxes.length; i++) {
        //pushing checkbox values into topping array
        myExtraToppings.push(checkboxes[i].value)
    }
    //CREATE OBJECT HERE
    if (document.getElementById("extraAdditionsSection").style.display == 'block') {
        let chipList = document.getElementById("addChips");
        let drinkList = document.getElementById("addDrinks");
        let dessertList = document.getElementById("addCookie");
        let userChips = chipList.options[chipList.selectedIndex].text;
        let userDrink = drinkList.options[drinkList.selectedIndex].text;
        let userDessert = dessertList.options[dessertList.selectedIndex].text;
        FinalTotalPrice += 4;
        alert("Your Order: " +
        "\nSub: " + userSubNumber +
        "\nBread: " + userBreadChoice +
        "\nSize: " + userBreadSize +
        "\n\nToppings Price: " + xToppingsPrice +
        "\nAdditions Price: $4" +
        "\nFinal Order Price: " + FinalTotalPrice);
        let checkOutPrompt = prompt("Are You Satisfied With This Sub Order? \nWould You Like To Continue to CheckOut? \nEnter Y for Yes, N if Dissatisfied.");
        if (checkOutPrompt.toUpperCase() === 'Y') {
            alert("Your Order Has Been Placed!" +
            "\nYour Final Order: " +
            "\nSub: " + userSubNumber +
            "\nBread: " + userBreadChoice +
            "\nSize: " + userBreadSize +
            "\nToppings: " + myExtraToppings.join(', ') +
            "\nYour Special Instructions: " + specialInstructions +
            "\nAdditions: " + userChips + ", " + userDrink + ", " + userDessert +
            "\n\nToppings Price: " + xToppingsPrice +
            "\nFinal Order Price: " + FinalTotalPrice);
            //SETTING THE Sub Order Object Values = to final selections
            const subOrder = {
                subChoiceInput: userSubNumber,
                breadChoiceInput: userBreadChoice,
                sizeChoiceInput: userBreadSize,
                extraToppingsInput: myExtraToppings.join(', '),
                specialInstructionsInput: specialInstructions,
                chipsInput: userChips,
                drinksInput: userDrink,
                dessertInput: userDessert,
                toppingsPrice: xToppingsPrice,
                finalOrderPrice: FinalTotalPrice
            }
            /*
            subOrder.subChoiceInput = userSubNumber.value;
            subOrder.breadChoiceInput = userBreadChoice.value;
            subOrder.sizeChoiceInput = userBreadSize.value;
            subOrder.extraToppingsInput = myExtraToppings.join(', ');
            subOrder.specialInstructionsInput = specialInstructions.value;
            subOrder.chipsInput = userChips.value;
            subOrder.drinksInput = userDrink.value;
            subOrder.dessertInput = userDessert.value;
            subOrder.toppingsPrice = xToppingsPrice.value;
            subOrder.finalOrderPrice = FinalTotalPrice.value;
            */
            let subOrderOBJ = JSON.stringify(subOrder);
            localStorage.setItem("subOrders", subOrderOBJ);
            console.warn('added', {subOrders}); //Warning In Console
            subOrders.push(subOrderOBJ);
            //alert(subOrderOBJ);     
        }
        else if (checkOutPrompt.toUpperCase() ==='N') {
            alert("Sub Order Not Recorded. \nMake Selected Changes.");
        }
        else {
            alert("OOPS ERROR! \nSub Order Not Recorded.");
        }
    }
    else {
        alert("Your Order: " +
        "\nSub: " + userSubNumber +
        "\nBread: " + userBreadChoice +
        "\nSize: " + userBreadSize +
        "\n\nToppings Price: " + xToppingsPrice +
        "\nFinal Order Price: " + FinalTotalPrice);
        let checkOutPrompt = prompt("Are You Satisfied With This Sub Order? \nWould You Like To Continue to CheckOut? \nEnter Y for Yes, N if Dissatisfied.");
        if (checkOutPrompt.toUpperCase() === 'Y') {
            alert("Your Order Has Been Placed!" +
            "\nYour Final Order: " +
            "\nSub: " + userSubNumber +
            "\nBread: " + userBreadChoice +
            "\nSize: " + userBreadSize +
            "\nExtra Toppings: " + myExtraToppings.join(', ') +
            "\nYour Special Instructions: " + specialInstructions +
            "\nAdditions: No Extra Additions" +
            "\n\nToppings Price: " + xToppingsPrice +
            "\nFinal Order Price: " + FinalTotalPrice);
            //CREATE OBJECT
            const subOrder = {
                subChoiceInput: userSubNumber,
                breadChoiceInput: userBreadChoice,
                sizeChoiceInput: userBreadSize,
                extraToppingsInput: myExtraToppings.join(', '),
                specialInstructionsInput: specialInstructions,
                toppingsPrice: xToppingsPrice,
                finalOrderPrice: FinalTotalPrice
            }
            let subOrderOBJ = JSON.stringify(subOrder);
            localStorage.setItem("subOrders", subOrderOBJ);
            console.warn('added', {subOrders}); //Warning In Console
            subOrders.push(subOrderOBJ);
            //alert(subOrderOBJ);  
        }
        else if (checkOutPrompt.toUpperCase() ==='N') {
            alert("Sub Order Not Recorded. \nMake Selected Changes.");
        }
        else {
            alert("OOPS ERROR! \nSub Order Not Recorded.");
        }
    }
}

//FINALIZE CREATING OBJECT, STORE OBJECT IN LOCAL STORAGE