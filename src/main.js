import 'jquery';  
// import 'react-quill'

(function() {
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    const on = (type, el, listener, all = false) => {
      if (all) {
        select(el, all).forEach(e => e.addEventListener(type, listener))
      } else {
        select(el, all).addEventListener(type, listener)
      }
    }
    /**
     * Sidebar toggle
     */
    if (select('.toggle-sidebar-btn')) {
      on('click', '.toggle-sidebar-btn', function(e) {
        select('body').classList.toggle('toggle-sidebar')
      })
    }
  
    /**
     * Search bar toggle
     */
    if (select('.search-bar-toggle')) {
      on('click', '.search-bar-toggle', function(e) {
        select('.search-bar').classList.toggle('search-bar-show')
      })
    }
  })();

  // Upvote button
  const targetDiv = document.getElementById("upvote-count");
  const btn = document.getElementById("upvote-btn");
  const upSpan = document.getElementById("upvote-span");
  const upIcon = document.getElementById("up");
  let i;
  // btn.onclick = function(){ 
  //   for(i=1; i<2;i++){
  //     if(upIcon.style.display !== "none"&&upSpan.style.display !== "none"){
  //       upIcon.style.display="none";
  //       upSpan.style.display = "none";
  //     }
  //     if (targetDiv.style.display == "none"){
  //       targetDiv.style.display = "inline";
  //     } else{
  //       targetDiv.style.display = "block";
  //     } 
  //   }
  // }

  
  

  // function addNewEducationDiv(){
  //     $("#addEducationDiv").append('<div class="col-md-8 col-lg-9 mb-4 shadow-sm"><label class="col-md-4 col-lg-3 small text-dark">DEGREE</label><input type="text" class="form-control mb-2" value="" placeholder=""><label class="col-md-4 col-lg-3 small text-dark">INSTITUTION</label><input type="text" class="form-control mb-3" value="" placeholder=""></div>')
  // }

  // function deleteDegree(){  
  //       $("#addEducationDiv").children().last().remove();
      
  // }
   
  // function addNewAchievementDiv(){
  //   $("#addAchievementDiv").append('<div class="col-md-8 col-lg-9 mb-4 shadow-sm"><label class="col-md-4 col-lg-3 text-dark">Title</label><input type="text" class="form-control mb-2" id="degree1" value=""><textarea name="about" class="form-control mb-3" id=""  rows="3" placeholder="Description..."></textarea></div>')
  // }
  // function deleteAchievement(){  
  //       $("#addAchievementDiv").children().last().remove();
  // }

  // function addNewSkillDiv(){
  //   $("#addSkillDiv").append('<div class="input-group col-md-8 col-lg-9 mb-3 w-auto"><input type="text" class="form-control shadow-none" aria-label="Text input with dropdown button"placeholder="Enter skill"><select class="form-select" aria-label="Default select example"><option selected>Select Level</option><option value="1">Novice</option><option value="2">Beginner</option><option value="3">Skillfull</option><option value="4">Experienced</option><option value="5">Expert</option></select></div><br>')
  // }

  // function deleteSkill(){  
  //       console.log("Skill deleted");
  //       $("#addSkillDiv").children().last().remove();
  // }


  // Quill
  // var quill = new Quill('#editor', {
  //   theme: 'snow'
  // });
  // var quill = new Quill('#editor1', {
  //   theme: 'snow'
  // });