//your JS code here. If required.
async function formdata(form) {
	
	let age = new Promise((resolve, reject) => {
    setTimeout(() => {
		let condition = document.getElementById("age").value;
		let name = document.getElementById("name").value;
        if(condition >= 18){
            resolve(alert("Welcome, "+name+". You can vote."))
        }else{
			reject(alert("Oh sorry "+name+". You aren't old enough."))
		}
    }, 4000);
})

	// alert(age)
}