function osas(){
    var element = document.createElement("h1")
    var main = document.getElementById("main")
    main.appendChild(element);

    textH = document.createTextNode("Skills Acquisition Development Unit");
    element.appendChild(textH);

    var para = document.createElement("p");
    var para2 = document.createElement("p");
    var para3 = document.createElement("p");
    var elementH = document.createElement("h1");
    main.appendChild(para);
    main.appendChild(para2);
    main.appendChild(elementH);
    main.appendChild(para3);
    
    var text = document.createTextNode(" The unit is charged with the responsibility of empowering Women and young adults economically, through Long-term Skills Acquisition trainings for financial sustainability. The target is to ensure financial stability of Women Resident as contributors towards economic growth. One of the major initiatives taken by the Unit, was the expansion of the scope of the programmes to include the production of indudtrial Gas Cooker and Oven buy the Welding and Fabrication Department, for the purpose of technology advancment being directed of financial proficiency. ");
    var textH = document.createTextNode("So far, this unit controls a total of 20 Skills Acquisition Centres where no fewer than 20 vocation are taught tuitio-free, to ensure lagos state Government's goal on Poverty reduction becomes a veritable tool of societal change. The ministry has continued to maximize the available resources for the exponential populace, in order to achieve financial. In collaboration with Lagos State Technical and Vocational Board(LASTVEB), the Ministry reviewed the training syllabus which led to the award of highlyrecognized certificateof competence to Graduates of these Centres. this has further created a seamles movementfpr interested Graduates of Skills centres who are willing to further their vocational training up to Tertiary instituion to proceed without inhibition ");
    var textHhh = document.createTextNode("Poverty Alleviation Department");
    var textHh = document.createTextNode("This Department is charged with improvement on the living conditions of the indigent and vulnerable citizenry, through social intervention programmes as;Livelihood support Initiatives (MESI) and the Womwn-in-Agriculture Initiative The Micro - Enterprise Support Initiative is being organized four times as annual programme, which adequately caters for the needs of Lagos women residents. Beneficiaries of this Initiativeare empowered working tools as Milling Machines, Sewing Machine, Professional Hair dryer, Barbing with Sterilizer and Generators");
    para.appendChild(text);
    para2.appendChild(textH);
    elementH.appendChild(textHhh);
    para3.appendChild(textHh);
    var hAttributr = document.createAttribute("id");
    hAttributr.value="paint";
    element.setAttributeNode(hAttributr);

    var attribute = document.createAttribute("id");
    attribute.value = "test1";
    para.setAttributeNode(attribute);
    var atribute22 = document.createAttribute("id");
    atribute22.value = "test2";
    para2.setAttributeNode(atribute22);
    var atribute3 = document.createAttribute("id");
    atribute3.value = "test4";
    elementH.setAttributeNode(atribute3);
    var atribute2 = document.createAttribute("id");
    atribute2.value = "test3";
    para3.setAttributeNode(atribute2);
    var butt = document.getElementById("butt");
    butt.style.display="none"
    var button = document.createElement("button");
    main.appendChild(button);
    var textB = document.createTextNode("Close section");
}
