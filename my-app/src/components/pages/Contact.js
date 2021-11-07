import React from 'react';

export default function Contact() {
    return(
        <section class="section has-background-dark has-text-light">
        <container class="container has-background-dark has-text-light">
            <h2 id="contact" class="title has-text-centered py-3 has-text-white is-capitalized is-underlined has-text-weight-bold is-size-2">Contact Me</h2>
            <div class="columns is-full is-centered is-flex">
                <div class="is-full columnn px-5 has-text-white">
                    <span class="icon"><ion-icon name="mail"></ion-icon></span>
                    <strong class="has-text-white has-text-weight-medium is-size-4">Email:  </strong><a href="mailto:korbyjef@gmail.com" class="has-text-white has-text-weight-medium is-size-4">korbyjef@gmail.com</a>
                </div>
                <div class="is-full columnn px-5">
                    <span class="icon"><ion-icon name="call"></ion-icon></span>
                    <strong class="has-text-white has-text-weight-medium is-size-4">Phone:  </strong><a href="tel:+12487670453" class="has-text-white has-text-weight-medium is-size-4">248-767-0453</a>
                </div>
                <div class="is-full columnn px-5">
                    <span class="icon"><ion-icon name="logo-github"></ion-icon></span>
                    <strong class="has-text-white has-text-weight-medium is-size-4"><a href="https://github.com/jeffkorby" class="has-text-white">Github</a></strong>
                </div>
                <div class="is-full columnn px-5">
                    <span class="icon"><ion-icon name="logo-linkedin"></ion-icon></span>
                    <strong class="has-text-white has-text-weight-medium is-size-4"><a href="linkedin.com/in/jeffrey-korby" class="has-text-white">LinkedIn</a></strong>
                </div> 
            </div>               
        </container>
    </section>
    );
}