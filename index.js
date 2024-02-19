const upgrade_btn_click = document.getElementById("click-upgrade-btn");
const upgrade_btn_idle = document.getElementById("idle-upgrade-btn");
const main_btn = document.getElementById("main-btn");
const money_text = document.getElementById("money-text");
const click_lvl_cost_text = document.getElementById("click-upgrade-cost");
const idle_lvl_cost_text = document.getElementById("idle-upgrade-cost");
const error_text = document.getElementById("error-text");
let click_lvl = 1;
let idle_lvl = 0;
let click_lvl_cost = click_lvl ** 2;
let idle_lvl_cost = idle_lvl ** 5;
let hp = 1;
let max = 1;
let money = 0;
var idle_interval;

click_lvl_cost_text.innerHTML = click_lvl_cost + "€";
idle_lvl_cost_text.innerHTML = idle_lvl_cost + "€";
upgrade_btn_click.innerHTML = "Click Level " + click_lvl;
upgrade_btn_idle.innerText = "Idle Level " + idle_lvl;
money_text.innerHTML = money + "€";
main_btn.innerHTML = hp;
error_text.innerHTML = " ";

main_btn.addEventListener('click', function() {
    dmg = click_lvl;
    if(hp - dmg <= 0) {
        max += 1;
        hp = max;
        main_btn.innerHTML = hp;
        money += dmg;
        money_text.innerHTML = money + "€";
    }
    else {
        hp -= dmg;
        money += dmg;
        main_btn.innerHTML = hp;
        money_text.innerHTML = money + "€";
    }
});

upgrade_btn_click.addEventListener('click', function() {
    if(money >= click_lvl_cost) {
        click_lvl += 1;
        money -= click_lvl_cost;
        money_text.innerHTML = money + "€";
        click_lvl_cost = click_lvl ** 2;
        console.log(click_lvl);
        console.log(click_lvl_cost);
        click_lvl_cost_text.innerHTML = click_lvl_cost + "€";
        upgrade_btn_click.innerHTML = "Click Level " + click_lvl;
        error_text.innerHTML = " ";
    }
    else {
        error_text.innerHTML = "Du hast nicht genug Geld!"; 
    }
});

upgrade_btn_idle.addEventListener('click', function() {
    if(money >= idle_lvl_cost) {
        money -= idle_lvl_cost;
        idle_lvl += 1;
        money_text.innerHTML = money + "€";
        idle_lvl_cost = idle_lvl ** 5;
        console.log(idle_lvl);
        console.log(idle_lvl_cost);
        idle_lvl_cost_text.innerHTML = idle_lvl_cost + "€";
        upgrade_btn_idle.innerHTML = "Idle Level " + idle_lvl;
        error_text.innerHTML = " ";
        if(idle_interval) {
            clearInterval(idle_interval);
            idle_interval = setInterval(() => {
                dmg = idle_lvl;
                if(hp - dmg <= 0) {
                    max += 1;
                    hp = max;
                    main_btn.innerHTML = hp;
                    money += dmg;
                    money_text.innerHTML = money + "€";
                }
                else {
                    hp -= dmg;
                    money += dmg;
                    main_btn.innerHTML = hp;
                    money_text.innerHTML = money + "€";
                }
            }, 1000);
        }
        else {
            idle_interval = setInterval(() => {
                dmg = idle_lvl;
                if(hp - dmg <= 0) {
                    max += 1;
                    hp = max;
                    main_btn.innerHTML = hp;
                    money += dmg;
                    money_text.innerHTML = money + "€";
                }
                else {
                    hp -= dmg;
                    money += dmg;
                    main_btn.innerHTML = hp;
                    money_text.innerHTML = money + "€";
                }
            }, 1000);
        }
    }
    else {
        error_text.innerHTML = "Du hast nicht genug Geld!"; 
    }
});
