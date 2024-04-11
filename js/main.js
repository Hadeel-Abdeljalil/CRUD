var courseName=document.querySelector("#courseName");
var courseCategory=document.querySelector("#courseCategory");
var coursePrice=document.querySelector("#coursePrice");
var courseDescription=document.querySelector("#courseDescription");
var courseCapacity=document.querySelector("#courseCapacity");
var addBtn=document.querySelector("#click");
var search=document.querySelector("#search");
var courses = [];
var inputs=document.querySelectorAll(".inputs");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addCourse();
    displayCourses();
    clearform();
})

function addCourse(){
    var course ={
        name: courseName.value,
        category: courseCategory.value,
        price:coursePrice.value,
        desc:courseDescription.value,
        capacity:courseCapacity.value,
       }
       courses.push(course);

       Swal.fire({
        position: "top-end",
        icon: "success",
        title: "تمت اضافة الدورة بنجاح",
        showConfirmButton: false,
        timer: 1700
      });
}
function displayCourses(){
    var data=``;
    for(var i=0;i<courses.length;i++){
        data+=`
        <tr>
        <td>${i}</td>
        <td>${courses[i].name}</td>
        <td>${courses[i].category}</td>
        <td>${courses[i].price}</td>
        <td>${courses[i].desc}</td>
        <td>${courses[i].capacity}</td>
        <td> <button class="btn btn-outline-info mt-3" onclick="updateCourse(${i})" >update</button></td>
        <td> <button class="btn btn-outline-danger mt-3" onclick="deleteCourse(${i})">delete</button></td>

        </tr>
        `;
    }
    document.getElementById("data").innerHTML=data;
}

function clearform(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}

function deleteCourse(id){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: true
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        confirmButtonColor: "#30d633 ",
        cancelButtonColor: "#d33 ",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            courses.splice(id,1);
            displayCourses();
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
          });
        }
      });
}

function updateCourse(id){
    
}

search.addEventListener("keyup", function(e){
    var data=``;
    for(var i=0;i<courses.length;i++){
        if(courses[i].name.toLowerCase().includes(e.target.value.toLowerCase()))
        data+=`
        <tr>
        <td>${i}</td>
        <td>${courses[i].name}</td>
        <td>${courses[i].category}</td>
        <td>${courses[i].price}</td>
        <td>${courses[i].desc}</td>
        <td>${courses[i].capacity}</td>
        <td> <button class="btn btn-outline-info mt-3" onclick="updateCourse(${i})" >update</button></td>
        <td> <button class="btn btn-outline-danger mt-3" onclick="deleteCourse(${i})">delete</button></td>

        </tr>
        `;
    }
    document.getElementById("data").innerHTML=data;
})