import React from 'react'
import './contact.css'

export default class Contact extends React.Component {

  render() {
    return (
      <section className="contactSection">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 className="sectionHeading">CONTACT ME</h3>
            <h5 className="aboutMeSubHeading">Let's get in touch! Coffee's on me~</h5>

            <div className="row">
              <form className="col s12" action="https://postmail.invotes.com/send"
              method="post" id="email_form">
                <div className="row">
                  <div className="input-field col s6">
                    <input name="extra_name" type="text" className="validate" />
                    <label for="name">Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input name="extra_email" type="email" className="validate" />
                    <label for="email" data-error="wrong" data-success="right">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="subject" type="text" className="validate" />
                    <label for="subject">Subject</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea name="text" type="textarea" className="materialize-textarea"></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>
                <input type="hidden" name="access_token" value="cg2chrdwomzddu3tj9bmro6z" />
                <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
                <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />
                <button className="btn green waves-effect right" id="submit_form" type="submit" >send</button>
                <p>Powered by <a href="https://postmail.invotes.com" target="_blank" rel="noopener noreferrer">PostMail</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}