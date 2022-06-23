const form=document.getElementById('json-form')
const textarea=document.getElementById('json-output')

form.addEventListener('submit',function(e){
  e.preventDefault() 
  const bangla=e.target.bangla.value
  const banan=e.target.banan.value

  const english=e.target.english.value
  const jsonData=`{
   
    "english":" ${english}",
    "banan": "${banan}",
    "bangla":" ${bangla}"
    
  },`
// e.reset.value
   console.log(bangla,english);
   textarea.value+= jsonData
   form.reset()
   
})
