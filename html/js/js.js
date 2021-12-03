obj = [["","1","2","3","4","5","6"],["Пн","Лин. Алгебра","Мат. Анализ","-","Кураторский час","-","-"],["Вт","-","Алгоритмы и структуры данных","Алгоритмы и структуры данных","Мат. Анализ","-","-"],["Ср","Лин. Алгебра","Лин. Алгебра","Анг.","-","-","-"],["Чт","-","Мат. Анализ","Мат. Анализ","Англ.","-","-"],["Пт","Топология","Топология","Межфак","-","-","-"],["Сб","-","-","-","-","-","-"],["Вс","-","-","-","-","-","-"]];
obj1 = [["Лин. Алгебра","Мат. Анализ","-","Кураторский час","-","-"],["-","Алгоритмы и структуры данных","Алгоритмы и структуры данных","Мат. Анализ","-","-"],["Лин. Алгебра","Лин. Алгебра","Анг.","-","-","-"],["-","Мат. Анализ","Мат. Анализ","Англ.","-","-"],["Топология","Топология","Межфак","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"]];



timetable.innerHTML = "";



console.log(obj);
output.innerHTML = "Hello";
let n = 0;
obj.forEach(element => {
    console.log(element);
    let str = "s"+n;
    let create_element = document.createElement("div");
    create_element.classList.add("s"+n);
    let k = 1;
    element.forEach(el =>{
        console.log(el);
        create_sub_element = document.createElement("div");
        create_sub_element.classList.add("l"+k);
        text_node = document.createTextNode(el);
        create_sub_element.appendChild(text_node);
        create_element.appendChild(create_sub_element);
        
        k+=1;
    });
    timetable.appendChild(create_element)
    
    console.log(str);
    n +=1;
});