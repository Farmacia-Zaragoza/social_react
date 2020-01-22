import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';

//components
import Header from './components/header/Header';
import Topmenu from './components/body/Topmenu';
import ContentScroll from './components/body/ContentScroll';
import Language from './components/Language/Language';
import Accordion from './components/accordion/Accordion';
import TrapezeFlags from './components/header/TrapezeFlags';
import TransparentBg from './components/TransparentBg';
import ShowCookieAlert from './components/cookies/ShowCookieAlert';
// import Product from './components/product/Product';
import List from './components/list/List';

//cookies and policy and search
// import CookiesPage from './components/cookies/CookiesPage';
import PolicyPage from './components/policy/PolicyPage';

class App extends React.Component {
  state = {
    windowWidth: window.innerWidth,
    trapeze_toggle: false,
    trapeze_mobile: false,
    focus_scroll: false,
    trans_bg: false,
    article_items_menu: false,
    bars: [], //from spec
    cookies_warning: {}, //from spec
    diamond_langs: [],
    langs: [],
    social: {},
    regions: [],
    site: {}, //from spec
    symbols: [],
    rand_bg: [],
    articles: [], ////from content
    menus: {},
    bgColor: ['B1B0C7', 'A8B08B', 'B2FFFF', 'FFE3BA', 'EBDBB4', 'CBFFE9', 'EFE7EB', 'FFF2EB', 'F8E7C4', '91B8E0', 'A8BFC5', 'FFF2EB', 'E3C4DB', 'F8D6DB', 'D8C5C6', 'E5C8B3']
  }
  componentDidMount() {
    const common_json = document.querySelector('#root').getAttribute('data-comm');
    const spec_json = document.querySelector('#root').getAttribute('data-spec');
    const content_json = document.querySelector('#root').getAttribute('data-content');
    // console.log(content_json)
    window.addEventListener('resize', () => {
        window.location.reload();
        this.setState({
          windowWidth: window.innerWidth
        })
    });


    //get common data
    axios.get(common_json).then(res => this.setState({
      regions: res.data.regions,
      symbols: res.data.symbols,
      rand_bg: res.data.random_backgrounds,
      social: res.data.social,
      langs: res.data.langs
    }));

    //get spec data
    axios.get(spec_json).then(res => this.setState({
      diamond_langs: res.data.diamond_langs,
      bars: res.data.bars,
      cookies_warning: res.data.cookies_warning,
      regions: res.data.regions,
      site: res.data.site,
      menus: res.data.menus
    }));
    //get content data
    axios.get(content_json).then(res => this.setState({
      articles: res.data.articles,
    }));
    // axios.get(spec_json).then(res => console.log(res.data))

    // console.log(this.props.match.params.lang)

  }
  trapezeToggle = (status) => {
    this.setState({
      trapeze_toggle: status
    })
  }
  trapezeMobile = (status) => {
    // console.log(status)
    this.setState({
      trapeze_mobile: status
    })
  }
  focusScroll = (status) => {
    this.setState({
      focus_scroll: status
    })
  }

  hideTransBg = (status) => {
    this.setState({
      trans_bg: status
    });
  }

  articlelItemHandle = (status) => {
    this.setState({
      article_items_menu: status
    })
  }
  getRandBg = () => {
    if(this.state.rand_bg.length > 0) {
        let randomBg = '', randBgColor = '';
        let randNum = Math.floor(Math.random()*this.state.rand_bg.length);
        randomBg = this.state.rand_bg[randNum].img;
        randBgColor = this.state.bgColor[randNum];
        // console.log(randomBg);
        return {randomBg, randBgColor};
    }
  }
  render() {
   
    // console.log(this.state.langs)
    let hostName = window.location.protocol+'//'+window.location.hostname;
        if(window.location.hostname === 'localhost') {
            hostName = 'http://social.vbrqx.com'
        }
    const bg_data = this.getRandBg();
    const policy_path = Object.keys(this.state.cookies_warning).length > 0 && this.state.cookies_warning.information.pull02.cookies_lang.value;
    const article_p_path = this.state.articles.length > 0 && this.state.articles[0].clink;
    // console.log(article_p_path && article_p_path.split('/')[1])
    return(
      <div className="wrapper" style={{
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'left bottom',
        backgroundAttachment: 'fixed',
        backgroundColor: `#${bg_data !== undefined && bg_data.randBgColor}`,
        backgroundImage: `url(${hostName}/${bg_data !== undefined && bg_data.randomBg})`,
      }}>
        <div className="reflet_cls" style={{
          backgroundPosition: 'left top',
          backgroundImage: 'url(http://social.vbrqx.com/index1/img/reflect/brqx_reflect_dark_0300_2017.png)'
        }}></div>
        <TransparentBg trans_bg={this.state.trans_bg} />
        <ShowCookieAlert cookies_warning={this.state.cookies_warning} />
        <div className={this.state.windowWidth > 991 ? "container" : "container-fluid"}>
          <div className="container_inner">
            <Header 
                  windowWidth={this.state.windowWidth} 
                  trapeze_Toggle={this.trapezeToggle} 
                  trapezeMobile={this.trapezeMobile}
                  site={this.state.site}
                  diamond_langs={this.state.diamond_langs}
                  social={this.state.social}
            />
            <Topmenu menus={this.state.menus} />
            <BrowserRouter>
              <div>
                <Route exact path="/" render={ (props) => <ContentScroll {...props} articles={this.state.articles}  windowWidth={this.state.windowWidth} site={this.state.site} /> } />
                <Route exact path="/:lang" render={ (props) => <ContentScroll {...props} articles={this.state.articles}  windowWidth={this.state.windowWidth} site={this.state.site} /> } />
                <Route exact path={`/${policy_path}`} render={(props) => <PolicyPage {...props} />} />
                {/* <Route exact path="/:lang/article/:product_id" render={(props) => <Product {...props} windowWidth={this.state.windowWidth} /> } /> */}
                <Route exact path="/list" render={(props) => <List {...props} articles={this.state.articles} />  } />
                <Route exact path="/:lang/list" render={(props) => <List {...props} articles={this.state.articles} />  } />
                <Route exact path={`/${article_p_path && article_p_path.split('/')[1]}/:product_id`} render={ (props) => <ContentScroll {...props} articles={this.state.articles}  windowWidth={this.state.windowWidth} site={this.state.site} /> } />
                <Route exact path={`/:lang/${article_p_path && article_p_path.split('/')[1]}/:product_id`} render={ (props) => <ContentScroll {...props} articles={this.state.articles}  windowWidth={this.state.windowWidth} site={this.state.site} /> } />
              </div>
            </BrowserRouter>
            <Language langs={this.state.langs} articles={this.state.articles} />
            <Accordion bars={this.state.bars} />
            <div className="bottom_region"></div>
          </div>
        </div>
        {
          this.state.windowWidth < 570 && this.state.trapeze_mobile ? <TrapezeFlags trapezeMobile={this.trapezeMobile} trapeze_mobile={this.state.trapeze_mobile} 
          diamond_langs={this.state.diamond_langs}
        /> : undefined
        }
        {/* <SocialFocusScroll focusScroll={this.focusScroll} focus_scroll={this.state.focus_scroll} /> */}
      </div>
    );
  }
}

export default App;