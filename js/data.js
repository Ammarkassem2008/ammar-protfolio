const data = [
  {
    id: 1,
    img: '/img/project1.png',
    text: 'Dash board',
  },
  {
    id: 2,
    img: '/img/project2.png',
    text: 'weather App',
  },
  {
    id: 3,
    img: '/img/project3.png',
    text: 'Remove bg',
},
  {
    id: 4,
    img: '/img/project4.png',
    text: 'Busniess Website',
},

  {
    id: 5,
    img: '/img/project6.png',
    text: 'To-Do List',
},
  {
    id: 6,
    img: '/img/project7.png',
    text: 'E-commers on salla.sa',
  },
  {
    id: 7,
    img: '/img/project8.png',
    text: 'E-commers on salla.sa',
  },
  
   {
    id: 8,
    img: '/img/project9.png',
    text: 'E-commers on salla.sa',
  },
  {
    id: 9,
    img: '/img/project10.png',
    text: 'E-commers on salla.sa',
  },  
]

function showData(rang) {
  let projects = document.getElementById('projects')

  for (var i = 0; i < rang; i++) {
    let project = `
     <div class="box" data-aos="fade-right">
         <div class="box-hover">
            <span>${data[i].text}</span>
         </div>
          <img src="${data[i].img}" loading="lazy">
        </div>
  `;
    projects.innerHTML += project;
  }
}
showData(data.length)