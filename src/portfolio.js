

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Saurabh Kumar',
}

const about = [{
  // all the properties are optional - can be left empty or deleted
  name: 'Saurabh Kumar',
  role: 'Full Stack Web Developer',
  description:
    "I'm a Web Developer who is always creating and learning awesome stuff. Let's start scrolling and learn more about me.",
  resume: 'https://drive.google.com/file/d/1sYikNt5wlVagm5-ftuwXPYHuvkMS1CQz/view?usp=sharing',
  
}]

const aboutme = [{
  // all the properties are optional - can be left empty or delete
  description:
    "I'm a Full Stack Web Developer specialization MERN Stack who gained skills from Masai School. Attentive and agile learner with a diverse foundation of tech industry. Motivated self-starter and leader with strong organizational and communicative abilities."
}]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Overstock-clone-website',
    description:
      'My project is a typical e-commerce website clone.This is an American internet retailer selling primarily furniture. In this project, I used HTML, CSS, JAVASCRIPT which I have merged by using GITHUB. ',
    stack: ['HTML', 'CSS', 'JAVASCRIPT'],
    sourceCode: 'https://github.com/Saurabh884/Overstock-clone-website',
    livePreview: 'https://eclectic-beijinho-f5e2c1.netlify.app/',
    image:'https://miro.medium.com/max/875/1*eJP4B8eGF0yOZ8pHHvuZkQ.png'
  },
  {
    name: 'Credobeauty.com Clone',
    description:
      'This website offers skincare products, makeup products, bath and body products and accessories through its e-commerce portal and physical retail outlets, helping customers to discover clean beauty brands, no matter where or when they make their purchase decision. In this project, we used HTML, CSS, JAVASCRIPT which we have merged by using GITHUB. ',
    stack: ['HTML', 'CSS', 'JAVASCRIPT'],
    sourceCode: 'https://github.com/Saurabh884/credo-beauty-clone',
    livePreview: 'https://extraordinary-puppy-6b97c8.netlify.app/',
    image:'https://user-images.githubusercontent.com/98827173/171566022-dba1ef8f-c900-474c-b0dd-9366036f40bf.png'
  },
  {
    name: 'ShopBop Clone Project',
    description:
      'Shopbop is the global online retail destination for style inspiration and discovery, offering women and men a curated selection of ready-to-wear & accessories from over 1,000 established and emerging designers.',
    stack:['HTML', 'CSS', 'JAVASCRIPT'],
    sourceCode: 'https://github.com/Saurabh884/ShopBob-Clone-Project',
    livePreview: 'https://enchanting-banoffee-050dd5.netlify.app/',
    image:'https://raw.githubusercontent.com/Rahul850kr/ShopBob-Clone-Project/cart/Screenshots/home.png'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  ['https://raw.githubusercontent.com/Saurabh884/myportfolio/main/New_Logo/html.png',"HTML"],
  ['https://raw.githubusercontent.com/Saurabh884/myportfolio/main/New_Logo/css.png',"CSS"],
  ['https://raw.githubusercontent.com/Saurabh884/myportfolio/main/New_Logo/1_YWazhGyGmNs6K3HZE7lS7Q.png',"JAVASCRIPT"],
  ['https://raw.githubusercontent.com/Saurabh884/myportfolio/main/New_Logo/react.png',"REACT"],
  ['https://raw.githubusercontent.com/Saurabh884/myportfolio/main/New_Logo/nodejs.png',"NODEJS"],
  ['https://raw.githubusercontent.com/Saurabh884/myportfolio/main/New_Logo/mongodb_1014590.png',"MONGODB"],
  ['https://raw.githubusercontent.com/Saurabh884/myportfolio/main/New_Logo/typescript.png',"TYPESCRIPT"],
  ['https://raw.githubusercontent.com/Saurabh884/myportfolio/main/New_Logo/express.png',"EXPRESSJS"]


]

const contact = [{
  // email is optional - if left empty Contact section won't show up
  email: 'saurabh.vicky1995@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/saurabh-kumar-singh-813780234/',
    github: 'https://github.com/Saurabh884/',
  },
}]

export { header, about, projects, skills, contact,aboutme }
