import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandPointDown,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'
import './contactForm.scss'

function ContactForm() {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm()

  const wait = function (duration = 1000) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, duration)
    })
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    await wait(1500)
    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
    )
    reset()
    alert(`Votre message a bien été envoyé!`)
  }

  return (
    <form onSubmit={sendEmail}>
      <div className="div-form">
        <p>Un projet ? Une question ? Une demande de renseignement ?</p>
        <h2>
          <FontAwesomeIcon icon={faHandPointDown} />
        </h2>

        <label htmlFor="name"></label>
        <input
          className={`${errors.name ? 'error-input' : 'box-shadow no-border'}`}
          type="text"
          id="name"
          name="name"
          placeholder={'Nom'}
          {...register('name', { required: 'Vous devez renseigner un nom' })}
        ></input>
        {errors.name && (
          <span className="error-txt">{errors.name.message}</span>
        )}

        <label htmlFor="email"></label>
        <input
          className={`${errors.email ? 'error-input' : 'box-shadow no-border'}`}
          type="email"
          id="email"
          name="email"
          placeholder="Adress e-mail"
          {...register('email', {
            required: 'Vous devez renseigner votre adresse e-mail',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Votre e-mail n'est pas valide",
            },
          })}
        ></input>
        {errors.email && (
          <span className="error-txt">{errors.email.message}</span>
        )}

        <label htmlFor="message"></label>
        <textarea
          className={`${
            errors.message ? 'error-input' : 'box-shadow no-border'
          }`}
          id="message"
          name="message"
          placeholder="Votre message"
          {...register('message', {
            required: 'Vous devez renseigner votre message',
          })}
        />
        {errors.message && (
          <span className="error-txt">{errors.message.message}</span>
        )}
        <button className="box-shadow no-border">
          <FontAwesomeIcon icon={faPaperPlane} /> Envoyer
        </button>
      </div>
    </form>
  )
}

export default ContactForm
