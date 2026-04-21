const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(form)
    const req = Object.fromEntries(bookData)

    const response = await fetch("/add/teacher", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/"
})

// write the async function deleteTeacher
// make sure it redirects to / after
async function deleteTeacher(id){
    await fetch('/teachers/' + id, {method: 'DELETE'})
    window.location.href="/"
}

// Async function to update a teacher
async function updateTeacher(event, id){
    event.preventDefault()
    
    const form = event.target
    const nameInput = form.querySelector('.edit-name').value
    const departmentInput = form.querySelector('.edit-department').value
    const imageInput = form.querySelector('.edit-image').value
    
    const updateData = {}
    if (nameInput) updateData.name = nameInput
    if (departmentInput) updateData.department = departmentInput
    if (imageInput) updateData.image = imageInput
    
    const response = await fetch('/teachers/' + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
    
    const data = await response.json()
    console.log(data)
    window.location.href="/"
}