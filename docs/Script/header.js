 function handledropdown(className,classIcon){
            const Element=document.querySelector(`.${className}`);
            const  Icon=document.querySelector(`.${classIcon}`)
            if(Element.style.display=="block"){
                Element.style.display="none";
                Icon.style.transform="rotate(0deg)";
            }
            else{
                Element.style.display="block"; 
                Icon.style.transform="rotate(180deg)";
            }

        }
        function handlemenu(){
            const Element=document.querySelector(`.right-side-menu`);
            Element.style.visibility="visible";
        }
        function handleclose(){
            const Element=document.querySelector(`.right-side-menu`);
            Element.style.visibility="hidden";
        }
        function handleleftopen(){
            const Element=document.querySelector(`.left-sidebar-menu`);
            Element.style.visibility="visible";
        }
        function handleleftclose(){
            const Element=document.querySelector(`.left-sidebar-menu`);
            Element.style.visibility="hidden";
        }