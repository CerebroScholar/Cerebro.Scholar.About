import React, { Component }  from 'react';
import './AboutPage.css';
import logoimg from '../imgs/logo.svg';
import lightimg from '../imgs/light.png';
import incline from '../imgs/increasing-line-orange.svg';
import tagscluster from '../imgs/keyword-research.jpg';

class AboutPage extends Component{
	constructor(props) {
		super(props);

		this.state = {
			'baseurl' : window.location.href,
			'curslide' : 1,
			'preslide' : 1
		}
	};
	s1 = () =>{
		const cur= 1, pre = this.state.curslide;
		this.setState({curslide:cur, preslide:pre});
	};
	s2 = () =>{
		const cur= 2, pre = this.state.curslide;
		this.setState({curslide:cur, preslide:pre});
	};
	s3 = () =>{
		const cur= 3, pre = this.state.curslide;
		this.setState({curslide:cur, preslide:pre});
	};

	s4 = () =>{
		const cur= 4, pre = this.state.curslide;
		this.setState({curslide:cur, preslide:pre});
	};

	s5 = () =>{
		const cur= 5, pre = this.state.curslide;
		this.setState({curslide:cur, preslide:pre});
	};

	set_selected = () =>{
		document.getElementById("li"+this.state.preslide).classList.remove("selected");
		document.getElementById("li"+this.state.curslide).classList.add("selected");
		window.location.href = this.state.baseurl.split("#")[0] + "#" +this.state.curslide;
	}

	componentDidMount() {
		console.log('componentdidmount');
	}

	shouldComponentUpdate(){
		console.log("shouldComponentUpdate");
		return true;
	}

	componentDidUpdate(){
		console.log("componentDidUpdate");
		this.set_selected();
	}

	render() {
		const s1 = this.s1, s2 = this.s2, s3 = this.s3, s4 = this.s4, s5 = this.s5;
		return (
			<div id='about-page'>
			    <nav className="stepper-navigation">
		            <ul className="stepper-navigation">
		                <li className="stepper-navigation selected" id="li1"><button onClick={s1}>1</button></li>
		                <li className="stepper-navigation" id="li2"><button onClick={s2}>2</button></li>
		                <li className="stepper-navigation" id="li3"><button onClick={s3}>3</button></li>
		                <li className="stepper-navigation" id="li4"><button onClick={s4}>4</button></li>
		                <li className="stepper-navigation" id="li5"><button onClick={s5}>5</button></li>
		                {/*<li className="stepper-navigation"><a href="#fifth">5</a></li>*/}
		            </ul>
		        </nav>

		        <article className="slide first" id="1">
		            <img src={logoimg} alt="Cerebro Scholar logo" className="logo" />
		            <p>
		                Discover trends in scientific research easily.
		            </p>
		            <p>
		            	Make it fast, make it visible!
		            </p>
		        </article>

		        <article className="slide second" id="2">
		        	<img src={lightimg} alt='insight' className="imgs" />
		            <p>
		                We provide <b className="highlight">insights</b> of scientific research<br />
		                to make your research efficient<br />		                
		            </p>
		        </article>

		        <article className="slide third" id="3">
		        	<img src={incline} alt='line' className='lineimg' />
		            <p>
		                Nowadays, there are so many papers newly published. <br />
		                It is <b className="highlight">impossible to follow up</b> all the areas that you want to contribute.
		            </p>
		        </article>

		        <article className="slide fourth" id="4">
		        	<img src={tagscluster} alt='tagscluster' className="keywordsimgs" />
		            <p>
		                Cerebro Scholar is the <b className="highlight">Scholar Trend Analysis Service</b> <br />
		                based on tags set that representing keywords of papers<br />		                
		            </p>
		        </article>
		        <article className="slide fifth" id="5">
		            <p>
		                Also, Cerebro is working hard at this time. <br />
		                <a href="https://master.cerebroscholar.com">Hey, Let's join us!</a>
		            </p>
		        </article>
	        </div>
		);
	}
};

export default AboutPage