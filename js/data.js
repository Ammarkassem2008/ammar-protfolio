const data = [
  {
    id: 1,
    img: './img/project1.png',
    text: 'Dash board',
    link: '#'
  },
  {
    id: 2,
    img: './img/project2.png',
    text: 'weather App',
    link: '#'
  },
  {
    id: 3,
    img: './img/project3.png',
    text: 'Remove bg',
    link: '#'
},
  {
    id: 4,
    img: './img/project4.png',
    text: 'Busniess Website',
    link: '#'
},

  {
    id: 5,
    img: './img/project6.png',
    text: 'To-Do List',
    link: '#'
},
  {
    id: 6,
    img: './img/project7.png',
    text: 'E-commers on salla.sa',
    link: 'https://sanea.sa/'
  },
  {
    id: 7,
    img: './img/project8.png',
    text: 'E-commers on salla.sa',
    link: 'https://ewacsa.com/'
  },

  {
    id: 8,
    img: './img/project9.png',
    text: 'E-commers on salla.sa',
    link: 'https://mada-r.com/'
  },
  {
    id: 9,
    img: './img/project10.png',
    text: 'E-commers on salla.sa',
    link: 'https://tnama1.com/'
  },
]

function showData(rang) {
  let projects = document.getElementById('projects')

  for (var i = 0; i < rang; i++) {
    let project = `
     <div class="box" data-aos="fade-right">
         <div class="box-hover">
            <span>${data[i].text}</span>
            <a href="${data[i].link}" class="veiw">View</a>
         </div>
          <img src="${data[i].img}" loading="lazy">
        </div>
  `;

  projects.innerHTML += project;
}
}
showData(data.length)