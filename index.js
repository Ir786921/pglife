 var availableKeyword = ["Mumbai","Banglore","Delhi","Hyderabad","Gujarat","Noida"];
let print = document.querySelector(".result-box");


function search() 
{
    const input = document.getElementById("search-bar").value;
    var smallcase = input.toLowerCase();
    let result =[];
    
    if (input.length)
     {
        result = availableKeyword.filter((element)=>
        {
            return element.toLowerCase().includes(smallcase);
        });
        console.log(result);
     }
    
     display(result);
    
}
function display(result)
 {
  
    const content = result.map((list)=>
    {
        return "<li onclick = selectInput(this)>" + list + "</li>";
    })

    print.innerHTML = "<ul>" + content + "</ul>";
}
function selectInput(list) 
{
    print.value = list.innerHTML;
    print.innerHTML = ' ';
    
}
function blur_function()
{
    print.innerHTML = " ";
}

