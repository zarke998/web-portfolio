var animationRunning = false;
var menuShowed = false;
var navMenu;
var navMenuItems;

function showMenu(menuID, animationDuration) {
    if(!animationRunning){
        animationRunning = true;

        navMenu = document.getElementById(menuID);
        navMenuItems = navMenu.getElementsByTagName("li");
        var navMenuItemsLength = navMenuItems.length;

        if(!menuShowed){
            navMenu.classList.add("d-flex");

            for(var a = 0; a < navMenuItemsLength; a++)
                navMenuItems[a].classList.add("li-base");
        }
        var j = 0;

        var x = setInterval(function(){

            if(j >= navMenuItemsLength)
            {
                menuShowed = !menuShowed;
                if(!menuShowed){
                    for(var a = 0; a < navMenuItemsLength; a++){
                        navMenuItems[a].className = "";
                    }
                    navMenu.className = "";
                }
                animationRunning = false;
                clearInterval(x);
            }

            if(animationRunning){
                if(!menuShowed){

                    navMenuItems[j].classList.remove("dropUp");
                    navMenuItems[j].classList.add("dropDown");
                }
                else{
                    navMenuItems[3-j].classList.remove("dropDown");
                    navMenuItems[3-j].classList.add("dropUp");
                }
            }
            j++;
        } ,animationDuration / navMenuItemsLength);
    }
}