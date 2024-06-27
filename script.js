function add(a)
{
    if(a==1)
    {
        let intern=document.getElementById("Internship");
        let currentform=document.querySelectorAll("#Internship form");

        let mynewdiv=document.createElement("div");
        mynewdiv.innerHTML=`
                    <div class="info-class">
                        <h3>Internship ${currentform.length+1}</h3>
                        <button class="remove-btn" onclick="remove()" >Remove</button>
                    </div>
                    <form   class="inner-class">
                        <input type="text" id="CompanyName${currentform.length+1}" class="format" placeholder="*Organisation name:" required>
                        <input type="text" id="Designation${currentform.length+1}" class="format" placeholder="*Designation:" required>
                        <input type="text" id="InternStartDate${currentform.length+1}" class="format" placeholder="*Start Date" required>
                        <input type="text" id="InternEndDate${currentform.length+1}" class="format" placeholder="*End Date" required>
                        <textarea name="" id="InternshipDetail${currentform.length+1}" class="format" placeholder="*Work Done ( Start your points with ~ )" required></textarea>
                    </form>`
        intern.appendChild(mynewdiv);
    }
    else if(a==2)
    {
        let Projects=document.getElementById("Projects");
        let currentform=document.querySelectorAll("#Projects form");

        let mynewdiv=document.createElement("div");
        mynewdiv.innerHTML=`
                    <div class="info-class">
                        <h3>Project ${currentform.length+1}</h3>
                        <button class="remove-btn" onclick="remove()" >Remove</button>
                    </div>
                    <form   class="inner-class">
                        <input type="text" id="ProjectName${currentform.length+1}" class="format" placeholder="*Project name:" required>
                        <input type="text" id="Technology${currentform.length+1}" class="format" placeholder="*Technologies Used:" required>
                        <input type="text" id="ProjectStartDate${currentform.length+1}" class="format" placeholder="*Start Date" required>
                        <input type="text" id="ProjectEndDate${currentform.length+1}" class="format" placeholder="*End Date" required>
                        <textarea name="" id="Explanation${currentform.length+1}" class="format" placeholder="*Explanation ( Start your points with ~ )" required></textarea>
                    </form>`
        Projects.appendChild(mynewdiv);
    }
    else if(a==3)
    {
        let Certifications=document.getElementById("Certifications");
        let currentform=document.querySelectorAll("#Certifications form");

        let mynewdiv=document.createElement("div");
        mynewdiv.innerHTML=`
                    <div class="info-class">
                        <h3>Certificate ${currentform.length+1}</h3>
                        <button class="remove-btn" onclick="remove()" >Remove</button>
                    </div>
                    <form   class="inner-class">
                            <input type="text" id="CertificationName${currentform.length+1}" class="format" placeholder="*Certification name:" required>
                            <input type="text" id="CertificationDate${currentform.length+1}" class="format" placeholder="*Date" required>
                            <input type="url" id="CertificationUrl${currentform.length+1}" class="format" placeholder="Link">
                    </form>`
        Certifications.appendChild(mynewdiv);
    }
    else if(a==4)
    {
        let Education=document.getElementById("Education");
        let currentform=document.querySelectorAll("#Education form");

        let mynewdiv=document.createElement("div");
        mynewdiv.innerHTML=`
                    <div class="info-class">
                        <h3>Education ${currentform.length+1}</h3>
                        <button class="remove-btn" onclick="remove()" >Remove</button>
                    </div>
                     <form class="inner-class">
                        <input type="text" id="Degree${currentform.length+1}" placeholder="*Education Level" class="format" required>
                        <input type="text" id="Organisation${currentform.length+1}" placeholder="*Organisation name" class="format" required>
                        <input type="text" id="PassingDate${currentform.length+1}" class="format" placeholder="*Date" required>
                        <input type="number" id="score${currentform.length+1}" placeholder="Result" class="format">
                    </form>`
        Education.appendChild(mynewdiv);
    }
    else if(a==5){
        let Achievements=document.getElementById("Achievements");
        let currentform=document.querySelectorAll("#Achievements form");

        let mynewdiv=document.createElement("div");
        mynewdiv.innerHTML=`
                    <div class="info-class">
                        <h3>Achievement ${currentform.length+1}</h3>
                        <button class="remove-btn" onclick="remove()" >Remove</button>
                    </div>
                     <form id="AchievementsFomr" class="inner-class">
                        <input type="text" id="title${currentform.length+1}" placeholder="*Title" class="format" required>
                    </form>`
        Achievements.appendChild(mynewdiv);
    }  
}



function remove(){
    let parent=event.target.parentElement.parentElement.parentElement;
    parent.removeChild(event.target.parentElement.parentElement);
}



