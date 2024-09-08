const project1 = {
  imgUrl: "https://media.discordapp.net/attachments/793806610082168863/1198172750968270968/1705737023038.jpg?ex=66dea8d4&is=66dd5754&hm=7d367cc59a1fc6b2e950b60ecf868494200e19b8aea58f29815bd7a323dce42b&=&format=webp&width=773&height=580",
  title: "Armikochan: A Robotic Arm.",
  description: "Armikochan is a robotic arm with 5 degrees of freedom in its movement. This project was based on ESP32 microcontroller. C++ was used to program the microcontroller. You can read more about this project on my github.",
}

const project2 = {
  imgUrl: "https://media.discordapp.net/attachments/793806610082168863/1282264643863052328/image.png?ex=66deb982&is=66dd6802&hm=6d8062701ea9e9ec2127c21e86d1a462d1c46f41a3def112c4a544585f660855&=&format=webp&quality=lossless&width=1251&height=580",
  title: "Personal Portfolio Website.",
  description: "The same website you are seeing right now. This website is made using react as front-end and firebase as back-end.",
}

function Project({project}){
  return(
    <div className="project-wrapper">
      <div>
        <img className="project-img" src={project.imgUrl} alt={project.title} />
      </div>
      <div className="project-text">
        <div className="project-title">
          {project.title}
        </div>
        <div className="project-description">
          {project.description}
        </div>
      </div>
    </div>
  )
}

export default function Projects(){
  return(
    <>
      <section id="projects">
        <h1>Here are some of my best projects so far:</h1>
        <div className="projects-wrapper">
          <Project project={project1} />
          <Project project={project2} />
        </div>
        <div className="note-dev">
          Note: This website is still in development.
        </div>
      </section>
    </>
  )
}
