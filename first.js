
        let btn = document.querySelector("#btn")
        let body =document.querySelector("body")
        let boxes = document.querySelectorAll(".box")
        let winner = document.querySelector("#winner")
        let hide = document.querySelector(".msg_container ")
        let newgamebtn =document.querySelector("#newgame")
        
        let mode = "light"

        btn.addEventListener("click",()=>{
            if (mode === "light") {
                mode = "dark"
                body.classList.add("dark")
                body.classList.remove("light")
            } else {
                mode = "light"
                body.classList.add("light")
                body.classList.remove("dark")
            }
            console.log(mode)
        })
        


        let trunO = true ;
        
        const winpattren = [
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8]
        ];

        let disabledboxes =() => {
            for(let box of boxes){
                box.disabled = true ;
            }
        }
        let showWinner= (pos_1)=>{
            winner.innerText=`Congratulation winner -> ${pos_1}`;
            hide.classList.remove("hide") ;
        }
        let checkwinner= ()=>{
            for(let pattren of winpattren){
                let pos_1 = boxes[pattren[0]].innerText;
                let pos_2 = boxes[pattren[1]].innerText;
                let pos_3 = boxes[pattren[2]].innerText;

                if(pos_1 !== "" && pos_2 !== "" && pos_3 !== ""){
                if (pos_1 === pos_2 && pos_2 === pos_3) {
                    console.log("winner" ,pos_1)
                    showWinner(pos_1);
                    disabledboxes();
                }
            }
            }
        }

        boxes.forEach((box) => {
            box.addEventListener("click", () => {
                console.log("clicked");
                if (trunO) {
                    box.innerText="O"
                    trunO = false;
                } else {
                    box.innerText="X"
                    trunO = true;
                }
                box.disabled = true ;
                checkwinner ();
            });
        
        });
        let enabledboxes =() => {
            for(let box of boxes){
                box.disabled = false ;
                box.innerText ="";
            }
        
        }
        let newgame =()=>{
            trunO = true
            enabledboxes();
            hide.classList.add("hide");
        }

        newgamebtn.addEventListener("click",newgame);
        btn.addEventListener("click",newgame)