function Submit()
{
    
    let PersonalArea=document.getElementById("PersonalArea");
    //Personal Info appended

     let Uname=document.getElementById("name").value;
     let mobile=document.getElementById("mobile").value;
     let email=document.getElementById("email").value;
     let linkedin=document.getElementById("Linkedin").value;
     let github=document.getElementById("Github").value;

     if(Uname=="" || mobile=="" ||email==""){
        alert("Enter all mandatory Personal Details");
        return;
     }
 
     let previewPInfo=document.createElement("div");
     previewPInfo.innerHTML=`<h3 style="text-align:center">${Uname}</h3>
     <div style="display:flex; align-items:center; justify-content:center; margin-top:-1.5rem; flex-wrap:wrap">
     <p class="space-class" style="font-size:0.7rem;"><i class="fa-solid fa-phone" style="font-size:15px;margin-right:5px;margin-left:5px;"></i>${mobile}</p> 
     <p class="space-class"  style="font-size:0.7rem;"><i class="fa-regular fa-envelope" style="font-size:15px;margin-right:5px;margin-left:5px;"></i>${email}</p> 
     <a class="space-class" href="${linkedin}" style="text-decoration:none; color:black; font-size:0.7rem;"> <i class="fa-brands fa-linkedin" style="font-size:15px;margin-right:5px;margin-left:5px;"></i>${linkedin}</a>
     <a class="space-class" href="${github}" style="text-decoration:none; color:black; font-size:0.7rem;"><i class="fa-brands fa-github" style="font-size:15px;margin-right:5px;margin-left:5px;"></i>${github}</a>
     </div>`
 
     PersonalArea.appendChild(previewPInfo);


    //Internships appended
    let InternshipArea=document.getElementById("InternshipArea");
    let InternForms=document.querySelectorAll("#Internship form");
    // console.log(InternForms[1]);
    for(let i=0;i<InternForms.length;i++)
    {
        let Oname=document.getElementById(`CompanyName${i+1}`).value;
        let Role=document.getElementById(`Designation${i+1}`).value;
        let Sdate=document.getElementById(`InternStartDate${i+1}`).value;
        let Edate=document.getElementById(`InternEndDate${i+1}`).value;
        let Detail=document.getElementById(`InternshipDetail${i+1}`).value;
        let DetailPoints=Detail.split("~");
        if(Oname=="" || Role=="" || Sdate=="" || Edate=="" ||Detail=="")
        {
        
            alert("Enter all mandatory details");
            return;
        }

        let div=document.createElement("div");
        div.innerHTML=`
        <div style="display:flex; align-items:center; justify-content:space-between;" class="div-space-class">
            <h5>${Oname}</h5>  
            <div><span style="font-size:0.7rem;">${Sdate}</span> - <span style="font-size:0.7rem;">${Edate}</span></div>  
        </div>
        <p style="font-size:0.7rem;">${Role}</p> 
        `
        let ul=document.createElement("ul");
        ul.style.marginTop="0.1rem";
        DetailPoints.map((item)=>{           
            if(item.trim().length>0)
            {
                let li=document.createElement("li");
                li.style.fontSize="0.7rem";
                li.innerHTML=item;
                ul.appendChild(li);
            }
        });
        
        div.appendChild(ul);
        InternshipArea.appendChild(div);
    }

    

    //Projects Appended
    let ProjectsArea=document.getElementById("ProjectsArea");
    let ProjectForm=document.querySelectorAll("#Projects form");
    for(let i=0;i<ProjectForm.length;i++)
    {
        let Pname=document.getElementById(`ProjectName${i+1}`).value;
        let tech=document.getElementById(`Technology${i+1}`).value; 
        let Sdate=document.getElementById(`ProjectStartDate${i+1}`).value;
        let Edate=document.getElementById(`ProjectEndDate${i+1}`).value;
        let exp=document.getElementById(`Explanation${i+1}`).value;
        let exparray=exp.split("~");

        if(Pname=="" || tech=="" || Sdate=="" || Edate=="" || exp=="")
        {
                alert("Enter all mandatory details");
                return;
        }

        let div=document.createElement("div");
        div.innerHTML=`<div style="display:flex; align-items:center; justify-content:space-between;" class="div-space-class">
            <h5>${Pname}</h5>  
            <div><span style="font-size:0.7rem;">${Sdate}</span> - <span style="font-size:0.7rem;">${Edate}</span></div>  
        </div>
        <p style="font-size:0.7rem;">${tech}</p>`

        let ul=document.createElement("ul");
        ul.style.marginTop="0.1rem";
        exparray.map((item)=>{
            if(item.trim().length>0)
            {
                let li=document.createElement("li");
                li.style.fontSize="0.7rem";
                li.innerHTML=item;
                ul.appendChild(li);
            }
        });

        div.appendChild(ul);
        ProjectsArea.appendChild(div);
    }

    // Certifications Appended
    let CertificationsArea=document.getElementById("CertificationsArea");
    let CertificationForm=document.querySelectorAll("#Certifications form");
    for(let i=0;i<CertificationForm.length;i++)
    {
        let Cname=document.getElementById(`CertificationName${i+1}`).value;
        let Cdate=document.getElementById(`CertificationDate${i+1}`).value;
        let Curl=document.getElementById(`CertificationUrl${i+1}`).value;

        if(Cname=="" || Cdate=="")
        {
                alert("Enter all mandatory details");
                return;
        }

        let div=document.createElement("div");
        div.innerHTML=`<div style="display:flex; align-items:center; justify-content:space-between;" class="div-space-class">
            <h5>${Cname}</h5>  
            <p style="font-size:0.7rem;">${Cdate}</p>  
        </div>
        <a href="${Curl}" style="text-decoration:none; color:black;font-size:0.7rem;">Link:${Curl}</a>
        `
        CertificationsArea.appendChild(div);
    }

    // Skills appended
    let SkillsArea=document.getElementById("SkillsArea");
    let Skill=document.getElementById("UserSkill").value;
    const skillarr=Skill.split(",");

    if(skillarr.length==0)
    {
            alert("Enter all mandatory details");
            return;
    }
    
    SkillsArea.innerHTML=`<p style="font-size:1rem;">${Skill}</p>`;

    // // console.log(skillarr);
    // let div=document.createElement("div");
    // div.style.display="flex";
    // div.style.justifyContent="space-between";
    // div.style.width="30rem";
    // // div.style.border="2px solid black";
    // let ul1=document.createElement("ul");
    // let ul2=document.createElement("ul");
    // ul1.style.marginTop="-0.5rem";
    // ul2.style.marginTop="-0.5rem";

    // for(let i=0;i<skillarr.length;i++)
    // {
    //         let li=document.createElement("li");
    //         li.style.fontSize="0.7rem";
    //         li.innerHTML=`<li>${skillarr[i]}</li>`;
    //         if(i<skillarr.length/2)
    //         {
    //             ul1.appendChild(li);
    //         }
    //         else{
    //             ul2.appendChild(li);
    //         }
    // }

    // div.appendChild(ul1);
    // div.appendChild(ul2);
    // SkillsArea.appendChild(div);

    

    //Education appended
    let EducationArea=document.getElementById("EducationArea");
    let EducationForm=document.querySelectorAll("#Education form");
    for(let i=0;i<EducationForm.length;i++)
    {
        let Degree=document.getElementById(`Degree${i+1}`).value;
        let Oname=document.getElementById(`Organisation${i+1}`).value; 
        let Pdate=document.getElementById(`PassingDate${i+1}`).value;
        let score=document.getElementById(`score${i+1}`).value;

        if(Degree=="" || Oname=="" || Pdate=="")
        {
                alert("Enter all mandatory details");
                return;
        }

        let div=document.createElement("div");
        div.innerHTML=`
        <div style="display:flex; align-items:center; justify-content:space-between;" class="div-space-class">
        <h5>${Oname}</h5>
        <p style="font-size:0.7rem;">${Pdate}</p>  
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between;" class="div-space-class">
        <p style="font-size:0.7rem;">${Degree}</p>
        <p style="font-size:0.7rem;">${score}</p>  
        </div>  
        `
        EducationArea.appendChild(div);
    }

    //Achievements appended
    let AchievementArea=document.getElementById("AchievementArea");
    let AchievementForm=document.querySelectorAll("#Achievements form");
    for(let i=0;i<AchievementForm.length;i++)
    {
        let title=document.getElementById(`title${i+1}`).value;
        if(title=="")
        {
                 alert("Enter all mandatory details");
                return;
        }

        let p=document.createElement("p");
        p.style.fontSize="0.7rem";
        p.innerHTML=`${title}`;
        AchievementArea.appendChild(p);
    }



    document.getElementById("container").style.display="none";
    document.getElementById("Preview-container").style.display="flex";
    document.getElementById("pre").style.display="block";
    document.getElementById("download").style.display="block";
}

function Prev()
{
    // let preview=document.getElementById("Preview");
    // preview.innerHTML="";
    document.getElementById("PersonalArea").innerHTML="";
    document.getElementById("InternshipArea").innerHTML="";
    document.getElementById("ProjectsArea").innerHTML="";
    document.getElementById("CertificationsArea").innerHTML="";
    document.getElementById("EducationArea").innerHTML="";
    document.getElementById("AchievementArea").innerHTML="";
    document.getElementById("Preview-container").style.display="none";
    document.getElementById("pre").style.display="none";
    document.getElementById("download").style.display="none";
    document.getElementById("container").style.display="flex";
}

function download()
{
    const element = document.getElementById('Preview');
            html2pdf(element, {
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { scale: 1.5 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            });
}