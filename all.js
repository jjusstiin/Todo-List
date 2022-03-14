//1.add
const inputText = document.getElementById('inputText');
const addBTN = document.getElementById('addBTN');
let data = [];
addBTN.addEventListener('click',addTodo);
function addTodo(){
    let todo ={
        txt : '',
        id: new Date().getTime(),
        checked : '',
    }
    if(inputText.value.trim()==''){
        alert('請輸入待辦項目')
        return;
    }
    todo.txt=inputText.value;
    data.unshift(todo);
    updateList();
    inputText.value=''
}

//7.keypress
inputText.addEventListener('keypress',function(e){
    if(e.key=='Enter'){
        addTodo();
    }
})

//2.render
const list = document.querySelector('.list');
function render(arr){
str='';
arr.forEach(function(item,index){
    str+=
    `<li data-id='${item.id}'>
        <label for="" class="checkbox">
            <input type="checkbox" name="" id="" ${item.checked}>
            <span>${item.txt}</span>
        </label>
        <a href="#" class="delete"></a>
    </li>`
})
list.innerHTML=str;
}

//3.tab switch(CSS style)
const tab =document.querySelector('.tab');
let toggleStatus = 'all';
tab.addEventListener('click',function(e){
    toggleStatus=e.target.dataset.tab;
    let tabs = document.querySelectorAll('.tab li');
    tabs.forEach(function(item,index){
        item.classList.remove('active');
    })
   e.target.classList.add('active');
   updateList();
})

//4.delete $ toggle checked mode
list.addEventListener('click',function(e){
    let id = e.target.closest('li').dataset.id;
    if(e.target.classList=='delete'){
        e.preventDefault;
        data = data.filter(function(i){
            return i.id != id;
        })
    } else {
        data.forEach(function(i,index){
            console.log(data[index]);
            if(i.id==id){
                if(data[index].checked == 'checked'){
                    data[index].checked='';
                }else{
                    data[index].checked = 'checked';
                }
            }
        }); 
    }
    updateList();
;})

//5.renew list
function updateList(){
    let showData=[
    ];
    if(toggleStatus == 'all'){
        showData = data;
    }else if(toggleStatus == 'work'){
        showData = data.filter((i)=>i.checked=='');
    }else{
        showData= data.filter((i)=>i.checked=='checked');
    }
    const workNum = document.getElementById('workNum');
    let todoLength= data.filter((i)=>i.checked=='');
    workNum.textContent=todoLength.length;
    render(showData);
}
//初始
updateList();

//6.delete finished
const clean = document.querySelector('.clean');
clean.addEventListener('click',function(e){
    e.preventDefault;
    data = data.filter((i)=>i.checked!='checked');
    console.log(data);
    updateList();
});





