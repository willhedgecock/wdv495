let chiliIngredientDisplay=document.querySelector("#chiliIngredientDisplay"),chiliInstructionDisplay=document.querySelector("#chiliInstructionDisplay"),eggrollIngredientDisplay=document.querySelector("#eggrollIngredientDisplay"),eggrollInstructionDisplay=document.querySelector("#eggrollInstructionDisplay"),pieIngredientDisplay=document.querySelector("#pieIngredientDisplay"),pieInstructionDisplay=document.querySelector("#pieInstructionDisplay"),chiliRecipe={difficulty:"Easy",servings:6,preparationTime:"25 minutes",cookingTime:"6 hours",ingredients:["cooking oil","onion","chopped peppers","chili powder","hot chili powder (optional)","ground beef or chicken","red beans","kidney beans","tomato puree","tomato sauce","shredded cheese (optional)","sour cream (optional)"],ingredientUnits:["tbsp.","cup(s)","cup(s)","tbsp.","tsp.","lb.","can(s)","can(s)","can(s)","can(s)","cup(s)","cup(s)"],ingredientUnitAmt:[2,1,1,4,1,1,2,2,2,2,1,.5],instructions:["Heat cooking oil in 2 quart skillet","Saute onions and peppers for 5 minutes","Add spices and stir for 30 seconds","Add meat and cook until browned for approximately 15 minutes","Pour contents of skillet into 3 quart crock pot","Rinse beans and place in crock pot","Open and pour tomato puree and sauce into crock pot","Cover crockpot and cook on low for 6 hours","Serve into individual bowls and top with sour cream and cheese"]};function displayChiliInfo(){document.querySelector("#chiliServings").innerHTML=chiliRecipe.servings,document.querySelector("#chiliPrepTime").innerHTML=chiliRecipe.preparationTime,document.querySelector("#chiliCookTime").innerHTML=chiliRecipe.cookingTime,document.querySelector("#chiliDifficulty").innerHTML=chiliRecipe.difficulty}function displayChili(){chiliIngredientDisplay.innerHTML=" ";for(let e=0;e<chiliRecipe.ingredients.length;e++)chiliIngredientDisplay.innerHTML+="<p>"+chiliRecipe.ingredientUnitAmt[e]+" "+chiliRecipe.ingredientUnits[e]+" "+chiliRecipe.ingredients[e]+"</p>";chiliIngredientDisplay.style.display="block",document.querySelector("#getChili").style.marginBottom="15px",document.querySelector(".instructionsButtons").style.display="block",document.querySelector("#recipe-size").style.display="block",document.querySelector("#half-recipe").checked=!1,document.querySelector("#default-recipe").checked=!1,document.querySelector("#double-recipe").checked=!1}function hideChili(){chiliIngredientDisplay.style.display="none",chiliIngredientDisplay.innerHTML=" ",document.querySelector("#half-recipe").checked=!1,document.querySelector("#default-recipe").checked=!1,document.querySelector("#double-recipe").checked=!1,document.querySelector("#recipe-size").style.display="none",document.querySelector(".instructionsButtons").style.display="none",chiliInstructionDisplay.style.display="none"}function displayChiliInstructions(){let i="";for(let e=0;e<chiliRecipe.instructions.length;e++)i+="<li>"+chiliRecipe.instructions[e]+"</li><br>";chiliInstructionDisplay.innerHTML=i,chiliInstructionDisplay.style.listStylePosition="inside",chiliInstructionDisplay.style.display="block"}function hideChiliInstructions(){chiliInstructionDisplay.style.display="none"}document.querySelector("#getChili").addEventListener("click",displayChili),document.querySelector("#hideChili").addEventListener("click",hideChili),document.querySelector("#half-recipe").addEventListener("click",function(){chiliIngredientDisplay.innerHTML=" ";for(let e=0;e<chiliRecipe.ingredients.length;e++)chiliIngredientDisplay.innerHTML+="<p>"+chiliRecipe.ingredientUnitAmt[e]/2+" "+chiliRecipe.ingredientUnits[e]+" "+chiliRecipe.ingredients[e]+"</p>";document.querySelector("#chiliServings").innerHTML=chiliRecipe.servings/2}),document.querySelector("#default-recipe").addEventListener("click",function(){chiliIngredientDisplay.innerHTML=" ";for(let e=0;e<chiliRecipe.ingredients.length;e++)chiliIngredientDisplay.innerHTML+="<p>"+chiliRecipe.ingredientUnitAmt[e]+" "+chiliRecipe.ingredientUnits[e]+" "+chiliRecipe.ingredients[e]+"</p>";document.querySelector("#chiliServings").innerHTML=chiliRecipe.servings}),document.querySelector("#double-recipe").addEventListener("click",function(){chiliIngredientDisplay.innerHTML=" ";for(let e=0;e<chiliRecipe.ingredients.length;e++)chiliIngredientDisplay.innerHTML+="<p>"+2*chiliRecipe.ingredientUnitAmt[e]+" "+chiliRecipe.ingredientUnits[e]+" "+chiliRecipe.ingredients[e]+"</p>";document.querySelector("#chiliServings").innerHTML=2*chiliRecipe.servings}),document.querySelector("#getChiliInstructions").addEventListener("click",displayChiliInstructions),document.querySelector("#hideChiliInstructions").addEventListener("click",hideChiliInstructions);let eggrollRecipe={difficulty:"Medium",servings:5,preparationTime:"20 minutes",cookingTime:"12 minutes",ingredients:["vegetable oil","boneless chicken breast half","minced green onion","minced red bell pepper","frozen corn kernels","black beans, rinsed and drained","frozen spinach, thawed and drained","diced jalapeno peppers","minced fresh parsley","ground cumin","chili powder","salt","ground cayenne pepper","shredded Monterey Jack cheese","(6 inch) flour tortillas","oil for deep frying"],ingredientUnits:["tbsp.","","tbsp.","tbsp.","cup(s)","cup(s)","tbsp.","tbsp.","tbsp.","tsp.","tsp.","tsp.","pinch","cup(s)","","quart"],ingredientUnitAmt:[2,1,2,2,.33,.25,2,2,.5,.5,.5,.33,1,.75,5,1],instructions:["Rub 1 tablespoon vegetable oil over chicken breast. In a medium saucepan over medium heat, cook chicken approximately 5 minutes per side, until meat is no longer pink and juices run clear. Remove from heat and set aside","Heat remaining 1 tablespoon vegetable oil in a medium saucepan over medium heat. Stir in green onion and red pepper. Cook and stir 5 minutes, until tender","Dice chicken and mix into the pan with onion and red pepper. Mix in corn, black beans, spinach, jalapeno peppers, parsley, cumin, chili powder, salt and cayenne pepper. Cook and stir 5 minutes, until well blended and tender. Remove from heat and stir in Monterey Jack cheese so that it melts","Wrap tortillas with a clean, lightly moist cloth. Microwave on high approximately 1 minute, or until hot and pliable","Spoon even amounts of the mixture into each tortilla. Fold ends of tortillas, then roll tightly around mixture. Secure with toothpicks. Arrange in a medium dish, cover with plastic, and place in the freezer. Freeze at least 4 hours","In a large, deep skillet, heat oil for deep frying to 375 degrees F (190 degrees C). Deep fry frozen, stuffed tortillas 10 minutes each, or until dark golden brown. Drain on paper towels before serving"]};function displayEggrolls(){eggrollIngredientDisplay.innerHTML=" ";for(let e=0;e<eggrollRecipe.ingredients.length;e++)eggrollIngredientDisplay.innerHTML+="<p>"+eggrollRecipe.ingredientUnitAmt[e]+" "+eggrollRecipe.ingredientUnits[e]+" "+eggrollRecipe.ingredients[e]+"</p>";eggrollIngredientDisplay.style.display="block",document.querySelector("#getEggroll").style.marginBottom="15px",document.querySelector(".eggrollInstructionsButtons").style.display="block",document.querySelector("#eggroll-recipe-size").style.display="block",document.querySelector("#eggroll-half-recipe").checked=!1,document.querySelector("#eggroll-default-recipe").checked=!1,document.querySelector("#eggroll-double-recipe").checked=!1}function hideEggrolls(){eggrollIngredientDisplay.style.display="none",eggrollIngredientDisplay.innerHTML=" ",document.querySelector("#eggroll-half-recipe").checked=!1,document.querySelector("#eggroll-default-recipe").checked=!1,document.querySelector("#eggroll-double-recipe").checked=!1,document.querySelector("#eggroll-recipe-size").style.display="none",document.querySelector(".eggrollInstructionsButtons").style.display="none",eggrollInstructionDisplay.style.display="none"}function displayEggrollInstructions(){let i="";for(let e=0;e<eggrollRecipe.instructions.length;e++)i+="<li>"+eggrollRecipe.instructions[e]+"</li><br>";eggrollInstructionDisplay.innerHTML=i,eggrollInstructionDisplay.style.listStylePosition="inside",eggrollInstructionDisplay.style.display="block"}function hideEggrollInstructions(){eggrollInstructionDisplay.style.display="none"}document.querySelector("#eggrollServings").innerHTML=eggrollRecipe.servings,document.querySelector("#eggrollPrepTime").innerHTML=eggrollRecipe.preparationTime,document.querySelector("#eggrollCookTime").innerHTML=eggrollRecipe.cookingTime,document.querySelector("#eggrollDifficulty").innerHTML=eggrollRecipe.difficulty,document.querySelector("#getEggroll").addEventListener("click",displayEggrolls),document.querySelector("#hideEggroll").addEventListener("click",hideEggrolls),document.querySelector("#eggroll-half-recipe").addEventListener("click",function(){eggrollIngredientDisplay.innerHTML=" ";for(let e=0;e<eggrollRecipe.ingredients.length;e++)eggrollIngredientDisplay.innerHTML+="<p>"+eggrollRecipe.ingredientUnitAmt[e]/2+" "+eggrollRecipe.ingredientUnits[e]+" "+eggrollRecipe.ingredients[e]+"</p>";document.querySelector("#eggrollServings").innerHTML=eggrollRecipe.servings/2}),document.querySelector("#eggroll-default-recipe").addEventListener("click",function(){eggrollIngredientDisplay.innerHTML=" ";for(let e=0;e<eggrollRecipe.ingredients.length;e++)eggrollIngredientDisplay.innerHTML+="<p>"+eggrollRecipe.ingredientUnitAmt[e]+" "+eggrollRecipe.ingredientUnits[e]+" "+eggrollRecipe.ingredients[e]+"</p>";document.querySelector("#eggrollServings").innerHTML=eggrollRecipe.servings}),document.querySelector("#eggroll-double-recipe").addEventListener("click",function(){eggrollIngredientDisplay.innerHTML=" ";for(let e=0;e<eggrollRecipe.ingredients.length;e++)eggrollIngredientDisplay.innerHTML+="<p>"+2*eggrollRecipe.ingredientUnitAmt[e]+" "+eggrollRecipe.ingredientUnits[e]+" "+eggrollRecipe.ingredients[e]+"</p>";document.querySelector("#eggrollServings").innerHTML=2*eggrollRecipe.servings}),document.querySelector("#getEggrollInstructions").addEventListener("click",displayEggrollInstructions),document.querySelector("#hideEggrollInstructions").addEventListener("click",hideEggrollInstructions);let pbPieRecipe={difficulty:"Easy",servings:8,preparationTime:"15 minutes",cookingTime:"10 minutes",coolOffTime:"2 hour(s)",ingredients:["prepared graham cracker crust","package cream cheese, softened","creamy peanut butter","confectioners' sugar","frozen whipped topping, thawed","mini chocolate covered peanut butter cups"],ingredientUnits:[" - 9 inch","ounce(s)","cup(s)","cup(s)","ounce(s)",""],ingredientUnitAmt:[1,8,.5,.5,16,15],instructions:["Mix the cream cheese, confectioners' sugar and peanut butter together until smooth. Fold in 1/2 of the whipped topping","Spoon the mixture into the graham cracker crust","Place the remaining whipped topping over the top of the peanut butter mixture and garnish with the peanut butter cups","Chill for at least 2 hours or overnight before serving"]};function displayPie(){pieIngredientDisplay.innerHTML=" ";for(let e=0;e<pbPieRecipe.ingredients.length;e++)pieIngredientDisplay.innerHTML+="<p>"+pbPieRecipe.ingredientUnitAmt[e]+" "+pbPieRecipe.ingredientUnits[e]+" "+pbPieRecipe.ingredients[e]+"</p>";pieIngredientDisplay.style.display="block",document.querySelector("#getPie").style.marginBottom="15px",document.querySelector(".pieInstructionsButtons").style.display="block",document.querySelector("#pie-recipe-size").style.display="block",document.querySelector("#pie-half-recipe").checked=!1,document.querySelector("#pie-default-recipe").checked=!1,document.querySelector("#pie-double-recipe").checked=!1}function hidePie(){pieIngredientDisplay.style.display="none",pieIngredientDisplay.innerHTML=" ",document.querySelector("#pie-half-recipe").checked=!1,document.querySelector("#pie-default-recipe").checked=!1,document.querySelector("#pie-double-recipe").checked=!1,document.querySelector("#pie-recipe-size").style.display="none",document.querySelector(".pieInstructionsButtons").style.display="none",pieInstructionDisplay.style.display="none"}function displayPieInstructions(){let i="";for(let e=0;e<pbPieRecipe.instructions.length;e++)i+="<li>"+pbPieRecipe.instructions[e]+"</li><br>";pieInstructionDisplay.innerHTML=i,pieInstructionDisplay.style.listStylePosition="inside",pieInstructionDisplay.style.display="block"}function hidePieInstructions(){pieInstructionDisplay.style.display="none"}document.querySelector("#pieServings").innerHTML=pbPieRecipe.servings,document.querySelector("#piePrepTime").innerHTML=pbPieRecipe.preparationTime,document.querySelector("#pieCookTime").innerHTML=pbPieRecipe.cookingTime,document.querySelector("#pieCoolOffTime").innerHTML=pbPieRecipe.coolOffTime,document.querySelector("#pieDifficulty").innerHTML=pbPieRecipe.difficulty,document.querySelector("#getPie").addEventListener("click",displayPie),document.querySelector("#hidePie").addEventListener("click",hidePie),document.querySelector("#pie-half-recipe").addEventListener("click",function(){pieIngredientDisplay.innerHTML=" ";for(let e=0;e<pbPieRecipe.ingredients.length;e++)pieIngredientDisplay.innerHTML+="<p>"+pbPieRecipe.ingredientUnitAmt[e]/2+" "+pbPieRecipe.ingredientUnits[e]+" "+pbPieRecipe.ingredients[e]+"</p>";document.querySelector("#pieServings").innerHTML=pbPieRecipe.servings/2}),document.querySelector("#pie-default-recipe").addEventListener("click",function(){pieIngredientDisplay.innerHTML=" ";for(let e=0;e<pbPieRecipe.ingredients.length;e++)pieIngredientDisplay.innerHTML+="<p>"+pbPieRecipe.ingredientUnitAmt[e]+" "+pbPieRecipe.ingredientUnits[e]+" "+pbPieRecipe.ingredients[e]+"</p>";document.querySelector("#pieServings").innerHTML=pbPieRecipe.servings}),document.querySelector("#pie-double-recipe").addEventListener("click",function(){pieIngredientDisplay.innerHTML=" ";for(let e=0;e<pbPieRecipe.ingredients.length;e++)pieIngredientDisplay.innerHTML+="<p>"+2*pbPieRecipe.ingredientUnitAmt[e]+" "+pbPieRecipe.ingredientUnits[e]+" "+pbPieRecipe.ingredients[e]+"</p>";document.querySelector("#pieServings").innerHTML=2*pbPieRecipe.servings}),document.querySelector("#getPieInstructions").addEventListener("click",displayPieInstructions),document.querySelector("#hidePieInstructions").addEventListener("click",hidePieInstructions),console.log("This is a test"),console.log("This is also a test"),console.log("this is a demonstration"),console.log("This is another test on a different file"),alert("This is another test in an alert"),console.log("demonstration");