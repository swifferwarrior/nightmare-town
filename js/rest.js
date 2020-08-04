const btnSubmit = document.getElementById("btnSubmit")
const divResult = document.getElementById('divResult')

btnSubmit.addEventListener("click", getSubmit)
async function getSubmit() {
    // const div = document.createElement('div')
    // clear()
    const fs = require('fs') 
    const headers = {
        "Authorization" : `Token d33b7c378df9e2494ba261141ed02d7d26cdbc86 `
    }
    const url = "https://api.github.com/repos/swifferwarrior/nightmare-town"
    const makeSubmit = await
    // const response = await fetch(url)
    // const response = await fetch(url, {
    //     "method": "GET",
    //     "headers": headers
    // })
    // const result = await response.json()

    // result.items.forEach(i=>{
    // result.items(i=>{
        // const anchor = document.createElement('a')
        // anchor.href = ""
        // anchor.textContent = result
        // divResult.appendChild(anchor)
        // divResult.appendChild(document.createElement('br'))
    // })
    // console.log(result)
  let saveFile = () => {
    
      // Get the data from each element on the form.
    const name = document.getElementById('name');
    const email = document.getElementById('mail');
    const submitStory = document.getElementById('submit-story');
      
      // This variable stores all the data.
      let data = 
          '\r Name: ' + name.value + ' \r\n ' + 
          'Email: ' + email.value + ' \r\n ' + 
          'Message: ' + submitStory.value;

      fs.writeFile('../submissions/formdata.txt', data, (err) =>{
        if (err) throw err;
      })
      // // Convert the text to BLOB.
      const textToBLOB = new Blob([data], { type: 'text/plain' });
      const sFileName = 'formData.txt';	   // The file to save the data.

      let newLink = document.createElement("a");
      newLink.download = sFileName;

      if (window.webkitURL != null) {
          newLink.href = window.webkitURL.createObjectURL(textToBLOB);
      }
      else {
          newLink.href = window.URL.createObjectURL(textToBLOB);
          newLink.style.display = "none";
          document.body.appendChild(newLink);
      }

      newLink.click(); 
  }
}

// function clear(){
//     while(divResult.firstChild) divResult.removeChild(divResult.firstChild)
// }