import React, {Component} from 'react';
import {CardDeck} from "react-bootstrap";
import SingleCard from "./SingleCard";

class Cards extends Component {

    render() {
        const contactText = 'Phone number: +359/899-000-123 Email: donev.m.p@gmail.com.\n';

        const aboutText = 'I currently work and live in Sofia. I started working in the IT sector from the start of this year. ' +
            'The technologies with which I can working at the moment are Python (Flask), ReactJS, MYSQL and AWS. ' +
            'I im interested in AI and I would like to develop further knowledge in this sector.\n';

        const aboutWebPage = 'The reason for the creation of this page, is an assignment from the university in which i study ' +
            'at the moment - Burgas Free University. The project is in Web technologies and applications subject.\n';

        const randomAdvertisement = 'The company for which I am working at the moment is called Cosmos Thrace.\n' +
            'Cosmos Thrace is a firm which takes top organisations to the next level of AI powered business maturity.\n' +
            'We are focused on software development in the field of machine and deep learning and design and implementation ' +
            'of solutions which help customers from different industries leverage the power of AI to help them grow, ' +
            'become more efficient and develop next generation of products or services. Our own research lab along with our ' +
            'business knowledge and expertise in utilizing world\'s most powerful AI platforms allow us to find the best fit between' +
            ' a business approach, data science and technology for any specific use case.\n';

        return (
            <div>
                <CardDeck>
                    <SingleCard title="About Author" subtitle="M.Donev" text={aboutText}/>
                    <SingleCard title="Contact Information" subtitle="M.Donev" text={contactText}/>
                    <SingleCard title="About Web Page" subtitle="M.Donev" text={aboutWebPage}/>
                    <SingleCard title="Advertisement" subtitle="M.Donev" text={randomAdvertisement}/>
                </CardDeck>
            </div>
        );
    }
}

export default Cards;