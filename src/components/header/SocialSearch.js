import React from 'react';

const SocialSearch = (props) => {
    const facebookLink = Object.keys(props.social).length > 0 && props.social.Facebook.value;
    const linkedinLink = Object.keys(props.social).length > 0 && props.social.Linkedin.value;
    const twitterLink = Object.keys(props.social).length > 0 && props.social.Twitter.value;
    return (
        <div className="social_comp">
            <div className="row">
            <div className="col-6">
                <ul className="social_ul">
                    <li className="social_li">
                        <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_cookies_war_050_2017.png" alt="facebook"/>
                    </li>
                    <li className="social_li">
                        <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_information_war_050_2017.png" alt="facebook"/>
                    </li>
                    <li className="social_li">
                        <a href={`https://www.facebook.com/${facebookLink}`} target="_blank" rel="noopener noreferrer">
                            <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_facebook_war_050_2017.png" alt="facebook"/>
                        </a>
                    </li>
                    <li className="social_li">
                        <a href={`https://www.linkedin.com/in/${linkedinLink}`} target="_blank" rel="noopener noreferrer">
                            <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_linkedin_war_050_2017.png" alt="facebook"/>
                        </a>
                    </li>
                    <li className="social_li">
                        <a href={`https://twitter.com/${twitterLink}`} target="_blank" rel="noopener noreferrer">
                            <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_twitter_war_050_2017.png" alt="facebook"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-6 search_form">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <button type="submit" className="btn btn-default">
                            <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_search_war_050_2017.png" alt="facebook"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default SocialSearch;
