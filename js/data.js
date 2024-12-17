const data = [
  {
    id: 1,
    img: './projects-img/1.jpg',
    text: 'Beauty Store on salla.sa',
    link: 'https://butterfly-afnan-beauty.com/'
  },
  {
    id: 2,
    img: './projects-img/9.jpg',
    text: 'Tanama store',
    link: 'https://tnama1.com/'
  },
  {
    id: 3,
    img: './projects-img/8.jpg',
    text: 'Seen English Academy',
    link: 'https://seen-app.com/'
},
  {
    id: 4,
    img: './projects-img/4.jpg',
    text: 'Remove bg App',
    link: 'https://ammarkassem2008.github.io/Remove-bg/'
},

  {
    id: 5,
    img: './projects-img/5.jpg',
    text: 'E-commers on salla.sa',
  link: 'https://sanea.sa/'
},
  {
  id: 7,
  img: './projects-img/10.jpg',
  text: 'Ewac store',
  link: 'https://ewacsa.com/'
},
  {
    id: 8,
    img: './projects-img/2.jpg',
    text: 'Dash board',
    link: '#'
  },
  {
    id: 9,
    img: './projects-img/3.jpg',
    text: 'Weather App',
    link: '#'
  }
  ,
  {
    id: 9,
    img: './projects-img/6.jpg',
    text: 'To-do list',
    link: 'https://seen-app.com'
  }
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