'use strict';

let stores=[];
// let condition=('new','used');
function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function MobileStore(User,Type){
      this.User=User;
      this.Type=Type;
      this.price=randomPrice(100,500);
      this.condition=condition;

      stores.push(this);
      settingItem();

  }

  function settingItem(){
      let stringOb=JSON.stringify(stores);
      localStorage.setItem('MobileStore',stringOb);
  }

  let parent=document.getElementById('parent');
  let table=document.createElement('table');
  parent.appendChild(table);


  function MakingHeader(){

    let headingRow=document.createElement('tr');
    table.appendChild(headingRow);

    let firstTh=document.createElement('th');
    headingRow.appendChild(firstTh);
    firstTh.textContent='User';

    let secondTh=document.createElement('th');
    headingRow.appendChild(secondTh);
    secondTh.textContent='Type';

    let thirdTh=document.createElement('th');
    headingRow.appendChild(thirdTh);
    thirdTh.textContent='Price';

    let fourthTh=document.createElement('th');
    headingRow.appendChild(fourthTh);
    fourthTh.textContent='Condition';


  }
//   console.log(MakingHeader());
  MakingHeader();

  MobileStore.prototype.render=function(){
      let storeRow=document.createElement('tr');
      table.appendChild(storeRow);

      let firstStore=document.createElement('td');
      storeRow.appendChild(firstStore);
      firstStore.textContent=this.User;

      let secondStore=document.createElement('td');
      storeRow.appendChild(secondStore);
      secondStore.textContent=this.Type;

      let thirdStore=document.createElement('td');
      storeRow.appendChild(thirdStore);
      thirdStore.textContent=this.price;

      
      if (this.price<200) {
          let fourthStore=document.createElement('td');
          storeRow.appendChild(fourthStore);
          fourthStore.textContent='used';

      } else {
        let fourthStore=document.createElement('td');
        storeRow.appendChild(fourthStore);
        fourthStore.textContent='new';
          
      }
    //   console.log(render());
   
  }
  

 let form=document.getElementById('form');
 form.addEventListener('submit',submitter);

 function submitter(event){
    event.preventDefault();

    let newUser=event.target.User.value;
    let newType=event.target.Type.value;

    const addedNewItems=new MobileStore(newUser,newType);
    addedNewItems.render();
 }
 
 function gettingItem(){
     let data=localStorage.getItem('MobileStore');
     let parseOb=JSON.parse(data);
     if (parseOb) {
         for (let i = 0; i < parseOb.length; i++) {
            
             new MobileStore(parseOb[i].User,parseOb[i].Type);
             stores[i].render();
         }
     }
 }
 
 gettingItem();