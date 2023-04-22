function onsubmit(e){
    e.preventDefault()

    document.querySelector('.msg').textContent=''
    document.querySelector('#image').src=''

    const prompt = document.querySelector('#prompt').value 
    const size=document.querySelector('#size').value 

    if (prompt ===''){
        alert("add some text")
        return
    }
    generateimagerequest(prompt,size)
}
async function generateimagerequest(prompt, size){
try {
    showspinner()
    const response= await fetch('/openai/generateimage',{
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            prompt, size
        })
    })
    if(!response.ok){
        removespinner()
        throw new Error('image cannot be generated')
    }

    const data= await response.json()
    //console.log(data)

    const imageurl= data.data
    document.querySelector('#image').src=imageurl
    removespinner()
} catch (error) {
    console.log("cant")
}

}

function showspinner(){
    document.querySelector('.spinner').classList.add('show')
}

function removespinner(){
    document.querySelector('.spinner').classList.remove('show')
}

document.querySelector('#image-form').addEventListener('submit', onsubmit)