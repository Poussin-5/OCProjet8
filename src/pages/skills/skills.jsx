import html from '../../assets/logo/html5-with-wordmark-color.svg'
import css from '../../assets/logo/css3-seeklogo.com.svg'
import sass from '../../assets/logo/sass-seeklogo.com.svg'
import js from '../../assets/logo/javascript-js-seeklogo.com.svg'
import fontawesome from '../../assets/logo/font-awesome-seeklogo.com.svg'
import nodejs from '../../assets/logo/nodejs-seeklogo.com.svg'
import react from '../../assets/logo/react-seeklogo.com.svg'
import visualstudio from '../../assets/logo/visual-studio-code-seeklogo.com.svg'
import yarn from '../../assets/logo/yarn-seeklogo.com.svg'
import './skills.scss'

function Skills() {
  return (
    <div className="skills-logo">
      <img src={html} alt="logo de html" />
      <img src={css} alt="logo de css" />
      <img src={sass} alt="logo de sass" />
      <img src={js} alt="logo de js" />
      <img src={fontawesome} alt="logo de fontawesome" />
      <img src={nodejs} alt="logo de nodejs" />
      <img src={react} alt="logo de react" />
      <img src={visualstudio} alt="logo de visual studio" />
      <img src={yarn} alt="logo de yarn" />
    </div>
  )
}

export default Skills
