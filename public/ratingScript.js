const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(form)
    const req = Object.fromEntries(bookData)

    const response = await fetch("/update/teacher", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/ratings"
})

// write the async function deleteTeacher
// make sure it redirects to / after
async function deleteRating(id){
    await fetch('/ratings/' + id, {method: 'DELETE'})
    window.location.href="/ratings"
}

// Async function to update a teacher
async function updateRating(event, id){
    event.preventDefault()
    
    const form = event.target
    const nameInput = form.querySelector('.edit-name').value
    const teacherInput = form.querySelector('.edit-teacher').value
    const commentInput = form.querySelector('.edit-comment').value
     const ratingInput = form.querySelector('.edit-rating').value
    
    const updateData = {}
    if (nameInput) updateData.name = nameInput
    if (teacherInput) updateData.teacher = teacherInput
    if (commentInput) updateData.comment = commentInput
    if (ratingInput) updateData.rating = ratingInput
    
    const response = await fetch('/ratings/' + id, {
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