import React from 'react';
import minesweeperscreenshot from '../../assets/images/minesweeperscreenshot.PNG'
import comiccallscreenshot from '../../assets/images/capamericamc2_442.jpg'
import fitnesstrackerscreenshot from '../../assets/images/fitnesstrackerscreenshot.PNG'
import budgetscreenshot from '../../assets/images/budgetscreenshot.PNG'
import notetakerscreenshot from '../../assets/images/notetakerscreenshot.PNG'
import schedulerappscreenshot from '../../assets/images/schedulerappscreenshot.PNG'

export default function Projects() {
    return(
        <section class="section has-background-dark has-text-light">
            <container class="container is-centered">
                <div class="content is-centered">
                    <h2 id="work" class="title has-text-centered py-3 has-background-dark has-text-light is-capitalized is-underlined has-text-weight-bold is-size-2">My Work</h2>
                    <div class="columns is-centered is-flex px-3 py-3 is-two-fifths">
                        <div class="columns is-multiline is-centered px-3 py-3">

                            <div class="card column is-centered is-inline-block is-two-fifths px-3 py-3 is-5 mt-5 mb-5">
                                <div class="card-header">
                                    <p class="card-header-title is-centered has-text-weight-bold is-size-4">
                                        MINESWEEPER
                                    </p>
                                </div>
                                <div class="card-image content content-is-centered">
                                    <figure class="image is-156x156 is-centered mt-5">
                                        <a href="https://jeffkorby.github.io/Minesweeper-P2/" class="comic-call"></a>
                                        <img src={minesweeperscreenshot} alt=""/>
                                    </figure>
                                </div>
                                <div class="card-content is-centered">
                                    <div class="content is-centered is-centered has-text-weight-medium is-size-5">
                                        Second collaborative project worked on with kevinchewning and mlkrauz. Allows the user to play Minesweeper and record their stats via user authentication. User is also able to compete with other users on the leaderboards.
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                        <span>
                                            <a href="https://intense-lake-83506.herokuapp.com/" class="comic-call has-text-weight-bold is-size-5">LINK TO: DEPLOYED MINESWEEPER APP</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>

                            <div class="column is-narrow px-3 py-3"></div>

                            <div class="card column is-centered is-inline-block is-two-fifths px-3 py-3 is-5 mt-5 mb-5">
                                <div class="card-header">
                                    <p class="card-header-title is-centered has-text-weight-bold is-size-4">
                                        COMIC CALL
                                    </p>
                                </div>
                                <div class="card-image content content-is-centered">
                                    <figure class="image is-156x156 is-centered mt-5">
                                        <a href="https://jeffkorby.github.io/comic-call/" class="comic-call"></a>
                                        <img src={comiccallscreenshot} alt=""/>
                                    </figure>
                                </div>
                                <div class="card-content is-centered">
                                    <div class="content is-centered is-centered has-text-weight-medium is-size-5">
                                        First collaborative project worked on with Claire DePotter @ depotte6 and Daniel M Shields @ shiel1dm. Uses an API call to Marvel API and Wikipedia to get information on your favorite Marvel superheroes based on your search criteria.
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                        <span>
                                            <a href="https://jeffkorby.github.io/comic-call/" class="comic-call has-text-weight-bold is-size-5">LINK TO: DEPLOYED COMIC CALL APP</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>

                            <div class="column is-narrow px-3 py-3"></div>

                            <div class="card column is-centered is-inline-block is-two-fifths px-3 py-3 is-5 mt-5 mb-5">
                                <div class="card-header">
                                    <p class="card-header-title is-centered has-text-weight-bold is-size-4">
                                        SCHEDULING APP
                                    </p>
                                </div>
                                <div class="card-image content content-is-centered">
                                    <figure class="image is-156x156 is-centered mt-5">
                                        <a href="https://jeffkorby.github.io/Calendar-App/" class="scheduler"></a>
                                        <img src={schedulerappscreenshot} alt=""/>
                                    </figure>
                                </div>
                                <div class="card-content is-centered">
                                    <div class="content is-centered is-centered has-text-weight-medium is-size-5">
                                        Created a scheduling app that allows the user to input data into the timeslots which are saved in local storage and retained when the page is refreshed.
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                        <span>
                                            <a href="https://jeffkorby.github.io/Calendar-App/" class="has-text-weight-bold is-size-5">LINK TO: DEPLOYED SCHEDULING APP</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>

                            <div class="column is-narrow px-3 py-3"></div>

                            <div class="card column is-centered is-inline-block is-two-fifths px-3 py-3 is-5 mt-5 mb-5">
                                <div class="card-header">
                                    <p class="card-header-title is-centered has-text-weight-bold is-size-4">
                                        NOTE TAKER
                                    </p>
                                </div>
                                <div class="card-image content content-is-centered">
                                    <figure class="image is-156x156 is-centered mt-5">
                                        <a href="https://aqueous-meadow-74084.herokuapp.com/"></a>
                                        <img src={notetakerscreenshot} alt=""/>
                                    </figure>
                                </div>
                                <div class="card-content is-centered">
                                    <div class="content is-centered is-centered has-text-weight-medium is-size-5">
                                        Used express.js backend to create, write and save notes. The notes are retrieved from a JSON file. Deployed using the Heroku.
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                        <span>
                                            <a href="https://aqueous-meadow-74084.herokuapp.com/" class=" has-text-weight-bold is-size-5">LINK TO: DEPLOYED NOTE TAKER APP</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>
                            
                            <div class="column is-narrow px-3 py-3"></div>

                            <div class="card column is-centered is-inline-block is-two-fifths px-3 py-3 is-5 mt-5 mb-5">
                                <div class="card-header">
                                    <p class="card-header-title is-centered has-text-weight-bold is-size-4">
                                        BUDGET TRACKER
                                    </p>
                                </div>
                                <div class="card-image content content-is-centered">
                                    <figure class="image is-156x156 is-centered mt-5">
                                        <a href="https://calm-ocean-37538.herokuapp.com/"></a>
                                        <img src={budgetscreenshot} alt=""/>
                                    </figure>
                                </div>
                                <div class="card-content is-centered">
                                    <div class="content is-centered is-centered has-text-weight-medium is-size-5">
                                        A budget application for people to track their expenses while on the go or travelling. Enter deposits to add to your funds or deduct expenses to remove funds. Deployed using Heroku.
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                        <span>
                                            <a href="https://calm-ocean-37538.herokuapp.com/" class="has-text-weight-bold is-size-5">LINK TO: DEPLOYED BUDGET TRACKER APP</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>

                            <div class="column is-narrow px-3 py-3"></div>

                            <div class="card column is-centered is-inline-block is-two-fifths px-3 py-3 is-5 mt-5 mb-5">
                                <div class="card-header">
                                    <p class="card-header-title is-centered has-text-weight-bold is-size-4">
                                        FITNESS TRACKER
                                    </p>
                                </div>
                                <div class="card-image content content-is-centered">
                                    <figure class="image is-156x156 is-centered mt-5">
                                        <a href="https://rocky-forest-00159.herokuapp.com/" class="comic-call"></a>
                                        <img src={fitnesstrackerscreenshot} alt=""/>
                                    </figure>
                                </div>
                                <div class="card-content is-centered">
                                    <div class="content is-centered is-centered has-text-weight-medium is-size-5">
                                        An application to track your fitness and workouts. Input your exercises and get statistics back based on what workouts you have completed. Deployed using Heroku.
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                        <span>
                                            <a href="https://rocky-forest-00159.herokuapp.com/" class="comic-call has-text-weight-bold is-size-5">LINK TO: DEPLOYED FITNESS TRACKER APP</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>
                        </div>
                    </div>      
                </div>
            </container>
        </section>

    )
}